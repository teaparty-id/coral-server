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
  const stringToSign = method + ":" + va + ":" + bodyEncrypt + ":" + apiKey;
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

export function phpKsort(obj: any) {
  return Object.keys(obj)
    .sort((a, b) => a.localeCompare(b))
    .reduce((sortedObj: any, key) => {
      sortedObj[key] = obj[key];
      return sortedObj;
    }, {});
}
