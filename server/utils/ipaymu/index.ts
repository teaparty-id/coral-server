import crypto from "node:crypto";

interface GenerateSignatureOptions {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  va: string;
  apiKey: string;
  body?: Record<string, any>;
}

export function generateIPaymuSignature({ method, va, apiKey, body = {} }: GenerateSignatureOptions) {
  const requestBody = JSON.stringify(body);
  const bodyHash = crypto.createHash("sha256").update(requestBody).digest("hex").toLowerCase();
  const stringToSign = `${method.toUpperCase()}:${va}:${bodyHash}:${apiKey}`;
  const signature = crypto.createHmac("sha256", apiKey).update(stringToSign).digest("hex");

  return {
    signature,
    stringToSign,
    bodyHash,
  };
}

export function generateTimestamp(date: Date) {
  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    date.getFullYear() +
    pad(date.getMonth() + 1) +
    pad(date.getDate()) +
    pad(date.getHours()) +
    pad(date.getMinutes()) +
    pad(date.getSeconds())
  );
}
