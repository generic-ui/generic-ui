import { EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { StructureId } from '../../../core/domain/structure.id';
import { RowSelection } from '../../core/api/row-selection';
import { SelectedRow } from '../../core/api/formation/selected-row';
import { FormationEventRepository } from '../../core/api/formation/formation.event-repository';
import { FormationCommandInvoker } from '../../core/api/formation/formation.command-invoker';
import { RowSelectionTypeArchive } from '../../core/api/formation/type/row-selection-type.archive';
import { NgChanges } from '../../../../common/cdk/component/ng-changes';
export declare abstract class SelectionGate extends Gate implements OnChanges, OnInit, OnDestroy {
    protected readonly structureId: StructureId;
    protected readonly formationEventService: FormationEventRepository;
    protected readonly formationCommandDispatcher: FormationCommandInvoker;
    protected readonly rowSelectionTypeArchive: RowSelectionTypeArchive;
    rowSelection: RowSelection;
    itemsSelected: EventEmitter<any>;
    selectedRows: EventEmitter<Array<SelectedRow>>;
    private readonly localStreamCloser;
    protected constructor(structureId: StructureId, formationEventService: FormationEventRepository, formationCommandDispatcher: FormationCommandInvoker, rowSelectionTypeArchive: RowSelectionTypeArchive);
    ngOnChanges(changes: NgChanges<SelectionGate>): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
