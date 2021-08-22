import { StructureId } from '../../../../core/domain/structure.id';
import { PagingConfig } from '../../api/paging-config';
import { StructureCommand } from '../../../../core/domain/structure.command';
export declare class SetPagingCommand extends StructureCommand {
    private readonly config;
    constructor(structureId: StructureId, config: PagingConfig);
    getPagingConfig(): PagingConfig;
}
