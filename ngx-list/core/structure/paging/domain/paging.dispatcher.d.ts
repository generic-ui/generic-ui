import { StructureId } from '../../core/api/global/structure.id';
import { PagingConfig } from '../api/config/paging-config';
export declare class PagingDispatcher {
    private readonly commandDispatcher;
    setPaging(paging: PagingConfig, structureId: StructureId): void;
    changePageSize(pageSize: number, structureId: StructureId): void;
    nextPage(structureId: StructureId): void;
    prevPage(structureId: StructureId): void;
}
