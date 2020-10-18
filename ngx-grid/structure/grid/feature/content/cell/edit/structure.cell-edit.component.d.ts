import { ChangeDetectorRef, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { CellTemplateWithAccessor } from '../../../../../../composition/core/domain-read/definition/cell-template-with-accessor';
import { ChangedValueEmitter } from '../../../../../../composition/core/domain-read/edit/changed-value.emitter';
import { ItemEntity } from '../../../../../source/core/domain/core/item/item.entity';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { SourceCommandInvoker } from '../../../../../source/core/api/source.command-invoker';
export declare class StructureCellEditComponent extends SmartComponent implements OnChanges {
    private readonly changeDetectorRef;
    private readonly sourceCommandService;
    cellContainerRef: ElementRef;
    entity: ItemEntity;
    cell: CellTemplateWithAccessor;
    editContext: any;
    valueChanges$: ChangedValueEmitter<any>;
    status$: ChangedValueEmitter<any>;
    actualValue: any;
    constructor(changeDetectorRef: ChangeDetectorRef, sourceCommandService: SourceCommandInvoker);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    submitChangesAndExit(): void;
    private initEditContext;
    private observeValueChanges;
    private publishEditState;
    private publishEditEnter;
    private publishEditCancel;
    private publishEditSubmit;
}
