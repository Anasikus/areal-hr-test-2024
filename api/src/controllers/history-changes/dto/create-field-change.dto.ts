import { IsString, IsOptional } from 'class-validator';

export class CreateFieldChangeDto {
  @IsString()
  fieldName: string;

  @IsOptional()
  @IsString()
  oldValue?: string;

  @IsOptional()
  @IsString()
  newValue?: string;
}
