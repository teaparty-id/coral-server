export interface PaymentData {
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
}
