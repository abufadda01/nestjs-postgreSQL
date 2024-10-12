import { CreatePostMetaOptionsDto } from './dtos/CreatePostMetaOptionsDto.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from './meta-option.entity';
import { Repository } from 'typeorm';


@Injectable()
export class MetaOptionsService {

    // inject the MetaOption entity in our service
    constructor(@InjectRepository(MetaOption) private readonly metaOptionRepository : Repository<MetaOption>){}


    public async createMetaOption(createPostMetaOptionsDto : CreatePostMetaOptionsDto){
        let metaOption = this.metaOptionRepository.create(createPostMetaOptionsDto)
        return await this.metaOptionRepository.save(metaOption)
    }

}
