# NextAuth
 - 로그인과 세션관리를 쉽게 구현하도록 도와주는 인증 라이브러리
 - 공식 명칭은 Auth.js 지만 next 에서는 next-auth 패키지를 사용


## 핵심 역할
 - Google, Kakao, Naver, FaceBook 같은 소셜 로그인
 - 아이디, 비번 로그인
 - 로그인 세션 생성 및 조회
 - JWT 또는 DB 기반 세션 관리
 - 인증 쿠키 발급
 - 로그인, 로그아웃 API 제공
 - 페이지 및 API 접근 제어

 sequenceDiagram
    participant U as 사용자
    participant N as Next.js
    participant P as OAuth 제공자
    participant B as 백엔드

    U->>N: 소셜 로그인 요청
    N->>P: 인증 페이지로 이동
    P->>N: 사용자 정보와 인증 결과 반환
    N->>B: 사용자 조회 또는 가입
    B->>N: 서비스 토큰 및 사용자 반환
    N->>U: 세션 쿠키 저장


## 유의사항
 - 환경변수에 NEXTAUTH_SECRET 이름으로 시크릿키를 둬야한다
 - 팝업 형식으로 구현할 시 페이지를 구성하는 layout.tsx 를 하나더 만들어서 사용해야 한다.root layout 하나로 사용할 시 팝업형식을 구현할 수 없음


## 소셜앱 설정 방법
 - 로그인 callbackURL : /api/auth/callback/{{provider(naver, kakao, google)}}

## 기본템플릿 
```ts /** auth.ts */
    import NextAuth from "next-auth";
    import GoogleProvider from "next-auth/providers/google";

    export const { handlers, auth, signIn, signOut } = NextAuth({
        providers: [
            GoogleProvider({
                clientId: "{{어플리케이션 Clinet ID}}",
                clientSecret: "{{어플리케이션 Clinet Secret}}",
                /** 소셜 서비스가 반환한 제각각의 프로필 */
                async profile(profile) {
                    return {
                        id : profile.email,
                        name : profile.name,
                        provider : "google"
                    }
                }
            }),
        ],

        /** 로그인한 상태인 세션을 어디에 저장하고 어떻게 유지할지 지정하는 설정 */
        session: {
            /** 
             * "jwt" : JWT 기반 설정
             * "database" : 데이터베이스 기반 설정
             */
            strategy: "jwt",
        },

        callbacks: {
            async jwt({ token, account, profile }) {
                if (account && profile) {
                    token.provider = account.provider;
                }

                return token;
            },

            async session({ session, token }) {
                session.user.id = token.sub!;
                return session;
            },
        },
    });
```

