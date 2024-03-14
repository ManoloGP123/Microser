import { Module } from '@nestjs/common';
import { ServiciosVueloService } from './servicios-vuelo/servicios-vuelo.service';
import { ControladorVueloController } from './controlador-vuelo/controlador-vuelo.controller';

@Module({
  providers: [ServiciosVueloService],
  controllers: [ControladorVueloController]
})
export class VueloModule {}
