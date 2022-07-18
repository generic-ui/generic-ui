import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { PagingConfig } from '../../api/config/paging-config';
import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export declare class SetPagingCommand extends StructureCommand {
    private readonly config;
    constructor(structureId: StructureId, config: PagingConfig);
    getPagingConfig(): PagingConfig;
}
