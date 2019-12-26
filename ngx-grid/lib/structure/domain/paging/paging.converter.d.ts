import { PagingAggregate } from './command/paging.aggregate';
import { Paging } from './read/paging';
export declare class PagingConverter {
    convert(aggregate: PagingAggregate): Paging;
}
