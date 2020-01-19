import { CompositionAggregateFactory } from '../../domain/composition/command/composition.aggregate-factory';
import { CompositionDispatcher } from '../../domain/composition/command/composition.dispatcher';
import { InitCompositionCommandHandler } from '../../domain/composition/command/init/init-composition.command-handler';
import { SetColumnsCommandHandler } from '../../domain/composition/command/column/set-columns/set-columns.command-handler';
import { SetCompositionWidthCommandHandler } from '../../domain/composition/command/width/set-width/set-composition-width.command-handler';
import { SetCompositionResizeWidthCommandHandler } from '../../domain/composition/command/width/resize-width/set-composition-resize-width.command-handler';
import { SetCompositionContainerWidthCommandHandler } from '../../domain/composition/command/width/set-container-width/set-composition-container-width.command-handler';
import { CompositionChangeSortStatusCommandHandler } from '../../domain/composition/command/column/sort/composition-change-sort-status.command-handler';
import { ColumnEntityFactory } from '../../domain/composition/command/column/column-entity.factory';
import { CompositionEventConverter } from '../../domain/composition/command/composition-event.converter';
import { ColumnFieldFactory } from '../../domain/composition/command/column/field/colum-field.factory';
import { CompositionEventService } from './composition.event-service';
import { CompositionReadModelService } from './composition-read-model.service';
import { CompositionCommandService } from './composition.command-service';
import { CompositionConverter } from '../../domain/composition/composition.converter';
import { EditTemplateRepository } from '../../domain/composition/read/edit/edit-template.repository';
import { EditTemplateFactory } from '../../domain/composition/read/edit/edit-template.factory';
import { ViewTemplateFactory } from '../../domain/composition/read/view/view-template.factory';
import { ViewTemplateRepository } from '../../domain/composition/read/view/view-template.repository';
import { ColumnDefinitionFactory } from '../../domain/composition/read/definition/column-definition.factory';
import { CompositionChangeSortStatusEventHandler } from '../../domain/composition/command/column/sort/composition-change-sort-status.event-handler';
import { CompositionFieldsInitedEventHandler } from '../../domain/composition/command/column/set-columns/composition-fields-inited.event-handler';
import { CompositionSetColumnEnabledCommandHandler } from '../../domain/composition/command/column/set-enabled/composition.set-column-enabled.command-handler';
export declare const compositionProviders: (typeof CompositionDispatcher | typeof CompositionCommandService | typeof CompositionReadModelService | typeof CompositionEventService | typeof ColumnEntityFactory | typeof import("../../../../generic-ui-ngx-grid").ɵbl | typeof import("../../../../generic-ui-ngx-grid").ɵbm | typeof ViewTemplateFactory | typeof ViewTemplateRepository | typeof EditTemplateFactory | typeof EditTemplateRepository | typeof ColumnDefinitionFactory | typeof CompositionConverter | typeof import("../../../../generic-ui-ngx-grid").ɵcb | {
    provide: typeof import("../../../../generic-ui-ngx-grid").ɵbn;
    useClass: typeof import("../../../../generic-ui-ngx-grid").ɵbo;
} | {
    provide: typeof import("../../../../generic-ui-ngx-grid").ɵcj;
    useClass: typeof import("../../../../generic-ui-ngx-grid").ɵck;
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
    useClass: typeof CompositionFieldsInitedEventHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof CompositionChangeSortStatusEventHandler;
    multi: boolean;
})[];
