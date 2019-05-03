import { Creature } from '../creature/creature';
import { RandomGeneratorService } from '../random-generator/random-generator.service';
import { MutationConfiguration } from '../mutation-configuration/mutation-configuration';

export class CreatureConfiguration {
    public id = 0;
    public name = '';
    public color = '';
    public spawnRate = 0;
    public deathRate = 0;
    public reproductionRate = 0;
    public mutationConfigurations: MutationConfiguration[] = [];
    public creatures: Creature[] = [];

    private randomGeneratorService: RandomGeneratorService;

    constructor(id: number, randomGeneratorService: RandomGeneratorService) {
        this.id = id;
        this.randomGeneratorService = randomGeneratorService;
    }

    public tick(): void {
        const creaturesToKill = [];
        const creaturesToReproduce = [];

        for (const creature of this.creatures) {
            const deathRand = this.randomGeneratorService.getRandomPercentage();
            const reproductionRand = this.randomGeneratorService.getRandomPercentage();

            if (this.deathRate >= deathRand) {
                creaturesToKill.push(creature);
            }

            if (this.reproductionRate >= reproductionRand) {
                creaturesToReproduce.push(creature);
            }
        }

        this.killCreatures(creaturesToKill);
        this.reproduceCreatures(creaturesToReproduce);

        const spawnRand = this.randomGeneratorService.getRandomPercentage();

        if (this.spawnRate >= spawnRand) {
            this.spawnCreature();
        }
    }

    public spawnCreature(): Creature {
        let creature: Creature = this.mutateCreature();

        // No mutation happend, so a normal creature is being spawned
        if (creature === null) {
            creature = new Creature(this.color, this.deathRate, this.reproductionRate);
            this.creatures.push(creature);
        }

        return creature;
    }

    public mutateCreature() {
        let creature: Creature = null;

        for (const mutationConfiguration of this.mutationConfigurations) {
            const rand = this.randomGeneratorService.getRandomPercentage();

            if (mutationConfiguration.chance >= rand) {
                creature = mutationConfiguration.mutateTo.spawnCreature();
                break;
            }
        }

        return creature;
    }

    public reproduceCreatures(creatures: Creature[]): void {
        for (const creature of creatures) {
            this.reproduceCreature(creature);
        }
    }

    public killCreatures(creatures: Creature[]): void {
        for (const creature of creatures) {
            this.killCreature(creature);
        }
    }

    public reproduceCreature(creature: Creature): void {
        this.spawnCreature();
    }

    public killCreature(creature: Creature): void {
        const index = this.creatures.indexOf(creature);

        if (index >= 0) {
            this.creatures.splice(index, 1);
        }
    }
}
