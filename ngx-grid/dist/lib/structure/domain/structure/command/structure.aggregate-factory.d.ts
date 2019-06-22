import { PagingAggregateFactory } from 'structure/domain/paging/command/paging-aggregate.factory';
import { StructureAggregate } from 'structure/domain/structure/command/structure.aggregate';
export declare class StructureAggregateFactory {
    private readonly pagingAggregateFactory;
    constructor(pagingAggregateFactory: PagingAggregateFactory);
    create(uid: string): StructureAggregate;
}
