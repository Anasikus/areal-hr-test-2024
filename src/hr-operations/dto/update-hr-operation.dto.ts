import { PartialType } from '@nestjs/mapped-types';
import { CreateHROperationDto } from './create-hr-operation.dto';

export class UpdateHROperationDto extends PartialType(CreateHROperationDto) {}
