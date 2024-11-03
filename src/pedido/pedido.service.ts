import { HttpStatus, Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { UpdatePedidoDto } from './dto/update-pedido.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Pedido } from './entities/pedido.entity';
import { Model } from 'mongoose';

@Injectable()
export class PedidoService {

  constructor(@InjectModel(Pedido.name) private readonly pedido:Model<Pedido>){}
  async create(createPedidoDto: CreatePedidoDto) {
    await this.pedido.create(createPedidoDto)
    return  {status:HttpStatus.CREATED};
  }

  findAll() {
    return  this.pedido.aggregate([
      {
      $lookup:{
        from:'clientes',
        foreignField:'_id',
        localField:'cliente',
        as:'cliente'
      }



    },

       {
      $lookup:{
        from:'libros',
        foreignField:'_id',
        localField:'libro',
        as:'libro',
        pipeline:[
            {
              $project:{
                titulo:1,
                idioma:1,
                portada:1
              }
            }
        ]
      }

    },
    {
      $unwind:{path:'$libro'}
    },
      {
      $unwind:{path:'$cliente'}
    }
      
      

  
  
  ]);
  }

  findOne(id: number) {
    return `This action returns a #${id} pedido`;
  }

  update(id: number, updatePedidoDto: UpdatePedidoDto) {
    return `This action updates a #${id} pedido`;
  }

  remove(id: number) {
    return `This action removes a #${id} pedido`;
  }
}
