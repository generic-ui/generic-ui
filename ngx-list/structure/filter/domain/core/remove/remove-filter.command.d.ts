import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
import { FilterId } from '../../filter.id';
export declare class RemoveFilterCommand extends Command {
    private readonly filterId;
    constructor(structureId: StructureId, filterId: FilterId);
    getFilterId(): FilterId;
}
