import { Injectable } from "@nestjs/common";
import { User } from "../models";

@Injectable()
export class AuthService {
  async addUser(params: {
    type: any;
    login: string;
    password: string;
  }): Promise<User> {
    console.log(params);
    const user = await User.create(params);
    return user;
  }
  async getUser(
    creds: Record<"login" | "password", string>
  ): Promise<User | null> {
    const user = await User.findOne({
      where: {
        login: creds.login,
      },
    });

    if (!user || user.password !== creds.password) {
      return null;
    }
    return user;
  }
}
