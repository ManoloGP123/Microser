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
} from '@nestjs/common';
import { ServiciosVueloService } from 'src/vuelo/servicios-vuelo/servicios-vuelo.service';
import { InterfazVuelo } from '../interfaz-vuelo/interfaz-vuelo.interface';
import { VueloDTO } from '../vuelo.dto';
@Controller('controlador-vuelo')
export class ControladorVueloController {
    constructor(private vueloServicio : ServiciosVueloService) {}
        @Get()
        todos() {
          return this.vueloServicio.todos();
        }
        @Get(':ID_vuelo')
        uno(@Param('ID_vuelo') ID_vuelo: string) {
          return this.vueloServicio.uno(ID_vuelo);
    }
    @Post()
    insertar(@Body() vuelo: InterfazVuelo) {
      return this.vueloServicio.insertar(vuelo);
}
@Put(':ID_vuelo')
actualizar(@Param('ID_vuelo') ID_vuelo: string, @Body() vuelo: VueloDTO) {
  return this.vueloServicio.actualizar(ID_vuelo, vuelo);
}
@Delete(':ID_vuelo')
eliminar(@Param('ID_vuelo') ID_vuelo: string) {
  return this.vueloServicio.eliminar(ID_vuelo);

      }
    }
    
