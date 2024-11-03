import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { pedido, Pedido } from './entities/pedido.entity';

@Module({
  imports:[MongooseModule.forFeature([
    {
      name:Pedido.name, schema:pedido
    }
  ])],
  controllers: [PedidoController],
  providers: [PedidoService],
})
export class PedidoModule {}
