import { CompositionId } from '../../composition.id';
import { ActiveColumnEntity } from '../active/active-column.entity';
import { CompositionDomainEvent } from '../../composition.domain-event';
export declare class CompositionChangeSortStatusEvent extends CompositionDomainEvent {
    private readonly activeColumns;
    constructor(aggregateId: CompositionId, activeColumns: Array<ActiveColumnEntity>);
    getCompositionId(): CompositionId;
    getActiveColumns(): Array<ActiveColumnEntity>;
}
