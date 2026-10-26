
detalle-venta.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDetalleVentaDto } from './dto/create-detalle_venta.dto.js';
import { UpdateDetalleVentaDto } from './dto/update-detalle_venta.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { DetalleVenta } from './entities/detalle-venta.entity.js';
import { Repository } from 'typeorm';
import { Venta } from '../ventas/entities/venta.entity.js';
import { Producto } from '../productos/entities/producto.entity.js';

@Injectable()
export class DetalleVentaService {
  constructor(
    @InjectRepository(DetalleVenta)
    private detalleVentaRepository: Repository<DetalleVenta>,
  ) {}

  async create(createDetalleVentaDto: CreateDetalleVentaDto) {
    const detalleVenta = this.detalleVentaRepository.create({
      cantidad: createDetalleVentaDto.cantidad,
      precio: createDetalleVentaDto.precio,
      subtotal: createDetalleVentaDto.subtotal,
      venta: { id: createDetalleVentaDto.venta_id } as Venta,
      producto: { id: createDetalleVentaDto.producto_id } as Producto,
    });

    return await this.detalleVentaRepository.save(detalleVenta);
  }

  findAll() {
    return this.detalleVentaRepository.find({
      relations: {
        venta: true,
        producto: true,
      },
    });
  }

  async findOne(id: number) {
    const detalleVenta = await this.detalleVentaRepository.findOne({
      where: { id },
      relations: {
        venta: true,
        producto: true,
      },
    });

    if (!detalleVenta) {
      throw new NotFoundException('Detalle de venta no encontrado');
    }

    return detalleVenta;
  }

  async update(
    id: number,
    updateDetalleVentaDto: UpdateDetalleVentaDto,
  ) {
    const detalleVenta = await this.findOne(id);

    if (updateDetalleVentaDto.cantidad !== undefined) {
      detalleVenta.cantidad = updateDetalleVentaDto.cantidad;
    }

    if (updateDetalleVentaDto.precio !== undefined) {
      detalleVenta.precio = updateDetalleVentaDto.precio;
    }

    if (updateDetalleVentaDto.subtotal !== undefined) {
      detalleVenta.subtotal = updateDetalleVentaDto.subtotal;
    }

    if (updateDetalleVentaDto.venta_id !== undefined) {
      detalleVenta.venta = {
        id: updateDetalleVentaDto.venta_id,
      } as Venta;
    }

    if (updateDetalleVentaDto.producto_id !== undefined) {
      detalleVenta.producto = {
        id: updateDetalleVentaDto.producto_id,
      } as Producto;
    }

    return this.detalleVentaRepository.save(detalleVenta);
  }

  async remove(id: number) {
    const detalleVenta = await this.findOne(id);

    await this.detalleVentaRepository.remove(detalleVenta);

    return { deleted: true };
  }
}

ventas.module.ts

Para que el @InjectRepository(Venta) funcione:

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VentasService } from './ventas.service.js';
import { VentasController } from './ventas.controller.js';
import { Venta } from './entities/venta.entity.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([Venta]),
  ],
  controllers: [VentasController],
  providers: [VentasService],
})
export class VentasModule {}

detalle-venta.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleVentaService } from './detalle-venta.service.js';
import { DetalleVentaController } from './detalle-venta.controller.js';
import { DetalleVenta } from './entities/detalle-venta.entity.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([DetalleVenta]),
  ],
  controllers: [DetalleVentaController],
  providers: [DetalleVentaService],
})
export class DetalleVentaModule {}