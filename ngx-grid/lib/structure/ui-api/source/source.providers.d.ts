import { SourceDispatcher } from '../../domain/source/command/source.dispatcher';
import { SourceManagerFactory } from '../../domain/source/command/source.manager-factory';
import { StructureSourceDomainEventPublisher } from '../../domain/source/command/structure.source.domain-event.publisher';
import { StructureOriginChangedEventHandler } from '../../domain/source/read/origin/structure.origin-changed.event-handler';
import { SourceConverter } from '../../domain/source/source.converter';
import { SourceCommandService } from './source-command.service';
import { SourceReadModelService } from './source-read-model.service';
import { SourceEventService } from './event/source-event.service';
import { SourceRepository } from '../../domain/source/read/source.repository';
import { StructureSourceOriginRepository } from '../../domain/source/read/origin/structure.source-origin.repository';
import { StructurePreparedItemsRepository } from '../../domain/source/read/prepared/structure.prepared-items.repository';
import { StructurePreparedItemsEventHandler } from '../../domain/source/read/prepared/structure.prepared-items.event-handler';
export declare const sourceCommandHandlers: import("@angular/core").Provider[];
export declare const sourceProviders: (typeof StructureSourceOriginRepository | typeof StructurePreparedItemsRepository | typeof SourceReadModelService | typeof SourceDispatcher | typeof SourceConverter | typeof SourceCommandService | typeof SourceEventService | typeof StructureSourceDomainEventPublisher | typeof SourceManagerFactory | typeof SourceRepository | {
    provide: string;
    useClass: typeof StructureOriginChangedEventHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof StructurePreparedItemsEventHandler;
    multi: boolean;
})[];
