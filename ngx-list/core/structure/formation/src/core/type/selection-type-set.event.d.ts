import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
import { RowSelectionType } from '../../api/row-selected/row-selection';
import { StructureDomainEvent } from '../../../../structure-core/src/core/structure.domain-event';
export declare class SelectionTypeSetEvent extends StructureDomainEvent {
    private readonly selectionType;
    constructor(aggregateId: StructureId, selectionType: RowSelectionType);
    getType(): RowSelectionType;
}
