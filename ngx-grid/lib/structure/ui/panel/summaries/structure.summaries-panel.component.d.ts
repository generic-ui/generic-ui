import { ChangeDetectorRef } from '@angular/core';
import { CellTemplateWithContext } from '../../../../composition/read/definition/cell-template-with-context';
import { StructureId } from '../../../domain/structure.id';
import { StructureSummariesUiEventsRepository } from '../../../ui-api/summaries/structure-summaries.ui-events-repository';
import { CompositionWarehouse } from '../../../../composition/ui-api/composition.warehouse';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureSourceWarehouse } from '../../../ui-api/source/structure-source.warehouse';
export declare class StructureSummariesPanelComponent extends SmartComponent {
    private changeDetectorRef;
    private structureId;
    private structureSummariesUiEventsRepository;
    private sourceReadModelService;
    private readonly compositionReadModelService;
    enabled: boolean;
    sourceEmpty: boolean;
    headerColumns: Array<CellTemplateWithContext>;
    summaries: Map<string, any>;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, structureSummariesUiEventsRepository: StructureSummariesUiEventsRepository, sourceReadModelService: StructureSourceWarehouse, compositionReadModelService: CompositionWarehouse);
    ngOnInit(): void;
    isSummariesTypePresent(summaries: number): boolean;
}
