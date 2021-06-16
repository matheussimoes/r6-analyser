import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnalyseModule } from './analyses/analyse.module';
import { MatchModule } from './matches/match.module';

@Module({
  imports: [
    AnalyseModule,
    MatchModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
