import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductoDto } from './dto/create-producto.dto.js';
import { UpdateProductoDto } from './dto/update-producto.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity.js';
import { Categoria } from '../categorias/entities/categoria.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}

  async create(createProductoDto: CreateProductoDto) {
    const producto = this.productoRepository.create({
      nombre: createProductoDto.nombre,
      precio: createProductoDto.precio,
      categoria: { id: createProductoDto.categoria_id },
    });
    return await this.productoRepository.save(producto);
  }

  findAll() {
    return this.productoRepository.find({ relations: { categoria: true } });
  }

  async findOne(id: number) {
    const producto = await this.productoRepository.findOne({
      where: { id },
      relations: { categoria: true },
    });
    if (!producto) {
      throw new NotFoundException('Producto no encontrado');
    }
    return producto;
  }

  async update(id: number, updateProductoDto: UpdateProductoDto) {
    const producto = await this.findOne(id);
    if (updateProductoDto.nombre !== undefined) {
      producto.nombre = updateProductoDto.nombre;
    }
    if (updateProductoDto.precio !== undefined) {
      producto.precio = updateProductoDto.precio;
    }
    if (updateProductoDto.categoria_id !== undefined) {
      producto.categoria = { id: updateProductoDto.categoria_id } as Categoria;
    }
    return this.productoRepository.save(producto);
  }

  async remove(id: number) {
    const producto = await this.findOne(id);
    await this.productoRepository.remove(producto);
    return { deleted: true };
  }
}