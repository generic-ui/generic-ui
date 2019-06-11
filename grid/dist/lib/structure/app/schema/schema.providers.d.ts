import { SetRowColoringCommandHandler } from 'structure/domain/schema/command/coloring/set/set-row-coloring.command-handler';
import { SchemaDispatcher } from 'structure/domain/schema/command/schema.dispatcher';
import { SetSchemaCommandHandler } from 'structure/domain/schema/command/set/set-schema.command-handler';
import { SchemaRepository } from 'structure/domain/schema/query/schema-repository';
import { SchemaQueryService } from 'structure/app/schema/schema-query.service';
import { SchemaCommandService } from 'structure/app/schema/schema-command.service';
import { SchemaConverter } from 'structure/domain/schema/schema.converter';
import { SetSchemaVerticalGridCommandHandler } from 'structure/domain/schema/command/grid/vertical/set-schema-vertical-grid.command-handler';
import { SetSchemaHorizontalGridCommandHandler } from 'structure/domain/schema/command/grid/horizontal/set-schema-horizontal-grid.command-handler';
import { SetSchemaThemeCommandHandler } from 'structure/domain/schema/command/theme/set-schema-theme.command-handler';
import { ChangeSchemaBottomHeaderCommandHandler } from 'structure/domain/schema/command/column-header/bottom/change-schema-bottom-header.command-handler';
import { ChangeSchemaTopHeaderCommandHandler } from 'structure/domain/schema/command/column-header/top/change-schema-top-header.command-handler';
export declare const schemaProviders: (typeof SchemaDispatcher | typeof SchemaRepository | typeof SchemaQueryService | typeof SchemaCommandService | typeof SchemaConverter | {
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
