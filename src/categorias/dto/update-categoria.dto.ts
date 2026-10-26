import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoriaDto } from './create-categoria.dto.js';
import { IsString } from 'class-validator';

export class UpdateCategoriaDto extends PartialType(CreateCategoriaDto) {
    @IsString()
        nombre : string
}
