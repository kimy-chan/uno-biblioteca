import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { usuario, Usuario } from './entities/usuario.entity';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';

@Module({
    imports:[MongooseModule.forFeature([
    {
      name:Usuario.name, schema:usuario
    }
  ])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports:[UsuariosService]
})
export class UsuariosModule {}
