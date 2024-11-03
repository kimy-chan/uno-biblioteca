import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { categora, Categoria } from './entities/categoria.entity';

@Module({
  imports:[MongooseModule.forFeature([
    {
      name:Categoria.name, schema:categora
    }
  ])],
  controllers: [CategoriaController],
  providers: [CategoriaService],
})
export class CategoriaModule {}
