import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-id';
import { SortStatus } from '../../../../composition/command/sort/sort-status';
import { FieldId } from '../../field/data-type/field.id';
import { CompositionId } from '../../../../composition/composition-id';
export declare class SetSortOrderCommand extends Command {
    private readonly compositionId;
    private readonly fieldId;
    private readonly sortOrder;
    constructor(structureId: StructureId, compositionId: CompositionId, fieldId: FieldId, sortOrder: SortStatus);
    getCompositionId(): CompositionId;
    getFieldId(): FieldId;
    getSortOrder(): SortStatus;
}
