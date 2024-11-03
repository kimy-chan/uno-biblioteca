import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Categoria } from './entities/categoria.entity';
import { Model } from 'mongoose';

@Injectable()
export class CategoriaService {
  constructor(@InjectModel(Categoria.name) private readonly categoria:Model<Categoria>){}

  async create(createCategoriaDto: CreateCategoriaDto) {
    await this.categoria.create(createCategoriaDto)
    return {status:HttpStatus.CREATED};
  }

  findAll() {
    return this.categoria.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} categoria`;
  }

  update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return `This action updates a #${id} categoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoria`;
  }
}
