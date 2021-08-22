import { CommandInvoker } from '@generic-ui/hermes';
import { PagingDispatcher } from '../domain/paging.dispatcher';
import { StructureId } from '../../../core/domain/structure.id';
import { PagingConfig } from './paging-config';
export declare class PagingCommandInvoker implements CommandInvoker {
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
