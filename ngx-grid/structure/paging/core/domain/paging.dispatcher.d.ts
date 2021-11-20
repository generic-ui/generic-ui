import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { PagingConfig } from '../api/config/paging-config';
export declare class PagingDispatcher {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setPaging(paging: PagingConfig, structureId: StructureId): void;
    changePageSize(pageSize: number, structureId: StructureId): void;
    nextPage(structureId: StructureId): void;
    prevPage(structureId: StructureId): void;
}
