import { AggregateId, DomainEvent } from '@generic-ui/hermes';
import { CompositionId } from '../../../../../../composition/domain/composition-id';
import { FieldId } from '../../field/data-type/field.id';
export declare class SortToggledEvent extends DomainEvent {
    private readonly compositionId;
    private readonly directions;
    constructor(aggregateId: AggregateId, compositionId: CompositionId, directions: Array<{
        fieldId: FieldId;
        direction: boolean;
    }>);
    getCompositionId(): CompositionId;
    getDirections(): any;
}
