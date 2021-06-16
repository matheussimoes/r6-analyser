import { Module } from '@nestjs/common';
import { MatchModule } from '../matches/match.module';
import { AnalyseController } from './controller/analyse.controller';
import { AnalyseService } from './service/analyse.service';

@Module({
    imports: [MatchModule],
    controllers: [AnalyseController],
    providers: [AnalyseService],
})
export class AnalyseModule { }
