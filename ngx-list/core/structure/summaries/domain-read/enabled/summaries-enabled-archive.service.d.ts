import { AggregateArchive } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/global/structure.id';
export declare class SummariesEnabledArchive extends AggregateArchive<boolean> {
    constructor();
    init(structureId: StructureId): void;
}
