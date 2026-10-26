import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto.js';
import { IsNumber, IsString } from "class-validator";

export class UpdateProductoDto extends PartialType(CreateProductoDto) {
@IsString()
  nombre: string;
@IsNumber()
  precio: number;
@IsNumber()
  categoria_id: number;
}