import { ChangeDetectorRef } from '@angular/core';
import { CellTemplateWithContext } from '../../../domain/composition/read/definition/cell-template-with-context';
import { StructureId } from '../../../domain/structure-id';
import { StructureAggregationUiEventsRepository } from '../../../ui-api/structure/aggregation/structure.aggregation.ui-events-repository';
import { CompositionReadModelService } from '../../../ui-api/composition/composition-read-model.service';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { SourceReadModelService } from '../../../ui-api/source/source-read-model.service';
export declare class StructureAggregationPanelComponent extends SmartComponent {
    private changeDetectorRef;
    private structureId;
    private structureAggregationUiEventsRepository;
    private sourceReadModelService;
    private readonly compositionQueryService;
    enabled: boolean;
    sourceEmpty: boolean;
    headerColumns: Array<CellTemplateWithContext>;
    aggregations: Map<string, any>;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, structureAggregationUiEventsRepository: StructureAggregationUiEventsRepository, sourceReadModelService: SourceReadModelService, compositionQueryService: CompositionReadModelService);
    ngOnInit(): void;
    isAggregateTypePresent(aggregation: number): boolean;
}
