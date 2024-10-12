// import { CreateUserDto } from './dtos/CreateUser.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private usersRepository : Repository<User>){}


    //  public async createUser(createUserDto : CreateUserDto){

    //     const isUserExist = await this.usersRepository.findOne({
    //         where : {email : createUserDto.email} // check if the user exist by check if the incomming email key from the req body is exist in our db
    //     })

    //     let newUser = this.usersRepository.create(createUserDto)

    //     newUser = await this.usersRepository.save(newUser)

    //     return newUser

    //  }


}
