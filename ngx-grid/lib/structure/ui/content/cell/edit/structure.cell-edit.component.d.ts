import { SimpleChanges } from '@angular/core';
import { CellTemplateWithAccessor } from '../../../../../composition/domain/read/definition/cell-template-with-accessor';
import { ChangedValueEmitter } from '../../../../../composition/domain/read/edit/changed-value.emitter';
import { ItemEntity } from '../../../../domain/source/item.entity';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { SourceCommandService } from '../../../../ui-api/source/source-command.service';
export declare class StructureCellEditComponent extends SmartComponent {
    private readonly sourceCommandService;
    entity: ItemEntity;
    cell: CellTemplateWithAccessor;
    editContext: any;
    valueChanges$: ChangedValueEmitter<any>;
    status$: ChangedValueEmitter<any>;
    actualValue: any;
    constructor(sourceCommandService: SourceCommandService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    private submitChanges;
    private initEditContext;
}
