import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Gate } from '../../../../common/component/src/gate';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { RowSelection } from '../../../../../core/structure/formation/src/api/row-selected/row-selection';
import { SelectedRow } from '../../../../../core/structure/formation/src/api/row-selected/selected-row';
import { FormationEventRepository } from '../../../../../core/structure/formation/src/api/formation.event-repository';
import { FormationPublisher } from '../../../../../core/structure/formation/src/api/formation.publisher';
import { NgChanges } from '../../../../common/component/src/ng-changes';
import * as i0 from "@angular/core";
export declare abstract class SelectionGate extends Gate implements OnChanges, OnInit {
    protected readonly structureId: StructureId;
    protected readonly formationEventRepository: FormationEventRepository;
    protected readonly formationPublisher: FormationPublisher;
    rowSelection: RowSelection;
    itemsSelected: EventEmitter<any>;
    selectedRows: EventEmitter<Array<SelectedRow>>;
    protected constructor(structureId: StructureId, formationEventRepository: FormationEventRepository, formationPublisher: FormationPublisher);
    ngOnChanges(changes: NgChanges<SelectionGate>): void;
    ngOnInit(): void;
    private selectItemsSelected;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectionGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SelectionGate, never, never, { "rowSelection": "rowSelection"; }, { "itemsSelected": "itemsSelected"; "selectedRows": "selectedRows"; }, never, never, false, never>;
}
