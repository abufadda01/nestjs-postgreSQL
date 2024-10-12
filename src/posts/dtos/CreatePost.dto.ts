import { Type } from "class-transformer";
import { IsArray, IsOptional, ValidateNested } from "class-validator";
import { CreatePostMetaOptionsDto } from "src/meta-options/dtos/CreatePostMetaOptionsDto.dto";


export class CreatePostDto{
    // ... all post keys


    @IsOptional()
    @ValidateNested({each : true}) // for nested validation if we have a key in some dto and this key is another dto type so this key will be validated as its dto definition
    @Type(() => CreatePostMetaOptionsDto) // to make sure that this dto instance is CreatePostMetaOptionsDto real instance value 
    metaOptions? : CreatePostMetaOptionsDto | null // cause its optional key we must add or null value

} 