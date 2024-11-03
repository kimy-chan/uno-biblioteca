import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Usuario {
    @Prop()
    nombres:string


    @Prop()
    apellidos:string



    @Prop()
    username:string



    @Prop()
    contrasena:string


    @Prop()
    rol:string


}


export const usuario=SchemaFactory.createForClass(Usuario)