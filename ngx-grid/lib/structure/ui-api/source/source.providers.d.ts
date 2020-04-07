import { SourceDispatcher } from '../../domain/source/source.dispatcher';
import { SourceManagerFactory } from '../../domain/source/source.manager-factory';
import { StructureSourceDomainEventPublisher } from '../../domain/source/structure.source.domain-event.publisher';
import { StructureOriginChangedEventHandler } from '../../read/source/origin/structure.origin-changed.event-handler';
import { SourceConverter } from '../../read/source/source.converter';
import { SourceCommandDispatcher } from './source.command-dispatcher';
import { StructureSourceReadModelWarehouse } from './structure-source.read-model-warehouse';
import { SourceEventService } from './event/source-event.service';
import { StructureSourceOriginRepository } from '../../read/source/origin/structure.source-origin.repository';
import { StructurePreparedItemsRepository } from '../../read/source/prepared/structure.prepared-items.repository';
import { StructurePreparedItemsEventHandler } from '../../read/source/prepared/structure.prepared-items.event-handler';
export declare const sourceCommandHandlers: import("@angular/core").Provider[];
export declare const sourceProviders: (typeof StructureSourceOriginRepository | typeof StructurePreparedItemsRepository | typeof StructureSourceReadModelWarehouse | typeof SourceDispatcher | typeof SourceConverter | typeof SourceCommandDispatcher | typeof SourceEventService | typeof StructureSourceDomainEventPublisher | typeof SourceManagerFactory | {
    provide: string;
    useClass: typeof StructureOriginChangedEventHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof StructurePreparedItemsEventHandler;
    multi: boolean;
})[];
