import { Component, OnInit } from '@angular/core';
import { CreatureConfiguration } from './creature-configuration/creature-configuration';
import { RandomGeneratorService } from './random-generator/random-generator.service';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public creatureConfigurations: CreatureConfiguration[] = [];
    public tick: Subject<void> = new Subject();
    public interval: any;

    constructor(private randomGeneratorService: RandomGeneratorService) {

    }

    public ngOnInit(): void {
        this.createCreatureConfiguration(null);

        this.tick.subscribe(() => {
            for (const creatureConfiguration of this.creatureConfigurations) {
                creatureConfiguration.tick();
            }
        });
    }

    public createCreatureConfiguration(event: any) {
        this.creatureConfigurations.push(new CreatureConfiguration(this.creatureConfigurations.length, this.randomGeneratorService));
    }

    public start(event: any) {
        this.interval = setInterval(() => { this.tick.next(); }, 500);
    }

    public stop(event: any) {
        clearInterval(this.interval);
    }
}
