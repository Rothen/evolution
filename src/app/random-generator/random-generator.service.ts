import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RandomGeneratorService {

    constructor() { }

    public getRandomPercentage() {
        return this.getRandomNumberBetween(1, 100);
    }

    public getRandomNumberBetween(min: number, max: number) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
