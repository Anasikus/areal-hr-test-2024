import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HROperation } from './hr-operation.entity';
import { CreateHROperationDto } from './dto/create-hr-operation.dto';
import { UpdateHROperationDto } from './dto/update-hr-operation.dto';
import { Employee } from '../employees/employee.entity';

@Injectable()
export class HROperationsService {
  constructor(
    @InjectRepository(HROperation)
    private readonly hrOperationsRepository: Repository<HROperation>,
    @InjectRepository(Employee)
    private readonly employeesRepository: Repository<Employee>,
  ) {}

  async create(createHROperationDto: CreateHROperationDto): Promise<HROperation> {
    const { employeeId, departmentId, positionId, ...rest } = createHROperationDto;
    const employee = await this.employeesRepository.findOne({ where: { id: employeeId } });

    if (!employee) {
      throw new NotFoundException(`Employee with ID ${employeeId} not found`);
    }

    const hrOperation = this.hrOperationsRepository.create({
      ...rest,
      employee: { id: employeeId } as Employee,
      department: departmentId ? { id: departmentId } : null,
      position: positionId ? { id: positionId } : null,
    });

    return this.hrOperationsRepository.save(hrOperation);
  }

  async findAllByEmployee(employeeId: number): Promise<HROperation[]> {
    return this.hrOperationsRepository.find({
      where: { employee: { id: employeeId } },
      relations: ['department', 'position', 'employee'],
    });
  }

  async findOne(id: number): Promise<HROperation> {
    const hrOperation = await this.hrOperationsRepository.findOne({
      where: { id },
      relations: ['department', 'position', 'employee'],
    });

    if (!hrOperation) {
      throw new NotFoundException(`HR Operation with ID ${id} not found`);
    }

    return hrOperation;
  }

  async update(id: number, updateHROperationDto: UpdateHROperationDto): Promise<HROperation> {
    const hrOperation = await this.findOne(id);
    const updatedHROperation = Object.assign(hrOperation, updateHROperationDto);
    return this.hrOperationsRepository.save(updatedHROperation);
  }

  async remove(id: number): Promise<void> {
    const hrOperation = await this.findOne(id);
    await this.hrOperationsRepository.softRemove(hrOperation);
  }
}
