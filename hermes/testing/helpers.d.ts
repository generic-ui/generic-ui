import { AggregateId } from '../core/domain/tactical/aggregate/aggregate-id';
import { AggregateEvent } from '../core/domain/tactical/aggregate/aggregate-event';
import { DomainEvent } from '../core/domain/event/domain-event';
export declare function assertDomainEvents<I extends AggregateId>(actualEvents: ReadonlyArray<DomainEvent<I>>, expectedEvents: Array<DomainEvent<I>>): void;
export declare function assertAggregateEvents<T extends AggregateId>(actualEvents: ReadonlyArray<AggregateEvent<T>>, expectedEvents: Array<AggregateEvent<T>>): void;
