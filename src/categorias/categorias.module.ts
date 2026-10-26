import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity.js';
import { CategoriasService } from './categorias.service.js';
import { CategoriasController } from './categorias.controller.js';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])],
  controllers: [CategoriasController],
  providers: [CategoriasService],
})
export class CategoriasModule {}
