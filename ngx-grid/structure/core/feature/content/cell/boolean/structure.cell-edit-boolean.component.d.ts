import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { CellTemplateWithAccessor } from '../../../../../../composition/domain-api/read/definition/cell-template-with-accessor';
import { ChangedValueEmitter } from '../../../../../../composition/domain-api/read/edit/changed-value.emitter';
import { ItemEntity } from '../../../../../source/domain/core/item/item.entity';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { SourceCommandInvoker } from '../../../../../source/domain-api/source.command-invoker';
export declare class StructureCellEditBooleanComponent extends SmartComponent implements OnChanges {
    private readonly sourceCommandService;
    cellContainerRef: ElementRef;
    entity: ItemEntity;
    cell: CellTemplateWithAccessor;
    editContext: any;
    valueChanges$: ChangedValueEmitter<any>;
    status$: ChangedValueEmitter<any>;
    actualValue: any;
    constructor(sourceCommandService: SourceCommandInvoker);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    private submitChanges;
    private initEditContext;
    private observeValueChanges;
}
