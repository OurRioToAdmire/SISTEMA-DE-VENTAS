import {IsNumber} from "class-validator";
export class CreateDetalleVentaDto {
    @IsNumber()
    venta_id : number
    @IsNumber()
    Producto_id : number
    @IsNumber()
    cantidad : number
    @IsNumber()
    subtotal : number
}
