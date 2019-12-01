import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureFilterRepository } from './structure.filter.repository';
import { StructureConfigFilterSetEvent } from '../../command/filter/config/structure.config-filter-set.event';
export declare class StructureConfigFilterSetEventHandler extends DomainEventHandler {
    private structureFilterRepository;
    constructor(structureFilterRepository: StructureFilterRepository);
    handle(event: StructureConfigFilterSetEvent): void;
}
