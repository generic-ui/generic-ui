import { ReadModelRootId } from './read-model-root-id';
/**
 * @deprecated
 */
export declare abstract class ReadModelRoot<T extends ReadModelRootId> {
    private readonly rootId;
    protected constructor(gui: T);
    getId(): T;
}
