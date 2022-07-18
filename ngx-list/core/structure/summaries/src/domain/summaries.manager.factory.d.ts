import { SummariesCalculator } from './calculation/summaries.calculator';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { SummariesManager } from './summaries.manager';
export declare class SummariesManagerFactory {
    private readonly calculators;
    constructor(calculators: Array<SummariesCalculator<any, any>>);
    static readonly services: {
        inject: string;
        collection: boolean;
    }[];
    create(structureId: StructureId): SummariesManager;
}
