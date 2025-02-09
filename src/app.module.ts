import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth.module';
import { UsersModule } from './modules/users.module';
import { AccidentReportModule } from './modules/accident.report.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule, UsersModule],
  controllers: [],
  providers: [AuthModule, UsersModule, AccidentReportModule],
})
export class AppModule {}
