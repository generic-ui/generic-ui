import { AggregateId } from '../domain/aggregate-id';
import { AggregateEvent } from '../domain/command/aggregate/aggregate-event';
import { DomainEvent } from '../domain/event/domain-event';
export declare function assertDomainEvents(actualEvents: ReadonlyArray<DomainEvent>, expectedEvents: Array<DomainEvent>): void;
export declare function assertAggregateEvents<T extends AggregateId>(actualEvents: ReadonlyArray<AggregateEvent<T>>, expectedEvents: Array<AggregateEvent<T>>): void;
