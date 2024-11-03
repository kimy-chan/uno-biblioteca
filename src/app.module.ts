import { Module } from '@nestjs/common';

import { CategoriaModule } from './categoria/categoria.module';
import { LibroModule } from './libro/libro.module';
import { ClienteModule } from './cliente/cliente.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PedidoModule } from './pedido/pedido.module';
import { AuthModule } from './auth/auth.module';
import { TokenGuard } from './auth/token/token.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
   
  
    MongooseModule.forRoot('mongodb://localhost:27017/biblioteca'),
    CategoriaModule, LibroModule, ClienteModule, UsuariosModule, PedidoModule, AuthModule],

  controllers: [],
providers: []})
export class AppModule {}
