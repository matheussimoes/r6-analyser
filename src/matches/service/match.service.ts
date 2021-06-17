import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Match } from '../modules/match.model';
import { MatchRepository } from '../repository/match.repository';

@Injectable()
export class MatchService {
  constructor(
    private readonly matchRepository: MatchRepository,
    @InjectModel('Match') private readonly matchModel: Model<Match>
  ) { }

  public match = []

  public async getMatches(): Promise<Match[]> {
    return this.matchModel.find().exec();
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
    let newMatch = new this.matchModel(match);
    let result = await newMatch.save();

    console.log(result);

    return match
  }
}
