import { REQUEST_CONTEXT_ID } from "@nestjs/core/router/request/request-constants"
import { StringDecoder } from "string_decoder";
import * as mongoose from 'mongoose';


export interface Match {
    id: string,
    date: string,
    mapName: string,
    startingSide: string,
    players: Player[],
    bans: Bans,
    mvp: string,
    fragger: string,
    finalResult: string,
    roundsWon: number,
    roundsLost: number,
    overtime: boolean
}

export interface Player {
    name: string,
    kills: number,
    deaths: number
}

export interface Bans {
    atk1: string,
    atk2: string,
    def1: string,
    def2: string
}

export const MatchSchema = new mongoose.Schema({
    date: String,
    mapName: String,
    startingSide: String,
    players: Array,
    bans: Object,
    mvp: String,
    fragger: String,
    finalResult: String,
    roundsWon: Number,
    roundsLost: Number,
    overtime: Boolean
})