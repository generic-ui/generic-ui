import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { SelectedRowChangedEvent } from '../../../domain/formation/selected-row-changed.event';
import { RowSelectedRepository } from './row-selected.repository';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
export declare class SelectedRowChangedEventHandler implements DomainEventHandler<StructureId, SelectedRowChangedEvent> {
    private readonly rowSelectedRepository;
    constructor(rowSelectedRepository: RowSelectedRepository);
    forEvent(): DomainEventType<SelectedRowChangedEvent>;
    handle(rowChangedEvent: SelectedRowChangedEvent): void;
}
