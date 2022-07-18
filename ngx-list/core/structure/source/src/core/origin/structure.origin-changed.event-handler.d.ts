import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureSourceOriginArchive } from './structure.source-origin.archive';
import { OriginSetEvent } from './set/origin-set.event';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
export declare class StructureOriginChangedEventHandler implements DomainEventHandler<StructureId, OriginSetEvent> {
    private readonly structureSourceOriginRepository;
    constructor(structureSourceOriginRepository: StructureSourceOriginArchive);
    static readonly services: (typeof StructureSourceOriginArchive)[];
    forEvent(): DomainEventType<OriginSetEvent>;
    handle(event: OriginSetEvent): void;
}
