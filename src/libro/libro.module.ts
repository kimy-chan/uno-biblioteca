import { Module } from '@nestjs/common';
import { LibroService } from './libro.service';
import { LibroController } from './libro.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { libro, Libro } from './entities/libro.entity';

@Module({
  imports:[MongooseModule.forFeature([
    {
      name:Libro.name, schema:libro
    }
  ])],
  controllers: [LibroController],
  providers: [LibroService],
})
export class LibroModule {}
