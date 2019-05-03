import { CreatureConfiguration } from '../creature-configuration/creature-configuration';

export class MutationConfiguration {
    public mutateTo: CreatureConfiguration;
    public chance: number;

    constructor(mutateTo: CreatureConfiguration, chance: number) {
        this.mutateTo = mutateTo;
        this.chance = chance;
    }
}
