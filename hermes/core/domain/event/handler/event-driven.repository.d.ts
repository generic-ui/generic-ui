import { DomainEventHandler } from '../../../api/event/domain-event.handler';
import { DomainEventType } from '../../../api/event/domain-event-type';
import { AggregateArchive } from '../../../../common/archive/aggregate.archive';
import { AggregateId } from '../../../api/tactical/aggregate/aggregate-id';
import { DomainEvent } from '../../../api/event/domain-event';
export declare abstract class EventDrivenRepository<I extends AggregateId, E extends DomainEvent<I>, V> extends AggregateArchive<V> implements DomainEventHandler<I, E> {
    protected constructor(defaultValues?: V);
    abstract forEvent(): DomainEventType<E>;
    handle(event: E): void;
}
