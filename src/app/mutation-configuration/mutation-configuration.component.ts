import { Component, OnInit, Input } from '@angular/core';
import { CreatureConfiguration } from '../creature-configuration/creature-configuration';
import { MutationConfiguration } from './mutation-configuration';
import { MatSelectChange } from '@angular/material';

@Component({
    selector: 'app-mutation-configuration',
    templateUrl: './mutation-configuration.component.html',
    styleUrls: ['./mutation-configuration.component.css']
})
export class MutationConfigurationComponent implements OnInit {
    @Input() mutationConfiguration: MutationConfiguration;
    @Input() allCreatureConfigurations: CreatureConfiguration[];

    constructor() {

    }

    ngOnInit() {

    }

    public selectCreatureConfig(changeEvent: MatSelectChange) {
        const index = changeEvent.value;
        if (index >= 0) {
            this.mutationConfiguration.mutateTo = this.allCreatureConfigurations[index];
        }
    }
}
