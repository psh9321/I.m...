import type { DefaultSession } from "next-auth";

import "next-auth";
import "next-auth/jwt";

type SOCIAL_TYPE = "GOOGLE" | "NAVER" | "KAKAO";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      provider: SOCIAL_TYPE;
    };
  }

  interface User {
    id: string;
    name: string;
    provider: SOCIAL_TYPE;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string;
    provider: SOCIAL_TYPE;
  }
}

export {};
