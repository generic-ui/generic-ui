import { OnChanges } from '@angular/core';
import { StructureId } from '../../../../core/structure/structure-core/api/global/structure.id';
import { Gate } from '../../../common/cdk/component/gate';
import { SortingConfig } from '../../../../core/structure/sorting/api/config/sorting-config';
import { NgChanges } from '../../../common/cdk/component/ng-changes';
import { SortingPublisher } from '../../../../core/structure/sorting/api/sorting.publisher';
import * as i0 from "@angular/core";
export declare class StructureSortingGate extends Gate implements OnChanges {
    private readonly structureId;
    private readonly sortingCommandInvoker;
    sorting: boolean | SortingConfig;
    constructor(structureId: StructureId, sortingCommandInvoker: SortingPublisher);
    ngOnChanges(changes: NgChanges<StructureSortingGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureSortingGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureSortingGate, "gui-structure[sorting]", never, { "sorting": "sorting"; }, {}, never, never, false>;
}
