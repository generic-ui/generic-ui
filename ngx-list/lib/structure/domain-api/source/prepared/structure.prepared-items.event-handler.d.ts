import { Type } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { StructurePreparedEntitiesSetEvent } from '../../../domain/source/prepared/structure.prepared-entities-set.event';
import { StructurePreparedItemsRepository } from './structure.prepared-items.repository';
import { StructureId } from '../../../domain/structure.id';
export declare class StructurePreparedItemsEventHandler implements DomainEventHandler<StructureId, StructurePreparedEntitiesSetEvent> {
    private structurePreparedItemsRepository;
    constructor(structurePreparedItemsRepository: StructurePreparedItemsRepository);
    forEvent(): Type<StructurePreparedEntitiesSetEvent>;
    handle(event: StructurePreparedEntitiesSetEvent): void;
}
