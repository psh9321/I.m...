import { Type } from "class-transformer";
import { IsNotEmpty, IsString } from "class-validator";

export class PostPracticeDto {
    @IsNotEmpty({message : "user 누락"})
    @IsString()
    @Type(() => String)
    user! : string;

    @IsNotEmpty({message : "job 누락"})
    @IsString()
    @Type(() => String)
    job! : string;
}
