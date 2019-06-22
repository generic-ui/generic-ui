import { PagingConfig } from 'structure/domain/paging/paging-config';
import { StructureId } from 'structure/domain/structure-id';
import { Command } from 'generic-ui-cqrs';
export declare class SetPagingCommand extends Command {
    readonly structureId: StructureId;
    readonly payload: PagingConfig;
    constructor(structureId: StructureId, payload: PagingConfig);
}
