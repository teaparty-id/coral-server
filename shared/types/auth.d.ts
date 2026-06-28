// shared/types/auth.d.ts
declare module "#auth-utils" {
  interface User {
    name: string;
    email: string;
    maxDevice: number;
    level: string;
  }

  interface UserSession {
    // Add your own fields
  }

  interface SecureSessionData {
    // Add your own fields
  }
}

export {};
