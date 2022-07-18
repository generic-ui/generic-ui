import { HermesObservable, Reactive } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/src/api/global/structure.id';
import { InMemoryStructureReadStore } from '../../../structure-core/src/persist/api/in-memory-structure.read-store';
export declare class VerticalFormationRepository extends Reactive {
    private readonly inMemoryStructureReadStore;
    private readonly verticalFormation;
    private readonly verticalFormation$;
    private readonly domainEventBus;
    constructor(inMemoryStructureReadStore: InMemoryStructureReadStore);
    static readonly services: (typeof InMemoryStructureReadStore)[];
    onVerticalScrollEnabled(structureId: StructureId): HermesObservable<boolean>;
    onRowHeight(structureId: StructureId): HermesObservable<number>;
    onContainerHeight(structureId: StructureId): HermesObservable<number>;
    onTopMargin(structureId: StructureId): HermesObservable<number>;
    private onVerticalFormation;
    private next;
}
