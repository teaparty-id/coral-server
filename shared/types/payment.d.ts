export interface PaymentData {
  SessionId: string;
  TransactionId: number;
  ReferenceId: string;
  Via: string;
  Channel: string;
  PaymentName: string;
  QrString: string;
  SubTotal: number;
  Fee: number;
  Total: number;
  Expired: string;
  PaymentNo: string;
  FeeDirection: string;
  QrImage: string;
  QrTemplate: string;
  Terminal: string;
  NNSCode: string;
  NMID: string;
  Note: any;
  Escrow: boolean;
}
