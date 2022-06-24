import { StructureId } from '../../../core/api/global/structure.id';
import { SortOrder } from '../../../../composition/domain/column/sort/sort-order';
import { FieldId } from '../../../field/domain/field/field.id';
import { CompositionId } from '../../../../composition/api/global/composition.id';
import { StructureCommand } from '../../../core/domain/structure.command';
export declare class SetSortOrderCommand extends StructureCommand {
    private readonly compositionId;
    private readonly fieldId;
    private readonly sortOrder;
    constructor(structureId: StructureId, compositionId: CompositionId, fieldId: FieldId, sortOrder: SortOrder);
    getCompositionId(): CompositionId;
    getFieldId(): FieldId;
    getSortOrder(): SortOrder;
}
