import { PagingAggregateFactory } from '../../paging/command/paging.aggregate-factory';
import { SourceCoordinatorFactory } from '../../source/command/source-coordinator.factory';
import { VerticalFormationFactory } from './vertical-formation/vertical-formation.factory';
import { AggregationManagerFactory } from './aggregation/aggregation.manager.factory';
import { FilterContainerFactory } from './filter/filter.container-factory';
import { FieldContainerFactory } from './field/field-container.factory';
import { StructureId } from '../../structure-id';
import { StructureAggregate } from './structure.aggregate';
export declare class StructureAggregateFactory {
    private readonly pagingAggregateFactory;
    private readonly sourceCoordinatorFactory;
    private readonly verticalFormationFactory;
    private readonly aggregationManagerFactory;
    private readonly filterContainerFactory;
    private readonly fieldContainerFactory;
    constructor(pagingAggregateFactory: PagingAggregateFactory, sourceCoordinatorFactory: SourceCoordinatorFactory, verticalFormationFactory: VerticalFormationFactory, aggregationManagerFactory: AggregationManagerFactory, filterContainerFactory: FilterContainerFactory, fieldContainerFactory: FieldContainerFactory);
    create(structureId: StructureId): StructureAggregate;
}
