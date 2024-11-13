import { IsString, IsNotEmpty } from 'class-validator';

export class UploadPassportScanDto {
  @IsString()
  @IsNotEmpty()
  fileName: string;

  @IsString()
  @IsNotEmpty()
  filePath: string;
}
