import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureId } from '../../../structure-core/api/global/structure.id';
import { SelectionModeSetEvent } from '../../core/mode/selection-mode-set.event';
import { RowSelectionModeArchive } from './row-selection-mode.archive';
export declare class SelectionModeSetEventHandler implements DomainEventHandler<StructureId, SelectionModeSetEvent> {
    private readonly rowSelectionModeRepository;
    constructor(rowSelectionModeRepository: RowSelectionModeArchive);
    static readonly services: (typeof RowSelectionModeArchive)[];
    forEvent(): DomainEventType<SelectionModeSetEvent>;
    handle(modeSetEvent: SelectionModeSetEvent): void;
}
