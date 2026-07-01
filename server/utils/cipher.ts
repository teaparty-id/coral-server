import crypto from "crypto";

export async function sha256(data: string) {
  const encoder = new TextEncoder();
  const encoded = encoder.encode(data);
  const hashBuffer = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function hmacSHA256(key: string, message: string) {
  return crypto.createHmac("sha256", key).update(message).digest("hex");
}
