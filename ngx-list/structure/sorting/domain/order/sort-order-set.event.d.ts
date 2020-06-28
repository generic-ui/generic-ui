import { DomainEvent } from '@generic-ui/hermes';
import { CompositionId } from '../../../../lib/composition/domain/composition.id';
import { FieldId } from '../../../field/domain/core/field/field.id';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
export declare class SortOrderSetEvent extends DomainEvent<StructureId> {
    private readonly compositionId;
    private readonly directions;
    constructor(aggregateId: StructureId, compositionId: CompositionId, directions: Array<{
        fieldId: FieldId;
        direction: boolean;
    }>);
    getCompositionId(): CompositionId;
    getDirections(): any;
}
