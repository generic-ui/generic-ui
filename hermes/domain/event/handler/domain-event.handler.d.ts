import { Type } from '@angular/core';
import { AggregateId } from '../../aggregate-id';
import { DomainEvent } from '../domain-event';
export interface DomainEventHandler<I extends AggregateId, E extends DomainEvent<I>> {
    forEvent(): Type<E>;
    handle(event: E): void;
}
