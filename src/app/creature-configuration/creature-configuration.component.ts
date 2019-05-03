import { Component, OnInit, Input } from '@angular/core';
import { RandomGeneratorService } from '../random-generator/random-generator.service';
import { CreatureConfiguration } from './creature-configuration';

@Component({
    selector: 'app-creature-configuration',
    templateUrl: './creature-configuration.component.html',
    styleUrls: ['./creature-configuration.component.css']
})
export class CreatureConfigurationComponent implements OnInit {
    @Input() creatureConfiguration: CreatureConfiguration;
    @Input() allCreatureConfigurations: CreatureConfiguration[];

    constructor(private randomGeneratorService: RandomGeneratorService) { }

    public ngOnInit(): void {

    }

    public createMutationConfig(event: any) {
        this.creatureConfiguration.mutationConfigurations.push({
            chance: 0,
            mutateTo: null
        });
    }
}