## 소셜 서비스가 반환한 유저 정보 (provider 안 profile 에서 parameter 로 받는 정보)
```ts
    export interface NaverProfile extends Record<string, any> {
        resultcode: string; // API 요청 처리 결과 코드
        message: string; // API 요청 처리 결과 메시지

        response: {
            id: string; // 네이버 사용자 고유 식별자
            nickname?: string; // 사용자 별명
            name?: string; // 사용자 이름
            email?: string; // 사용자 이메일
            gender?: "F" | "M" | "U"; // 여성(F), 남성(M), 확인 불가(U)
            age?: string; // 연령대(예: "20-29")
            birthday?: string; // 생일(MM-DD 형식)
            profile_image?: string; // 프로필 이미지 URL
            birthyear?: string; // 출생 연도(YYYY 형식)
            mobile?: string; // 휴대전화 번호
        };
    }

    export interface GoogleProfile extends Record<string, any> {
        aud: string; // 토큰이 발급된 대상, 일반적으로 OAuth Client ID
        azp: string; // 토큰 발급을 요청한 OAuth Client ID
        email: string; // 사용자 이메일
        email_verified: boolean; // 이메일 소유권 확인 여부
        exp: number; // 토큰 만료 시각(Unix 타임스탬프)
        family_name: string; // 사용자 성
        given_name: string; // 사용자 이름
        hd: string; // 사용자가 속한 Google Workspace 도메인
        iat: number; // 토큰 발급 시각(Unix 타임스탬프)
        iss: string; // 토큰 발급자
        jti: string; // JWT 고유 식별자
        name: string; // 사용자 전체 이름
        nbf: number; // 토큰이 유효해지는 시각(Unix 타임스탬프)
        picture: string; // 프로필 이미지 URL
        sub: string; // Google 사용자 고유 식별자
    }

    export interface KakaoProfile extends Record<string, any> {
        id: number; // 카카오 사용자 고유 식별자
        has_signed_up?: boolean; // 카카오싱크 간편가입 여부
        connected_at?: DateTime; // 사용자가 앱과 연결된 시각
        synched_at?: DateTime; // 카카오싱크 간편가입 정보가 동기화된 시각

        properties?: {
            id?: string; // 사용자 또는 프로필 관련 식별자
            status?: string; // 사용자 또는 프로필 상태
            registered_at?: DateTime; // 사용자 또는 프로필 등록 시각
            msg_blocked?: boolean; // 메시지 수신 차단 여부
            nickname?: string; // 사용자 별명
            profile_image?: string; // 프로필 이미지 URL
            thumbnail_image?: string; // 프로필 썸네일 이미지 URL
        };

        kakao_account?: {
            profile_needs_agreement?: boolean; // 프로필 제공에 추가 동의가 필요한지 여부
            profile_nickname_needs_agreement?: boolean; // 별명 제공에 추가 동의가 필요한지 여부
            profile_image_needs_agreement?: boolean; // 프로필 이미지 제공에 추가 동의가 필요한지 여부

            profile?: {
                nickname?: string; // 사용자 별명
                thumbnail_image_url?: string; // 프로필 썸네일 이미지 URL
                profile_image_url?: string; // 프로필 이미지 URL
                is_default_image?: boolean; // 기본 프로필 이미지 사용 여부
            };

            name_needs_agreement?: boolean; // 이름 제공에 추가 동의가 필요한지 여부
            name?: string; // 사용자 이름
            email_needs_agreement?: boolean; // 이메일 제공에 추가 동의가 필요한지 여부
            is_email_valid?: boolean; // 이메일이 유효한지 여부
            is_email_verified?: boolean; // 이메일 인증 완료 여부
            email?: string; // 사용자 이메일
            age_range_needs_agreement?: boolean; // 연령대 제공에 추가 동의가 필요한지 여부
            age_range?: AgeRange; // 사용자 연령대
            birthyear_needs_agreement?: boolean; // 출생 연도 제공에 추가 동의가 필요한지 여부
            birthyear?: string; // 출생 연도(YYYY 형식)
            birthday_needs_agreement?: boolean; // 생일 제공에 추가 동의가 필요한지 여부
            birthday?: string; // 생일(MMDD 형식)
            birthday_type?: string; // 생일 기준(양력 또는 음력)
            gender_needs_agreement?: boolean; // 성별 제공에 추가 동의가 필요한지 여부
            gender?: Gender; // 사용자 성별
            phone_number_needs_agreement?: boolean; // 전화번호 제공에 추가 동의가 필요한지 여부
            phone_number?: string; // 사용자 전화번호
            ci_needs_agreement?: boolean; // 연계정보(CI) 제공에 추가 동의가 필요한지 여부
            ci?: string; // 사용자 연계정보(CI)
            ci_authenticated_at?: DateTime; // CI 본인인증이 완료된 시각
        };
    }
```

## session

### maxAge
 - 세션이 유지되는 최대 시간


### strategy : "jwt"
 - 세션 정보를 NextAuth 가 만든 JWT 에 담고, 그 JWT 를 암호화 된 HTTPOnly 쿠키로 브라우저에 저장
 - 별도의 세션 테이블이 필요하지 않다.
 - 요청마다 데이터베이스에서 세션을 조회하지 않아도 된다.
 - nextauth 를 위한 토큰으로 백엔드 쪽 API 인증/인가 를 위한 토큰과 용도가 다르다.

진행 순서
 1. NextAuth JWT 생성
 2. JWT를 HttpOnly 쿠키에 저장
 3. 요청 시 쿠키 전달
 4. 서버에서 JWT 검증
 5. 세션 생성


### strategy : "database"
 - 세션 정보를 데이터베이스의 세션 테이블에 저장한다.
 - 브라우저의 HttpOnly 쿠키에는 실제 세션 정보가 아닌 sessionToken 만 저장한다.
 - NextAuth Adapter와 데이터베이스 연결이 필요하다.
 - 세션을 DB에서 삭제해 사용자를 즉시 로그아웃시키기 쉽다.

```ts /** lib/mongodb.ts */
    import { MongoClient } from "mongodb";

    const client = new MongoClient(process.env.MONGODB_URI!);

    export default client.connect();
```

```ts /** auth.ts */

    import NextAuth from "next-auth";
    import { MongoDBAdapter } from "@auth/mongodb-adapter";
    import client from "@/lib/mongodb";

    export const { handlers, auth } = NextAuth({
        adapter: MongoDBAdapter(client),

        session: {
            strategy: "database",
        },

        providers: [
            // Google, Kakao, Naver 등
        ],
    });
```

진행 순서
 1. 로그인 성공 후 NextAuth가 세션 정보를 데이터베이스에 저장한다.
 2. 세션을 식별할 sessionToken을 생성한다.
 3. sessionToken을 HttpOnly 쿠키에 저장한다.
 4. 이후 요청마다 브라우저가 해당 쿠키를 서버에 전달한다.
 5. NextAuth가 sessionToken으로 데이터베이스의 세션과 사용자를 조회한다.
 6. 조회한 정보를 바탕으로 세션 객체를 생성한다.


