import { StaticProvider, Type } from '@angular/core';
import { DomainEvent } from '../api/event/domain-event';
import { AggregateId } from '../api/tactical/aggregate/aggregate-id';
import { DomainEventHandler } from '../api/event/domain-event.handler';
export declare function provideEventHandlers<I extends AggregateId, E extends DomainEvent<I>>(handlers: Array<Type<DomainEventHandler<I, E>>>): Array<StaticProvider>;
