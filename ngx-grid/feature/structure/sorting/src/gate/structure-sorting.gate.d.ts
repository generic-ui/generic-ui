import { OnChanges } from '@angular/core';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { Gate } from '../../../../common/component/src/gate';
import { SortingConfig } from '../../../../../core/structure/sorting/src/api/config/sorting-config';
import { NgChanges } from '../../../../common/component/src/ng-changes';
import { SortingPublisher } from '../../../../../core/structure/sorting/src/api/sorting.publisher';
import * as i0 from "@angular/core";
export declare class StructureSortingGate extends Gate implements OnChanges {
    private readonly structureId;
    private readonly sortingCommandInvoker;
    sorting: boolean | SortingConfig;
    constructor(structureId: StructureId, sortingCommandInvoker: SortingPublisher);
    ngOnChanges(changes: NgChanges<StructureSortingGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureSortingGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureSortingGate, "gui-structure[sorting]", never, { "sorting": { "alias": "sorting"; "required": false; }; }, {}, never, never, false, never>;
}
