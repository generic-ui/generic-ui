import { EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Gate } from '../../../common/cdk/component/gate';
import { StructureId } from '../../../../core/structure/core/api/global/structure.id';
import { RowSelection } from '../../../../core/structure/formation/api/row-selected/row-selection';
import { SelectedRow } from '../../../../core/structure/formation/api/row-selected/selected-row';
import { FormationEventRepository } from '../../../../core/structure/formation/api/formation.event-repository';
import { FormationPublisher } from '../../../../core/structure/formation/api/formation.publisher';
import { RowSelectionTypeArchive } from '../../../../core/structure/formation/api/type/row-selection-type.archive';
import { NgChanges } from '../../../common/cdk/component/ng-changes';
import * as i0 from "@angular/core";
export declare abstract class SelectionGate extends Gate implements OnChanges, OnInit, OnDestroy {
    protected readonly structureId: StructureId;
    protected readonly formationEventRepository: FormationEventRepository;
    protected readonly formationCommandDispatcher: FormationPublisher;
    protected readonly rowSelectionTypeArchive: RowSelectionTypeArchive;
    rowSelection: RowSelection;
    itemsSelected: EventEmitter<any>;
    selectedRows: EventEmitter<Array<SelectedRow>>;
    protected constructor(structureId: StructureId, formationEventRepository: FormationEventRepository, formationCommandDispatcher: FormationPublisher, rowSelectionTypeArchive: RowSelectionTypeArchive);
    ngOnChanges(changes: NgChanges<SelectionGate>): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectionGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SelectionGate, never, never, { "rowSelection": "rowSelection"; }, { "itemsSelected": "itemsSelected"; "selectedRows": "selectedRows"; }, never>;
}
