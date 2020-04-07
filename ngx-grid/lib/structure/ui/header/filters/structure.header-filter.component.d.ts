import { OnInit } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CellTemplateWithContext } from '../../../../composition/read/definition/cell-template-with-context';
import { ChangedValueEmitter } from '../../../../composition/read/edit/changed-value.emitter';
import { StructureFilterCommandDispatcher } from '../../../ui-api/structure/filter/structure-filter.command-dispatcher';
import { StructureId } from '../../../domain/structure.id';
export declare class StructureHeaderFilterComponent extends SmartComponent implements OnInit {
    private structureFilterCommandService;
    private structureId;
    column: CellTemplateWithContext;
    sub: ChangedValueEmitter<unknown>;
    editContext: any;
    constructor(structureFilterCommandService: StructureFilterCommandDispatcher, structureId: StructureId);
    ngOnInit(): void;
    filter(phrase: string): void;
}
