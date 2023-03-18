import {
  Controller,
  Post,
  Get,
  Param,
  UseInterceptors,
  UploadedFile,
  Req,
  Body,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage, Multer } from "multer";
import { extname } from "path";

import { ContentService } from "./content.service";
import { Content } from "../models";

@Controller("content")
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Post()
  findAll(@Body() body: { consumerId: string }): Promise<Content[]> {
    return this.contentService.findAll(Number(body.consumerId));
  }

  @Get(":id")
  async getUser(@Param("id") id): Promise<Content> {
    return this.contentService.findOne(id);
  }

  @Post("push")
  @UseInterceptors(
    FileInterceptor("file", {
      storage: diskStorage({
        destination: "./uploads",
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join("");
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    })
  )
  async addContent(
    @UploadedFile() file: Multer.File,
    @Req() req
  ): Promise<any> {
    console.log(file);
    const meta = await this.contentService.addMeta({
      teacherId: Number(req.body.teacherId),
      originalname: file.originalname,
      filename: file.filename,
      path: file.path,
    });
    return meta;
  }
}
