import { PagingManager } from '../../../domain/paging/paging.manager';
import { Paging } from './paging';
export declare class PagingConverter {
    convert(aggregate: PagingManager): Paging;
}
