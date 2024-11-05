import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
constructor(@InjectModel(User.name) private usermodel:Model<User>){}




  create(createUserDto: CreateUserDto) {
   const  usermodel = new  this.usermodel(createUserDto)
   return usermodel.save()
  }

  findAll() {
    return  this.usermodel.find().exec


  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
