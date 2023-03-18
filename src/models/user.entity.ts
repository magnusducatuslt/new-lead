import {
  Table,
  Column,
  Model,
  NotNull,
  PrimaryKey,
  AutoIncrement,
  HasMany,
  BelongsToMany,
} from "sequelize-typescript";
import { Content } from "./content.entity";
import { Results } from "./results.entity";

@Table
export class User extends Model<User> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  type: "teacher" | "consumer";

  @Column
  login: string;

  @Column
  password: string;

  // Define association to Content model
  @HasMany(() => Content)
  contents: Content[];

  // Define association to Results model
  @HasMany(() => Results)
  results: Results[];
}
