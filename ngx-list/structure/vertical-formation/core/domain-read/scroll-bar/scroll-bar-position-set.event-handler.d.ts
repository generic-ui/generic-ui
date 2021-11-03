import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { VerticalFormationScrollBarPositionArchive } from './vertical-formation.scroll-bar-position.archive';
import { ScrollBarPositionSetEvent } from '../../domain/scroll-bar/scroll-bar-position-set.event';
import { StructureId } from '../../../../core/api/structure.id';
import * as i0 from "@angular/core";
export declare class ScrollBarPositionSetEventHandler implements DomainEventHandler<StructureId, ScrollBarPositionSetEvent> {
    private positionRepository;
    constructor(positionRepository: VerticalFormationScrollBarPositionArchive);
    forEvent(): DomainEventType<ScrollBarPositionSetEvent>;
    handle(event: ScrollBarPositionSetEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScrollBarPositionSetEventHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ScrollBarPositionSetEventHandler>;
}
//# sourceMappingURL=scroll-bar-position-set.event-handler.d.ts.map