import { DomainEventStream } from './domain-event.stream';
import { DomainEvent } from './domain-event';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
import { AggregateRoot } from '../tactical/aggregate/aggregate-root';
import * as i0 from "@angular/core";
export declare class DomainEventPublisher {
    private readonly eventStream;
    constructor(eventStream: DomainEventStream);
    publish(event: DomainEvent<AggregateId>): void;
    publish(events: ReadonlyArray<DomainEvent<AggregateId>>): void;
    publishFromAggregate(aggregate: AggregateRoot<AggregateId>): void;
    private publishEvent;
    static ɵfac: i0.ɵɵFactoryDeclaration<DomainEventPublisher, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DomainEventPublisher>;
}
//# sourceMappingURL=domain-event.publisher.d.ts.map