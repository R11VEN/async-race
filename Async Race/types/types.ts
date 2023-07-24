interface Car {
    name: string,
    color: string,
    id: number,
}

export type carsType = Car[];

export interface Winer {
    id: number;
    wins: number;
    time: number;
}

export type winerType = Winer[];
