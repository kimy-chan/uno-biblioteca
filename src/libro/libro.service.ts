import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { Libro } from './entities/libro.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

@Injectable()
export class LibroService {
   
  constructor(@InjectModel(Libro.name) private readonly libro:Model<Libro>){}

  
 async create(createLibroDto: CreateLibroDto) {
  
  createLibroDto.categoria = new Types.ObjectId(createLibroDto.categoria )

    await this.libro.create(createLibroDto)
    return {status:HttpStatus.CREATED};
  }

  findAll() {
    return  this.libro.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} libro`;
  }

  update(id: number, updateLibroDto: UpdateLibroDto) {
    return `This action updates a #${id} libro`;
  }

  remove(id: number) {
    return `This action removes a #${id} libro`;
  }
}
