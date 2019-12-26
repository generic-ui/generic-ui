import { Observable } from 'rxjs';
import { AggregateId } from '../domain/aggregate-id';
import { ReactiveService } from './reactive.service';
export interface DefaultAggregateValues<T> {
    aggregateId: AggregateId;
    value: T;
}
export declare abstract class AggregateArchive<T> extends ReactiveService {
    private archive;
    private archive$;
    protected constructor(defaultValue?: DefaultAggregateValues<T>);
    when(aggregateId: AggregateId): Observable<T>;
    next(aggregateId: AggregateId, value: T): void;
    private initArchive;
}
