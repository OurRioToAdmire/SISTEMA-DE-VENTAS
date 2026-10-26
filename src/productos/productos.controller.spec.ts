import { Test, TestingModule } from '@nestjs/testing';
import { ProductosController } from './productos.controller.js';
import { ProductosService } from './productos.service.js';

describe('ProductosController', () => {
  let controller: ProductosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductosController],
      providers: [ProductosService],
    }).compile();

    controller = module.get<ProductosController>(ProductosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
