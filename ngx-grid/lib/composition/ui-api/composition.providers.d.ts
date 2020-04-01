import { CompositionDispatcher } from '../domain/command/composition.dispatcher';
import { ColumnEntityFactory } from '../domain/command/column/column-entity.factory';
import { CompositionEventConverter } from '../domain/command/composition-event.converter';
import { ColumnFieldFactory } from '../domain/command/column/field/colum-field.factory';
import { CompositionEventService } from './composition.event-service';
import { CompositionReadModelService } from './composition-read-model.service';
import { CompositionCommandService } from './composition.command-service';
import { CompositionConverter } from '../domain/composition.converter';
import { EditTemplateRepository } from '../domain/read/edit/edit-template.repository';
import { EditTemplateFactory } from '../domain/read/edit/edit-template.factory';
import { ViewTemplateFactory } from '../domain/read/view/view-template.factory';
import { ViewTemplateRepository } from '../domain/read/view/view-template.repository';
import { ColumnDefinitionFactory } from '../domain/read/definition/column-definition.factory';
import { CompositionChangeSortStatusEventHandler } from '../domain/command/column/sort/composition-change-sort-status.event-handler';
import { CompositionFieldsInitedEventHandler } from '../domain/command/column/set-columns/composition-fields-inited.event-handler';
import { ColumnPresentationConverter } from '../domain/command/column/presentation/column.presentation.converter';
export declare const compositionProviders: (typeof CompositionDispatcher | typeof CompositionCommandService | typeof CompositionReadModelService | typeof CompositionEventService | typeof ColumnPresentationConverter | typeof ColumnEntityFactory | typeof import("../infrastructure/in-memory/in-memory.composition.store").InMemoryCompositionStore | typeof import("../../../generic-ui-ngx-grid").ɵga | typeof ViewTemplateFactory | typeof ViewTemplateRepository | typeof EditTemplateFactory | typeof EditTemplateRepository | typeof ColumnDefinitionFactory | typeof CompositionConverter | typeof import("../../../generic-ui-ngx-grid").ɵgr | {
    provide: typeof import("../domain/command/composition.aggregate-repository").CompositionAggregateRepository;
    useClass: typeof import("../../../generic-ui-ngx-grid").ɵfy;
} | {
    provide: typeof import("../domain/read/composition.repository").CompositionRepository;
    useClass: typeof import("../../../generic-ui-ngx-grid").ɵgz;
} | typeof CompositionEventConverter | typeof ColumnFieldFactory | {
    provide: string;
    useClass: typeof CompositionFieldsInitedEventHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof CompositionChangeSortStatusEventHandler;
    multi: boolean;
})[];
