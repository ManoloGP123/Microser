import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
}from '@nestjs/common';

import { ServiciosAerolineaService } from '../servicios-aerolinea/servicios-aerolinea.service';
import { InterfazAerolinea } from '../interfaz-aerolinea/interfaz-aerolinea.interface';
import { AerolienaDTO } from '../aerolinea.dto';

@Controller('controlador-aerolinea')
export class ControladorAerolineaController {
    constructor(private aerolienaServicio : ServiciosAerolineaService) {}

    @Get()
    todos() {
      return this.aerolienaServicio.todos();
    }

    @Get(':ID_aerolinea')
    uno(@Param('ID_aerolienas') ID_aerolinea: string) {
      return this.aerolienaServicio.uno(ID_aerolinea);
    }
      @Post()
  insertar(@Body() aerolinea: InterfazAerolinea) {
    return this.aerolienaServicio.insertar(aerolinea);
  }
  @Put(':ID_aeroliena')
  actualizar(@Param('ID_aeroliena') ID_aerolinea: string, @Body() aerolinea: AerolienaDTO) {
    return this.aerolienaServicio.actualizar(ID_aerolinea, aerolinea);
}
@Delete(':ID_aeroliena')
eliminar(@Param('ID_aeroliena') ID_aerolinea: string) {
  return this.aerolienaServicio.eliminar(ID_aerolinea);

      }
    }
    
