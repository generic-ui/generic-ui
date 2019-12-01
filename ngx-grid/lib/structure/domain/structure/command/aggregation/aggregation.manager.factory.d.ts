import { AggregationCalculator } from './calculation/aggregation.calculator';
import { StructureId } from '../../../structure-id';
import { AggregationManager } from './aggregation.manager';
export declare class AggregationManagerFactory {
    private calculators;
    constructor(calculators: Array<AggregationCalculator<any, any>>);
    create(structureId: StructureId): AggregationManager;
}
