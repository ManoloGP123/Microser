import { Test, TestingModule } from '@nestjs/testing';
import { ControladorVueloController } from './controlador-vuelo.controller';

describe('ControladorVueloController', () => {
  let controller: ControladorVueloController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControladorVueloController],
    }).compile();

    controller = module.get<ControladorVueloController>(ControladorVueloController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
