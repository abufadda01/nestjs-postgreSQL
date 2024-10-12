import { IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MaxLength, MinLength } from "class-validator"

export class CrearteTagDto {

    // @ApiProperty()  for swagger documentation to add this key
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(256)
    name : string

    @IsString()
    @IsNotEmpty()
    @MaxLength(256)
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/ , {message : "a slug shold be all small letters and uses only - and without spaces , examples : 'my-url' " })
    slug : string

    @IsOptional()
    @IsString()
    description : string

    @IsUrl()
    @IsOptional()
    @MaxLength(1024)    
    featuredImgUrl? : string

}