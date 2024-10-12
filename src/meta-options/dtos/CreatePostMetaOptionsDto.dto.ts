import { IsJSON, IsNotEmpty } from "class-validator";


export class CreatePostMetaOptionsDto {
    @IsNotEmpty()
    @IsJSON() // decorater that check if this key structure is a json object
    metaValue : string
}