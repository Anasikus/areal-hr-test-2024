import { IsString, IsDate, IsOptional } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  surname: string;

  @IsString()
  name: string;

  @IsString()
  middleName: string;

  @IsDate()
  dateOfBirth: Date;

  @IsOptional()
  passportDataId?: number;

  @IsOptional()
  registrationAddressId?: number;
}
