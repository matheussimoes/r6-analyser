import { Injectable } from "@nestjs/common";
import { match } from "assert";
import { response } from "express";
import { MatchService } from "src/matches/service/match.service";
import { analyseMapMock, analysePlayerMock, analyseTeamMock } from "../mock/analyse.mock";

@Injectable()
export class AnalyseService {
    constructor(private readonly matchService: MatchService) { }

    public async getMap(mapName: string) {
        const allMatches = (await this.matchService.getMatches());

        const mapMatches = allMatches.filter((match) => {
            return match.mapName === mapName
        })

        const matchesPlayed = mapMatches.length
        const wins = mapMatches.filter((match) => match.finalResult === 'win').length
        const losses = matchesPlayed - wins
        const wlRatio = (wins * 100) / matchesPlayed;
        const kdRatio = this.getKdPercentage(mapMatches);
        const mostAtkBanned = this.getMostPicked('atkBan', mapMatches);
        const mostDefBanned = this.getMostPicked('defBan', mapMatches);

        return {
            mapName,
            matchesPlayed,
            wins,
            losses,
            wlRatio,
            kdRatio,
            mostAtkBanned,
            mostDefBanned
        };
    }

    public async getPlayer(playerName: string) {
        const allMatches = (await this.matchService.getMatches());
        let playerMatches = []

        for (let match of allMatches) {
            for (let player of match.players) {
                if (player.name.toLowerCase() === playerName.toLowerCase()) {
                    playerMatches.push(match);
                }
            }
        }

        const matchesPlayed = playerMatches.length;
        const wins = playerMatches.filter((match) => match.finalResult === 'win').length
        const losses = matchesPlayed - wins;
        const wlRatio = (wins * 100) / matchesPlayed;
        const kd = this.getPlayerKd(playerMatches, playerName);
        const kdRatio = parseFloat((kd.playerKills / kd.playerDeaths).toFixed(2));
        const mvpQtd = playerMatches.filter((match) => match.mvp.toLowerCase() === playerName.toLowerCase()).length;
        const fraggerQtd = playerMatches.filter((match) => match.fragger.toLowerCase() === playerName.toLowerCase()).length;;



        return {
            playerName,
            matchesPlayed,
            wins,
            losses,
            wlRatio,
            "totalKills": kd.playerKills,
            "totalDeaths": kd.playerDeaths,
            kdRatio,
            mvpQtd,
            fraggerQtd
        };
    }

    public async getTeam() {
        const allMatches = (await this.matchService.getMatches());

        const matchesPlayed = allMatches.length;
        const wins = allMatches.filter((match) => match.finalResult === 'win').length
        const losses = matchesPlayed - wins;
        const wlRatio = (wins * 100) / matchesPlayed;
        const kdRatio = this.getKdPercentage(allMatches);
        const mostAtkBanned = this.getMostPicked('atkBan', allMatches);
        const mostDefBanned = this.getMostPicked('defBan', allMatches);
        const mostPlayedMap = this.getMostPicked('map', allMatches);
        const mvpName = this.getMostPicked('mvp', allMatches);
        const mvpQtd = allMatches.filter((match) => match.mvp === mvpName).length
        const fraggerName = this.getMostPicked('fragger', allMatches);
        const fraggerQtd = allMatches.filter((match) => match.fragger === fraggerName).length
        const bestMap = await this.getBestMap(allMatches);
        const worstMap = await this.getWorstMap(allMatches);

        console.log('bestMap');
        console.log(bestMap);

        return {
            matchesPlayed,
            wins,
            losses,
            wlRatio,
            kdRatio,
            mostAtkBanned,
            mostDefBanned,
            mostPlayedMap,
            bestMap,
            worstMap,
            "mvp": {
                "playerName": mvpName,
                "Qtd": mvpQtd
            },
            "fragger": {
                "playerName": fraggerName,
                "Qtd": fraggerQtd
            }
        };
    }

    private getKdPercentage(mapMatches) {
        let mapKills: number = 0;
        let mapDeaths: number = 0;

        mapMatches.forEach(match => {
            match.players.forEach(player => {
                mapKills = mapKills + player.kills
                mapDeaths = mapDeaths + player.deaths
            })
        });

        return parseFloat((mapKills / mapDeaths).toFixed(2));
    }

    private getPlayerKd(playerMatches, playerName) {
        let playerKills: number = 0;
        let playerDeaths: number = 0;

        playerMatches.forEach(match => {
            match.players.forEach(player => {
                if (player.name.toLowerCase() === playerName) {
                    playerKills = playerKills + player.kills
                    playerDeaths = playerDeaths + player.deaths
                }
            })
        });

        return {
            playerKills,
            playerDeaths
        };
    }

    private getMostPicked(filterOption, matches) {
        let sourceArray = [];

        matches.forEach((match) => {
            if (filterOption === 'atkBan') {
                sourceArray.push(match.bans.atk1);
                sourceArray.push(match.bans.atk2);
            } else if (filterOption === 'defBan') {
                sourceArray.push(match.bans.def1);
                sourceArray.push(match.bans.def2);
            } else if (filterOption === 'map') {
                sourceArray.push(match.mapName)
            } else if (filterOption === 'mvp') {
                sourceArray.push(match.mvp);
            } else if (filterOption === 'fragger') {
                sourceArray.push(match.fragger);
            }
        });

        return this.mostPicked(sourceArray);
    }

    private mostPicked(array) {
        if (array.length == 0)
            return null;
        var modeMap = {};
        var maxEl = array[0], maxCount = 1;
        for (var i = 0; i < array.length; i++) {
            var el = array[i];
            if (modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;
            if (modeMap[el] > maxCount) {
                maxEl = el;
                maxCount = modeMap[el];
            }
        }
        return maxEl;
    }

    private async getBestMap(allMatches) {
        const sourceArray = [];
        const mapData = [];

        for (let singleMatch of allMatches) {
            if (!sourceArray.includes(singleMatch.mapName)) {
                sourceArray.push(singleMatch.mapName)
            }
        }

        for (let map of sourceArray) {
            mapData.push(await this.getMap(map))
        }

        if (!mapData) {
            return;
        }

        let bestMapName = mapData[0].mapName;
        let bestMapWl = mapData[0].wlRatio;

        for (let map of mapData) {
            if (map.wlRatio > bestMapWl) {
                bestMapName = map.mapName;
                bestMapWl = map.wlRatio;
            }
        }

        return {
            "mapName": bestMapName,
            "wlRatio": bestMapWl
        }
    }

    private async getWorstMap(allMatches) {
        const sourceArray = [];
        const mapData = [];

        for (let singleMatch of allMatches) {
            if (!sourceArray.includes(singleMatch.mapName)) {
                sourceArray.push(singleMatch.mapName)
            }
        }

        for (let map of sourceArray) {
            mapData.push(await this.getMap(map))
        }

        if (!mapData) {
            return;
        }

        let worstMapName = mapData[0].mapName;
        let worstMapWl = mapData[0].wlRatio;

        for (let map of mapData) {
            if (map.wlRatio < worstMapWl) {
                worstMapName = map.mapName;
                worstMapWl = map.wlRatio;
            }
        }

        return {
            "mapName": worstMapName,
            "wlRatio": worstMapWl
        }
    }
}
