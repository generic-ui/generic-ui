import { Type } from '@angular/core';
import { AggregateId } from '../../aggregate-id';
import { DomainEvent } from '../domain-event';
export interface MultiDomainEventHandler<I extends AggregateId, E extends DomainEvent<I>> {
    forEvents(): Array<Type<E>>;
    handle(event: E): void;
}
