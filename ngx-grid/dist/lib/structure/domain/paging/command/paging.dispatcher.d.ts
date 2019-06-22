import { PagingConfig } from 'structure/domain/paging/paging-config';
import { StructureId } from 'structure/domain/structure-id';
import { CommandDispatcher } from 'generic-ui-cqrs';
export declare class PagingDispatcher {
    private commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    setPaging(structureId: StructureId, paging: PagingConfig): void;
    changePageSize(structureId: StructureId, pageSize: number): void;
    nextPage(structureId: StructureId): void;
    prevPage(structureId: StructureId): void;
}
