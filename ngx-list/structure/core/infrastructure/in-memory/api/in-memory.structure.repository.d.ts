import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AggregateId, DomainEvent, DomainEventBus } from '@generic-ui/hermes';
import { StructureReadModelRepository } from '../../../../grid/core/domain-read/structure.read-model-repository';
import { StructureReadModelRoot } from '../../../../grid/core/domain-read/structure.read-model-root';
import { InMemoryStructureReadStore } from './in-memory-structure.read-store';
import { StructureId } from '../../../api/structure.id';
export declare class InMemoryStructureRepository extends StructureReadModelRepository implements OnDestroy {
    private inMemoryStructureReadStore;
    private readonly structureIdToStructure;
    private readonly structure$;
    constructor(domainEventBus: DomainEventBus, inMemoryStructureReadStore: InMemoryStructureReadStore);
    getStructure(aggregateId: AggregateId): StructureReadModelRoot;
    onStructure(aggregateId: AggregateId): Observable<StructureReadModelRoot>;
    protected forEvents(): Array<typeof DomainEvent>;
    protected subs(event: DomainEvent<StructureId>): void;
}
