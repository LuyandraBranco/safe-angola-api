import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { IAccidentReportsRepository } from '../../domain/repositories/accident.report.repository.interface';
import { AccidentReport } from '../../domain/entities/accident.report.entity';

@Injectable()
export class AccidentReportsRepository implements IAccidentReportsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    report: AccidentReport,
    userId: string,
  ): Promise<AccidentReport> {
    if (!userId) {
      throw new Error('User ID is required and must be a valid string.');
    }

    return this.prisma.accidentReport.create({
      data: {
        latitude: report.latitude,
        longitude: report.longitude,
        status: report.status,
        createdAt: new Date(),
        userId: userId,
      },
    });
  }

  async findById(id: string): Promise<AccidentReport | null> {
    return this.prisma.accidentReport.findUnique({ where: { id } });
  }

  async findAll(): Promise<AccidentReport[]> {
    return this.prisma.accidentReport.findMany();
  }

  async update(
    id: string,
    data: Partial<AccidentReport>,
  ): Promise<AccidentReport> {
    return this.prisma.accidentReport.update({ where: { id }, data });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.accidentReport.delete({ where: { id } });
  }

  async findByUserId(userId: string): Promise<AccidentReport[] | null> {
    return this.prisma.accidentReport.findMany({
      where: { userId },
    });
  }

  async changeStatus(
    id: string,
    status: 'PENDING' | 'CONFIRMED' | 'REJECTED',
  ): Promise<AccidentReport> {
    return this.prisma.accidentReport.update({
      where: { id },
      data: { status },
    });
  }
}
