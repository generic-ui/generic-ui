import { DomainEventHandlerImpl } from '../handler/domain-event-handler-impl';
import { AggregateId } from '../../../api/tactical/aggregate/aggregate-id';
import { DomainEvent } from '../../../api/event/domain-event';
import { DomainEventBus } from '../domain-event.bus';
import { Reactive } from '../../../../common/reactive/reactive';
export declare class DomainEventHandlerInitializer<I extends AggregateId, E extends DomainEvent<I>> extends Reactive {
    private readonly domainEventBus;
    private unsub$;
    constructor(domainEventBus: DomainEventBus);
    static readonly services: readonly [typeof DomainEventBus];
    init(eventHandlers: Array<DomainEventHandlerImpl<I, E>>): void;
    reinit(eventHandlers: Array<DomainEventHandlerImpl<I, E>>): void;
    stop(): void;
}
