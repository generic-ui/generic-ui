import { ChangeDetectorRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../../composition/domain-api/composition.warehouse';
import { CellTemplateWithContext } from '../../../../composition/domain-api/read/definition/cell-template-with-context';
import { CompositionCommandInvoker } from '../../../../composition/domain-api/composition.command-invoker';
import { CompositionId } from '../../../../composition/domain/composition.id';
export declare class StructureColumnManagerComponent extends SmartComponent implements OnInit {
    private changeDetectorRef;
    private compositionId;
    private compositionCommandService;
    private compositionReadModelService;
    columns: Array<CellTemplateWithContext>;
    enabledColumnsCount: number;
    constructor(changeDetectorRef: ChangeDetectorRef, compositionId: CompositionId, compositionCommandService: CompositionCommandInvoker, compositionReadModelService: CompositionWarehouse);
    ngOnInit(): void;
    toggleColumn(column: CellTemplateWithContext): void;
}
