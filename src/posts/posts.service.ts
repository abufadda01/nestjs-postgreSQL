import { UsersService } from './../users/users.service';
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
        @InjectRepository(MetaOption) private readonly metaOptionRepository : Repository<MetaOption> ,
        private readonly usersService : UsersService
    ){}


    public async createNewPost(createPostDto : CreatePostDto){

        // since we use cascade key in the related column we can remove the process of create a new metaOptions when we have metaOptions key it will automaticlly created if we have metaOptions key in the incomming req body (our dto)

        // we check if we have a metaOptions key in the createPostDto if it exist then we will create a new MetaOption record and connect it in the Post record in one-to-one relation key
        // let metaOptions = createPostDto.metaOptions ? this.metaOptionRepository.create(createPostDto.metaOptions) : null
        
        // if(metaOptions) {
        //     await this.metaOptionRepository.save(metaOptions) // save the new metaOptions record in the DB
        // }

        let newPost = this.postRepository.create(createPostDto) // create the new post record

        // if(metaOptions){ // add the relation key in the post record if we have a metaOptions by set the post.metaOptions key to be the new metaOptions record 
        //     newPost.metaOptions = metaOptions
        // }

        return await this.postRepository.save(newPost) // save the new post record to the DB

    }



    public async findAllUserPosts(userID : string) {

        // const user = await this.usersService.findById(userID)

        // now every time we fetch the posts we will get the realted metaOptions record
        // or i can remove this options object in find({}) and add eager key to the column definition , then i will get the whole related meta reacord not only the related value
        let posts = await this.postRepository.find()

        // let posts = await this.postRepository.find({ 
        //     relations : {
        //         metaOptions : true
        //     }
        // })

        return posts
    } 


}
