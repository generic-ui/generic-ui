import { CompositionDispatcher } from '../domain/composition.dispatcher';
import { ColumnEntityFactory } from '../domain/column/column-entity.factory';
import { CompositionEventConverter } from '../domain/composition.event-converter';
import { ColumnFieldFactory } from '../domain/column/field/colum-field.factory';
import { CompositionEventRepository } from './composition.event-repository';
import { CompositionWarehouse } from './composition.warehouse';
import { CompositionCommandDispatcher } from './composition.command-dispatcher';
import { CompositionReadModelRootConverter } from './read/composition.read-model-root-converter';
import { EditTemplateRepository } from './read/edit/edit-template.repository';
import { EditTemplateFactory } from './read/edit/edit-template.factory';
import { ViewTemplateFactory } from './read/view/view-template.factory';
import { ViewTemplateRepository } from './read/view/view-template.repository';
import { ColumnDefinitionFactory } from './read/definition/column-definition.factory';
import { CompositionChangeSortStatusEventHandler } from '../domain/column/sort/composition-change-sort-status.event-handler';
import { CompositionFieldsInitedEventHandler } from '../domain/column/set-columns/composition-fields-inited.event-handler';
import { ColumnPresentationConverter } from '../domain/column/presentation/column.presentation.converter';
export declare const compositionProviders: (typeof CompositionDispatcher | typeof CompositionCommandDispatcher | typeof CompositionWarehouse | typeof CompositionEventRepository | typeof ColumnPresentationConverter | typeof ColumnEntityFactory | typeof import("../infrastructure/in-memory/in-memory.composition.store").InMemoryCompositionStore | typeof import("../../../generic-ui-ngx-list").ɵiw | typeof ViewTemplateFactory | typeof ViewTemplateRepository | typeof EditTemplateFactory | typeof EditTemplateRepository | typeof ColumnDefinitionFactory | typeof CompositionReadModelRootConverter | typeof import("../../../generic-ui-ngx-list").ɵjn | {
    provide: typeof import("../domain/composition.aggregate-repository").CompositionAggregateRepository;
    useClass: typeof import("../../../generic-ui-ngx-list").ɵiu;
} | {
    provide: typeof import("./read/composition.read-model-root-repository").CompositionReadModelRootRepository;
    useClass: typeof import("../../../generic-ui-ngx-list").ɵjv;
} | typeof CompositionEventConverter | typeof ColumnFieldFactory | {
    provide: string;
    useClass: typeof CompositionFieldsInitedEventHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof CompositionChangeSortStatusEventHandler;
    multi: boolean;
})[];
