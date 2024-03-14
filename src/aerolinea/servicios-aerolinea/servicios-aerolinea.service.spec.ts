import { Test, TestingModule } from '@nestjs/testing';
import { ServiciosAerolineaService } from './servicios-aerolinea.service';

describe('ServiciosAerolineaService', () => {
  let service: ServiciosAerolineaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiciosAerolineaService],
    }).compile();

    service = module.get<ServiciosAerolineaService>(ServiciosAerolineaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
