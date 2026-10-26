import { PartialType } from '@nestjs/mapped-types';
import { CreateDetalleVentaDto } from './create-detalle_venta.dto.js';

export class UpdateDetalleVentaDto extends PartialType(CreateDetalleVentaDto) {}
