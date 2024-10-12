import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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
    // metaOptions : CreatePostMetaOptionsDto[]

}