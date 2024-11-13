import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PassportScan } from './passport-scan.entity';
import { UploadPassportScanDto } from './dto/upload-passport-scan.dto';

@Injectable()
export class PassportScansService {
  constructor(
    @InjectRepository(PassportScan)
    private readonly passportScansRepository: Repository<PassportScan>,
  ) {}

  async create(uploadPassportScanDto: UploadPassportScanDto, employeeId: number): Promise<PassportScan> {
    const passportScan = this.passportScansRepository.create({
      ...uploadPassportScanDto,
      employee: { id: employeeId } as any,
    });
    return this.passportScansRepository.save(passportScan);
  }

  async findAllByEmployee(employeeId: number): Promise<PassportScan[]> {
    return this.passportScansRepository.find({ where: { employee: { id: employeeId } } });
  }

  async findOne(id: number): Promise<PassportScan> {
    const passportScan = await this.passportScansRepository.findOne({ where: { id } });
    if (!passportScan) {
      throw new NotFoundException(`Passport scan with ID ${id} not found`);
    }
    return passportScan;
  }

  async remove(id: number): Promise<void> {
    const passportScan = await this.findOne(id);
    await this.passportScansRepository.softRemove(passportScan);
  }
}
