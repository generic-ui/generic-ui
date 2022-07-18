import { AggregateId } from '@generic-ui/hermes';
import { StructureReadModelRootId } from '../read/structure.read-model-root-id';
export declare class StructureId extends AggregateId {
    constructor(id: string);
    toReadModelRootId(): StructureReadModelRootId;
}
