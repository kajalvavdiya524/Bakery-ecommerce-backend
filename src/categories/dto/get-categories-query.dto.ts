import { ApiProperty } from '@nestjs/swagger';
import { IsBooleanString, IsOptional } from 'class-validator';

import { PaginationDto } from '../../utils/dto/pagination.dto';

export class GetCategoriesQueryDto extends PaginationDto {
	@ApiProperty({
		required: false,
	})
	@IsOptional()
	@IsBooleanString()
	readonly status: boolean;
}
