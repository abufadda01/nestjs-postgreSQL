import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm"
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRootAsync({ // the useful use of forRootAsync that we can inject a config object and import .env secrets , also we can inject dependecies and import other injects
      imports : [] ,
      inject : [] ,
      // useFactory key takes a function and return a config object
      useFactory : () => ({
        type : "postgres" , 
        synchronize : true , 
        entities : [User] ,  // here we must add all defined entites classes
        port : 5432 , 
        username : "postgres" , 
        password : "1961111" , 
        host : "localhost" , 
        database : "nestjs-blogs"
      })
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})            

export class AppModule {}





// entity means the table and the entity file will be the structure of the table and the column definition and the file name must be singel name user.entity.ts
// then you can inject your usersRepositry into your service file and process of create the usersRepositry done by the typeORM , after this we can access the DB inside our service file after define an instance of the usersRepositry in the service constructor 