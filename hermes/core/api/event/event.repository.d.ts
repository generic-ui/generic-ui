import { Type } from '@angular/core';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
import { DomainEvent } from './domain-event';
import { ReadModelRootId } from '../read/read-model-root-id';
import { ReactiveService } from '../../../common/reactive/reactive.service';
import { HermesObservable } from '../../../common/stream/core/observable/hermes.observable';
export declare abstract class EventRepository<R extends ReadModelRootId, I extends AggregateId> extends ReactiveService {
    private readonly domainEventBus;
    protected constructor();
    protected onEvent(aggregateId: R, eventType: Type<DomainEvent<I>>): HermesObservable<DomainEvent<any>>;
}
