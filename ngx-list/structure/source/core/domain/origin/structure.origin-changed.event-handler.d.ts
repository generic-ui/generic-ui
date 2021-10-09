import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureSourceOriginArchive } from './structure.source-origin.archive';
import { OriginSetEvent } from '../../domain/origin/set-origin/origin-set.event';
import { StructureId } from '../../../../core/api/structure.id';
export declare class StructureOriginChangedEventHandler implements DomainEventHandler<StructureId, OriginSetEvent> {
    private structureSourceOriginRepository;
    constructor(structureSourceOriginRepository: StructureSourceOriginArchive);
    forEvent(): DomainEventType<OriginSetEvent>;
    handle(event: OriginSetEvent): void;
}
