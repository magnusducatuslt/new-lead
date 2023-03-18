import { Controller, Post, Get, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "../models";

@Controller("auth")
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @Post("create")
  addUser(
    @Body() body: { type: any; login: string; password: string }
  ): Promise<User> {
    return this.appService.addUser(body);
  }

  @Post("find")
  async getUser(
    @Body() body: { login: string; password: string }
  ): Promise<User> {
    return this.appService.getUser(body);
  }

  @Get("/")
  getHealth() {
    return "hello";
  }
}
