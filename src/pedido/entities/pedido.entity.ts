import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema()
export class Pedido {
    @Prop({type:Types.ObjectId, ref:'Libro'})
    libro:Types.ObjectId
    
    @Prop({type:Types.ObjectId, ref:'Cliente'})
    cliente:Types.ObjectId

   
}

export const pedido=SchemaFactory.createForClass(Pedido)