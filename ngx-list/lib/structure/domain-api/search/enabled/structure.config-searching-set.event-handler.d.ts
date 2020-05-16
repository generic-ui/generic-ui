import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSearchingRepository } from './structure.searching.repository';
import { StructureConfigSearchingSetEvent } from '../../../domain/structure/search/config/structure.config-searching-set.event';
import { StructureId } from '../../../domain/structure.id';
export declare class StructureConfigSearchingSetEventHandler extends DomainEventHandler<StructureId, StructureConfigSearchingSetEvent> {
    private structureSearchingRepository;
    constructor(structureSearchingRepository: StructureSearchingRepository);
    handle(event: StructureConfigSearchingSetEvent): void;
}
