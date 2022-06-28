import { ReadModelEntityId } from './read-model-entity-id';
/**
 * @deprecated
 */
export declare abstract class ReadModelEntity<T extends ReadModelEntityId> {
    private readonly entityId;
    protected constructor(gui: T);
    getId(): T;
}
