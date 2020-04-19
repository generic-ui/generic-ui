import { Type } from '@angular/core';
import { Observable } from 'rxjs';
import { AggregateId } from '../../domain/aggregate-id';
import { DomainEvent } from '../../domain/event/domain-event';
import { ReadModelRootId } from '../read/read-model-root-id';
import { DomainEventBus } from '../../domain/event/domain-event.bus';
export declare abstract class EventRepository<R extends ReadModelRootId, I extends AggregateId> {
    private readonly domainEventBus;
    protected constructor(domainEventBus: DomainEventBus);
    protected onEvent(aggregateId: R, eventType: Type<DomainEvent<I>>): Observable<DomainEvent<I>>;
}
