import { Command } from '@generic-ui/hermes';
import { StructureId } from '../../../core/domain/structure.id';
import { SortOrder } from '../../../../composition/domain/column/sort/sort-order';
import { FieldId } from '../../../field/domain/core/field/field.id';
import { CompositionId } from '../../../../composition/domain/composition.id';
export declare class SetSortOrderCommand extends Command {
    private readonly compositionId;
    private readonly fieldId;
    private readonly sortOrder;
    constructor(structureId: StructureId, compositionId: CompositionId, fieldId: FieldId, sortOrder: SortOrder);
    getCompositionId(): CompositionId;
    getFieldId(): FieldId;
    getSortOrder(): SortOrder;
}
