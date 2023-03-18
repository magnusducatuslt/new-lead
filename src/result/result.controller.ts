import { Controller, Post, Get, Param, Body } from "@nestjs/common";
import { ResultService } from "./result.service";
import { Content, Results } from "../models";

@Controller("result")
export class ResultController {
  constructor(private readonly resultService: ResultService) {}
  @Get(":teacherId")
  findAll(@Param("teacherId") teacherId): Promise<Content[]> {
    return this.resultService.findAll({ teacherId: Number(teacherId) });
  }

  @Post()
  addResult(
    @Body()
    param: {
      passed: boolean;
      passDate: string;
      userId: number;
      contentId: number;
      questions: any;
    }
  ): Promise<Results> {
    return this.resultService.addResult(
      Object.assign(param, {
        userId: Number(param.userId),
        contentId: Number(param.contentId),
      })
    );
  }
}
