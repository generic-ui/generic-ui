import { PagingAggregate } from './command/paging.aggregate';
import { Paging } from './query/paging';
export declare class PagingConverter {
    convert(aggregate: PagingAggregate): Paging;
}
