export function usePaymentModal() {
  const opened = useState<boolean>("payment-modal-open", () => false);

  function open() {
    opened.value = true;
  }

  function close() {
    opened.value = false;
  }

  return {
    opened,
    open,
    close,
  };
}
