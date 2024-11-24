import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportScansService } from './passport-scans.service';
import { PassportScansController } from './passport-scans.controller';
import { PassportScan } from './passport-scan.entity';
import { Employee } from '../employees/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PassportScan, Employee])],
  controllers: [PassportScansController],
  providers: [PassportScansService],
})
export class PassportScansModule {}
