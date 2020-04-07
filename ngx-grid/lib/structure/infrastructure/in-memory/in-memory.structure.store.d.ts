import { InMemoryStore } from '@generic-ui/hermes';
import { StructureAggregate } from '../../domain/structure/structure.aggregate';
import { StructureId } from '../../domain/structure.id';
export declare class InMemoryStructureStore extends InMemoryStore<StructureId, StructureAggregate> {
}
