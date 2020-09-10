import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/domain/structure.id';
import { SelectionModeSetEvent } from '../../../domain/formation/mode/selection-mode-set.event';
import { RowSelectionModeRepository } from './row-selection-mode.repository';
export declare class SelectionModeSetEventHandler implements DomainEventHandler<StructureId, SelectionModeSetEvent> {
    private readonly rowSelectionModeRepository;
    constructor(rowSelectionModeRepository: RowSelectionModeRepository);
    forEvent(): DomainEventType<SelectionModeSetEvent>;
    handle(modeSetEvent: SelectionModeSetEvent): void;
}
