import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AnalyseModule } from './analyses/analyse.module';
import { MatchModule } from './matches/match.module';
@Module({
  imports: [
    AnalyseModule,
    MatchModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING)
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
