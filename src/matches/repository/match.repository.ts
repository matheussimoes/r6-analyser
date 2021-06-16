import { Match } from "../interface/match.model";
import { bdSimulationMock } from "../match.mock";

export class MatchRepository {
    public match = []

    public async getMatches(): Promise<Match[]> {
        this.match = bdSimulationMock;
        return this.match;
    }

    public async createMatch(match): Promise<Match> {
        let matches = JSON.parse(this.getMatches.toString());
        matches.add(match);

        return match;
    }
}