import { ChangeDetectorRef, ElementRef, OnChanges } from '@angular/core';
import { CellTemplateWithAccessor } from '../../../../../../composition/core/domain-read/definition/cell-template-with-accessor';
import { ChangedValueEmitter } from '../../../../../../composition/core/domain-read/edit/changed-value.emitter';
import { ItemEntity } from '../../../../../source/core/domain/core/item/item.entity';
import { SmartComponent } from '../../../../../../common/cdk/component/smart-component';
import { SourceCommandInvoker } from '../../../../../source/core/api/source.command-invoker';
import { NgChanges } from '../../../../../../common/cdk/component/ng-changes';
import { StructureId } from '../../../../../core/api/structure.id';
export declare class StructureCellEditBooleanComponent extends SmartComponent implements OnChanges {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly sourceCommandService;
    cellContainerRef: ElementRef;
    entity: ItemEntity;
    cell: CellTemplateWithAccessor;
    editContext: any;
    valueChanges$: ChangedValueEmitter<any>;
    status$: ChangedValueEmitter<any>;
    actualValue: any;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, sourceCommandService: SourceCommandInvoker);
    ngOnChanges(changes: NgChanges<StructureCellEditBooleanComponent>): void;
    ngOnInit(): void;
    private submitChanges;
    private initEditContext;
    private observeValueChanges;
    protected getSelectorName(): string;
}
