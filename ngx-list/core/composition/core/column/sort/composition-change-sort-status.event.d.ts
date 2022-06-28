import { CompositionId } from '../../../api/global/composition.id';
import { ActiveColumnEntity } from '../../../domain/column/active/active-column.entity';
import { CompositionDomainEvent } from '../../composition.domain-event';
export declare class CompositionChangeSortStatusEvent extends CompositionDomainEvent {
    private readonly activeColumns;
    constructor(aggregateId: CompositionId, activeColumns: Array<ActiveColumnEntity>);
    getCompositionId(): CompositionId;
    getActiveColumns(): Array<ActiveColumnEntity>;
}
