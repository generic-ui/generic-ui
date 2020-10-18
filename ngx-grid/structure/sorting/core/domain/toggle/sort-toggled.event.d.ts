import { CompositionId } from '../../../../../composition/core/api/composition.id';
import { FieldId } from '../../../../field/core/domain/field/field.id';
import { StructureId } from '../../../../core/api/structure.id';
import { StructureDomainEvent } from '../../../../core/domain/structure.domain-event';
export declare class SortToggledEvent extends StructureDomainEvent {
    private readonly compositionId;
    private readonly directions;
    constructor(aggregateId: StructureId, compositionId: CompositionId, directions: Array<{
        fieldId: FieldId;
        direction: boolean;
    }>);
    getCompositionId(): CompositionId;
    getDirections(): any;
}
