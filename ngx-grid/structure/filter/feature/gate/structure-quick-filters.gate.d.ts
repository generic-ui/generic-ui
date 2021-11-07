import { OnChanges } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { NgChanges } from '../../../../common/cdk/component/ng-changes';
import { StructureCommandInvoker } from '../../../core/api/structure.command-invoker';
import { QuickFiltersConfig } from '../../core/api/quick-filter/quick-filters.config';
import { StructureId } from '../../../core/api/structure.id';
export declare class StructureQuickFiltersGate extends Gate implements OnChanges {
    private readonly structureId;
    private readonly structureCommandInvoker;
    quickFilters: boolean | QuickFiltersConfig;
    constructor(structureId: StructureId, structureCommandInvoker: StructureCommandInvoker);
    ngOnChanges(changes: NgChanges<StructureQuickFiltersGate>): void;
}
