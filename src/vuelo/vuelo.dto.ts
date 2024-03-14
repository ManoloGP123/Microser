import {
    IsDate,
    IsEmail,
    IsEmpty,
    IsNotEmpty,
    IsNumber,
    IsString,
  } from 'class-validator';

export class VueloDTO {
    @IsNotEmpty({ message: 'El campo es requerido' })
    ID_vuelo: string;
    @IsNotEmpty({ message: 'El campo es requerido' })
    Numero_vuelo: string;
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    Origen: string;
    @IsNotEmpty({ message: 'El campo es requerido' })
    Destino: string;
    @IsNotEmpty({ message: 'El campo es requerido' })
    Fecha_salida: Date;
    
}