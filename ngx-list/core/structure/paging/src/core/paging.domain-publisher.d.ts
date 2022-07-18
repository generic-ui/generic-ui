import { PagingDispatcher } from './paging.dispatcher';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { PagingConfig } from '../api/config/paging-config';
import { PagingPublisher } from '../api/paging.publisher';
export declare class PagingDomainPublisher extends PagingPublisher {
    private readonly pagingDispatcher;
    constructor(pagingDispatcher: PagingDispatcher);
    static readonly services: (typeof PagingDispatcher)[];
    enable(structureId: StructureId): void;
    disable(structureId: StructureId): void;
    setPaging(paging: PagingConfig, structureId: StructureId): void;
    changePageSize(pageSize: number, structureId: StructureId): void;
    nextPage(structureId: StructureId): void;
    prevPage(structureId: StructureId): void;
    goToPage(pageNumber: number, currentPage: number, structureId: StructureId): void;
    changePagerTop(enabled: boolean, structureId: StructureId): void;
    changePagerBottom(enabled: boolean, structureId: StructureId): void;
}
