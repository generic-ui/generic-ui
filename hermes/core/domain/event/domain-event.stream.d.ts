import { DomainEvent } from './domain-event';
import { DomainEventStore } from './domain-event.store';
import { AggregateId } from '../tactical/aggregate/aggregate-id';
import { HermesSubject } from '../../../common/stream/observable/hermes.subject';
import * as i0 from "@angular/core";
export declare class DomainEventStream extends HermesSubject<DomainEvent<AggregateId>> {
    private readonly eventStore;
    constructor(eventStore: DomainEventStore);
    next(event: DomainEvent<AggregateId>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DomainEventStream, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DomainEventStream>;
}
//# sourceMappingURL=domain-event.stream.d.ts.map