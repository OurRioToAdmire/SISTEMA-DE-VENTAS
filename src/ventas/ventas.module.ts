import { Module } from '@nestjs/common';
import { VentasService } from './ventas.service.js';
import { VentasController } from './ventas.controller.js';

@Module({
  controllers: [VentasController],
  providers: [VentasService],
})
export class VentasModule {}
