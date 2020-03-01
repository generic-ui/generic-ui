import { CompositionAggregateFactory } from '../domain/command/composition.aggregate-factory';
import { CompositionDispatcher } from '../domain/command/composition.dispatcher';
import { InitCompositionCommandHandler } from '../domain/command/init/init-composition.command-handler';
import { SetColumnsCommandHandler } from '../domain/command/column/set-columns/set-columns.command-handler';
import { SetCompositionWidthCommandHandler } from '../domain/command/width/set-width/set-composition-width.command-handler';
import { SetCompositionResizeWidthCommandHandler } from '../domain/command/width/resize-width/set-composition-resize-width.command-handler';
import { SetCompositionContainerWidthCommandHandler } from '../domain/command/width/set-container-width/set-composition-container-width.command-handler';
import { CompositionChangeSortStatusCommandHandler } from '../domain/command/column/sort/composition-change-sort-status.command-handler';
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
import { CompositionSetColumnEnabledCommandHandler } from '../domain/command/column/set-enabled/composition.set-column-enabled.command-handler';
import { CompositionMoveLeftColumnCommandHandler } from '../domain/command/column/move/left/composition.move-left-column.command-handler';
import { CompositionMoveRightColumnCommandHandler } from '../domain/command/column/move/right/composition.move-right-column.command-handler';
export declare const compositionProviders: (typeof CompositionDispatcher | typeof CompositionCommandService | typeof CompositionReadModelService | typeof CompositionEventService | typeof ColumnEntityFactory | typeof import("../infrastructure/in-memory/in-memory.composition.store").InMemoryCompositionStore | typeof import("../../../generic-ui-ngx-grid").ɵdj | typeof ViewTemplateFactory | typeof ViewTemplateRepository | typeof EditTemplateFactory | typeof EditTemplateRepository | typeof ColumnDefinitionFactory | typeof CompositionConverter | typeof import("../../../generic-ui-ngx-grid").ɵdz | {
    provide: typeof import("../domain/command/composition.aggregate-repository").CompositionAggregateRepository;
    useClass: typeof import("../../../generic-ui-ngx-grid").ɵdl;
} | {
    provide: typeof import("../domain/read/composition.repository").CompositionRepository;
    useClass: typeof import("../../../generic-ui-ngx-grid").ɵeh;
} | typeof CompositionAggregateFactory | typeof CompositionEventConverter | typeof ColumnFieldFactory | {
    provide: string;
    useClass: typeof InitCompositionCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof SetColumnsCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof SetCompositionWidthCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof SetCompositionResizeWidthCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof SetCompositionContainerWidthCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof CompositionSetColumnEnabledCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof CompositionChangeSortStatusCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof CompositionMoveLeftColumnCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof CompositionMoveRightColumnCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof CompositionFieldsInitedEventHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof CompositionChangeSortStatusEventHandler;
    multi: boolean;
})[];
