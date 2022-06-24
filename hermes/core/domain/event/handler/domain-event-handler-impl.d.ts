import { DomainEventHandler } from '../../../api/event/domain-event.handler';
import { AggregateId } from '../../../api/tactical/aggregate/aggregate-id';
import { DomainEvent } from '../../../api/event/domain-event';
import { MultiDomainEventHandler } from '../../../api/event/multi-domain-event.handler';
import { DomainEventType } from '../../../api/event/domain-event-type';
export declare function domainEventHandlerFactoryAsFactory<I extends AggregateId, E extends DomainEvent<I>>(domainEventHandlerType: DomainEventHandler<I, E>): unknown;
export declare function domainEventHandlerFactory<I extends AggregateId, E extends DomainEvent<I>>(domainEventHandler: DomainEventHandler<I, E>): DomainEventHandlerImpl<I, E>;
export declare function multiDomainEventHandlerFactory<I extends AggregateId, E extends DomainEvent<I>>(domainEventHandler: MultiDomainEventHandler<I, E>): DomainEventHandlerImpl<I, E>;
export declare class DomainEventHandlerImpl<I extends AggregateId, E extends DomainEvent<I>> {
    private readonly domainEventHandler;
    private readonly events;
    private readonly eventTypes;
    constructor(domainEventHandler: DomainEventHandler<I, E> | MultiDomainEventHandler<I, E>, events: Array<DomainEventType<E>>);
    handleEvent(event: E): void;
    forEvents(events: Array<E>): boolean;
    private createDomainEventTypes;
    private createDomainEventInstance;
}
