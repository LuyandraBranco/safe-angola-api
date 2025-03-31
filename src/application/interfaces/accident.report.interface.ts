import { AccidentReport } from 'src/domain/entities/accident.report.entity';

export interface IAccidentReportsService {
  createReport(
    latitude: string,
    longitude: string,
    status: 'PENDING' | 'CONFIRMED' | 'REJECTED',
    userId?: string,
  ): Promise<AccidentReport>;
  getAllReports(): Promise<AccidentReport[] | null>;
  getReportById(id: string): Promise<AccidentReport | null>;
  updateReport(
    id: string,
    data: Partial<AccidentReport>,
  ): Promise<AccidentReport>;
  deleteReport(id: string): Promise<void>;
  getReportsByUserId(userId: string): Promise<AccidentReport[] | null>;
  changeReportStatus(
    id: string,
    status: 'PENDING' | 'CONFIRMED' | 'REJECTED',
  ): Promise<AccidentReport>;
}
