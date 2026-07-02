# Code Splitting
- JavaScript 코드를 여러 개의 작은 번들(Bundle)로 분리하여 필요한 시점에만 다운로드하는 최적화 기법이다.
- 초기 페이지 로딩 시 필요한 코드만 먼저 내려받고, 이후 필요한 코드만 추가로 로드하여 초기 로딩 속도를 향상시킨다.
- React와 Next.js는 Code Splitting을 기본적으로 지원한다.

```tsx
    import dynamic from "next/dynamic";

    /** Item 컴포넌트를 별도 번들로 분리 */
    const Item = dynamic(() => import("./Item"));

    export default function Page() {

        const [isOpen, SetIsOpen] = useState(false);

        return (
            <>
                <button onClick={() => SetIsOpen(true)} >Open</button>
                {/* isOpen이 true가 될 때 Item 번들을 다운로드 후 렌더링 */}
                {isOpen && <Item />}
            </>
        );
    }
```