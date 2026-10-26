import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto.js';
import { UpdateCategoriaDto } from './dto/update-categoria.dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity.js';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository : Repository<Categoria>,
  ){}

 async create(createCategoriaDto: CreateCategoriaDto) {
    const categoria = this.categoriaRepository.create(createCategoriaDto);
    return await this.categoriaRepository.save(categoria)
  }

  findAll() {
    return this.categoriaRepository.find();
  }

  async findOne(id: number) {
    const categoria = await this.categoriaRepository.findOneBy({ id });
    if (!categoria) {
      throw new NotFoundException('Categoría no encontrada');
    }
    return categoria;
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    const categoria = await this.findOne(id);
    Object.assign(categoria, updateCategoriaDto);
    return this.categoriaRepository.save(categoria);
  }

  async remove(id: number) {
    const categoria = await this.findOne(id);
    await this.categoriaRepository.remove(categoria);
    return { deleted: true };
  }
}
