import { IsNotEmpty, IsString, IsEnum } from 'class-validator';

export class CreateAccidentReportDto {
  @IsString()
  @IsNotEmpty()
  latitude: string;

  @IsString()
  @IsNotEmpty()
  longitude: string;

  @IsEnum(['PENDING', 'CONFIRMED', 'REJECTED'])
  @IsNotEmpty()
  status: 'PENDING' | 'CONFIRMED' | 'REJECTED';

  @IsString()
  @IsNotEmpty()
  userId: string;
}
