import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSummariesRepository } from '../../../read/structure/summaries/structure.summaries.repository';
import { StructureCreatedEvent } from './structure-created.event';
import { StructureId } from '../../structure.id';
export declare class StructureCreatedEventHandler extends DomainEventHandler<StructureId> {
    private structureSummariesRepository;
    constructor(structureSummariesRepository: StructureSummariesRepository);
    handle(event: StructureCreatedEvent): void;
}
