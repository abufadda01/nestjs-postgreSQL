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

    // cascade means if we have any related record for this key (there is any related key in other table) any changes happens for parent will effect the realted record also and will saved and updated
    @OneToOne(() => MetaOption , {cascade : true , eager : true}) // this trigger that this key will be a one to one relation with MetaOption entity (table)
    @JoinColumn() // when we create (bi-direction) one-to-one relation we just add this decorater in one of the two columns , that also mean that the realtion column will be create in the entity (post entity) , then we will have a new column in this table (forign key) that contain the (primary key) in the connected table
    metaOptions : MetaOption

}


// cascade example
// i can set its value to true or just pass an array that contain the wanted operations to happen ["insert" , "remove"]
// If you have a User entity that has a one-to-one relationship with a Profile entity, and you set cascade: true, then:

// When you create a new User and set its Profile, saving the User will also save the Profile.
// If you update the User and modify the Profile, saving the User will update the Profile as well.
// If you delete the User, the Profile will also be deleted.