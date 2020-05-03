import { SourceDispatcher } from '../../domain/source/source.dispatcher';
import { SourceManagerFactory } from '../../domain/source/source.manager-factory';
import { StructureSourceDomainEventPublisher } from '../../domain/source/structure.source.domain-event.publisher';
import { StructureOriginChangedEventHandler } from './origin/structure.origin-changed.event-handler';
import { SourceConverter } from './source.converter';
import { SourceCommandDispatcher } from './source.command-dispatcher';
import { StructureSourceWarehouse } from './structure-source.warehouse';
import { SourceEventService } from './event/source-event.service';
import { StructureSourceOriginRepository } from './origin/structure.source-origin.repository';
import { StructurePreparedItemsRepository } from './prepared/structure.prepared-items.repository';
import { StructurePreparedItemsEventHandler } from './prepared/structure.prepared-items.event-handler';
export declare const sourceCommandHandlers: import("@angular/core").Provider[];
export declare const sourceProviders: (typeof SourceDispatcher | typeof StructureSourceOriginRepository | typeof StructurePreparedItemsRepository | typeof StructureSourceWarehouse | typeof SourceCommandDispatcher | typeof SourceConverter | typeof SourceEventService | typeof StructureSourceDomainEventPublisher | typeof SourceManagerFactory | {
    provide: string;
    useClass: typeof StructureOriginChangedEventHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof StructurePreparedItemsEventHandler;
    multi: boolean;
})[];
