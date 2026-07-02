import { Injectable } from '@nestjs/common';
import { PostPracticeDto } from './dto/post-practice.dto';

@Injectable()
export class PracticeService {
  Post(postPracticeDto: PostPracticeDto) {
    return {
      data : postPracticeDto,
      message : "nestjs Post practice success"
    };
  }

  Get() {
    return `nestjs Get practice Success`;
  }
}
