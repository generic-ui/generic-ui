import { PagingDispatcher } from 'structure/domain/paging/command/paging.dispatcher';
import { PagingConfig } from 'structure/domain/paging/paging-config';
import { StructureId } from 'structure/domain/structure-id';
export declare class PagingCommandService {
    private pagingDispatcher;
    constructor(pagingDispatcher: PagingDispatcher);
    enable(structureId?: StructureId): void;
    disable(structureId?: StructureId): void;
    setPaging(paging: PagingConfig, structureId?: StructureId): void;
    changePageSize(pageSize: number, structureId?: StructureId): void;
    nextPage(structureId?: StructureId): void;
    prevPage(structureId?: StructureId): void;
    changePagerTop(enabled: boolean, structureId?: StructureId): void;
    changePagerBottom(enabled: boolean, structureId?: StructureId): void;
}
