import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { PagingConfig } from '../api/config/paging-config';
export declare class PagingDispatcher {
    private readonly commandDispatcher;
    constructor(commandDispatcher: CommandDispatcher);
    static readonly services: readonly [typeof CommandDispatcher];
    setPaging(paging: PagingConfig, structureId: StructureId): void;
    changePageSize(pageSize: number, structureId: StructureId): void;
    nextPage(structureId: StructureId): void;
    prevPage(structureId: StructureId): void;
}
