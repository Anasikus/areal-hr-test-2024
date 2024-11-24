import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HROperationsService } from './hr-operations.service';
import { HROperationsController } from './hr-operations.controller';
import { HROperation } from './hr-operation.entity';
import { Employee } from '../employees/employee.entity';
import { Department } from '../departments/department.entity';
import { Position } from '../positions/position.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HROperation, Employee, Department, Position])],
  controllers: [HROperationsController],
  providers: [HROperationsService],
})
export class HROperationsModule {}
