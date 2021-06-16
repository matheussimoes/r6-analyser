import { Controller, Get, Param } from "@nestjs/common";
import { AnalyseService } from "../service/analyse.service";

@Controller('analyse')
export class AnalyseController {
    constructor(private readonly analyseService: AnalyseService) { }

    @Get('/map/:mapName')
    public async getMap(@Param('mapName') mapName: string) {
        return this.analyseService.getMap(mapName);
    }

    @Get('/player/:playerName')
    public async getPlayer(@Param('playerName') playerName: string) {
        return this.analyseService.getPlayer(playerName);
    }

    @Get('/team')
    public async getTeam() {
        return this.analyseService.getTeam();
    }
}