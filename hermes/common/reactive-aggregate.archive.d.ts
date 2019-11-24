import { Observable } from 'rxjs';
import { AggregateId } from '../domain/aggregate-id';
export declare abstract class ReactiveAggregateArchive<T> {
    private archive;
    private readonly archive$;
    protected constructor();
    set(aggregateId: AggregateId, value: T): void;
    select(aggregateId: AggregateId): Observable<T>;
}
