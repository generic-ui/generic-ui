import { DomainEventHandler } from '@generic-ui/hermes';
import { StructurePreparedEntitiesSetEvent } from '../../../domain/source/prepared/structure.prepared-entities-set.event';
import { StructurePreparedItemsRepository } from './structure.prepared-items.repository';
import { StructureId } from '../../../domain/structure.id';
export declare class StructurePreparedItemsEventHandler extends DomainEventHandler<StructureId, StructurePreparedEntitiesSetEvent> {
    private structurePreparedItemsRepository;
    constructor(structurePreparedItemsRepository: StructurePreparedItemsRepository);
    handle(event: StructurePreparedEntitiesSetEvent): void;
}
