import { DomainEvent } from '../../domain/event/domain-event';
import { DomainEventBus } from '../../domain/event/domain-event.bus';
import { Reactive } from '../../../common/reactive';
import { AggregateId } from '../../domain/tactical/aggregate/aggregate-id';
export declare abstract class ReadModelRootRepository<I extends AggregateId> extends Reactive {
    protected constructor(domainEventBus: DomainEventBus);
    protected abstract forEvents(): Array<typeof DomainEvent>;
    protected abstract subscribe(event: DomainEvent<I>): void;
}
