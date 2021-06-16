import { Module } from '@nestjs/common';
import { MatchController } from './controller/match.controller';
import { MatchRepository } from './repository/match.repository';
import { MatchService } from './service/match.service';

@Module({
  imports: [],
  controllers: [MatchController],
  providers: [MatchService, MatchRepository],
  exports: [MatchService]
})
export class MatchModule { }