## callbacks 
 - NextAuth 인증 과정에서 실행되는 함수
 - 로그인 허용 여부, 로그인 후 이동 주소, JWT 에 저장할 값, 클라이언트에 공개할 세션 값 제어
 ```ts
export interface CallbacksOptions<P = Profile, A = Account> {
  signIn: (params: {
    user: User | AdapterUser
    account: A | null
    profile?: P
    email?: {
      verificationRequest?: boolean
    }
    credentials?: Record<string, CredentialInput>
  }) => Awaitable<string | boolean>
  redirect: (params: {
    url: string
    baseUrl: string
  }) => Awaitable<string>
  session: (
    params:
      | {
          session: Session
          token: JWT
          user: AdapterUser
        } & {
          newSession: any
          trigger: "update"
        }
  ) => Awaitable<Session | DefaultSession>
  jwt: (
    params: {
      token: JWT
      user: User | AdapterUser
      account: A | null
      profile?: P
      trigger?: "signIn" | "signUp" | "update"
      /** @deprecated use `trigger === "signUp"` instead */
      isNewUser?: boolean
      session?: any
    }
  ) => Awaitable<JWT>
}
 ```

### signIn
 - 로그인 허용 여부를 결정
 - 주요 인자
    - user: NextAuth의 공통 사용자 정보 (provider의 profile 에서 return 한 값)
    - account: 로그인에 사용된 Provider와 OAuth 토큰 정보
    - profile: 소셜 Provider가 반환한 원본 프로필
    - email: Email Provider의 인증 요청 정보
    - credentials: Credentials Provider에서 받은 로그인 입력값
```ts
    /**
     * 반환값에 따라 로그인 흐름이 달라질수 있다.
     * 
     * return true;       // 로그인 계속 진행
     * return false;      // 로그인 거부
     * return "/{{로그인 실패시 이동시킬 경로}}"; // 로그인 중단 후 해당 경로로 이동
     * throw new Error(); // 로그인 실패 처리
     * 
    */
    callbacks: {
        async signIn({ user, account, profile }) {
            return true;
        },
    }
```


### redirect
 - 로그인, 로그아웃 등으로 리다이렉트가 발생할 때 최종 이동 주소를 결정
 - 로그인 후 이동 경로를 조건에 따라 변경
 - 역할별 이동 경로 지정
 - 외부 도메인 이동 허용
 - 특정 URL 차단 또는 변경
 - 로그아웃 이후 이동 경로 제어
 ```ts
    callbacks: {
        /**
         * url: 클라이언트가 요청한 callback URL
         * baseUrl: 현재 서비스의 기본 주소
        */
        async redirect({ url, baseUrl }) {
            if (url.startsWith("/")) {
            return `${baseUrl}${url}`;
            }

            if (new URL(url).origin === baseUrl) {
            return url;
            }

            return baseUrl;
        },
    }
 ```


### jwt
 - NextAuth JWT가 생성되거나 갱신될 때 호출
 - JWT에 넣은 값이 자동으로 클라이언트 세션에 공개되지는 않는다.
 - 주요 인자
    - token: 현재 NextAuth JWT 데이터
    - user: profile() 또는 Credentials의 authorize()가 반환한 사용자
    - account: 로그인에 사용된 Provider와 OAuth 토큰 정보
    - profile: Provider가 반환한 원본 프로필
    - trigger: callback이 호출된 이유
    - session: useSession().update()에서 전달된 값
```ts
    callbacks: {
        /**
         * 최초 로그인 시에는 보통 다음 값들이 전달된다.
         * 이후 세션 조회 시에는 일반적으로 token만 존재하고 나머지는 없을 수 있다.
         * 따라서 최초 로그인 데이터는 조건문 안에서 저장해야 한다.
         * ** token 에 값을 추가하는것도 가능 **
        */
        async jwt({ token, user, account, trigger }) {
            if (trigger === "signIn" && user && account) {
                token.userId = user.id;
                token.provider = account.provider;
                token.providerAccountId = account.providerAccountId;
            }

            return token;
        },
    }
```


### session 
 - 세션을 조회할 때 실행되며 클라이언트에 최종적으로 공개할 세션 객체를 구성
 ```ts
    callbacks : {
        /**
         * session : 클라이언트에 전달할 세션 객체
         * token : strategy: "jwt" 에서 사용
         * user : strategy: "database" 에서 사용
        */
        async session({ session, token, user }) {
            session.user.id = token.userId as string;
            session.user.provider = token.provider as string;

            return session;
        }        
    }
 ```