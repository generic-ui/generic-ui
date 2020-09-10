import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../core/domain/structure.id';
import { FilterConfig } from '../../domain-api/filter-config';
export declare class SetConfigFilterCommand extends Command {
    private readonly filterConfig;
    constructor(structureId: StructureId, filterConfig: FilterConfig);
    getConfig(): FilterConfig;
}
