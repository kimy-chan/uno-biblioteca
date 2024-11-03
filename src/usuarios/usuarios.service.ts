import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsuariosService {

   constructor(@InjectModel(Usuario.name) private readonly usuario:Model<Usuario>){}
  async create(createUsuarioDto: CreateUsuarioDto) {
    await  this.usuario.create(createUsuarioDto)
    return {status:HttpStatus.CREATED} ;
  }

  findAll() {
    return  this.usuario.find()
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  buscarUsernme(username:string){
    return this.usuario.findOne({username})
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
