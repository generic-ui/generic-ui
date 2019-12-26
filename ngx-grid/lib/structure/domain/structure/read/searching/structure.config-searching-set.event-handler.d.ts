import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSearchingRepository } from './structure.searching.repository';
import { StructureConfigSearchingSetEvent } from '../../command/search/config/structure.config-searching-set.event';
export declare class StructureConfigSearchingSetEventHandler extends DomainEventHandler {
    private structureSearchingRepository;
    constructor(structureSearchingRepository: StructureSearchingRepository);
    handle(event: StructureConfigSearchingSetEvent): void;
}
