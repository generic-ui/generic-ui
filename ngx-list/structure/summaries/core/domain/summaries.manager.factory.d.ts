import { SummariesCalculator } from './calculation/summaries.calculator';
import { StructureId } from '../../../core/api/structure.id';
import { SummariesManager } from './summaries.manager';
import * as i0 from "@angular/core";
export declare class SummariesManagerFactory {
    private readonly calculators;
    constructor(calculators: Array<SummariesCalculator<any, any>>);
    create(structureId: StructureId): SummariesManager;
    static ɵfac: i0.ɵɵFactoryDeclaration<SummariesManagerFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SummariesManagerFactory>;
}
//# sourceMappingURL=summaries.manager.factory.d.ts.map