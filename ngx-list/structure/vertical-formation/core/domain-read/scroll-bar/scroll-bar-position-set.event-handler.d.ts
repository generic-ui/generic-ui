import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { VerticalFormationScrollBarPositionRepository } from './vertical-formation.scroll-bar-position.repository';
import { ScrollBarPositionSetEvent } from '../../domain/scroll-bar/scroll-bar-position-set.event';
import { StructureId } from '../../../../core/domain/structure.id';
export declare class ScrollBarPositionSetEventHandler implements DomainEventHandler<StructureId, ScrollBarPositionSetEvent> {
    private positionRepository;
    constructor(positionRepository: VerticalFormationScrollBarPositionRepository);
    forEvent(): DomainEventType<ScrollBarPositionSetEvent>;
    handle(event: ScrollBarPositionSetEvent): void;
}
