import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { SortOrder } from '../../../../../composition/src/domain/column/sort/sort-order';
import { FieldId } from '../../../../field/src/domain/field/field.id';
import { CompositionId } from '../../../../../composition/src/api/global/composition.id';
import { StructureCommand } from '../../../../structure-core/src/core/structure.command';
export declare class SetSortOrderCommand extends StructureCommand {
    private readonly compositionId;
    private readonly fieldId;
    private readonly sortOrder;
    constructor(structureId: StructureId, compositionId: CompositionId, fieldId: FieldId, sortOrder: SortOrder);
    getCompositionId(): CompositionId;
    getFieldId(): FieldId;
    getSortOrder(): SortOrder;
}
