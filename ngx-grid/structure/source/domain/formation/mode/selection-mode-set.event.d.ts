import { DomainEvent } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/domain/structure.id';
import { RowSelectionMode } from '../../../domain-api/row-selection';
export declare class SelectionModeSetEvent extends DomainEvent<StructureId> {
    private readonly mode;
    constructor(aggregateId: StructureId, mode: RowSelectionMode);
    getMode(): RowSelectionMode;
}
