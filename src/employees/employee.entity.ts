import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { PassportData } from '../passport-data/passport-data.entity';
import { RegistrationAddress } from '../registration-address/registration-address.entity';
import { PassportScan } from '../passport-scans/passport-scan.entity';
import { HROperation } from '../hr-operations/hr-operation.entity'; // добавляем импорт


@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  surname: string;

  @Column()
  name: string;

  @Column()
  middleName: string;

  @Column({ type: 'date' })
  dateOfBirth: Date;

  // Связь с паспортными данными
  @ManyToOne(() => PassportData, { cascade: true, nullable: true })
  passportData: PassportData;

  // Связь с адресом регистрации
  @ManyToOne(() => RegistrationAddress, { cascade: true, nullable: true })
  registrationAddress: RegistrationAddress;

  // Связь с множественными сканами паспорта
  @OneToMany(() => PassportScan, (passportScan) => passportScan.employee, { cascade: true })
  passportScans: PassportScan[];
    // Связь с кадровыми операциями
    @OneToMany(() => HROperation, (hrOperation) => hrOperation.employee, { cascade: true })
    hrOperations: HROperation[];
}
