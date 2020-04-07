import { FormationAggregate } from '../../domain/formation/formation-aggregate';
import { Formation } from './formation';
export declare class FormationConverter {
    convert(aggregate: FormationAggregate): Formation;
}
