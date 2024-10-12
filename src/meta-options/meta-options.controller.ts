import { MetaOptionsService } from './meta-options.service';
import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostMetaOptionsDto } from './dtos/CreatePostMetaOptionsDto.dto';


@Controller('meta-options')
export class MetaOptionsController {

    constructor(private readonly metaOptionsService : MetaOptionsService){}
    
    @Post()
    async create(@Body() createPostMetaOptionsDto : CreatePostMetaOptionsDto){
        return this.metaOptionsService.createMetaOption(createPostMetaOptionsDto)
    }
    
}
