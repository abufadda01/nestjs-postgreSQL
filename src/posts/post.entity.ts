import { MetaOption } from "src/meta-options/meta-option.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id : number

    @Column({
        type : "varchar" ,
        nullable : false ,
        length : 512
    })
    title : string

    // @Column({
    //     enum : postType,
    //     type : "enum" ,
    //     default : postType.POST ,
    //     nullable : false
    // })
    // postType : postTypeEnum
    
    @Column({
        type : "varchar" ,
        nullable : false ,
        length : 512
    })
    slug : string
    
    @Column({
        type : "text" , // text type allow us to add a large amount of strings in same column
        nullable : true ,
    })
    content : string
    
    @Column({
        type : "text" ,
        nullable : true ,
    })
    schema : string
    
    @Column({
        type : "varchar" ,
        nullable : true ,
        length : 1024
    })
    featuredImgUrl? : string

    @Column({
        type : "timestamp" ,  // date structure in sql
        nullable : true ,
    })
    publishOn? : Date
    
    // we use it in relations 
    tags? : string[]

    @OneToOne(() => MetaOption) // this trigger that this key will be a one to one relation with MetaOption entity (table)
    @JoinColumn() // when we create (bi-direction) one-to-one relation we just add this decorater in one of the two columns , that also mean that the realtion column will be create in the entity (post entity) , then we will have a new column in this table (forign key) that contain the (primary key) in the connected table
    metaOptions : MetaOption

}