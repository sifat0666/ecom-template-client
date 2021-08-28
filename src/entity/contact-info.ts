import { Field } from "type-graphql";
import { Column, Entity, JoinColumn, ObjectIdColumn, OneToOne } from "typeorm";
import { Employee } from "./Employee";

@Entity()
export class ContactInfo{

    @Field()
    @ObjectIdColumn()
    id: string

    @Field()
    @Column({nullable: true})
    phone: string

    @Field()
    @Column()
    email: string

    // @OneToOne(() => Employee, employee => employee.contactInfo, {onDelete: 'CASCADE'})
    @JoinColumn()
    employee: Employee
}