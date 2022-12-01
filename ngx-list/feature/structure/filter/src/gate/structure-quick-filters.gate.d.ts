import { OnChanges } from '@angular/core';
import { Gate } from '../../../../common/src/cdk/component/lib/src/gate';
import { NgChanges } from '../../../../common/src/cdk/component/lib/src/ng-changes';
import { StructurePublisher } from '../../../../../core/structure/structure-core/src/api/structure.publisher';
import { QuickFiltersConfig } from '../../../../../core/structure/filter/src/api/quick-filter/quick-filters.config';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import * as i0 from "@angular/core";
export declare class StructureQuickFiltersGate extends Gate implements OnChanges {
    private readonly structureId;
    private readonly structureCommandInvoker;
    quickFilters: boolean | QuickFiltersConfig;
    constructor(structureId: StructureId, structureCommandInvoker: StructurePublisher);
    ngOnChanges(changes: NgChanges<StructureQuickFiltersGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureQuickFiltersGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureQuickFiltersGate, "gui-structure[quickFilters]", never, { "quickFilters": "quickFilters"; }, {}, never, never, false, never>;
}
