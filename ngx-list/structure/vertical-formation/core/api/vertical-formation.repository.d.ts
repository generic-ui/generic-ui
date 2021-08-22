import { Observable } from 'rxjs';
import { DomainEventBus } from '@generic-ui/hermes';
import { Reactive } from '../../../../common/cdk/reactive/reactive';
import { StructureId } from '../../../core/domain/structure.id';
import { InMemoryStructureReadStore } from '../../../core/infrastructure/in-memory/api/in-memory-structure.read-store';
export declare class VerticalFormationRepository extends Reactive {
    private readonly domainEventBus;
    private readonly inMemoryStructureReadStore;
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
