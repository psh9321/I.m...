import { PostPracticeDto } from './dto/post-practice.dto';
export declare class PracticeService {
    Post(postPracticeDto: PostPracticeDto): {
        data: PostPracticeDto;
        message: string;
    };
    Get(): string;
}
