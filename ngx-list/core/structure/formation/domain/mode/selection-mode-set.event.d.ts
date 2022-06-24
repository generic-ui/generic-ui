import { StructureId } from '../../../core/api/global/structure.id';
import { RowSelectionMode } from '../../api/row-selected/row-selection';
import { StructureDomainEvent } from '../../../core/domain/structure.domain-event';
export declare class SelectionModeSetEvent extends StructureDomainEvent {
    private readonly mode;
    constructor(aggregateId: StructureId, mode: RowSelectionMode);
    getMode(): RowSelectionMode;
}
