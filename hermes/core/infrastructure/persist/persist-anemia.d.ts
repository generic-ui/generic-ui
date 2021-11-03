import { ReadModelRootId } from '../../api/read/read-model-root-id';
export declare abstract class PersistAnemia<I extends ReadModelRootId> {
    private readonly readModelRootId;
    protected constructor(uid: I);
    getReadModelRootId(): I;
    getId(): string;
}
