import { PagingAggregateFactory } from '../../paging/command/paging.aggregate-factory';
import { SourceManagerFactory } from '../../source/command/source.manager-factory';
import { VerticalFormationFactory } from './vertical-formation/vertical-formation.factory';
import { AggregationManagerFactory } from './aggregation/aggregation.manager.factory';
import { FilterCollectionFactory } from './filter/filter.collection-factory';
import { FieldCollectionFactory } from './field/field-collection.factory';
import { StructureId } from '../../structure-id';
import { StructureAggregate } from './structure.aggregate';
import { SchemaAggregateFactory } from '../../schema/command/schema.aggregate-factory';
import { FormationAggregateFactory } from '../../formation/command/formation.aggregate-factory';
export declare class StructureAggregateFactory {
    private readonly pagingAggregateFactory;
    private readonly sourceManagerFactory;
    private readonly formationAggregateFactory;
    private readonly verticalFormationFactory;
    private readonly aggregationManagerFactory;
    private readonly filterCollectionFactory;
    private readonly fieldCollectionFactory;
    private readonly schemaAggregateFactory;
    constructor(pagingAggregateFactory: PagingAggregateFactory, sourceManagerFactory: SourceManagerFactory, formationAggregateFactory: FormationAggregateFactory, verticalFormationFactory: VerticalFormationFactory, aggregationManagerFactory: AggregationManagerFactory, filterCollectionFactory: FilterCollectionFactory, fieldCollectionFactory: FieldCollectionFactory, schemaAggregateFactory: SchemaAggregateFactory);
    create(structureId: StructureId): StructureAggregate;
}
