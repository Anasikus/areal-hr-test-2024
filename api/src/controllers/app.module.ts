import 'dotenv/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationsModule } from './organizations/organizations.module';
import { DepartmentsModule } from './departments/departments.module';
import { PositionsModule } from './positions/positions.module';
import { EmployeesModule } from './employees/employees.module';
import { PassportScansModule } from './passport-scans/passport-scans.module';
import { HROperationsModule } from './hr-operations/hr-operations.module';
import { HistoryChangesModule } from './history-changes/history-changes.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'nastyad20',
      database: 'areal_hr_test_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,  // Только для разработки. В продакшене используйте миграции!
    }),
    OrganizationsModule,
    DepartmentsModule,
    PositionsModule,
    EmployeesModule,
    PassportScansModule,
    HROperationsModule,
    HistoryChangesModule,
  ],
})
export class AppModule {}
