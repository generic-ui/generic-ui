import { Observable } from 'rxjs';
import { AggregateId, DomainEvent, DomainEventBus } from '@generic-ui/hermes';
import { Structure } from './structure';
export declare abstract class StructureRepository {
    private readonly unsubscribe$;
    protected constructor(domainEventBus: DomainEventBus);
    abstract onStructure(aggregateId: AggregateId): Observable<Structure>;
    protected abstract forEvents(): Array<typeof DomainEvent>;
    protected abstract subs(event: DomainEvent): void;
    ngOnDestroy(): void;
}
