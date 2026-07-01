import crypto from "crypto";

export async function sha256(data: string) {
  return crypto.createHash("sha256").update(data).digest("hex").toLowerCase();
}

export async function hmacSHA256(key: string, message: string) {
  return crypto.createHmac("sha256", key).update(message).digest("hex");
}
