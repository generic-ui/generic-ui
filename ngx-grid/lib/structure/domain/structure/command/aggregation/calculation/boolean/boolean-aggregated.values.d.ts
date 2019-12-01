import { AggregatedValues } from '../aggregated.values';
export declare class BooleanAggregatedValues extends AggregatedValues {
    readonly truthy: number;
    readonly falsy: number;
    constructor(truthy: number, falsy: number);
}
