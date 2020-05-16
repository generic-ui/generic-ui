import { ChangeDetectorRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../composition/domain-api/composition.warehouse';
import { CellTemplateWithContext } from '../../../composition/domain-api/read/definition/cell-template-with-context';
import { CompositionCommandDispatcher } from '../../../composition/domain-api/composition.command-dispatcher';
import { CompositionId } from '../../../composition/domain/composition.id';
export declare class StructureColumnManagerComponent extends SmartComponent implements OnInit {
    private changeDetectorRef;
    private compositionId;
    private compositionCommandService;
    private compositionReadModelService;
    columns: Array<CellTemplateWithContext>;
    enabledColumnsCount: number;
    constructor(changeDetectorRef: ChangeDetectorRef, compositionId: CompositionId, compositionCommandService: CompositionCommandDispatcher, compositionReadModelService: CompositionWarehouse);
    ngOnInit(): void;
    toggleColumn(column: CellTemplateWithContext): void;
}
