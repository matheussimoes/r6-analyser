import { Injectable } from '@nestjs/common';
import { Match } from '../interface/match.model';
import { MatchRepository } from '../repository/match.repository';

@Injectable()
export class MatchService {
  constructor(private readonly matchRepository: MatchRepository) { }

  public match = []

  public async getMatches(): Promise<Match[]> {
    return this.matchRepository.getMatches();
  }

  public getMatch(id: string): Match {
    const allMatches = JSON.parse(this.getMatches().toString());
    const foundMatch = allMatches.find((match) => {
      return match.id === id
    })

    console.log(foundMatch);

    return foundMatch;
  }

  public async createMatch(match: Match): Promise<Match> {
    return this.matchRepository.createMatch(match);
  }
}
