import { defineStore } from "pinia";
import type { PaymentData } from "~~/shared/types/payment";

export const usePaymentStore = defineStore("payment", {
  state: () => ({
    data: {
      SessionId: "",
      TransactionId: 0,
      ReferenceId: "",
      Via: "",
      Channel: "",
      PaymentNo: "",
      QrString: "",
      PaymentName: "",
      SubTotal: 0,
      Fee: 0,
      Total: 0,
      FeeDirection: "",
      Expired: "",
      QrImage: "",
      QrTemplate: "",
      Terminal: "",
      NNSCode: "",
      NMID: "",
      Note: null,
      Escrow: false,
    } as PaymentData,
  }),
  actions: {},
});
