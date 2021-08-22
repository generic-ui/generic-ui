import { Observable } from 'rxjs';
import { AggregateId } from '../core/domain/tactical/aggregate/aggregate-id';
import { ReactiveService } from './reactive.service';
import { Optional } from './optional';
export interface DefaultAggregateValues<T> {
    aggregateId: AggregateId;
    value: T;
}
export declare abstract class AggregateArchive<T> extends ReactiveService {
    private archive;
    private archive$;
    protected constructor(defaultValue?: DefaultAggregateValues<T>);
    on(aggregateId: AggregateId): Observable<T>;
    get(aggregateId: AggregateId): Optional<T>;
    next(aggregateId: AggregateId, value: T): void;
    private initArchive;
}
