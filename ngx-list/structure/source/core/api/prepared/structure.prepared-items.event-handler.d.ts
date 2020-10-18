import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructurePreparedEntitiesSetEvent } from '../../domain/prepared/structure.prepared-entities-set.event';
import { StructurePreparedItemsRepository } from './structure.prepared-items.repository';
import { StructureId } from '../../../../core/api/structure.id';
export declare class StructurePreparedItemsEventHandler implements DomainEventHandler<StructureId, StructurePreparedEntitiesSetEvent> {
    private structurePreparedItemsRepository;
    constructor(structurePreparedItemsRepository: StructurePreparedItemsRepository);
    forEvent(): DomainEventType<StructurePreparedEntitiesSetEvent>;
    handle(event: StructurePreparedEntitiesSetEvent): void;
}
