import { ChangeDetectorRef } from '@angular/core';
import { CellTemplateWithContext } from '../../../domain/composition/read/definition/cell-template-with-context';
import { StructureId } from '../../../domain/structure-id';
import { StructureAggregationUiEventsRepository } from '../../../ui-api/structure/aggregation/structure.aggregation.ui-events-repository';
import { CompositionReadModelService } from '../../../ui-api/composition/composition-read-model.service';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
export declare class StructureAggregationPanelComponent extends SmartComponent {
    private changeDetectorRef;
    private structureId;
    private structureAggregationUiEventsRepository;
    private readonly compositionQueryService;
    enabled: boolean;
    headerColumns: Array<CellTemplateWithContext>;
    aggregations: Map<string, any>;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, structureAggregationUiEventsRepository: StructureAggregationUiEventsRepository, compositionQueryService: CompositionReadModelService);
    ngOnInit(): void;
    isAggregateTypePresent(aggregation: number): boolean;
}
