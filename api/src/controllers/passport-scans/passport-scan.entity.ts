import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Employee } from '../employees/employee.entity';

@Entity('passport_scans')
export class PassportScan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fileName: string;

  @Column()
  filePath: string; // путь к файлу на сервере

  // Связь с сотрудником
  @ManyToOne(() => Employee, (employee) => employee.passportScans, { onDelete: 'CASCADE' })
  employee: Employee;
}
