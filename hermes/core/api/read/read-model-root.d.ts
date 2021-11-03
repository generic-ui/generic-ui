import { ReadModelRootId } from './read-model-root-id';
export declare abstract class ReadModelRoot<T extends ReadModelRootId> {
    private readonly rootId;
    protected constructor(gui: T);
    getId(): T;
}
//# sourceMappingURL=read-model-root.d.ts.map