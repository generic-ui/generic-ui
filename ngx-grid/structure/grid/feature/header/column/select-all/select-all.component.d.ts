import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { StructureId } from '../../../../../core/api/structure.id';
import { FormationCommandInvoker } from '../../../../../formation/core/api/formation.command-invoker';
import { SmartComponent } from '../../../../../../common/cdk/component/smart-component';
import { FormationWarehouse } from '../../../../../formation/core/api/formation.warehouse';
import { RowSelectionModeArchive } from '../../../../../formation/core/api/mode/row-selection-mode.archive';
export declare class SelectAllComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly rowSelectionModeRepository;
    private readonly formationCommandDispatcher;
    private readonly formationWarehouse;
    selectAllChecked: boolean;
    selectAllIndeterminate: boolean;
    modeMulti: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, rowSelectionModeRepository: RowSelectionModeArchive, formationCommandDispatcher: FormationCommandInvoker, formationWarehouse: FormationWarehouse);
    ngOnInit(): void;
    toggleSelectAll(): void;
    protected getSelectorName(): string;
}
