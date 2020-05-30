import { Type } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureFilterRepository } from './structure.filter.repository';
import { StructureConfigFilterSetEvent } from '../../../domain/structure/filter/config/structure.config-filter-set.event';
import { StructureId } from '../../../domain/structure.id';
export declare class StructureConfigFilterSetEventHandler implements DomainEventHandler<StructureId, StructureConfigFilterSetEvent> {
    private structureFilterRepository;
    constructor(structureFilterRepository: StructureFilterRepository);
    forEvent(): Type<StructureConfigFilterSetEvent>;
    handle(event: StructureConfigFilterSetEvent): void;
}
