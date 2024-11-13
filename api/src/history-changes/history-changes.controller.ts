import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { HistoryChangesService } from './history-changes.service';
import { CreateHistoryChangeDto } from './dto/create-history-change.dto';

@Controller('history-changes')
export class HistoryChangesController {
  constructor(private readonly historyChangesService: HistoryChangesService) {}

  @Post()
  async create(@Body() createHistoryChangeDto: CreateHistoryChangeDto) {
    return await this.historyChangesService.create(createHistoryChangeDto);
  }

  @Get()
  async findAll() {
    return await this.historyChangesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.historyChangesService.findOne(+id);
  }
}
