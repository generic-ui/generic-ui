import { StaticProvider, Type } from '@angular/core';
import { DomainEventHandler } from './event/domain-event.handler';
import { AggregateId } from './aggregate-id';
export declare function provideEventHandlers<I extends AggregateId>(handlers: Array<Type<DomainEventHandler<I>>>): Array<StaticProvider>;
