import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Employee } from '../employees/employee.entity';
import { Department } from '../departments/department.entity';
import { Position } from '../positions/position.entity';

@Entity('hr_operations')
export class HROperation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, (employee) => employee.hrOperations, { onDelete: 'CASCADE' })
  employee: Employee;

  @ManyToOne(() => Department, { nullable: true })
  department: Department;

  @ManyToOne(() => Position, { nullable: true })
  position: Position;

  @Column({ nullable: true })
  salaryChange: number; // Используется для операций изменения зарплаты

  @Column({ nullable: true })
  departmentChange: boolean; // Флаг для изменения отдела

  @Column({ nullable: true })
  dismissalFromWork: boolean; // Флаг для увольнения

  @CreateDateColumn()
  operationDate: Date; // Дата операции
}
