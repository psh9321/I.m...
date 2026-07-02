import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { HobbyShema } from "../model";

const UseformStatePageView = () => {
    "use no memo"; /** react-compiler 를 사용해서 이렇게 뒀는데 한번 고민해봐야할 부분인듯 */

    const { register, handleSubmit, formState : { errors, isDirty, touchedFields }, reset } = useForm({
        resolver : zodResolver(HobbyShema),
        defaultValues : {
            name : "박수현",
            age : 33,
            hobby : "전시관람"
        }
    });

    function SubmitCallback(param : HOBBY_ITEM) {
        let result = "";

        for(const key in param) {
            const _key = key as keyof HOBBY_ITEM;
            const value = param[_key];
            
            result+=`${_key} : ${value}\n`;
        }

        reset(param);

        alert(result);
    }

    console.log(touchedFields)
    return (
        <>
            <h1 className="mb-[30px] text-[1.3rem]">useFormState</h1>
            {/* <div>isDirty: {String(isDirty)} {`${JSON.stringify(watch())}`}</div> */}
            <div className="flex flex-wrap">
                <ul className="
                    text-left mt-[30px] mr-[35px]
                    [&>li>dl>dd]:pl-[10px]
                    [&>li>dl>dd]:text-[0.8rem]
                    space-y-[10px]
                ">
                    <li>
                        <dl>
                            <dt>dirtyFields</dt>
                            <dd>어떤 필드가 바뀌었는지?</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>isDirty</dt>
                            <dd>폼이 바뀐적 있는지?</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>touchedFields</dt>
                            <dd>필드에 한 번이라도 포커스가 갔다가 빠졌는가</dd>
                        </dl>
                    </li>
                </ul>
                <form className="inline-block" onSubmit={handleSubmit(SubmitCallback)}>
                    <ul className="
                            space-y-[25px]
                            [&>li]:relative
                            [&>li>label]:block
                            [&>li>label]:text-left
                            [&>li>label]:mr-[10px]
                            [&>li>label]:mb-[5px]
                            [&>li>label]:text-[0.9rem]
                            [&>li>input]:h-[30px]
                            [&>li>input]:px-[10px]
                            [&>li>input]:border-[1px]
                            [&>li>input]:rounded-[8px]
                            [&>li>input]:outline-none
                            [&>li>p]:absolute
                            [&>li>p]:mt-[3px]
                            [&>li>p]:text-[red]
                            [&>li>p]:text-[0.8rem]
                
                        ">
                        <li>
                
                            <label htmlFor="name">이름 
                                { touchedFields.name && <span className="ml-[10px] text-[0.7rem]">한번 건드림</span>}
                            </label>
                            <input {...register("name")} type="text" id="name" />
                            { errors.name && <p>{errors.name.message }</p>}
                        </li>
                        <li>
                            <label htmlFor="age">나이                                 { touchedFields.age && <span className="ml-[10px] text-[0.7rem]">한번 건드림</span>}</label>
                            <input {...register("age")} type="number" id="age" />
                            { errors.age && <p>{errors.age.message}</p> }
                        </li>
                        <li>
                            <label htmlFor="hobby">취미{ touchedFields.hobby && <span className="ml-[10px] text-[0.7rem]">한번 건드림</span>}</label>
                            <input {...register("hobby")} type="text" id="hobby" />
                            { errors.hobby && <p>{errors.hobby.message}</p> }
                        </li>
                    </ul>
                    <button className={`
                        inline-block mt-[40px] py-[5px] px-[10px] border-[1px] rounded-[8px] cursor-pointer

                        ${isDirty ? "" : "text-[#888] border-[rgba(155,155,155,0.5)] bg-[rgba(155,155,155,0.5)]"}

                        ${isDirty ? "" : "pointer-events-none"}
                    `}
                     type="submit">
                        { isDirty ? "현재 수정 가능" : "필드값에 변경이 있을때만 수정 가능" }
                     </button>
                </form>
            </div>
        </>
    )
}

export default UseformStatePageView