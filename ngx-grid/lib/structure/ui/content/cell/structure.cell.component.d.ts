import { ChangeDetectorRef, SimpleChanges, OnDestroy, OnChanges } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CellTemplateWithAccessor } from '../../../../composition/domain/read/definition/cell-template-with-accessor';
import { StructureCellEditArchive } from '../../edit/structure.cell-edit.archive';
import { StructureCellEditStore } from '../../edit/structure.cell-edit.store';
import { SourceCommandService } from '../../../ui-api/source/source-command.service';
import { ItemEntity } from '../../../domain/source/item.entity';
export declare class StructureCellComponent extends SmartComponent implements OnChanges, OnDestroy {
    private changeDetectorRef;
    private structureCellEditArchive;
    private structureCellEditStore;
    private sourceCommandService;
    entity: ItemEntity;
    cell: CellTemplateWithAccessor;
    editMode: boolean;
    cellEditingEnabled: boolean;
    inEditMode: boolean;
    editContext: any;
    valueChanges$: any;
    status$: any;
    actualValue: any;
    constructor(changeDetectorRef: ChangeDetectorRef, structureCellEditArchive: StructureCellEditArchive, structureCellEditStore: StructureCellEditStore, sourceCommandService: SourceCommandService);
    ngOnChanges(changes: SimpleChanges): void;
    enterEditMode(forceCheck?: boolean): void;
    exitEditMode(): void;
    submitChangesAndExit(): void;
    private observeFieldStatus;
    private observeValueChanges;
    private publishEditState;
    private publishEditEnter;
    private publishEditCancel;
    private publishEditSubmit;
}
