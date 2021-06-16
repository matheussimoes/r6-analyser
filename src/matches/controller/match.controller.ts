import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Match } from '../interface/match.model';
import { MatchService } from '../service/match.service';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) { }

  @Get()
  async getMatches(): Promise<Match[]> {
    return this.matchService.getMatches();
  }

  @Get('/:id')
  async getMatch(@Param('id') id: string): Promise<Match> {
    return await this.matchService.getMatch(id);
  }

  @Post()
  async createMatch(@Body() body: Match): Promise<Match> {
    return await this.matchService.createMatch(body);
  }
}
