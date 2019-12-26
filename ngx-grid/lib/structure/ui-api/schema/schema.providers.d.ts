import { SchemaDispatcher } from '../../domain/schema/command/schema.dispatcher';
import { SetSchemaVerticalGridCommandHandler } from '../../domain/schema/command/grid/vertical/set-schema-vertical-grid.command-handler';
import { SetSchemaHorizontalGridCommandHandler } from '../../domain/schema/command/grid/horizontal/set-schema-horizontal-grid.command-handler';
import { SetSchemaThemeCommandHandler } from '../../domain/schema/command/theme/set-schema-theme.command-handler';
import { ChangeSchemaBottomHeaderCommandHandler } from '../../domain/schema/command/column-header/bottom/change-schema-bottom-header.command-handler';
import { ChangeSchemaTopHeaderCommandHandler } from '../../domain/schema/command/column-header/top/change-schema-top-header.command-handler';
import { SetRowColoringCommandHandler } from '../../domain/schema/command/coloring/set/set-row-coloring.command-handler';
import { SetSchemaCommandHandler } from '../../domain/schema/command/set/set-schema.command-handler';
import { SchemaRepository } from '../../domain/schema/read/schema-repository';
import { SchemaConverter } from '../../domain/schema/schema.converter';
import { SchemaCommandService } from './schema-command.service';
import { SchemaReadModelService } from './schema-read-model.service';
import { SchemaAggregateFactory } from '../../domain/schema/command/schema.aggregate-factory';
export declare const schemaProviders: (typeof SchemaDispatcher | typeof SchemaRepository | typeof SchemaReadModelService | typeof SchemaCommandService | typeof SchemaConverter | typeof SchemaAggregateFactory | {
    provide: string;
    useClass: typeof SetSchemaCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof SetSchemaVerticalGridCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof SetSchemaHorizontalGridCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof SetSchemaThemeCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof ChangeSchemaBottomHeaderCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof ChangeSchemaTopHeaderCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof SetRowColoringCommandHandler;
    multi: boolean;
})[];
