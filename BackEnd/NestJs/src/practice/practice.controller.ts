import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PracticeService } from './practice.service';
import { PostPracticeDto } from './dto/post-practice.dto';

@Controller('practice')
export class PracticeController {
  constructor(private readonly practiceService: PracticeService) {}

  @Post()
  create(@Body() postPracticeDto: PostPracticeDto) {
    return this.practiceService.Post(postPracticeDto);
  }

  @Get()
  findAll() {
    return this.practiceService.Get();
  }
}
