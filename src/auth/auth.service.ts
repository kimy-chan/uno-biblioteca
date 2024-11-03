import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private readonly usuarioService:UsuariosService ,
    private  readonly jwtService:JwtService
  ){}
 async login(createAuthDto: CreateAuthDto) {
    const user = await this.usuarioService.buscarUsernme(createAuthDto.username)
    if(!user){
      throw new UnauthorizedException()
    }
    const payload= this.jwtService.sign({id:user.id, rol:user.rol},{
      secret:'hola'
    })
      return {status:HttpStatus.OK, token:payload};
  }

}
