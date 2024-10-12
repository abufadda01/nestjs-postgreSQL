  import { Module } from '@nestjs/common';
  import {TypeOrmModule} from "@nestjs/typeorm"
  import { UsersModule } from './users/users.module';
  import { User } from './users/user.entity';
  import { PostsModule } from './posts/posts.module';
  import { Post } from './posts/post.entity';
  import { TagsModule } from './tags/tags.module';
  import { MetaOptionsModule } from './meta-options/meta-options.module';


  @Module({
    imports: [
      // the useful use of forRootAsync that we can inject a config object and imports array .env secrets , also we can inject dependecies and import other injects
      TypeOrmModule.forRootAsync({ 
        imports : [] ,
        inject : [] ,
        // useFactory key takes a function and return a config object
        useFactory : () => ({
          type : "postgres" , 
          synchronize : true , 
          // entities : [User , Post] ,  // here we must add all defined entites classes
          autoLoadEntities : true , // to auto import the created entites with no need to add them in the entites array but we must ensure that all wanted entites is injected in their modules
          port : 5432 , 
          username : "postgres" ,  
          password : "1961111" , 
          host : "localhost" , 
          database : "nestjs-blogs"
        })
      }),
      UsersModule,
      PostsModule,
      TagsModule,
      MetaOptionsModule
    ],
    controllers: [],
    providers: [],
  })            

  export class AppModule {}





  // entity means the table and the entity file will be the structure of the table and the column definition and the file name must be singel name user.entity.ts
  // then you can inject your usersRepositry into your service file after register it in the module that we want to use it inside it and the process of create the usersRepositry done by the typeORM , after this we can access the DB inside our service file after define an instance of the usersRepositry in the service constructor 

  // we use relations between tables (entites) to avoid data duplicate , get accurate data if any of the column validations failed the relation data will failed also , data flexibility so we can increase the tables 
  // relations type : 1- one-to-one (uni-direction : only one of the entites know about the relationship  , bi-direction : both of the entites know about the relationship) , 2- one-to-many , 3- many-to-one , 4- many-to-many

  // Primary Key: Uniquely identifies records in its own table; cannot be NULL , It ensures that no two rows can have the same value in the primary key column(s).
  // Foreign Key: References a primary key in another table; can be NULL if there’s no corresponding record , It creates a relationship between two tables, often used to represent one-to-many or many-to-one relationships.