import { AccidentReport } from '../entities/accident.report.entity';

export interface IAccidentReportsRepository {
  create(report: AccidentReport): Promise<AccidentReport>;
  findById(id: string): Promise<AccidentReport | null>;
  findAll(): Promise<AccidentReport[] | null>;
  update(id: string, data: Partial<AccidentReport>): Promise<AccidentReport>;
  delete(id: string): Promise<void>;
  findByUserId(userId: string): Promise<AccidentReport[] | null>;
  changeStatus(
    id: string,
    status: 'PENDING' | 'CONFIRMED' | 'REJECTED',
  ): Promise<AccidentReport>;
}
