import { StructureId } from '../../../../core/domain/structure.id';
import { FilterConfig } from '../../api/filter-config';
import { StructureCommand } from '../../../../core/domain/structure.command';
export declare class SetConfigFilterCommand extends StructureCommand {
    private readonly filterConfig;
    constructor(structureId: StructureId, filterConfig: FilterConfig);
    getConfig(): FilterConfig;
}
