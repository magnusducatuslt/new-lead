import { Module } from "@nestjs/common";

import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

import { MulterModule } from "@nestjs/platform-express";
import { AuthModule } from "./auth/auth.module";
import { AdminModule } from "./admin/admin.module";
import { UserModule } from "./user/user.module";
import { ContentModule } from "./content/content.module";
import { ResultModule } from "./result/result.module";
import { RenderModule } from "./render/render.module";
import { DatabaseModule } from "./database/database.module";

@Module({
  imports: [
    AuthModule,
    AdminModule,
    UserModule,
    ContentModule,
    DatabaseModule,
    ResultModule,
    RenderModule,
    MulterModule.register({
      dest: "./uploads",
    }),
  ],
})
export class AppModule {}
