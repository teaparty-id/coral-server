import crypto from "crypto";
import http from "http";
import { stringify } from "querystring";

const SECRET_KEY = "0000001779843361";

const data = {
  sid: "5892246c-82e6-4397-af7a-92bff3f96d77",
  reference_id: "412097091706893",
  status: "berhasil",
  created_at: "2026-01-27 02:47:53",
  expired_at: "2026-01-28 02:47:52",
  paid_at: "2026-01-27 02:48:08",
  settlement_status: "settled",
  system_notes: "Sandbox notify",
  via: "qris",
  buyer_name: "Aut libero dolor aut",
  buyer_email: "bucafet@mailinator.com",
};

// ksort
const sortedKeys = Object.keys(data).sort();
const sortedData = {};
for (const key of sortedKeys) {
  sortedData[key] = data[key];
}

// Signature
const jsonBody = JSON.stringify(sortedData);

const signature = crypto.createHmac("sha256", SECRET_KEY).update(jsonBody).digest("hex");

// Body yang dikirim
console.log(jsonBody);
const body = stringify({
  ...sortedData,
});

const options: http.RequestOptions = {
  hostname: "localhost",
  port: 3000,
  path: "/api/payment/cb/notify",
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": Buffer.byteLength(body),
    "X-Signature": signature,
  },
};

const req = http.request(options, (res) => {
  console.log("Status:", res.statusCode);

  let response = "";

  res.on("data", (chunk) => {
    response += chunk;
  });

  res.on("end", () => {
    console.log("Response:", response);
  });
});

req.on("error", (err) => {
  console.error(err);
});

req.write(body);
req.end();
