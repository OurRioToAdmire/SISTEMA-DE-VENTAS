import { Module } from '@nestjs/common';
import { DetalleVentaService } from './detalle_venta.service.js';
import { DetalleVentaController } from './detalle_venta.controller.js';

@Module({
  controllers: [DetalleVentaController],
  providers: [DetalleVentaService],
})
export class DetalleVentaModule {}
