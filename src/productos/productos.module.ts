import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity.js';
import { ProductosService } from './productos.service.js';
import { ProductosController } from './productos.controller.js';

@Module({
  imports: [TypeOrmModule.forFeature([Producto])],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
