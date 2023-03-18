import { Injectable } from "@nestjs/common";
import { Content, User, Results } from "../models";

@Injectable()
export class ContentService {
  findOne(id: string): Promise<Content> {
    return Content.findByPk(id);
  }
  findAll(consumerId: number): Promise<Content[]> {
    return Content.findAll({
      include: [
        {
          model: Results,
          include: [{ model: User, where: { id: consumerId } }],
        },
      ],
    });
  }
  addMeta(params: {
    teacherId: number;
    originalname: string;
    filename: string;
    path: string;
  }): Promise<Content> {
    return Content.create(params);
  }
}
