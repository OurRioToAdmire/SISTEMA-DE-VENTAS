import { PartialType } from '@nestjs/mapped-types';
import { CreateVentaDto } from './create-venta.dto.js';
import {IsDate, IsNumber, IsString} from "class-validator";

export class UpdateVentaDto extends PartialType(CreateVentaDto) {
    @IsString()
        cliente : string
        @IsNumber()
        venta_id : number
        @IsNumber()
        total : number
        @IsDate()
        fecha : Date
}
