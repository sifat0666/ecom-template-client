import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from "typeorm";


@ObjectType()
@Entity()
export class User extends BaseEntity{

  @Field()
  @ObjectIdColumn()
  id!: string;


  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @Field()
  @UpdateDateColumn({ type: 'timestamp', nullable: true  })
  updatedAt?: Date

  @Field()
  @Column()
  username!: string;

  @Field()
  @Column()
  email!: string;

  @Column()
  password!: string;

  @Field()
  @Column()
  role!: string


}