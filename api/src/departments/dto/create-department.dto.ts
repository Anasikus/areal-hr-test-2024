// src/departments/dto/create-department.dto.ts
import { IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateDepartmentDto {
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsNumber()
  readonly parent?: number;

  @IsOptional()
  @IsString()
  readonly comment?: string;

  @IsNumber()
  readonly organizationId: number;
}
