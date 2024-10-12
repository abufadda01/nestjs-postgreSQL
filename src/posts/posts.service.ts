import { CreatePostDto } from './dtos/CreatePost.dto';
import { MetaOption } from './../meta-options/meta-option.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';


@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(Post) private readonly postRepository : Repository<Post> ,
        @InjectRepository(MetaOption) private readonly metaOptionRepository : Repository<MetaOption>
    ){}


    public async createNewPost(createPostDto : CreatePostDto){

        // we check if we have a metaOptions key in the createPostDto if it exist then we will create a new MetaOption record and connect it in the Post record in one-to-one relation key
        let metaOptions = createPostDto.metaOptions ? this.metaOptionRepository.create(createPostDto.metaOptions) : null
        
        if(metaOptions) {
            await this.metaOptionRepository.save(metaOptions) // save the new metaOptions record in the DB
        }

        let newPost = this.postRepository.create(createPostDto) // create the new post record

        if(metaOptions){ // add the relation key in the post record if we have a metaOptions by set the post.metaOptions key to be the new metaOptions record 
            newPost.metaOptions = metaOptions
        }

        return await this.postRepository.save(newPost) // save the new post record to the DB

    }

}
