import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports : [TypeOrmModule.forFeature([User])] , // to register our table (entity) in our moduel to could access it in our service and make all DB operations
  exports : [UsersService]
})


export class UsersModule {}
