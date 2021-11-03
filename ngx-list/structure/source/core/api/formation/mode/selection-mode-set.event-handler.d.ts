import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureId } from '../../../../../core/api/structure.id';
import { SelectionModeSetEvent } from '../../../domain/formation/mode/selection-mode-set.event';
import { RowSelectionModeRepository } from './row-selection-mode.repository';
import * as i0 from "@angular/core";
export declare class SelectionModeSetEventHandler implements DomainEventHandler<StructureId, SelectionModeSetEvent> {
    private readonly rowSelectionModeRepository;
    constructor(rowSelectionModeRepository: RowSelectionModeRepository);
    forEvent(): DomainEventType<SelectionModeSetEvent>;
    handle(modeSetEvent: SelectionModeSetEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectionModeSetEventHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SelectionModeSetEventHandler>;
}
//# sourceMappingURL=selection-mode-set.event-handler.d.ts.map