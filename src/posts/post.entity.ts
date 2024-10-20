import { MetaOption } from "src/meta-options/meta-option.entity";
import { User } from "src/users/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";


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

    // since we use eager key in the related column we can remove the process of create a new metaOptions when we have metaOptions key it will automaticlly created if we have metaOptions key in the incomming req body (our dto)
    // and using eager the related record will be fetched directly when the parent record is fetched
    // cascade means if we have any related record for this key (there is any related key in other table) any changes happens for parent will effect the realted record also and will saved and updated
    @OneToOne(() => MetaOption , (metaOption) => metaOption.post  , {cascade : true , eager : true}) // this trigger that this key will be a one to one relation with MetaOption entity (table)
    @JoinColumn() // when we create (bi-direction) one-to-one relation we just add this decorater in one of the two columns , that also mean that the realtion column will be create in the entity (post entity) , then we will have a new column in this table (forign key) that contain the (primary key) in the connected table
    metaOptions : MetaOption

    @ManyToOne(() => User , (user) => user.posts) // many posts will have one user (one author)
    author : User

}


// cascade example
// i can set its value to true or just pass an array that contain the wanted operations to happen ["insert" , "remove"]
// If you have a User entity that has a one-to-one relationship with a Profile entity, and you set cascade: true, then:

// When you create a new User and set its Profile, saving the User will also save the Profile.
// If you update the User and modify the Profile, saving the User will update the Profile as well.
// If you delete the User, the Profile will also be deleted.
// cascade will happens if we have bi-direction one-to-one relation



// Setting eager: (populate)
// true in a relation decorator allows automatic loading of related entities, simplifying data access at the cost of potentially increased complexity and performance considerations.



// in one to many relation the forign key always lies with the many to one side (user to posts) the forign key will be in the posts side entity
// and there is no need to add @JoinColumn() decorator