import { OnChanges } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { NgChanges } from '../../../../common/cdk/component/ng-changes';
import { StructureCommandInvoker } from '../../../core/api/structure.command-invoker';
import { QuickFiltersConfig } from '../../core/api/quick-filters.config';
import { StructureId } from '../../../core/api/structure.id';
import * as i0 from "@angular/core";
export declare class StructureQuickFiltersGate extends Gate implements OnChanges {
    private readonly structureId;
    private readonly structureCommandInvoker;
    quickFilters: boolean | QuickFiltersConfig;
    constructor(structureId: StructureId, structureCommandInvoker: StructureCommandInvoker);
    ngOnChanges(changes: NgChanges<StructureQuickFiltersGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureQuickFiltersGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureQuickFiltersGate, "gui-structure[quickFilters]", never, { "quickFilters": "quickFilters"; }, {}, never>;
}
//# sourceMappingURL=structure-quick-filters.gate.d.ts.map