import { DomainEvent } from '../event/domain-event';
import { Reactive } from '../../../common/reactive/reactive';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
/**
 * @deprecated
 */
export declare abstract class ReadModelRootRepository<I extends AggregateId> extends Reactive {
    private readonly domainEventBus;
    protected constructor();
    protected abstract forEvents(): Array<typeof DomainEvent>;
    protected abstract subscribe(event: DomainEvent<I>): void;
}
