import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class TokenGuard implements CanActivate {
  constructor( private readonly jwtService:JwtService){}
  async canActivate(
    context: ExecutionContext,
  ){

    try {
        const request = context.switchToHttp().getRequest()
        const token:string = request.headers['authorization'].split(' ')[1];

        
      if (!token) {
        throw new UnauthorizedException('Token not found');
      }

      const data= await this.jwtService.verify(token,{
        secret:'hola'
      })
       console.log(data);
       
      

      return true; 
    } catch (error) {
       throw new UnauthorizedException()  
    }

  }
}
