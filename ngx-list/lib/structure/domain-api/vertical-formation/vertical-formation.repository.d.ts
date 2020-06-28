import { Observable } from 'rxjs';
import { DomainEventBus } from '@generic-ui/hermes';
import { Reactive } from '../../../../common/cdk/reactive';
import { StructureId } from '../../domain/structure.id';
import { InMemoryStructureReadStore } from '../../infrastructure/in-memory/domain-api/in-memory-structure.read-store';
export declare class VerticalFormationRepository extends Reactive {
    private readonly domainEventBus;
    private inMemoryStructureReadStore;
    private readonly verticalFormation;
    private readonly verticalFormation$;
    constructor(domainEventBus: DomainEventBus, inMemoryStructureReadStore: InMemoryStructureReadStore);
    onVerticalScrollEnabled(structureId: StructureId): Observable<boolean>;
    onRowHeight(structureId: StructureId): Observable<number>;
    onContainerHeight(structureId: StructureId): Observable<number>;
    onTopMargin(structureId: StructureId): Observable<number>;
    private onVerticalFormation;
    private next;
}
