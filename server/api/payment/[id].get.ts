import ky from "ky";

export default defineEventHandler(async (event) => {
  const transactionId = getRouterParam(event, "id");
  if (!transactionId) {
    throw createError({
      status: 400,
      message: "transaction id is not provided",
    });
  }

  const seed = generateIPaymuSeed();
  const timestamp = generateTimestamp();
  const formData = {
    transactionId,
    account: seed.va,
  };

  const signature = await generateIPaymuSignature({ apiKey: seed.key, method: "POST", va: seed.va, body: formData });
  const res = await ky
    .post("https://sandbox.ipaymu.com/api/v2/transaction", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        signature: signature.signature,
        va: seed.va,
        timestamp: timestamp,
      },
      json: formData,
      redirect: "follow",
    })
    .json();

  return {
    success: true,
    data: res,
  };
});
