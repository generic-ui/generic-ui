import { AggregateArchive, AggregateId, HermesObservable } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare class StructureInitialValuesReadyArchive extends AggregateArchive<boolean> {
    static readonly default = false;
    constructor();
    on(aggregateId: AggregateId): HermesObservable<boolean>;
    once(aggregateId: AggregateId): HermesObservable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureInitialValuesReadyArchive, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StructureInitialValuesReadyArchive>;
}
//# sourceMappingURL=structure.initial-values-ready.archive.d.ts.map