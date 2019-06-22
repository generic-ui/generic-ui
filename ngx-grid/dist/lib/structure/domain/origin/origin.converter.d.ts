import { OriginAggregate } from 'structure/domain/origin/command/origin.aggregate';
import { Origin } from 'structure/domain/origin/query/origin';
export declare class OriginConverter {
    convert(aggregate: OriginAggregate): Origin;
    private convertEntities;
}
