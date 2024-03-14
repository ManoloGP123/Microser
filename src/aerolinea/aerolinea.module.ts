import { Module } from '@nestjs/common';
import { ServiciosAerolineaService } from './servicios-aerolinea/servicios-aerolinea.service';
import { ControladorAerolineaController } from './controlador-aerolinea/controlador-aerolinea.controller';

@Module({
  providers: [ServiciosAerolineaService],
  controllers: [ControladorAerolineaController]
})
export class AerolineaModule {}
