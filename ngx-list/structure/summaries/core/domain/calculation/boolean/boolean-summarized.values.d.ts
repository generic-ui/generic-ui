import { SummariesValues } from '../summaries.values';
export declare class BooleanSummarizedValues extends SummariesValues {
    readonly truthy: number;
    readonly falsy: number;
    constructor(truthy: number, falsy: number);
}
