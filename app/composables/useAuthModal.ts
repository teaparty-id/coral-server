export function useAuthModal() {
  const opened = useState<boolean>("auth-modal-open", () => false);

  const mode = useState<"login" | "register">("auth-modal-mode", () => "login");

  function open(type: "login" | "register" = "login") {
    mode.value = type;
    opened.value = true;
  }

  function close() {
    opened.value = false;
  }

  return {
    opened,
    mode,
    open,
    close,
  };
}
