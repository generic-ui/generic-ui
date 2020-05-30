import { Type } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureSourceOriginRepository } from './structure.source-origin.repository';
import { OriginSetEvent } from '../../../domain/source/origin/set-origin/origin-set.event';
import { StructureId } from '../../../domain/structure.id';
export declare class StructureOriginChangedEventHandler implements DomainEventHandler<StructureId, OriginSetEvent> {
    private structureSourceOriginRepository;
    constructor(structureSourceOriginRepository: StructureSourceOriginRepository);
    forEvent(): Type<OriginSetEvent>;
    handle(event: OriginSetEvent): void;
}
