import { DomainEvent, HermesObservable, Reactive } from '@generic-ui/hermes';
import { StructureReadModelRoot } from './structure.read-model-root';
import { StructureId } from '../global/structure.id';
export declare abstract class StructureReadModelRepository extends Reactive {
    private readonly domainEventBus;
    protected constructor();
    abstract getStructure(structureId: StructureId): StructureReadModelRoot;
    abstract on(structureId: StructureId): HermesObservable<StructureReadModelRoot>;
    protected abstract forEvents(): Array<typeof DomainEvent>;
    protected abstract subs(event: DomainEvent<StructureId>): void;
}
