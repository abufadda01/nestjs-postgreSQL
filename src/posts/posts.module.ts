import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { UsersModule } from 'src/users/users.module';
import { MetaOption } from 'src/meta-options/meta-option.entity';


@Module({
  providers: [PostsService],
  controllers: [PostsController] ,
  imports : [UsersModule , TypeOrmModule.forFeature([Post , MetaOption])]
})
export class PostsModule {}
