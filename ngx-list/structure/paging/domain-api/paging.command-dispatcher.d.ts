import { PagingDispatcher } from '../domain/paging.dispatcher';
import { StructureId } from '../../../lib/structure/domain/structure.id';
import { PagingConfig } from './paging-config';
export declare class PagingCommandDispatcher {
    private pagingDispatcher;
    constructor(pagingDispatcher: PagingDispatcher);
    enable(structureId?: StructureId): void;
    disable(structureId?: StructureId): void;
    setPaging(paging: PagingConfig, structureId?: StructureId): void;
    changePageSize(pageSize: number, structureId?: StructureId): void;
    nextPage(structureId?: StructureId): void;
    prevPage(structureId?: StructureId): void;
    goToPage(pageNumber: number, currentPage: number): void;
    changePagerTop(enabled: boolean, structureId?: StructureId): void;
    changePagerBottom(enabled: boolean, structureId?: StructureId): void;
}
