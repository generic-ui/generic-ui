import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructurePreparedEntitiesSetEvent } from '../../domain/prepared/structure.prepared-entities-set.event';
import { StructurePreparedItemsArchive } from './structure.prepared-items.archive';
import { StructureId } from '../../../../core/api/structure.id';
import * as i0 from "@angular/core";
export declare class StructurePreparedItemsEventHandler implements DomainEventHandler<StructureId, StructurePreparedEntitiesSetEvent> {
    private structurePreparedItemsRepository;
    constructor(structurePreparedItemsRepository: StructurePreparedItemsArchive);
    forEvent(): DomainEventType<StructurePreparedEntitiesSetEvent>;
    handle(event: StructurePreparedEntitiesSetEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructurePreparedItemsEventHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StructurePreparedItemsEventHandler>;
}
//# sourceMappingURL=structure.prepared-items.event-handler.d.ts.map