import { DomainEvent } from './domain-event';
import { DomainEventStream } from './domain-event.stream';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
import { DomainEventHandlerImpl } from './handler/domain-event-handler-impl';
import { HermesObservable } from '../../../common/stream/observable/hermes.observable';
import { HermesSubscription } from '../../../common/stream/subscription/hermes.subscription';
import { HermesSubscriber } from '../../../common/stream/observable/subscriber/hermes.subscriber';
export declare class DomainEventBus<E = DomainEvent<AggregateId>> extends HermesObservable<E> {
    private readonly eventStream;
    constructor(eventStream: DomainEventStream);
    subscribe(next?: (value: E) => void, error?: (error: any) => void, complete?: () => void): HermesSubscription;
    subscribe(subscriber: HermesSubscriber<E>): HermesSubscription;
    ofEvents<E2 extends E>(events: Array<typeof DomainEvent>): HermesObservable<any>;
    ofEventHandlers<E2 extends E>(handlers: Array<DomainEventHandlerImpl<AggregateId, DomainEvent<AggregateId>>>): any;
    private createEventInstance;
}
