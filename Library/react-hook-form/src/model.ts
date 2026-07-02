import z from "zod";

const peopleModel = {
    name : z.string().trim().min(1, "이름을 입력핵주세요.").min(2, "최소 두자이상 입력해주세요."),
    age: z.preprocess((val) => val === "" || val === undefined ? undefined : Number(val), z.number({message: "나이를 입력해주세요."})),
}

export const PeopleShema = z.object({
    ...peopleModel,
    job : z.string().min(1, "직업을 입력핵주세요.").min(2, "최소 두자이상 입력해주세요."),
    birth : z.string().regex(/^(19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])$/, "생년월일 입력 형식을 확인해주세요."),
    phone : z.string().regex(/^(01[016789])\d{7,8}$/, "폰번호 형식을 확인해주세요.")
});

export const HobbyShema = z.object({
    ...peopleModel,
    hobby : z.string().min(1, "취미를 입력해주세요").min(2, "최소 두자이상 입력해주세요."),
})

export const AreaShema = z.object({
    ...peopleModel,
    area : z.string().min(1, "지역을 입력해주세요.").min(2, "최소 두자이상 입력해주세요."),
})