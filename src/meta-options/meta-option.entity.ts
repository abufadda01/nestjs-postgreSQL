import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class MetaOption {

    @PrimaryGeneratedColumn()
    id : number

    @Column({
        type : "json" , // This specifies that the column will store JSON data. It allows you to save structured data in a single column, which can be particularly useful for storing configurations, settings, or other complex data structures.
        nullable : false ,
    })
    metaValue : string

    @CreateDateColumn() // This decorator automatically sets the createdDate field to the current date and time when a new record is created. It is typically used to track when the record was first inserted into the database.
    createdDate : Date
    
    @UpdateDateColumn() // This decorator automatically updates the updatedDate field to the current date and time whenever the record is updated. It helps keep track of the last modification time of the record
    updatedDate : Date
    

}