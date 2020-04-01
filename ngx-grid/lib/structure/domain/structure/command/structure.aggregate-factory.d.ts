import { PagingAggregateFactory } from '../../paging/command/paging.aggregate-factory';
import { SourceManagerFactory } from '../../source/command/source.manager-factory';
import { VerticalFormationFactory } from './vertical-formation/vertical-formation.factory';
import { AggregationManagerFactory } from './aggregation/aggregation.manager.factory';
import { FilterManagerFactory } from './filter/filter.manager-factory';
import { FieldCollectionFactory } from './field/field-collection.factory';
import { StructureId } from '../../structure-id';
import { StructureAggregate } from './structure.aggregate';
import { SchemaAggregateFactory } from '../../schema/command/schema.aggregate-factory';
import { FormationAggregateFactory } from '../../formation/command/formation.aggregate-factory';
import { SearchManagerFactory } from './search/search.manager-factory';
import { AggregateFactory } from '@generic-ui/hermes';
export declare class StructureAggregateFactory extends AggregateFactory<StructureAggregate> {
    private readonly pagingAggregateFactory;
    private readonly sourceManagerFactory;
    private readonly formationAggregateFactory;
    private readonly verticalFormationFactory;
    private readonly aggregationManagerFactory;
    private readonly filterManagerFactory;
    private readonly searchManagerFactory;
    private readonly fieldCollectionFactory;
    private readonly schemaAggregateFactory;
    constructor(pagingAggregateFactory: PagingAggregateFactory, sourceManagerFactory: SourceManagerFactory, formationAggregateFactory: FormationAggregateFactory, verticalFormationFactory: VerticalFormationFactory, aggregationManagerFactory: AggregationManagerFactory, filterManagerFactory: FilterManagerFactory, searchManagerFactory: SearchManagerFactory, fieldCollectionFactory: FieldCollectionFactory, schemaAggregateFactory: SchemaAggregateFactory);
    create(structureId: StructureId): StructureAggregate;
    init(structureAggregate: StructureAggregate): void;
}
