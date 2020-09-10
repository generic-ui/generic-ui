import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../core/domain/structure.id';
import { PagingConfig } from '../../domain-api/paging-config';
export declare class SetPagingCommand extends Command {
    private readonly config;
    constructor(structureId: StructureId, config: PagingConfig);
    getPagingConfig(): PagingConfig;
}
