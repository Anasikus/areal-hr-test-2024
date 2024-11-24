// src/organizations/dto/create-organization.dto.ts
import { IsString, IsOptional } from 'class-validator';

export class CreateOrganizationDto {
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly comment?: string;
}
