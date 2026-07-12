import { type NextAuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";
import NaverProvider from "next-auth/providers/naver";
import KakaoProvider from "next-auth/providers/kakao";

export const authOptions : NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            /** 소셜 서비스가 반환한 제각각의 프로필 */
            async profile(profile) {
                return {
                    id : profile?.email,
                    name : profile?.name,
                    provider : "GOOGLE"
                }
            }
        }),
        NaverProvider({
            clientId: process.env.NAVER_CLIENT_ID!,
            clientSecret: process.env.NAVER_CLIENT_SECRET!,

            async profile(profile) {
                const r = profile.response;

                return {
                    id : r?.email,
                    name : r?.name,
                    provider : "NAVER"
                }
            }
        }),
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID!,
            clientSecret: process.env.KAKAO_CLIENT_SECRET!,

            async profile(profile) {

                const kakaoProfile = profile.kakao_account;

                return {
                    id : kakaoProfile?.email??"카카오이메일?",
                    name : kakaoProfile?.name??"카카오유저이름",
                    provider : "KAKAO"
                }
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = token.id,
                token.name = user?.name,
                token.provider = user.provider;
            }

            return token;
        },

        async session({ session, token }) {

            if(token) {
                session.user.id = token.id,
                session.user.name = token.name,
                session.user.provider = token.provider;
            }
            return session;
        },
    },
};