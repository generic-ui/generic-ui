import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { RowSelectionMode } from '../../api/row-selected/row-selection';
import { StructureDomainEvent } from '../../../../structure-core/src/core/structure.domain-event';
export declare class SelectionModeSetEvent extends StructureDomainEvent {
    private readonly mode;
    constructor(aggregateId: StructureId, mode: RowSelectionMode);
    getMode(): RowSelectionMode;
}
