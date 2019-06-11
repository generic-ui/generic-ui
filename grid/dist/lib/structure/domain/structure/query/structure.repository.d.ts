import { Observable } from 'rxjs/';
import { Structure } from 'structure/domain/structure/query/structure';
import { AggregateId } from 'generic-ui-cqrs';
export declare abstract class StructureRepository {
    abstract select(aggregateId: AggregateId): Observable<Structure>;
}
