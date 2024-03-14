import { Injectable } from '@nestjs/common';
import { InterfazVuelo } from '../interfaz-vuelo/interfaz-vuelo.interface';
import { VueloDTO } from '../vuelo.dto';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class ServiciosVueloService {
    vuelo:InterfazVuelo[] = [];
    todos() {
        return this.vuelo;
    }
    uno(ID_vuelo: string) {
      return this.vuelo.find((vuelo) => vuelo.ID_vuelo == ID_vuelo);
    }
    insertar(vuelo: VueloDTO) {
        const emp = {
          ID_vuelo: uuidV4(),
          ...vuelo,
        };
        this.vuelo.push(emp);
        return this.vuelo;
    }
    actualizar(ID_vuelo: string, vueloActualziar: VueloDTO) {
        const nuevoemp = { ID_vuelo, ...vueloActualziar };
        this.vuelo = this.vuelo.map((vuelo) =>
          vuelo.ID_vuelo === ID_vuelo ? nuevoemp : vuelo,
        );
        return nuevoemp;
    }
    eliminar(ID_vuelo: string) {
      this.vuelo = this.vuelo.filter((vuelo) => vuelo.ID_vuelo !== ID_vuelo);
      return 'empleado Eliminado';
        
}
}