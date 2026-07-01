import crypto from "node:crypto";
import dayjs from "dayjs";
import { sha256, hmacSHA256 } from "../cipher";

interface GenerateSignatureOptions {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  va: string;
  apiKey: string;
  body?: Record<string, any>;
}

export function generateIPaymuSeed() {
  return {
    va: process.env.IPAYMU_VA!,
    key: process.env.IPAYMU_KEY!,
    date: new Date(),
  };
}

export async function generateIPaymuSignature({ method, va, apiKey, body = {} }: GenerateSignatureOptions) {
  const bodyEncrypt = await sha256(JSON.stringify(body));
  const stringToSign = "POST:" + va + ":" + bodyEncrypt + ":" + apiKey;
  const signature = await hmacSHA256(apiKey, stringToSign);

  return {
    signature,
    stringToSign,
    bodyEncrypt,
  };
}

export function generateTimestamp() {
  return dayjs().format("YYYYMMDDhhmmss");
}
