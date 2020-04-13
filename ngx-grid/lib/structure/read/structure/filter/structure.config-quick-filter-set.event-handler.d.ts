import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureQuickFilterRepository } from './structure.quick-filter.repository';
import { StructureConfigQuickFilterSetEvent } from '../../../domain/structure/filter/quick/structure.config-quick-filter-set.event';
import { StructureId } from '../../../domain/structure.id';
export declare class StructureConfigQuickFilterSetEventHandler extends DomainEventHandler<StructureId> {
    private structureQuickFilterRepository;
    constructor(structureQuickFilterRepository: StructureQuickFilterRepository);
    handle(event: StructureConfigQuickFilterSetEvent): void;
}
