import { Test, TestingModule } from '@nestjs/testing';
import { VentasController } from './ventas.controller.js';
import { VentasService } from './ventas.service.js';

describe('VentasController', () => {
  let controller: VentasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VentasController],
      providers: [VentasService],
    }).compile();

    controller = module.get<VentasController>(VentasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
