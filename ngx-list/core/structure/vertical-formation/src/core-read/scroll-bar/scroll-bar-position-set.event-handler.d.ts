import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { VerticalFormationScrollBarPositionArchive } from './vertical-formation.scroll-bar-position.archive';
import { ScrollBarPositionSetEvent } from '../../core/scroll-bar/scroll-bar-position-set.event';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
export declare class ScrollBarPositionSetEventHandler implements DomainEventHandler<StructureId, ScrollBarPositionSetEvent> {
    private readonly positionRepository;
    constructor(positionRepository: VerticalFormationScrollBarPositionArchive);
    static readonly services: readonly [typeof VerticalFormationScrollBarPositionArchive];
    forEvent(): DomainEventType<ScrollBarPositionSetEvent>;
    handle(event: ScrollBarPositionSetEvent): void;
}
