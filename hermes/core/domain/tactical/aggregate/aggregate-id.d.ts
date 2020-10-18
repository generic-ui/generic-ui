import { ReadModelRootId } from '../../../api/read/read-model-root-id';
import { HermesId } from '../hermes.id';
export declare abstract class AggregateId extends HermesId<string> {
    protected constructor(uid: string);
    abstract toReadModelRootId(): ReadModelRootId;
    toString(): string;
}
