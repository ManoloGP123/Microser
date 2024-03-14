import { Test, TestingModule } from '@nestjs/testing';
import { ControladorAerolineaController } from './controlador-aerolinea.controller';

describe('ControladorAerolineaController', () => {
  let controller: ControladorAerolineaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControladorAerolineaController],
    }).compile();

    controller = module.get<ControladorAerolineaController>(ControladorAerolineaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
