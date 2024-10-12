import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


// ORM DATABASE : OBJECT RELATIONAL MAPPING , query language like sql

@Entity() // this decorater will trigger that this class will be an Entity definition (table columns structure) , our entity structure must match our dto structure 
export class User {

    // every table or every entity will have only one primary column (key)
    @PrimaryGeneratedColumn() // this decorater will trigger that this key will be the primary column in our table and it also auto generated it follow a sequence of the creation value process 
    id : number

    // this decorater will trigger that this key will be a column in our table
    @Column({
        type : "varchar" ,
        length : 96 ,
        nullable : false // this means that this key can't be an empty (not optional) when its value is false
    }) 
    firstName : string

    @Column({ 
        type : "varchar" ,
        length : 96 ,
        nullable : true // this means that this key can be an empty (optional) when its value is true
    })
    lastName : string
    
    @Column({
        type : "varchar" ,
        length : 96 ,
        nullable : false ,
        unique : true 
    })
    email : string
    
    @Column({
        type : "varchar" ,
        length : 96 ,
        nullable : false
    })
    password : string

}




