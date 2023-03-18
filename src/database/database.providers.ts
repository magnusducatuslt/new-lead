import { Sequelize } from "sequelize-typescript";
import { User, Content, Results } from "../models";

export const databaseProviders = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: "postgres",
        host: "localhost",
        port: 5432,
        username: "user",
        password: "pass",
        database: "lead",
      });
      sequelize.addModels([User, Content, Results]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
