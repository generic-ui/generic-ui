import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureSourceOriginRepository } from './structure.source-origin.repository';
import { OriginSetEvent } from '../../domain/origin/set-origin/origin-set.event';
import { StructureId } from '../../../../core/domain/structure.id';
export declare class StructureOriginChangedEventHandler implements DomainEventHandler<StructureId, OriginSetEvent> {
    private structureSourceOriginRepository;
    constructor(structureSourceOriginRepository: StructureSourceOriginRepository);
    forEvent(): DomainEventType<OriginSetEvent>;
    handle(event: OriginSetEvent): void;
}
