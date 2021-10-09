import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { VerticalFormationScrollBarPositionArchive } from './vertical-formation.scroll-bar-position.archive';
import { ScrollBarPositionSetEvent } from '../../domain/scroll-bar/scroll-bar-position-set.event';
import { StructureId } from '../../../../core/api/structure.id';
export declare class ScrollBarPositionSetEventHandler implements DomainEventHandler<StructureId, ScrollBarPositionSetEvent> {
    private positionRepository;
    constructor(positionRepository: VerticalFormationScrollBarPositionArchive);
    forEvent(): DomainEventType<ScrollBarPositionSetEvent>;
    handle(event: ScrollBarPositionSetEvent): void;
}
