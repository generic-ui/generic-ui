import { AggregateFactory } from '@generic-ui/hermes';
import { PagingManagerFactory } from '../../paging/core/domain/paging.manager-factory';
import { SourceManagerFactory } from '../../source/core/domain/core/source.manager-factory';
import { VerticalFormationFactory } from '../../vertical-formation/core/domain/vertical-formation.factory';
import { SummariesManagerFactory } from '../../summaries/core/domain/summaries.manager.factory';
import { FilterManagerFactory } from '../../filter/core/domain/filter.manager-factory';
import { FieldCollectionFactory } from '../../field/core/domain/field-collection.factory';
import { StructureId } from '../api/structure.id';
import { StructureAggregate } from './structure.aggregate';
import { SearchManagerFactory } from '../../search/core/domain/search.manager-factory';
import * as i0 from "@angular/core";
export declare class StructureAggregateFactory extends AggregateFactory<StructureId, StructureAggregate> {
    private readonly pagingAggregateFactory;
    private readonly sourceManagerFactory;
    private readonly verticalFormationFactory;
    private readonly summariesManagerFactory;
    private readonly filterManagerFactory;
    private readonly searchManagerFactory;
    private readonly fieldCollectionFactory;
    constructor(pagingAggregateFactory: PagingManagerFactory, sourceManagerFactory: SourceManagerFactory, verticalFormationFactory: VerticalFormationFactory, summariesManagerFactory: SummariesManagerFactory, filterManagerFactory: FilterManagerFactory, searchManagerFactory: SearchManagerFactory, fieldCollectionFactory: FieldCollectionFactory);
    create(structureId: StructureId): StructureAggregate;
    init(structureAggregate: StructureAggregate): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureAggregateFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StructureAggregateFactory>;
}
//# sourceMappingURL=structure.aggregate-factory.d.ts.map