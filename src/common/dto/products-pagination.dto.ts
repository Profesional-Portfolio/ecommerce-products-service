import { Type } from "class-transformer";
import {
  IsBoolean,
  IsEnum,
  IsOptional,
  IsPositive,
  IsString,
} from "class-validator";

enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}

export class ProductsPaginationDto {
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  page?: number = 10;

  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  limit?: number = 10;

  @IsString()
  @IsOptional()
  search?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsString()
  @IsOptional()
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  minPrice?: string;

  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  maxPrice?: string;

  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  featured?: boolean;

  @IsBoolean()
  @IsOptional()
  @Type(() => Boolean)
  active?: boolean;

  @IsString()
  @IsOptional()
  sortBy?: string;

  @IsEnum(SortOrder)
  @IsOptional()
  sortOrder?: string;
}
