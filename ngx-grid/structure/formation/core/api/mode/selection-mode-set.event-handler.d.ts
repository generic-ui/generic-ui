import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { SelectionModeSetEvent } from '../../domain/mode/selection-mode-set.event';
import { RowSelectionModeArchive } from './row-selection-mode.archive';
export declare class SelectionModeSetEventHandler implements DomainEventHandler<StructureId, SelectionModeSetEvent> {
    private readonly rowSelectionModeRepository;
    constructor(rowSelectionModeRepository: RowSelectionModeArchive);
    forEvent(): DomainEventType<SelectionModeSetEvent>;
    handle(modeSetEvent: SelectionModeSetEvent): void;
}
