import { Type } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureQuickFilterRepository } from './structure.quick-filter.repository';
import { StructureConfigQuickFilterSetEvent } from '../../../domain/structure/filter/quick/structure.config-quick-filter-set.event';
import { StructureId } from '../../../domain/structure.id';
export declare class StructureConfigQuickFilterSetEventHandler implements DomainEventHandler<StructureId, StructureConfigQuickFilterSetEvent> {
    private structureQuickFilterRepository;
    constructor(structureQuickFilterRepository: StructureQuickFilterRepository);
    forEvent(): Type<StructureConfigQuickFilterSetEvent>;
    handle(event: StructureConfigQuickFilterSetEvent): void;
}
