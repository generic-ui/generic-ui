import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { SelectedRowChangedEvent } from '../../../domain/formation/selected-row-changed.event';
import { RowSelectedRepository } from './row-selected.repository';
import { StructureId } from '../../../../../core/api/structure.id';
import * as i0 from "@angular/core";
export declare class SelectedRowChangedEventHandler implements DomainEventHandler<StructureId, SelectedRowChangedEvent> {
    private readonly rowSelectedRepository;
    constructor(rowSelectedRepository: RowSelectedRepository);
    forEvent(): DomainEventType<SelectedRowChangedEvent>;
    handle(rowChangedEvent: SelectedRowChangedEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectedRowChangedEventHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SelectedRowChangedEventHandler>;
}
//# sourceMappingURL=selected-row-changed.event-handler.d.ts.map