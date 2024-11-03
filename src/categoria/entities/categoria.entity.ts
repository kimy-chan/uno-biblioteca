import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Categoria {

    @Prop()
    nombre:string
}


export const categora =SchemaFactory.createForClass(Categoria)
