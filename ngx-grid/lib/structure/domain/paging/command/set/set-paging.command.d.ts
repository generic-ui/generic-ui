import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-id';
import { PagingConfig } from '../../paging-config';
export declare class SetPagingCommand extends Command {
    private readonly structureId;
    private readonly payload;
    constructor(structureId: StructureId, payload: PagingConfig);
    getPagingConfig(): PagingConfig;
}
