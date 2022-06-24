import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { SummariesEnabledArchive } from './summaries-enabled-archive.service';
import { StructureSummariesEnabledSetEvent } from '../../domain/set/structure.summaries-enabled-set.event';
import { StructureId } from '../../../core/api/global/structure.id';
export declare class StructureSummariesEnabledSetEventHandler implements DomainEventHandler<StructureId, StructureSummariesEnabledSetEvent> {
    private readonly summariesEnabledArchive;
    constructor(summariesEnabledArchive: SummariesEnabledArchive);
    static readonly services: (typeof SummariesEnabledArchive)[];
    forEvent(): DomainEventType<StructureSummariesEnabledSetEvent>;
    handle(event: StructureSummariesEnabledSetEvent): void;
}
