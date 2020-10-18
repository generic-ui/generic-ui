import { DomainEventHandler } from './domain-event.handler';
import { AggregateId } from '../../tactical/aggregate/aggregate-id';
import { DomainEvent } from '../domain-event';
import { MultiDomainEventHandler } from './multi-domain-event.handler';
import { DomainEventType } from './domain-event-type';
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
