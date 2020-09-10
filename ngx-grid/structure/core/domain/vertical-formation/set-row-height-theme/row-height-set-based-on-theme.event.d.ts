import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../structure.id';
export declare class RowHeightSetBasedOnThemeEvent extends DomainEvent<StructureId> {
    constructor(structureId: StructureId);
}
