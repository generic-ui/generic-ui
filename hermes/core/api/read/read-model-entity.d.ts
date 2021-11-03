import { ReadModelEntityId } from './read-model-entity-id';
export declare abstract class ReadModelEntity<T extends ReadModelEntityId> {
    private readonly entityId;
    protected constructor(gui: T);
    getId(): T;
}
