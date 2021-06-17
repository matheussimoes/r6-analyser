import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MatchController } from './controller/match.controller';
import { MatchRepository } from './repository/match.repository';
import { Match, MatchSchema } from './modules/match.model';
import { MatchService } from './service/match.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Match', schema: MatchSchema }])],
  controllers: [MatchController],
  providers: [MatchService, MatchRepository],
  exports: [MatchService]
})
export class MatchModule { }
