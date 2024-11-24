import { Controller, Get, Post, Param, Delete, UseInterceptors, UploadedFile, Body } from '@nestjs/common';
import { PassportScansService } from './passport-scans.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('passport-scans')
export class PassportScansController {
  constructor(private readonly passportScansService: PassportScansService) {}

  @Post(':employeeId/upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads/passport-scans',
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
      },
    }),
  }))
  async uploadFile(@Param('employeeId') employeeId: string, @UploadedFile() file: Express.Multer.File) {
    const uploadDto = {
      fileName: file.originalname,
      filePath: file.path,
    };
    return this.passportScansService.create(uploadDto, +employeeId);
  }

  @Get(':employeeId')
  async findAllByEmployee(@Param('employeeId') employeeId: string) {
    return this.passportScansService.findAllByEmployee(+employeeId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.passportScansService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.passportScansService.remove(+id);
  }
}
