import { Test, TestingModule } from '@nestjs/testing';
import { DetalleVentaController } from './detalle_venta.controller.js';
import { DetalleVentaService } from './detalle_venta.service.js';

describe('DetalleVentaController', () => {
  let controller: DetalleVentaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetalleVentaController],
      providers: [DetalleVentaService],
    }).compile();

    controller = module.get<DetalleVentaController>(DetalleVentaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
