import { AggregateEvent, DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/domain/structure.id';
import { RowSelectionMode } from '../../../domain-api/row-selection';
export declare class SelectionModeSetAggregateEvent extends AggregateEvent<StructureId> {
    private readonly mode;
    constructor(structureId: StructureId, mode: RowSelectionMode);
    toDomainEvent(): DomainEvent<StructureId>;
}
