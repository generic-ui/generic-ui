import { FormationAggregate } from './command/formation-aggregate';
import { Formation } from './query/formation';
export declare class FormationConverter {
    convert(aggregate: FormationAggregate): Formation;
}
