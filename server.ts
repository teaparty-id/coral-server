import crypto from "crypto";
import http from "http";

const SECRET_KEY = "0000001779843361";

const data = {
  trx_id: 215530,
  sid: "bbe1f3d6-9756-4625-9487-f46465b8f612",
  reference_id: "invoice_20260701024844_undefined",
  status: "berhasil",
  status_code: 1,
  sub_total: "29000",
  total: "29722",
  amount: "29722",
  fee: "722",
  paid_off: 29000,
  created_at: "2026-07-01 14:49:10",
  expired_at: "2026-07-02 14:49:10",
  paid_at: "2026-07-01 14:50:18",
  settlement_status: "settled",
  transaction_status_code: 7,
  is_escrow: true,
  system_notes: "Sandbox notify",
  via: "qris",
  channel: "qris",
  payment_no: "",
  buyer_name: "acumalaka",
  buyer_email: "acumalaka@gmail.com",
  buyer_phone: "0800880080",
  additional_info: [],
  url: "https:\/\/coraline.biz.id\/api\/payment\/cb\/notify",
};

// ksort
const sortedData: Record<string, any> = {};
for (const key of Object.keys(data).sort()) {
  sortedData[key] = data[key as keyof typeof data];
}

// Signature dihitung TANPA field signature
const jsonBody = JSON.stringify(sortedData);

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
