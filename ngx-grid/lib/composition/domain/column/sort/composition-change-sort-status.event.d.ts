import { DomainEvent } from '@generic-ui/hermes';
import { CompositionId } from '../../composition.id';
import { ActiveColumnEntity } from '../active/active-column.entity';
export declare class CompositionChangeSortStatusEvent extends DomainEvent<CompositionId> {
    private readonly activeColumns;
    constructor(aggregateId: CompositionId, activeColumns: Array<ActiveColumnEntity>);
    getCompositionId(): CompositionId;
    getActiveColumns(): Array<ActiveColumnEntity>;
}
