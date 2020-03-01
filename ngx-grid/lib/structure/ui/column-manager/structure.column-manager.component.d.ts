import { ChangeDetectorRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CompositionReadModelService } from '../../../composition/ui-api/composition-read-model.service';
import { CellTemplateWithContext } from '../../../composition/domain/read/definition/cell-template-with-context';
import { CompositionCommandService } from '../../../composition/ui-api/composition.command-service';
import { CompositionId } from '../../../composition/domain/composition-id';
export declare class StructureColumnManagerComponent extends SmartComponent implements OnInit {
    private changeDetectorRef;
    private compositionId;
    private compositionCommandService;
    private compositionReadModelService;
    columns: Array<CellTemplateWithContext>;
    enabledColumnsCount: number;
    constructor(changeDetectorRef: ChangeDetectorRef, compositionId: CompositionId, compositionCommandService: CompositionCommandService, compositionReadModelService: CompositionReadModelService);
    ngOnInit(): void;
    toggleColumn(column: CellTemplateWithContext): void;
}
