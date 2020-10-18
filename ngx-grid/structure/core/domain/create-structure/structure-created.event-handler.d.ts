import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureSummariesRepository } from '../../../summaries/core/api/enabled/structure.summaries.repository';
import { StructureCreatedEvent } from './structure-created.event';
import { StructureId } from '../../api/structure.id';
export declare class StructureCreatedEventHandler implements DomainEventHandler<StructureId, StructureCreatedEvent> {
    private structureSummariesRepository;
    constructor(structureSummariesRepository: StructureSummariesRepository);
    forEvent(): DomainEventType<StructureCreatedEvent>;
    handle(event: StructureCreatedEvent): void;
}
