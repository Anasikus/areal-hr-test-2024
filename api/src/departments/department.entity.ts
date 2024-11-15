// src/departments/department.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Organization } from '../organizations/organization.entity';

@Entity('departments')
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  parent: number;

  @Column({ nullable: true })
  comment: string;

  @ManyToOne(() => Organization, (organization) => organization.departments)
  organization: Organization;
}
