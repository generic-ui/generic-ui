import { ChangeDetectorRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../composition/feature-api/composition.warehouse';
import { CellTemplateWithContext } from '../../../composition/feature-api/read/definition/cell-template-with-context';
import { CompositionCommandDispatcher } from '../../../composition/feature-api/composition.command-dispatcher';
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
