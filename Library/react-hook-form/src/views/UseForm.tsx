import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { PeopleShema } from "../model"

const UseFormPageView = () => {

    const { register, handleSubmit, formState : { errors } } = useForm({
        resolver : zodResolver(PeopleShema)
    })

    function SubmitCallback(param : PEOPLE_ITEM) {
        let result = "";

        for(const key in param) result+=`${key} : ${param[key as keyof PEOPLE_ITEM]}\n`;

        alert(result)
    }

    return (
        <>
            <h1 className="mb-[30px] text-[1.3rem]">useForm</h1>
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
                    [&>li>input::placeholder]:text-[0.8rem]
                    [&>li>p]:absolute
                    [&>li>p]:mt-[3px]
                    [&>li>p]:text-[red]
                    [&>li>p]:text-[0.8rem]
                    
                ">
                    <li>
                        
                        <label htmlFor="name">이름</label>
                        <input {...register("name")} type="text" id="name" />
                        {errors.name && <p>{errors.name?.message}</p>} 
                    </li>
                    <li>
                        <label htmlFor="age">나이</label>
                        <input {...register("age")} type="number" id="age" />
                        {errors.age && <p>{errors.age?.message}</p>}
                    </li>
                    <li>
                        <label htmlFor="job">직업</label>
                        <input {...register("job")} type="text" id="job" />
                        {errors.job && <p>{errors.job?.message}</p>} 
                    </li>
                    <li>
                        <label htmlFor="birth">생일</label>
                        <input {...register("birth")} type="text" id="birth" placeholder="ex) 19940711" />
                        {errors.birth && <p>{errors.birth?.message}</p>}
                    </li>
                    <li>
                        <label htmlFor="phone">폰번호</label>
                        <input {...register("phone")} type="text" id="phone" placeholder="ex) 01094629321" />
                        {errors.phone && <p>{errors.phone?.message}</p>}
                    </li>
                </ul>

                <button className="inline-block mt-[40px] py-[5px] px-[10px] border-[1px] rounded-[8px] cursor-pointer" type="submit">Submit</button>
            </form>
        </>
    )
}

export default UseFormPageView