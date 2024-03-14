import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { AerolineaModule } from './aerolinea/aerolinea.module';
import { VueloModule } from './vuelo/vuelo.module';

@Module({
  imports: [UsuarioModule, AerolineaModule, VueloModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
