import { Injectable } from "@nestjs/common";
import { Results, Content, User } from "../models";

@Injectable()
export class ResultService {
  findAll(param: { teacherId: number }): Promise<Content[]> {
    return Content.findAll({
      where: { teacherId: param.teacherId },
      include: [{ model: Results, include: [{ model: User }] }],
    });
  }
  addResult(param: {
    passed: boolean;
    passDate: string;
    userId: number;
    contentId: number;
    questions: any;
  }) {
    return Results.create(
      {
        userId: param.userId,
        contentId: param.contentId,

        questions: param.questions,

        passed: param.passed,
        passDate: param.passDate,
      },
      { returning: true }
    );
  }
}
