import { REQUEST_CONTEXT_ID } from "@nestjs/core/router/request/request-constants"
import { StringDecoder } from "string_decoder";


export interface Match {
    id: string;
    date: Date;
    mapName: string;
    startingSide: Side;
    players: Player[];
    bans: {
        atk1: string,
        atk2: string,
        def1: string,
        def2: string
    };
    mvp: string;
    fragger: string;
    finalResult: string;
    roundsWon: number;
    roundsLost: number;
    overtime: boolean
}

export interface Player {
    name: string
    kills: number,
    deaths: number
}
export enum Side {
    ATK,
    DEF
}

export interface Operator {
    playerName: string;
    operator: string;
    kills: number;
    death: number;
}