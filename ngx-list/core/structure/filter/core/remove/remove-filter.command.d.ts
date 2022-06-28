import { StructureId } from '../../../structure-core/api/global/structure.id';
import { FilterId } from '../../api/id/filter.id';
import { StructureCommand } from '../../../structure-core/core/structure.command';
export declare class RemoveFilterCommand extends StructureCommand {
    private readonly filterId;
    constructor(structureId: StructureId, filterId: FilterId);
    getFilterId(): FilterId;
}
