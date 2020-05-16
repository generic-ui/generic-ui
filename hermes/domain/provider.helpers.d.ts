import { StaticProvider, Type } from '@angular/core';
import { DomainEvent } from './event/domain-event';
import { DomainEventHandler } from './event/domain-event.handler';
import { AggregateId } from './aggregate-id';
export declare function provideEventHandlers<I extends AggregateId, E extends DomainEvent<I>>(handlers: Array<Type<DomainEventHandler<I, E>>>): Array<StaticProvider>;
