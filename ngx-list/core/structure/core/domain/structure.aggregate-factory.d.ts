import { AggregateFactory } from '@generic-ui/hermes';
import { PagingManagerFactory } from '../../paging/domain/paging.manager-factory';
import { SourceManagerFactory } from '../../source/domain/core/source.manager-factory';
import { VerticalFormationFactory } from '../../vertical-formation/domain/vertical-formation.factory';
import { SummariesManagerFactory } from '../../summaries/domain/summaries.manager.factory';
import { FilterManagerFactory } from '../../filter/domain/filter.manager-factory';
import { FieldCollectionFactory } from '../../field/domain/field-collection.factory';
import { StructureId } from '../api/global/structure.id';
import { StructureAggregate } from './structure.aggregate';
import { SearchManagerFactory } from '../../search/domain/search.manager-factory';
export declare class StructureAggregateFactory extends AggregateFactory<StructureId, StructureAggregate> {
    private readonly pagingAggregateFactory;
    private readonly sourceManagerFactory;
    private readonly verticalFormationFactory;
    private readonly summariesManagerFactory;
    private readonly filterManagerFactory;
    private readonly searchManagerFactory;
    private readonly fieldCollectionFactory;
    constructor(pagingAggregateFactory: PagingManagerFactory, sourceManagerFactory: SourceManagerFactory, verticalFormationFactory: VerticalFormationFactory, summariesManagerFactory: SummariesManagerFactory, filterManagerFactory: FilterManagerFactory, searchManagerFactory: SearchManagerFactory, fieldCollectionFactory: FieldCollectionFactory);
    static readonly services: (typeof PagingManagerFactory | typeof SearchManagerFactory | typeof FilterManagerFactory | typeof FieldCollectionFactory | typeof SourceManagerFactory | typeof SummariesManagerFactory | typeof VerticalFormationFactory)[];
    create(structureId: StructureId): StructureAggregate;
    init(structureAggregate: StructureAggregate): void;
}
