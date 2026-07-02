# Code Splitting
 - JavaScript 코드를 여러 개의 작은 번들(Bundle)로 분리하여 필요한 시점에만 다운로드하는 최적화 기법이다.
 - 초기 페이지 로딩 시 필요한 코드만 먼저 내려받고, 이후 필요한 코드만 추가로 로드하여 초기 로딩 속도를 향상시킨다.
 - React와 Next.js는 Code Splitting을 기본적으로 지원한다.

```tsx

    import { lazy, Suspense } from "react";
    
    import { PeanutLoader } from "@/shared/ui/PeanutLoader";

    const SubPropensityTestQuestionList = lazy(() => import("@/features/SubPropensityTestQuestionList").then(rs => ({ default : rs.SubPropensityTestQuestionList })));

    const BtnTestSubmit = lazy(() => import("@/features/BtnTestSubmit").then(rs => ({
        default : rs.BtnTestSubmit
    })));

    export const TestQuestionBox = () => {

        const mbti = useQuestionMbtiStore(state => state.mbti);
        
        return (
            <section className="px-[25px]">
                <h2 className="sr-only">{mbti ? "하위유형 테스트" : "MBTI 테스트"} 박스</h2>
                /** mbti가 없으면 lazy 컴포넌트의 JavaScript Chunk를 다운로드하지 않는다. */
                {
                    mbti ? 
                    <Suspense fallback={<PeanutLoader/>}>
                        <SubPropensityTestQuestionList mbti={mbti}/>
                        <BtnTestSubmit mbti={mbti} />
                    </Suspense>
                    
                    :
                    <>
                        <MbtiTestQuestionList/>
                        <MbtiTestChapterNavi/>            
                    </>
                }
            </section>
        )
    }
```