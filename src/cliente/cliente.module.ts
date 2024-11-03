import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { cliente, Cliente } from './entities/cliente.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports:[MongooseModule.forFeature([
    {
      name:Cliente.name, schema:cliente
    }
  ])],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class ClienteModule {}
