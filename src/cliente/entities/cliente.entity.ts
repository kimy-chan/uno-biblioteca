import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Types } from "mongoose"

@Schema()
export class Cliente {

    
    @Prop()
    ci:string

    @Prop()
    nombres:string



    @Prop()
    apellidos:string


    
    @Prop()
    direccion:string


}

export const cliente =  SchemaFactory.createForClass(Cliente)