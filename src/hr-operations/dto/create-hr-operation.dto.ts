import { IsOptional, IsNumber, IsBoolean, IsDate, IsInt } from 'class-validator';

export class CreateHROperationDto {
  @IsInt()
  employeeId: number;

  @IsOptional()
  @IsInt()
  departmentId?: number;

  @IsOptional()
  @IsInt()
  positionId?: number;

  @IsOptional()
  @IsNumber()
  salaryChange?: number;

  @IsOptional()
  @IsBoolean()
  departmentChange?: boolean;

  @IsOptional()
  @IsBoolean()
  dismissalFromWork?: boolean;
}
