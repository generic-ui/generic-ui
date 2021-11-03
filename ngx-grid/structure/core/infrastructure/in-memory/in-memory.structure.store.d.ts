import { InMemoryStore } from '@generic-ui/hermes';
import { StructureAggregate } from '../../domain/structure.aggregate';
import { StructureId } from '../../api/structure.id';
export declare class InMemoryStructureStore extends InMemoryStore<StructureId, StructureAggregate> {
}
