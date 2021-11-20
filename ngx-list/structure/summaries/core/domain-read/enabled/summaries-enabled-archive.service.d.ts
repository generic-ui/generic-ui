import { AggregateArchive } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
export declare class SummariesEnabledArchive extends AggregateArchive<boolean> {
    constructor();
    init(structureId: StructureId): void;
}
