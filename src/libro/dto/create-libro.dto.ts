import { Types } from "mongoose"

export class CreateLibroDto {

 
    titulo:string

 
    editoria:string


    idioma:string



    portada:string



    cantidad:number


    categoria:Types.ObjectId



}
