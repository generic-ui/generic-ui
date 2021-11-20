import { DomainEventBus, HermesObservable, Reactive } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { InMemoryStructureReadStore } from '../../../core/infrastructure/in-memory/api/in-memory-structure.read-store';
export declare class VerticalFormationRepository extends Reactive {
    private readonly domainEventBus;
    private readonly inMemoryStructureReadStore;
    private readonly verticalFormation;
    private readonly verticalFormation$;
    constructor(domainEventBus: DomainEventBus, inMemoryStructureReadStore: InMemoryStructureReadStore);
    onVerticalScrollEnabled(structureId: StructureId): HermesObservable<boolean>;
    onRowHeight(structureId: StructureId): HermesObservable<number>;
    onContainerHeight(structureId: StructureId): HermesObservable<number>;
    onTopMargin(structureId: StructureId): HermesObservable<number>;
    private onVerticalFormation;
    private next;
}
