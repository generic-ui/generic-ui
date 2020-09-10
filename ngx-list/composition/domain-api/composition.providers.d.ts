import { CompositionDispatcher } from '../domain/composition.dispatcher';
import { ColumnEntityFactory } from '../domain/column/column-entity.factory';
import { CompositionEventConverter } from '../domain/composition.event-converter';
import { ColumnFieldFactory } from '../domain/column/field/colum-field.factory';
import { CompositionEventRepository } from './composition.event-repository';
import { CompositionWarehouse } from './composition.warehouse';
import { CompositionCommandInvoker } from './composition.command-invoker';
import { CompositionReadModelRootConverter } from './read/composition.read-model-root-converter';
import { EditTemplateRepository } from './read/edit/edit-template.repository';
import { EditTemplateFactory } from './read/edit/edit-template.factory';
import { ViewTemplateFactory } from './read/view/view-template.factory';
import { ViewTemplateRepository } from './read/view/view-template.repository';
import { ColumnDefinitionFactory } from './read/definition/column-definition.factory';
import { ColumnPresentationConverter } from '../domain/column/presentation/column.presentation.converter';
export declare const compositionProviders: (typeof CompositionDispatcher | typeof CompositionCommandInvoker | typeof CompositionWarehouse | typeof CompositionEventRepository | typeof ColumnFieldFactory | typeof ColumnPresentationConverter | typeof ColumnEntityFactory | typeof import("../../generic-ui-ngx-list").ɵlx | typeof import("../../generic-ui-ngx-list").ɵlw | typeof ViewTemplateFactory | typeof ViewTemplateRepository | typeof EditTemplateFactory | typeof EditTemplateRepository | typeof ColumnDefinitionFactory | typeof CompositionReadModelRootConverter | typeof import("../../generic-ui-ngx-list").ɵmo | {
    provide: typeof import("../domain/composition.aggregate-repository").CompositionAggregateRepository;
    useClass: typeof import("../../generic-ui-ngx-list").ɵlu;
} | {
    provide: typeof import("./read/composition.read-model-root-repository").CompositionReadModelRootRepository;
    useClass: typeof import("../../generic-ui-ngx-list").ɵmw;
} | typeof CompositionEventConverter)[];
