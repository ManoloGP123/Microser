import { Test, TestingModule } from '@nestjs/testing';
import { ServiciosVueloService } from './servicios-vuelo.service';

describe('ServiciosVueloService', () => {
  let service: ServiciosVueloService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiciosVueloService],
    }).compile();

    service = module.get<ServiciosVueloService>(ServiciosVueloService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
