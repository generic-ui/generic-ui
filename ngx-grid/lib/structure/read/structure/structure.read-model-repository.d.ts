import { Observable } from 'rxjs';
import { AggregateId, DomainEvent, DomainEventBus } from '@generic-ui/hermes';
import { Reactive } from '../../../../common/cdk/reactive';
import { StructureReadModelRoot } from './structure.read-model-root';
export declare abstract class StructureReadModelRepository extends Reactive {
    protected constructor(domainEventBus: DomainEventBus);
    abstract onStructure(aggregateId: AggregateId): Observable<StructureReadModelRoot>;
    protected abstract forEvents(): Array<typeof DomainEvent>;
    protected abstract subs(event: DomainEvent): void;
}
