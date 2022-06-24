import { CompositionId } from '../../../../composition/api/global/composition.id';
import { FieldId } from '../../../field/domain/field/field.id';
import { StructureId } from '../../../core/api/global/structure.id';
import { StructureDomainEvent } from '../../../core/domain/structure.domain-event';
export declare class SortOrderSetEvent extends StructureDomainEvent {
    private readonly compositionId;
    private readonly directions;
    constructor(aggregateId: StructureId, compositionId: CompositionId, directions: Array<{
        fieldId: FieldId;
        direction: boolean;
    }>);
    getCompositionId(): CompositionId;
    getDirections(): any;
}
