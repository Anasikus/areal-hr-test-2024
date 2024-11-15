import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Organization } from '../organizations/organization.entity';
import { Department } from '../departments/department.entity';
import { Position } from '../positions/position.entity';
import { Employee } from '../employees/employee.entity';
import { HROperation } from '../hr-operations/hr-operation.entity';

@Entity('object_operation')
export class ObjectOperation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Organization, { nullable: true, onDelete: 'SET NULL' })
  organization?: Organization;

  @ManyToOne(() => Department, { nullable: true, onDelete: 'SET NULL' })
  department?: Department;

  @ManyToOne(() => Position, { nullable: true, onDelete: 'SET NULL' })
  position?: Position;

  @ManyToOne(() => Employee, { nullable: true, onDelete: 'SET NULL' })
  employee?: Employee;

  @ManyToOne(() => HROperation, { nullable: true, onDelete: 'SET NULL' })
  hrOperation?: HROperation;
}
