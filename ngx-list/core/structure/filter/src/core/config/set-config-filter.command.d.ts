import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { FilterConfig } from '../../api/config/filter.config';
import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export declare class SetConfigFilterCommand extends StructureCommand {
    private readonly filterConfig;
    constructor(structureId: StructureId, filterConfig: FilterConfig);
    getConfig(): FilterConfig;
}
