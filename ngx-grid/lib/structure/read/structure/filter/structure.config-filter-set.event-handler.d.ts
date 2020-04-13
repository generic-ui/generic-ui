import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureFilterRepository } from './structure.filter.repository';
import { StructureConfigFilterSetEvent } from '../../../domain/structure/filter/config/structure.config-filter-set.event';
import { StructureId } from '../../../domain/structure.id';
export declare class StructureConfigFilterSetEventHandler extends DomainEventHandler<StructureId> {
    private structureFilterRepository;
    constructor(structureFilterRepository: StructureFilterRepository);
    handle(event: StructureConfigFilterSetEvent): void;
}
