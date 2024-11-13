import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryChangesService } from './history-changes.service';
import { HistoryChangesController } from './history-changes.controller';
import { HistoryChange } from './history-change.entity';
import { FieldChange } from './field-change.entity';
import { ObjectOperation } from '../object-operations/object-operation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistoryChange, FieldChange, ObjectOperation])],
  controllers: [HistoryChangesController],
  providers: [HistoryChangesService],
})
export class HistoryChangesModule {}
