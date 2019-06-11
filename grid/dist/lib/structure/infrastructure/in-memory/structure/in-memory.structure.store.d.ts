import { StructureAggregate } from 'structure/domain/structure/command/structure.aggregate';
import { InMemoryStore } from 'generic-ui-cqrs';
export declare class InMemoryStructureStore extends InMemoryStore<StructureAggregate> {
}
