import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureQuickFilterRepository } from './structure.quick-filter.repository';
import { StructureConfigQuickFilterSetEvent } from '../../../domain/structure/filter/quick/structure.config-quick-filter-set.event';
export declare class StructureConfigQuickFilterSetEventHandler extends DomainEventHandler {
    private structureQuickFilterRepository;
    constructor(structureQuickFilterRepository: StructureQuickFilterRepository);
    handle(event: StructureConfigQuickFilterSetEvent): void;
}
