export class Creature {
    public color: string;
    public deathRate: number;
    public reproductionRate: number;

    constructor(color: string, deathRate: number = 0, reproductionRate: number = 0) {
        this.color = color;
        this.deathRate = deathRate;
        this.reproductionRate = reproductionRate;
    }
}
