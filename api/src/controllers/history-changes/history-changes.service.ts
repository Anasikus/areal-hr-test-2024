import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistoryChange } from './history-change.entity';
import { CreateHistoryChangeDto } from './dto/create-history-change.dto';
import { FieldChange } from './field-change.entity';

@Injectable()
export class HistoryChangesService {
  constructor(
    @InjectRepository(HistoryChange)
    private readonly historyChangesRepository: Repository<HistoryChange>,
    @InjectRepository(FieldChange)
    private readonly fieldChangesRepository: Repository<FieldChange>,
  ) {}

  async create(createHistoryChangeDto: CreateHistoryChangeDto): Promise<HistoryChange> {
    const { objectOperationId, modifiedBy, fieldChanges } = createHistoryChangeDto;
    
    // Создаём новую запись в истории
    const historyChange = this.historyChangesRepository.create({
      objectOperation: { id: objectOperationId },
      modifiedBy,
      fieldChanges: fieldChanges.map(change => this.fieldChangesRepository.create(change)),
    });
    
    return this.historyChangesRepository.save(historyChange);
  }

  async findAll(): Promise<HistoryChange[]> {
    return this.historyChangesRepository.find({ relations: ['fieldChanges', 'objectOperation'] });
  }

  async findOne(id: number): Promise<HistoryChange> {
    const historyChange = await this.historyChangesRepository.findOne({
      where: { id },
      relations: ['fieldChanges', 'objectOperation'],
    });
    if (!historyChange) {
      throw new NotFoundException(`History change with ID ${id} not found`);
    }
    return historyChange;
  }
}
