import { Controller, Get, Res, Param, Header } from "@nestjs/common";
import { Response } from "express";
import { RenderService } from "./render.service";

@Controller("render")
export class RenderController {
  constructor(private readonly renderService: RenderService) {}
  @Get(":pagePath")
  @Header("Content-Type", "text/html; charset=utf-8")
  async root(@Param("pagePath") pagePath, @Res() res: Response): Promise<void> {
    const html = await this.renderService.getInjectedHtml(pagePath);
    res.send(html);
    return;
  }
}
