import { IsString, IsInt, ValidateNested, ArrayNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateFieldChangeDto } from './create-field-change.dto';

export class CreateHistoryChangeDto {
  @IsInt()
  objectOperationId: number;

  @IsString()
  modifiedBy: string;

  @ValidateNested({ each: true })
  @ArrayNotEmpty()
  @Type(() => CreateFieldChangeDto)
  fieldChanges: CreateFieldChangeDto[];
}
