import { DomainEvent, HermesObservable } from '@generic-ui/hermes';
import { StructureReadModelRepository } from '../../api/read/structure.read-model-repository';
import { StructureReadModelRoot } from '../../api/read/structure.read-model-root';
import { InMemoryStructureReadStore } from './in-memory-structure.read-store';
import { StructureId } from '../../api/global/structure.id';
export declare class InMemoryStructureRepository extends StructureReadModelRepository {
    private readonly inMemoryStructureReadStore;
    private readonly structureIdToStructure;
    private readonly hermesStructure$;
    constructor(inMemoryStructureReadStore: InMemoryStructureReadStore);
    static readonly services: (typeof InMemoryStructureReadStore)[];
    getStructure(structureId: StructureId): StructureReadModelRoot;
    on(structureId: StructureId): HermesObservable<StructureReadModelRoot>;
    protected forEvents(): Array<typeof DomainEvent>;
    protected subs(event: DomainEvent<StructureId>): void;
}
