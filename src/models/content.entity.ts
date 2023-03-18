import {
  Table,
  Column,
  Model,
  NotNull,
  PrimaryKey,
  AutoIncrement,
  BelongsTo,
  ForeignKey,
  BelongsToMany,
  HasMany,
} from "sequelize-typescript";
import { User } from "./user.entity";
import { Results } from "./results.entity";

@Table
export class Content extends Model<Content> {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  originalname: string;

  @Column
  filename: string;

  @Column
  path: string;

  @ForeignKey(() => User)
  @Column
  teacherId: number;

  // Define association to User model
  @BelongsTo(() => User, "teacherId")
  teacher: User;

  // Define association to Results model
  @HasMany(() => Results)
  results: Results[];
}
