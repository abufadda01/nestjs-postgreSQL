import { CreatePostDto } from './dtos/CreatePost.dto';
import { PostsService } from './posts.service';
import { Body, Controller, Delete, ParseIntPipe, Post, Query } from '@nestjs/common';


@Controller('posts')
export class PostsController {

    constructor(private readonly postsService : PostsService){}

    // @ApiResponse({ for swagger doc concept
    //     status : 201 ,
    //     description : "you get 201 response when you create a new post successfully"
    // })
    @Post()
    public async createNewPost(@Body() createPostDto : CreatePostDto){
        return this.postsService.createNewPost(createPostDto)
    }

    @Delete()
    public deletePost(@Query("id" , ParseIntPipe) id : number ){
        return this.postsService.deletePost(id)
    }


}
