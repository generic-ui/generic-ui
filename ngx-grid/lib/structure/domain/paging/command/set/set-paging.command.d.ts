import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-id';
import { PagingConfig } from '../../paging-config';
export declare class SetPagingCommand extends Command {
    private readonly config;
    constructor(structureId: StructureId, config: PagingConfig);
    getPagingConfig(): PagingConfig;
}
