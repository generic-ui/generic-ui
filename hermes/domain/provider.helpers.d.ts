import { StaticProvider, Type } from '@angular/core';
import { DomainEvent } from './event/domain-event';
import { AggregateId } from './aggregate-id';
import { DomainEventHandler } from './event/handler/domain-event.handler';
export declare function provideEventHandlers<I extends AggregateId, E extends DomainEvent<I>>(handlers: Array<Type<DomainEventHandler<I, E>>>): Array<StaticProvider>;
