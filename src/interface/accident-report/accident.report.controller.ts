import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Patch,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { AccidentReportsService } from 'src/application/accident-report/accident.report.service';
import { CreateAccidentReportDto } from 'src/application/accident-report/dto/create-accident-report.dto';

@Controller('accident-report')
export class AccidentReportsController {
  constructor(
    private readonly accidentReportsService: AccidentReportsService,
  ) {}

  @Post('create')
  async createReport(@Body() body: CreateAccidentReportDto) {
    if (!body.latitude || !body.longitude || !body.status || !body.userId) {
      throw new BadRequestException(
        'Latitude, longitude, status, and userId are required.',
      );
    }

    return this.accidentReportsService.createReport(
      body.latitude,
      body.longitude,
      body.status,
      body.userId,
    );
  }

  @Get('')
  async getAllReports() {
    return this.accidentReportsService.getAllReports();
  }

  @UseGuards(JwtAuthGuard)
  @Get('report/:id')
  async getReport(@Param('id') id: string) {
    return this.accidentReportsService.getReportById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async updateReport(@Param('id') id: string, @Body() body) {
    return this.accidentReportsService.updateReport(id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteReport(@Param('id') id: string) {
    return this.accidentReportsService.deleteReport(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('user/:userId')
  async getReportsByUser(@Param('userId') userId: string) {
    return this.accidentReportsService.getReportsByUserId(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/status')
  async changeReportStatus(
    @Param('id') id: string,
    @Body() body: { status: 'PENDING' | 'CONFIRMED' | 'REJECTED' },
  ) {
    if (!body.status) {
      throw new BadRequestException('Status is required.');
    }
    return this.accidentReportsService.changeReportStatus(id, body.status);
  }
}
