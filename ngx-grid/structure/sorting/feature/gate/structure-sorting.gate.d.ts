import { OnChanges } from '@angular/core';
import { StructureId } from '../../../core/api/structure.id';
import { Gate } from '../../../../common/cdk/component/gate';
import { SortingConfig } from '../../core/api/sorting-config';
import { NgChanges } from '../../../../common/cdk/component/ng-changes';
import { SortingCommandInvoker } from '../../core/api/sorting.command-invoker';
import * as i0 from "@angular/core";
export declare class StructureSortingGate extends Gate implements OnChanges {
    private readonly structureId;
    private readonly sortingCommandInvoker;
    sorting: boolean | SortingConfig;
    constructor(structureId: StructureId, sortingCommandInvoker: SortingCommandInvoker);
    ngOnChanges(changes: NgChanges<StructureSortingGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureSortingGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureSortingGate, "gui-structure[sorting]", never, { "sorting": "sorting"; }, {}, never>;
}
//# sourceMappingURL=structure-sorting.gate.d.ts.map