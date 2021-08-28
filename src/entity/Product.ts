import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ObjectIdColumn, UpdateDateColumn } from "typeorm";


@ObjectType()
@Entity()
export class Product extends BaseEntity{

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
  title!: string;

  @Field()
  @Column()
  price: number

  @Field()
  @Column({nullable:true})
  body: string

  @Field()
  @Column({nullable: true})
  image: string

  @Field()
  @Column({nullable: true})
  category: string;

  @Field(()=>[String])
  @Column("simple-array", {nullable: true, default: []}) 
  tags: string[]; 





}





