import { StructureId } from '../../../../../core/domain/structure.id';
import { FilterId } from '../../../api/filter.id';
import { StructureCommand } from '../../../../../core/domain/structure.command';
export declare class RemoveFilterCommand extends StructureCommand {
    private readonly filterId;
    constructor(structureId: StructureId, filterId: FilterId);
    getFilterId(): FilterId;
}
