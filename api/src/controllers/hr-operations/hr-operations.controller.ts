import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { HROperationsService } from './hr-operations.service';
import { CreateHROperationDto } from './dto/create-hr-operation.dto';
import { UpdateHROperationDto } from './dto/update-hr-operation.dto';

@Controller('hr-operations')
export class HROperationsController {
  constructor(private readonly hrOperationsService: HROperationsService) {}

  @Post()
  async create(@Body() createHROperationDto: CreateHROperationDto) {
    return await this.hrOperationsService.create(createHROperationDto);
  }

  @Get(':employeeId')
  async findAllByEmployee(@Param('employeeId') employeeId: string) {
    return await this.hrOperationsService.findAllByEmployee(+employeeId);
  }

  @Get('/operation/:id')
  async findOne(@Param('id') id: string) {
    return await this.hrOperationsService.findOne(+id);
  }

  @Patch('/operation/:id')
  async update(@Param('id') id: string, @Body() updateHROperationDto: UpdateHROperationDto) {
    return await this.hrOperationsService.update(+id, updateHROperationDto);
  }

  @Delete('/operation/:id')
  async remove(@Param('id') id: string) {
    return await this.hrOperationsService.remove(+id);
  }
}
