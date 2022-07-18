import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { SummariesEnabledArchive } from '../../../../summaries/src/core-read/enabled/summaries-enabled-archive.service';
import { StructureCreatedEvent } from './structure-created.event';
import { StructureId } from '../../api/global/structure.id';
export declare class StructureCreatedEventHandler implements DomainEventHandler<StructureId, StructureCreatedEvent> {
    private readonly summariesEnabledArchive;
    constructor(summariesEnabledArchive: SummariesEnabledArchive);
    static readonly services: (typeof SummariesEnabledArchive)[];
    forEvent(): DomainEventType<StructureCreatedEvent>;
    handle(event: StructureCreatedEvent): void;
}
