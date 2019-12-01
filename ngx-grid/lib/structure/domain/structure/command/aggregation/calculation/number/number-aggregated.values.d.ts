import { AggregatedValues } from '../aggregated.values';
export declare class NumberAggregatedValues extends AggregatedValues {
    readonly sum: number;
    readonly min: number;
    readonly max: number;
    readonly average: number;
    readonly median: number;
    constructor(sum: number, min: number, max: number, average: number, median: number);
    private setValueWithPrecision;
}
