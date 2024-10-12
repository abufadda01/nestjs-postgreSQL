// import { CreateUserDto } from './dtos/CreateUser.dto';
import { UsersService } from './users.service';
import { Controller, Post } from '@nestjs/common';


@Controller('users')
export class UsersController {

    constructor(private usersService : UsersService){}

    // @Post()
    // public createUser(createUserDto : CreateUserDto){
    //     return this.usersService.createUser(createUserDto)
    // }

}
