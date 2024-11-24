import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('passport_data')
export class PassportData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  series: string;

  @Column()
  number: string;

  @Column({ type: 'date' })
  dateOfIssue: Date;

  @Column()
  unitCode: string;

  @Column()
  issuedByWhom: string;
}
