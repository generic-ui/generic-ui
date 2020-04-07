import { DomainEventHandler } from '@generic-ui/hermes';
import { StructurePreparedEntitiesSetEvent } from '../../../domain/source/prepared/structure.prepared-entities-set.event';
import { StructurePreparedItemsRepository } from './structure.prepared-items.repository';
export declare class StructurePreparedItemsEventHandler extends DomainEventHandler {
    private structurePreparedItemsRepository;
    constructor(structurePreparedItemsRepository: StructurePreparedItemsRepository);
    handle(event: StructurePreparedEntitiesSetEvent): void;
}
