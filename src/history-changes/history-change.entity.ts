import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn } from 'typeorm';
import { ObjectOperation } from '../object-operations/object-operation.entity'; // создадим позже, для связи с объектами операций
import { FieldChange } from './field-change.entity';

@Entity('history_changes')
export class HistoryChange {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ObjectOperation, { nullable: false, onDelete: 'CASCADE' })
  objectOperation: ObjectOperation;

  @Column()
  modifiedBy: string; // Имя пользователя или ID пользователя, кто внёс изменение

  @CreateDateColumn()
  timestamp: Date; // Дата и время изменения

  @OneToMany(() => FieldChange, (fieldChange) => fieldChange.historyChange, { cascade: true })
  fieldChanges: FieldChange[];
}
