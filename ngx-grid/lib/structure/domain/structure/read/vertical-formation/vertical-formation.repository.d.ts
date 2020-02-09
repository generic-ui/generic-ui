import { Observable } from 'rxjs';
import { DomainEventBus } from '@generic-ui/hermes';
import { Reactive } from '../../../../../../common/cdk/reactive';
import { StructureId } from '../../../structure-id';
import { InMemoryStructureReadStore } from '../../../../infrastructure/in-memory/structure/read/in-memory-structure.read-store';
export declare class VerticalFormationRepository extends Reactive {
    private readonly domainEventBus;
    private inMemoryStructureQueryStore;
    private readonly verticalFormation;
    private readonly verticalFormation$;
    constructor(domainEventBus: DomainEventBus, inMemoryStructureQueryStore: InMemoryStructureReadStore);
    onVerticalScrollEnabled(structureId: StructureId): Observable<boolean>;
    onRowHeight(structureId: StructureId): Observable<number>;
    private onVerticalFormation;
    private next;
}
