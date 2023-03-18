import {
  Table,
  Model,
  Column,
  BelongsToMany,
  ForeignKey,
  PrimaryKey,
  AutoIncrement,
  BelongsTo,
} from "sequelize-typescript";
import { User } from "./user.entity";
import { Content } from "./content.entity";

@Table
export class Results extends Model<Results> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @ForeignKey(() => Content)
  @Column
  contentId: number;

  // Define association to User model
  @BelongsTo(() => User)
  user: User;

  // Define association to Content model
  @BelongsTo(() => Content)
  content: Content;

  @Column({ type: "JSON" })
  questions: any;

  @Column
  isPass: boolean;
}
