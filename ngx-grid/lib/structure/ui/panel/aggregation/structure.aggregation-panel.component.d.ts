import { ChangeDetectorRef } from '@angular/core';
import { CellTemplateWithContext } from '../../../../composition/read/definition/cell-template-with-context';
import { StructureId } from '../../../domain/structure.id';
import { StructureAggregationUiEventsRepository } from '../../../ui-api/structure/aggregation/structure-aggregation.ui-events-repository';
import { CompositionReadModelWarehouse } from '../../../../composition/ui-api/composition.read-model-warehouse';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { StructureSourceReadModelWarehouse } from '../../../ui-api/source/structure-source.read-model-warehouse';
export declare class StructureAggregationPanelComponent extends SmartComponent {
    private changeDetectorRef;
    private structureId;
    private structureAggregationUiEventsRepository;
    private sourceReadModelService;
    private readonly compositionReadModelService;
    enabled: boolean;
    sourceEmpty: boolean;
    headerColumns: Array<CellTemplateWithContext>;
    aggregations: Map<string, any>;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, structureAggregationUiEventsRepository: StructureAggregationUiEventsRepository, sourceReadModelService: StructureSourceReadModelWarehouse, compositionReadModelService: CompositionReadModelWarehouse);
    ngOnInit(): void;
    isAggregateTypePresent(aggregation: number): boolean;
}
