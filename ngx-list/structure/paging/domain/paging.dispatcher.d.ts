import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureId } from '../../../lib/structure/domain/structure.id';
import { PagingConfig } from '../domain-api/paging-config';
export declare class PagingDispatcher {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setPaging(structureId: StructureId, paging: PagingConfig): void;
    changePageSize(structureId: StructureId, pageSize: number): void;
    nextPage(structureId: StructureId): void;
    prevPage(structureId: StructureId): void;
}
