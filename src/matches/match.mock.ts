const matchMock = {
    "id": "1",
    "date": "15/06/2021",
    "mapName": "CHALE",
    "rounds": [],
    "bans": {
        "atk1": "Ash",
        "atk2": "Blitz",
        "def1": "Clash",
        "def2": "Caveira"
    },
    "finalResult": "loss",
    "mvp": "Jardes",
    "fragger": "Anderson"
}

const bdSimulationMock = [{
    "id": "1",
    "date": "15/06/2021",
    "mapName": "chale",
    "startingSide": "ATK",
    "players": [
        {
            "name": "Mulambo",
            "kills": 8,
            "deaths": 2
        },
        {
            "name": "Kejinho",
            "kills": 7,
            "deaths": 3
        },
        {
            "name": "Anderson",
            "kills": 4,
            "deaths": 3
        },
        {
            "name": "Joao",
            "kills": 3,
            "deaths": 3
        },
        {
            "name": "Vitor",
            "kills": 7,
            "deaths": 1
        },
    ],
    "bans": {
        "atk1": "Ash",
        "atk2": "Blitz",
        "def1": "Clash",
        "def2": "Caveira"
    },
    "finalResult": "win",
    "roundsWon": 4,
    "roundsLost": 1,
    "mvp": "Vitor",
    "fragger": "Mulambo"
},
{
    "id": "2",
    "date": "15/06/2021",
    "mapName": "fronteira",
    "startingSide": "DEF",
    "players": [
        {
            "name": "Mulambo",
            "kills": 5,
            "deaths": 5
        },
        {
            "name": "Kejinho",
            "kills": 6,
            "deaths": 5
        },
        {
            "name": "Anderson",
            "kills": 3,
            "deaths": 5
        },
        {
            "name": "Joao",
            "kills": 4,
            "deaths": 5
        },
        {
            "name": "Vitor",
            "kills": 6,
            "deaths": 5
        },
    ],
    "bans": {
        "atk1": "Jackal",
        "atk2": "Nomad",
        "def1": "Mira",
        "def2": "Caveira"
    },
    "finalResult": "loss",
    "roundsWon": 2,
    "roundsLost": 4,
    "mvp": "Mulambo",
    "fragger": "Vitor"
},
{
    "id": "3",
    "date": "15/06/2021",
    "mapName": "litoral",
    "startingSide": "ATK",
    "players": [
        {
            "name": "Jardes",
            "kills": 7,
            "deaths": 3
        },
        {
            "name": "Kejinho",
            "kills": 10,
            "deaths": 3
        },
        {
            "name": "Anderson",
            "kills": 6,
            "deaths": 4
        },
        {
            "name": "Joao",
            "kills": 6,
            "deaths": 3
        },
        {
            "name": "Vitor",
            "kills": 9,
            "deaths": 4
        },
    ],
    "bans": {
        "atk1": "Ash",
        "atk2": "Blitz",
        "def1": "Clash",
        "def2": "Caveira"
    },
    "finalResult": "win",
    "roundsWon": 4,
    "rounsLost": 1,
    "mvp": "Vitor",
    "fragger": "Kejinho"
},
{
    "id": "4",
    "date": "15/06/2021",
    "mapName": "litoral",
    "startingSide": "DEF",
    "players": [
        {
            "name": "Joao",
            "kills": 3,
            "deaths": 4
        },
        {
            "name": "Kejinho",
            "kills": 5,
            "deaths": 5
        },
        {
            "name": "Anderson",
            "kills": 3,
            "deaths": 5
        },
        {
            "name": "Felipe",
            "kills": 3,
            "deaths": 6
        },
        {
            "name": "Vitor",
            "kills": 6,
            "deaths": 5
        },
    ],
    "bans": {
        "atk1": "Jackal",
        "atk2": "Montagne",
        "def1": "Mira",
        "def2": "Caveira"
    },
    "finalResult": "loss",
    "roundsWon": 2,
    "rounsLost": 4,
    "mvp": "Vitor",
    "fragger": "Vitor"
}]

export { matchMock, bdSimulationMock }