import {IsDate, IsNumber, IsString} from "class-validator";
export class CreateVentaDto {
     @IsString()
    cliente : string
    @IsNumber()
    venta_id : number
    @IsNumber()
    total : number
    @IsDate()
    fecha : Date
}
