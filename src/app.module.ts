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