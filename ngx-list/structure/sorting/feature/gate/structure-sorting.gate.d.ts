import { OnChanges } from '@angular/core';
import { StructureId } from '../../../core/api/structure.id';
import { Gate } from '../../../../common/cdk/component/gate';
import { SortingConfig } from '../../core/api/sorting-config';
import { NgChanges } from '../../../../common/cdk/component/ng-changes';
import { SortingCommandInvoker } from '../../core/api/sorting.command-invoker';
export declare class StructureSortingGate extends Gate implements OnChanges {
    private readonly structureId;
    private readonly sortingCommandInvoker;
    sorting: boolean | SortingConfig;
    constructor(structureId: StructureId, sortingCommandInvoker: SortingCommandInvoker);
    ngOnChanges(changes: NgChanges<StructureSortingGate>): void;
}
