import { SourceDispatcher } from '../../domain/source/command/source.dispatcher';
import { SourceManagerFactory } from '../../domain/source/command/source.manager-factory';
import { SetOriginCommandHandler } from '../../domain/source/command/origin/set-origin/set-origin.command-handler';
import { StructureEditSourceItemCommandHandler } from '../../domain/source/command/origin/edit/structure.edit-source-item.command-handler';
import { StructureSourceDomainEventPublisher } from '../../domain/source/command/structure.source.domain-event.publisher';
import { StructureOriginChangedEventHandler } from '../../domain/source/read/origin/structure.origin-changed.event-handler';
import { SourceConverter } from '../../domain/source/source.converter';
import { SourceCommandService } from './source-command.service';
import { SourceReadModelService } from './source-read-model.service';
import { SourceEventService } from './event/source-event.service';
import { SourceRepository } from '../../domain/source/read/source.repository';
import { StructureSourceOriginRepository } from '../../domain/source/read/origin/structure.source-origin.repository';
import { SourceSetLoadingCommandHandler } from '../../domain/source/command/loading/source-set-loading.command-handler';
export declare const sourceProviders: (typeof StructureSourceOriginRepository | typeof SourceReadModelService | typeof SourceDispatcher | typeof SourceCommandService | typeof SourceEventService | typeof SourceConverter | typeof SourceManagerFactory | typeof StructureSourceDomainEventPublisher | typeof SourceRepository | {
    provide: string;
    useClass: typeof SourceSetLoadingCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof SetOriginCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof StructureEditSourceItemCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof StructureOriginChangedEventHandler;
    multi: boolean;
})[];
