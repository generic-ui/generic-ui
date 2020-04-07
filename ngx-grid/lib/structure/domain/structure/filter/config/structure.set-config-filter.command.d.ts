import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../structure.id';
import { FilterConfig } from '../../../../ui-api/structure/filter/filter-config';
export declare class StructureSetConfigFilterCommand extends Command {
    private readonly filterConfig;
    constructor(structureId: StructureId, filterConfig: FilterConfig);
    getConfig(): FilterConfig;
}
