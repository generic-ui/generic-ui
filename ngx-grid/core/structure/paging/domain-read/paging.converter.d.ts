import { PagingManager } from '../domain/paging.manager';
import { PagingModel } from '../api/model/paging.model';
export declare class PagingConverter {
    convert(aggregate: PagingManager): PagingModel;
}
