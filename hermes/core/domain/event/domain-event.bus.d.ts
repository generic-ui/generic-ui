import { DomainEvent } from '../../api/event/domain-event';
import { DomainEventStream } from './domain-event.stream';
import { AggregateId } from '../../api/tactical/aggregate/aggregate-id';
import { DomainEventHandlerImpl } from './handler/domain-event-handler-impl';
import { HermesObservable } from '../../../common/stream/core/observable/hermes.observable';
import { HermesSubscription } from '../../../common/stream/core/subscription/hermes.subscription';
import { HermesSubscriber } from '../../../common/stream/core/observable/subscriber/hermes.subscriber';
export declare class DomainEventBus<E = DomainEvent<AggregateId>> extends HermesObservable<E> {
    private readonly eventStream;
    constructor(eventStream: DomainEventStream);
    static readonly services: readonly [typeof DomainEventStream];
    subscribe(next?: (value: E) => void, error?: (error: any) => void, complete?: () => void): HermesSubscription;
    subscribe(subscriber: HermesSubscriber<E>): HermesSubscription;
    ofEvents(events: Array<typeof DomainEvent>): HermesObservable<any>;
    ofEventHandlers(handlers: Array<DomainEventHandlerImpl<AggregateId, DomainEvent<AggregateId>>>): any;
    private createEventInstance;
}
