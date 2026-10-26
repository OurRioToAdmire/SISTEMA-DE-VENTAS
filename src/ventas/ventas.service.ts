ventas.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto.js';
import { UpdateVentaDto } from './dto/update-venta.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Venta } from './entities/venta.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Venta)
    private ventaRepository: Repository<Venta>,
  ) {}

  async create(createVentaDto: CreateVentaDto) {
    const venta = this.ventaRepository.create({
      ...createVentaDto,
    });

    return await this.ventaRepository.save(venta);
  }

  findAll() {
    return this.ventaRepository.find({
      relations: { detalles: true },
    });
  }

  async findOne(id: number) {
    const venta = await this.ventaRepository.findOne({
      where: { id },
      relations: { detalles: true },
    });

    if (!venta) {
      throw new NotFoundException('Venta no encontrada');
    }

    return venta;
  }

  async update(id: number, updateVentaDto: UpdateVentaDto) {
    const venta = await this.findOne(id);

    Object.assign(venta, updateVentaDto);

    return this.ventaRepository.save(venta);
  }

  async remove(id: number) {
    const venta = await this.findOne(id);

    await this.ventaRepository.remove(venta);

    return { deleted: true };
  }
}
