import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Tag {

    @PrimaryGeneratedColumn()
    id : number

    @Column({
        type : "varchar",
        length : 256 ,
        nullable : false ,
        unique : true
    })
    name : string
    
    @Column({
        type : "varchar",
        length : 256 ,
        nullable : false ,
        unique : true
    })
    slug : string
    
    @Column({
        type : "text",
        nullable : true ,
    })
    description : string
    
    @CreateDateColumn() // This decorator automatically sets the createdDate field to the current date and time when a new record is created. It is typically used to track when the record was first inserted into the database.
    createdDate : Date
    
    @UpdateDateColumn() // This decorator automatically updates the updatedDate field to the current date and time whenever the record is updated. It helps keep track of the last modification time of the record
    updatedDate : Date
    
    @DeleteDateColumn() // This decorator is used to implement soft deletes. When a record is "deleted," this field is set to the current date and time instead of actually removing the record from the database. This allows for recovery of the record later if needed
    deletedDate : Date

}