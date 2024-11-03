import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";

@Schema()
export class Libro {



    @Prop()
    titulo:string

    @Prop()
    editoria:string

    @Prop()
    idioma:string


    @Prop()
    portada:string


    @Prop()
    cantidad:number


    
    @Prop()
    estado:string

    @Prop({type:Types.ObjectId, ref:'Categoria'})
    categoria:Types.ObjectId




    
    

}
export const libro =SchemaFactory.createForClass(Libro)