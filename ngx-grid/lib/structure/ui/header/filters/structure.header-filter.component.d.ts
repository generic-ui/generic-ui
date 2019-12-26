import { OnInit } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CellTemplateWithContext } from '../../../domain/composition/read/definition/cell-template-with-context';
import { ChangedValueEmitter } from '../../../domain/composition/read/edit/changed-value.emitter';
import { StructureFilterCommandService } from '../../../ui-api/structure/filter/structure.filter.command.service';
import { StructureId } from '../../../domain/structure-id';
export declare class StructureHeaderFilterComponent extends SmartComponent implements OnInit {
    private structureFilterCommandService;
    private structureId;
    column: CellTemplateWithContext;
    sub: ChangedValueEmitter<unknown>;
    editContext: any;
    constructor(structureFilterCommandService: StructureFilterCommandService, structureId: StructureId);
    ngOnInit(): void;
    filter(phrase: string): void;
}
