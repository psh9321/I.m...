# metadata
 - NextJs App Router 페이지의 메타데이터를 서버에서 정적으로 생성하는 객체
 - 주로 페이지마다 내용이 고정되어 있을 때 사용
 ```ts
    import { Metadata } from "next";

    export const metadata: Metadata = {
        title: "인덱스 페이지",
        description: "인덱스 페이지 입니다.",
    };

    export default function IndexPageServer() {
        return <div>Home</div>;
    }
 ``` 


# GenerateMetadata 
 - NextJs App Router 페이지의 메타데이터를 서버에서 동적으로 생성하는 함수 
 - 주로 페이지의 데이터마다 제목이 달라질 때 사용
 ```ts
    export async function generateMetadata({ params }) {
    const post = await getData(params.id);

        return {
            title: post.title,
            description: post.summary,
        };
    }

    export default function IndexPageServer() {
        return <div>...</div>;
    }
 ```