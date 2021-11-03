import { Type } from '@angular/core';
import { AggregateId } from '../../domain/tactical/aggregate/aggregate-id';
import { DomainEvent } from '../../domain/event/domain-event';
import { ReadModelRootId } from '../read/read-model-root-id';
import { DomainEventBus } from '../../domain/event/domain-event.bus';
import { ReactiveService } from '../../../common/reactive.service';
import { HermesObservable } from '../../../common/stream/observable/hermes.observable';
export declare abstract class EventRepository<R extends ReadModelRootId, I extends AggregateId> extends ReactiveService {
    private readonly domainEventBus;
    protected constructor(domainEventBus: DomainEventBus);
    protected onEvent(aggregateId: R, eventType: Type<DomainEvent<I>>): HermesObservable<DomainEvent<any>>;
}
//# sourceMappingURL=event.repository.d.ts.map