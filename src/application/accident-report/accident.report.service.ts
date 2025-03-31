import { Injectable } from '@nestjs/common';
import { AccidentReportsRepository } from '../../infra/repositories/accident.report.repository';
import { AccidentReport } from 'src/domain/entities/accident.report.entity';
import { IAccidentReportsService } from '../interfaces/accident.report.interface';

@Injectable()
export class AccidentReportsService implements IAccidentReportsService {
  constructor(
    private readonly accidentReportsRepository: AccidentReportsRepository,
  ) {}

  async createReport(
    latitude: string,
    longitude: string,
    status: 'PENDING' | 'CONFIRMED' | 'REJECTED',
    userId: string,
  ): Promise<AccidentReport> {
    if (!userId) {
      throw new Error('User ID is required and must be a valid string.');
    }

    const report = new AccidentReport(
      crypto.randomUUID(),
      latitude,
      longitude,
      status,
      userId,
      undefined,
      new Date(),
    );
    return this.accidentReportsRepository.create(report, userId);
  }

  async getReportById(id: string): Promise<AccidentReport | null> {
    return this.accidentReportsRepository.findById(id);
  }

  async getAllReports(): Promise<AccidentReport[] | null> {
    return this.accidentReportsRepository.findAll();
  }

  async updateReport(
    id: string,
    data: Partial<AccidentReport>,
  ): Promise<AccidentReport> {
    return this.accidentReportsRepository.update(id, data);
  }

  async deleteReport(id: string): Promise<void> {
    await this.accidentReportsRepository.delete(id);
  }

  async getReportsByUserId(userId: string): Promise<AccidentReport[] | null> {
    return this.accidentReportsRepository.findByUserId(userId);
  }

  async changeReportStatus(
    id: string,
    status: 'PENDING' | 'CONFIRMED' | 'REJECTED',
  ): Promise<AccidentReport> {
    return this.accidentReportsRepository.changeStatus(id, status);
  }
}
