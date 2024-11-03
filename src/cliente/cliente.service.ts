import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ClienteService {

    constructor(@InjectModel(Cliente.name) private readonly cliente:Model<Cliente>){}

  async create(createClienteDto: CreateClienteDto) {
    await this.cliente.create(createClienteDto)
    return  {status:HttpStatus.CREATED};
  }

  findAll() {
    return  this.cliente.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
