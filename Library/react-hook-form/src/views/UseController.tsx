import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useController } from "react-hook-form";
import type { Control } from "react-hook-form"

import { AreaShema } from "../model";

interface Props {
  name: string;
  control: Control<AREA_ITEM>;
  label: string;
  inputType? : string
}

function Input({ name, control, label, inputType } : Props) {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  return (
    <li>
      <label>{label}</label>
      <input type={inputType??"text"} {...field} />
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </li>
  );
}

const UseControllerPageView = () => {

    const { handleSubmit, control } = useForm({
        defaultValues: {
            name: "",
            area : "",
            age : undefined,
        },
        resolver : zodResolver(AreaShema),
        mode: "onChange"
        /**
         * mode 의 옵션
         *   "onSubmit"(기본값) : submit 할 때만
         *   "onChange" : 값 바뀔 때마다
         *   "onBlur" : input에서 포커스 빠질 때
         *   "onTouched" : 한 번 blur된 이후부터 change마다
         *   "all" : blur + change 둘 다
         */
    });

    function SubmitCallback(param : AREA_ITEM) {
        let result = "";

        for(const key in param) result+=`${key} : ${param[key as keyof AREA_ITEM]}\n`;

        alert(result)
    }

    return (
        <div>
            <h1 className="mb-[30px] text-[1.3rem]">useController</h1>
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
                    <Input control={control} label="이름" name="name" />
                    <Input inputType="number" control={control} label="나이" name="age" />
                    <Input control={control} label="지역" name="area" />
                </ul>
                <button className="inline-block mt-[40px] py-[5px] px-[10px] border-[1px] rounded-[8px] cursor-pointer" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default UseControllerPageView