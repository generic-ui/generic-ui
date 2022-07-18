import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructurePreparedEntitiesSetEvent } from './structure.prepared-entities-set.event';
import { StructurePreparedItemsArchive } from './structure.prepared-items.archive';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
export declare class StructurePreparedItemsEventHandler implements DomainEventHandler<StructureId, StructurePreparedEntitiesSetEvent> {
    private readonly structurePreparedItemsRepository;
    constructor(structurePreparedItemsRepository: StructurePreparedItemsArchive);
    static readonly services: (typeof StructurePreparedItemsArchive)[];
    forEvent(): DomainEventType<StructurePreparedEntitiesSetEvent>;
    handle(event: StructurePreparedEntitiesSetEvent): void;
}
