import { PracticeService } from './practice.service';
import { PostPracticeDto } from './dto/post-practice.dto';
export declare class PracticeController {
    private readonly practiceService;
    constructor(practiceService: PracticeService);
    create(postPracticeDto: PostPracticeDto): {
        data: PostPracticeDto;
        message: string;
    };
    findAll(): string;
}
