import { PagingAggregate } from 'structure/domain/paging/command/paging-aggregate';
import { Paging } from 'structure/domain/paging/query/paging';
export declare class PagingConverter {
    convert(aggregate: PagingAggregate): Paging;
}
