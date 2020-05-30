import { AggregateFactory } from '@generic-ui/hermes';
import { PagingManagerFactory } from '../../../../structure/paging/domain/paging.manager-factory';
import { SourceManagerFactory } from '../source/source.manager-factory';
import { VerticalFormationFactory } from './vertical-formation/vertical-formation.factory';
import { SummariesManagerFactory } from './summaries/summaries.manager.factory';
import { FilterManagerFactory } from './filter/filter.manager-factory';
import { FieldCollectionFactory } from '../../../../structure/field/domain/field-collection.factory';
import { StructureId } from '../structure.id';
import { StructureAggregate } from './structure.aggregate';
import { FormationAggregateFactory } from '../formation/formation.aggregate-factory';
import { SearchManagerFactory } from '../../../../structure/search/domain/search.manager-factory';
export declare class StructureAggregateFactory extends AggregateFactory<StructureId, StructureAggregate> {
    private readonly pagingAggregateFactory;
    private readonly sourceManagerFactory;
    private readonly formationAggregateFactory;
    private readonly verticalFormationFactory;
    private readonly summariesManagerFactory;
    private readonly filterManagerFactory;
    private readonly searchManagerFactory;
    private readonly fieldCollectionFactory;
    constructor(pagingAggregateFactory: PagingManagerFactory, sourceManagerFactory: SourceManagerFactory, formationAggregateFactory: FormationAggregateFactory, verticalFormationFactory: VerticalFormationFactory, summariesManagerFactory: SummariesManagerFactory, filterManagerFactory: FilterManagerFactory, searchManagerFactory: SearchManagerFactory, fieldCollectionFactory: FieldCollectionFactory);
    create(structureId: StructureId): StructureAggregate;
    init(structureAggregate: StructureAggregate): void;
}
