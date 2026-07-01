import crypto from "crypto";
import http from "http";

const SECRET_KEY = "0000001779843361";

const data = {
  trx_id: 215589,
  sid: "51a0f444-0f2c-4940-b439-21253efcb7e8",
  reference_id: "INV20260701032607-da7920df-7aea-4914-9e0a-cd0766e0708c",
  status: "expired",
  status_code: -2,
  sub_total: "29000",
  total: "29722",
  amount: "29722",
  fee: "722",
  paid_off: 29000,
  created_at: "2026-07-01 22:27:13",
  expired_at: "2026-07-01 23:27:13",
  paid_at: "",
  settlement_status: "unsettle",
  transaction_status_code: -2,
  is_escrow: true,
  system_notes: "Sandbox notify",
  via: "qris",
  channel: "qris",
  payment_no: "",
  buyer_name: "dickymuliafiqri",
  buyer_email: "santrialanwari@gmail.com",
  buyer_phone: "08888888888",
  additional_info: [],
  url: "https:\/\/coraline.biz.id\/api\/payment\/cb\/notify",
};

// ksort
const sortedData: Record<string, any> = Object.keys(data)
  .sort((a, b) => a.localeCompare(b))
  .reduce((sortedObj: any, key) => {
    sortedObj[key] = data[key];
    return sortedObj;
  }, {});

// Signature dihitung TANPA field signature
const jsonBody = JSON.stringify(sortedData).replace(/\//g, "\\/");
const signature = crypto.createHmac("sha256", SECRET_KEY).update(jsonBody).digest("hex");

// Tambahkan signature ke payload yang dikirim
const body = JSON.stringify({
  ...sortedData,
  signature,
});

const req = http.request(
  {
    hostname: "localhost",
    port: 3000,
    path: "/api/payment/cb/notify",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Content-Length": Buffer.byteLength(body),
      "X-Signature": signature,
    },
  },
  (res) => {
    console.log("Status:", res.statusCode);

    let response = "";

    res.on("data", (chunk) => {
      response += chunk;
    });

    res.on("end", () => {
      console.log("Response:", response);
    });
  },
);

req.on("error", console.error);

// Kirim JSON
req.write(body);
req.end();
