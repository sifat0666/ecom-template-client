import { Field } from "type-graphql";
import { Column, Entity, ObjectIdColumn, OneToOne } from "typeorm";
import { ContactInfo } from "./contact-info";

@Entity()
export class Employee{

    @Field()
    @ObjectIdColumn()
    id: string
    
    @Field()
    @Column()
    name: string
    
    // @Field(()=>ContactInfo)
    @OneToOne(()=>ContactInfo, contactInfo => contactInfo.employee)
    contactInfo: ContactInfo
}