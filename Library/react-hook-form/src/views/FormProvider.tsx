import { FormProvider, useForm, useFormContext } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { HobbyShema } from "../model";

const FormElement = () => {

    const { register, handleSubmit, formState : { errors } } = useFormContext<HOBBY_ITEM>();

    function SubmitCallback(param : HOBBY_ITEM) {
        let result = "";

        for(const key in param) result+=`${key} : ${param[key as keyof HOBBY_ITEM]}\n`;

        alert(result)
    }

    return (
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
                
                    <label htmlFor="name">이름</label>
                    <input {...register("name")} type="text" id="name" />
                    { errors.name && <p>{errors.name.message }</p>}
                </li>
                <li>
                    <label htmlFor="age">나이</label>
                    <input {...register("age")} type="number" id="age" />
                    { errors.age && <p>{errors.age.message}</p> }
                </li>
                <li>
                    <label htmlFor="hobby">취미</label>
                    <input {...register("hobby")} type="text" id="hobby" />
                    { errors.hobby && <p>{errors.hobby.message}</p> }
                </li>
            </ul>
            <button className="inline-block mt-[40px] py-[5px] px-[10px] border-[1px] rounded-[8px] cursor-pointer" type="submit">Submit</button>
        </form>
    )
}

const FormProviderPageView = () => {

    const method = useForm({
        resolver : zodResolver(HobbyShema)
    });

    return (
        <>
            <h1 className="mb-[30px] text-[1.3rem]">FormProvider/useformContext</h1>
            <FormProvider {...method}>
                <FormElement/>
            </FormProvider>
        </>
    )
}

export default FormProviderPageView