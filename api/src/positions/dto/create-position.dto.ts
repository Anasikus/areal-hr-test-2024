// src/positions/dto/create-position.dto.ts
import { IsString } from 'class-validator';

export class CreatePositionDto {
  @IsString()
  readonly name: string;
}
