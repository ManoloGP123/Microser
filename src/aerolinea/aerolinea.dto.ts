import {
    IsDate,
    IsEmail,
    IsEmpty,
    IsNotEmpty,
    IsNumber,
    IsString,
  } from 'class-validator';

export class AerolienaDTO {
    @IsNotEmpty({ message: 'El campo es requerido' })
    ID_aerolinea: string | number;
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    Nombre: string;
    @IsNotEmpty({ message: 'El campo es requerido' })
    @IsString({ message: 'Se necesita un texto' })
    Pais: string;
    @IsNotEmpty({ message: 'El campo es requerido' })
    Flota: number;
    @IsNotEmpty({ message: 'El campo es requerido' })
    Alianzas: string;
    @IsString()
    Ruta: string;
    
}