import { Module } from '@nestjs/common';
import { AccidentReportsService } from 'src/application/accident-report/accident.report.service';
import { PrismaService } from 'src/infra/database/prisma.service';
import { AccidentReportsRepository } from 'src/infra/repositories/accident.report.repository';
import { AccidentReportsController } from 'src/interface/accident-report/accident.report.controller';

@Module({
  controllers: [AccidentReportsController],
  providers: [AccidentReportsService, AccidentReportsRepository, PrismaService],
  exports: [AccidentReportsService],
})
export class AccidentReportModule {}
