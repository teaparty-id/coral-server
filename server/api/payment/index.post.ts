import { z } from "zod";

const schema = z.object({
  name: z.string(),
  password: z.string(),
});

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, schema.parse);
  const session = await requireUserSession(event);

  const options = {
    method: "POST",
    url: "https://sandbox.ipaymu.com/api/v2/payment",
    headers: {
      "Content-Type": "application/json",
      signature: "",
      va: "1179000899",
      timestamp: "20191209155701",
    },
    formData: {
      "product[]": "Baju",
      "qty[]": "1",
      "price[]": "10000",
      "description[]": "Baju1",
      returnUrl: "https://coraline.biz.id/api/payment/cb/return",
      notifyUrl: "https://coraline.biz.id/api/payment/cb/notify",
      cancelUrl: "https://coraline.biz.id/api/payment/cb/cancel",
      referenceId: "ID1234",
      buyerName: session.user.name,
      buyerEmail: session.user.email,
    },
  };

  return {
    success: true,
  };
});
