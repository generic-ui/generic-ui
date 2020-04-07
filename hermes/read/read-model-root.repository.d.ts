import { DomainEvent } from '../domain/event/domain-event';
import { DomainEventBus } from '../domain/event/domain-event.bus';
import { Reactive } from '../common/reactive';
export declare abstract class ReadModelRootRepository extends Reactive {
    protected constructor(domainEventBus: DomainEventBus);
    protected abstract forEvents(): Array<typeof DomainEvent>;
    protected abstract subscribe(event: DomainEvent): void;
}
