import { FormationAggregate } from './command/formation-aggregate';
import { Formation } from './read/formation';
export declare class FormationConverter {
    convert(aggregate: FormationAggregate): Formation;
}
