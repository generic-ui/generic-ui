import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { CellTemplateWithAccessor } from '../../../../../composition/read/definition/cell-template-with-accessor';
import { ChangedValueEmitter } from '../../../../../composition/read/edit/changed-value.emitter';
import { ItemEntity } from '../../../../domain/source/item.entity';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { SourceCommandDispatcher } from '../../../../ui-api/source/source.command-dispatcher';
export declare class StructureCellEditComponent extends SmartComponent implements OnChanges {
    private readonly sourceCommandService;
    cellContainerRef: ElementRef;
    entity: ItemEntity;
    cell: CellTemplateWithAccessor;
    editContext: any;
    valueChanges$: ChangedValueEmitter<any>;
    status$: ChangedValueEmitter<any>;
    actualValue: any;
    constructor(sourceCommandService: SourceCommandDispatcher);
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
