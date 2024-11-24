import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { Employee } from './employee.entity';
import { PassportData } from '../passport-data/passport-data.entity';
import { RegistrationAddress } from '../registration-address/registration-address.entity';
import { PassportScan } from '../passport-scans/passport-scan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, PassportData, RegistrationAddress, PassportScan])],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
