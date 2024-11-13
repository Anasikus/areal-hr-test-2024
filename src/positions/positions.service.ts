// src/positions/positions.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Position } from './position.entity';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';

@Injectable()
export class PositionsService {
  constructor(
    @InjectRepository(Position)
    private readonly positionsRepository: Repository<Position>,
  ) {}

  async create(createPositionDto: CreatePositionDto): Promise<Position> {
    const position = this.positionsRepository.create(createPositionDto);
    return this.positionsRepository.save(position);
  }

  async findAll(): Promise<Position[]> {
    return this.positionsRepository.find();
  }

  async findOne(id: number): Promise<Position> {
    const position = await this.positionsRepository.findOne({ where: { id } });
    if (!position) {
      throw new NotFoundException(`Position with ID ${id} not found`);
    }
    return position;
  }

  async update(id: number, updatePositionDto: UpdatePositionDto): Promise<Position> {
    const position = await this.findOne(id);
    const updatedPosition = Object.assign(position, updatePositionDto);
    return this.positionsRepository.save(updatedPosition);
  }

  async remove(id: number): Promise<void> {
    const position = await this.findOne(id);
    await this.positionsRepository.softRemove(position);
  }
}
