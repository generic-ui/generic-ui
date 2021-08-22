import { DomainEventHandler } from './domain-event.handler';
import { DomainEventType } from './domain-event-type';
import { AggregateArchive, DefaultAggregateValues } from '../../../../common/aggregate.archive';
import { AggregateId } from '../../tactical/aggregate/aggregate-id';
import { DomainEvent } from '../domain-event';
export declare abstract class EventDrivenRepository<I extends AggregateId, E extends DomainEvent<I>, V> extends AggregateArchive<V> implements DomainEventHandler<I, E> {
    protected constructor(defaultValues?: DefaultAggregateValues<V>);
    abstract forEvent(): DomainEventType<E>;
    handle(event: E): void;
}
