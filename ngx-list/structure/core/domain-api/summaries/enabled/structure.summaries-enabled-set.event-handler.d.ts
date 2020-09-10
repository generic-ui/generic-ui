import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureSummariesRepository } from './structure.summaries.repository';
import { StructureSummariesEnabledSetEvent } from '../../../domain/summaries/set/structure.summaries-enabled-set.event';
import { StructureId } from '../../../domain/structure.id';
export declare class StructureSummariesEnabledSetEventHandler implements DomainEventHandler<StructureId, StructureSummariesEnabledSetEvent> {
    private structureSummariesRepository;
    constructor(structureSummariesRepository: StructureSummariesRepository);
    forEvent(): DomainEventType<StructureSummariesEnabledSetEvent>;
    handle(event: StructureSummariesEnabledSetEvent): void;
}
