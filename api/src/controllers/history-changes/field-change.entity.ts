import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { HistoryChange } from './history-change.entity';

@Entity('field_changes')
export class FieldChange {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => HistoryChange, (historyChange) => historyChange.fieldChanges, { onDelete: 'CASCADE' })
  historyChange: HistoryChange;

  @Column()
  fieldName: string; // Имя изменённого поля

  @Column({ nullable: true })
  oldValue: string; // Старое значение (может быть null)

  @Column({ nullable: true })
  newValue: string; // Новое значение (может быть null)
}
