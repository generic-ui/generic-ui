import { AggregateEvent } from '../domain/command/aggregate/aggregate-event';
import { DomainEvent } from '../domain/event/domain-event';
export declare function assertDomainEvents(actualEvents: ReadonlyArray<DomainEvent>, expectedEvents: Array<DomainEvent>): void;
export declare function assertAggregateEvents(actualEvents: ReadonlyArray<AggregateEvent>, expectedEvents: Array<AggregateEvent>): void;
