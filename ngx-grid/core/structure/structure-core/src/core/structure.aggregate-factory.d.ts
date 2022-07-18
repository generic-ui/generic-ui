import { AggregateFactory } from '@generic-ui/hermes';
import { PagingManagerFactory } from '../../../paging/src/domain/paging.manager-factory';
import { SourceManagerFactory } from '../../../source/src/domain/source.manager-factory';
import { VerticalFormationFactory } from '../../../vertical-formation/src/domain/vertical-formation.factory';
import { SummariesManagerFactory } from '../../../summaries/src/domain/summaries.manager.factory';
import { FilterManagerFactory } from '../../../filter/src/domain/filter.manager-factory';
import { FieldCollectionFactory } from '../../../field/src/core/field-collection.factory';
import { StructureId } from '../api/global/structure.id';
import { StructureAggregate } from '../domain/structure.aggregate';
import { SearchManagerFactory } from '../../../search/src/domain/search.manager-factory';
export declare class StructureAggregateFactory extends AggregateFactory<StructureId, StructureAggregate> {
    private readonly pagingAggregateFactory;
    private readonly sourceManagerFactory;
    private readonly verticalFormationFactory;
    private readonly summariesManagerFactory;
    private readonly filterManagerFactory;
    private readonly searchManagerFactory;
    private readonly fieldCollectionFactory;
    constructor(pagingAggregateFactory: PagingManagerFactory, sourceManagerFactory: SourceManagerFactory, verticalFormationFactory: VerticalFormationFactory, summariesManagerFactory: SummariesManagerFactory, filterManagerFactory: FilterManagerFactory, searchManagerFactory: SearchManagerFactory, fieldCollectionFactory: FieldCollectionFactory);
    static readonly services: (typeof PagingManagerFactory | typeof FilterManagerFactory | typeof SearchManagerFactory | typeof FieldCollectionFactory | typeof SummariesManagerFactory | typeof VerticalFormationFactory | typeof SourceManagerFactory)[];
    create(structureId: StructureId): StructureAggregate;
    init(structureAggregate: StructureAggregate): void;
}
