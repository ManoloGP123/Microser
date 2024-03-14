import { Injectable } from '@nestjs/common';
import { InterfazAerolinea } from '../interfaz-aerolinea/interfaz-aerolinea.interface';
import { AerolienaDTO } from '../aerolinea.dto';
import { v4 as uuidV4 } from 'uuid';
@Injectable()
export class ServiciosAerolineaService {
    aerolinea:InterfazAerolinea[] = [];
    todos() {
        return this.aerolinea;
    }
    uno(ID_aerolinea: string) {
      return this.aerolinea.find((aerolinea) => aerolinea.ID_aerolinea == ID_aerolinea);
    }
    insertar(aerolinea: AerolienaDTO) {
        const emp = {
          id: uuidV4(),
          ...aerolinea,
        };
        this.aerolinea.push(emp);
        return this.aerolinea;
    }
    actualizar(ID_aerolinea: string, aerolineaActualziar: AerolienaDTO) {
        const nuevoemp = { ID_aerolinea, ...aerolineaActualziar };
        this.aerolinea = this.aerolinea.map((aerolinea) =>
          aerolinea.ID_aerolinea === ID_aerolinea ? nuevoemp : aerolinea,
        );
        return nuevoemp;
    }
    eliminar(ID_aerolinea: string) {
      this.aerolinea = this.aerolinea.filter((aerolinea) => aerolinea.ID_aerolinea !== ID_aerolinea);
      return 'empleado Eliminado';
} 
}