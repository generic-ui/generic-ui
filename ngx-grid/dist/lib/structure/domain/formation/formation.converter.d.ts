import { FormationAggregate } from 'structure/domain/formation/command/formation-aggregate';
import { Formation } from 'structure/domain/formation/query/formation';
export declare class FormationConverter {
    convert(aggregate: FormationAggregate): Formation;
}
