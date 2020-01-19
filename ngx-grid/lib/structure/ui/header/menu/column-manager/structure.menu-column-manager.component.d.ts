import { ChangeDetectorRef, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../../../common/cdk/smart-component';
import { CompositionReadModelService } from '../../../../ui-api/composition/composition-read-model.service';
import { CellTemplateWithContext } from '../../../../domain/composition/read/definition/cell-template-with-context';
import { CompositionCommandService } from '../../../../ui-api/composition/composition.command-service';
export declare class StructureMenuColumnManagerComponent extends SmartComponent implements OnInit {
    private changeDetectorRef;
    private compositionCommandService;
    private compositionReadModelService;
    columns: Array<CellTemplateWithContext>;
    enabledColumnsCount: number;
    constructor(changeDetectorRef: ChangeDetectorRef, compositionCommandService: CompositionCommandService, compositionReadModelService: CompositionReadModelService);
    ngOnInit(): void;
    toggleColumn(column: CellTemplateWithContext): void;
}
