import { Observable, Operator } from 'rxjs';
import { DomainEvent } from './domain-event';
import { DomainEventStream } from './domain-event.stream';
export declare class DomainEventBus<E = DomainEvent> extends Observable<E> {
    constructor(eventStream?: DomainEventStream);
    lift<R>(operator: Operator<E, R>): Observable<R>;
    ofEvent<E2 extends E>(...events: Array<typeof DomainEvent>): Observable<any>;
    private createEventInstance;
}
