import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsuariosModule } from 'src/usuarios/usuarios.module';

@Module({
  imports:[
    JwtModule.register({
      global:true,
      secret:'hola',
    }),
    UsuariosModule
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
