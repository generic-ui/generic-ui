import { InitStructureCommandHandler } from 'structure/domain/structure/command/init/init-structure.command-handler';
import { StructureCommandService } from 'structure/app/structure/structure-command.service';
import { StructureAggregateFactory } from 'structure/domain/structure/command/structure.aggregate-factory';
import { StructureConverter } from 'structure/domain/structure/structure.converter';
import { StructureQueryService } from 'structure/app/structure/structure-query.service';
export declare const structureProviders: (typeof import("structure/domain/paging/command/paging-aggregate.factory").PagingAggregateFactory | typeof import("structure/domain/paging/command/paging.dispatcher").PagingDispatcher | typeof import("structure/app/paging/paging-command.service").PagingCommandService | typeof import("structure/domain/paging/query/paging.repository").PagingRepository | typeof import("structure/app/paging/paging-query.service").PagingQueryService | typeof import("structure/domain/origin/command/origin.dispatcher").OriginDispatcher | typeof import("structure/app/origin/origin-command.service").OriginCommandService | typeof import("structure/domain/origin/query/origin.repository").OriginRepository | typeof import("structure/app/origin/origin-query.service").OriginQueryService | typeof import("structure/domain/schema/command/schema.dispatcher").SchemaDispatcher | typeof import("structure/domain/schema/query/schema-repository").SchemaRepository | typeof import("structure/app/schema/schema-query.service").SchemaQueryService | typeof import("structure/app/schema/schema-command.service").SchemaCommandService | typeof import("structure/domain/formation/command/formation.dispatcher").FormationDispatcher | typeof import("structure/app/formation/formation-command.service").FormationCommandService | typeof import("structure/domain/formation/query/formation-repository").FormationRepository | typeof import("structure/app/formation/formation-query.service").FormationQueryService | typeof StructureCommandService | typeof StructureQueryService | typeof import("structure/app/paging/paging-event.service").PagingEventService | typeof StructureAggregateFactory | typeof import("structure/domain/origin/origin.converter").OriginConverter | typeof import("structure/domain/formation/formation.converter").FormationConverter | typeof import("structure/domain/schema/schema.converter").SchemaConverter | typeof import("structure/domain/paging/paging.converter").PagingConverter | typeof StructureConverter | typeof import("structure/infrastructure/in-memory/structure/in-memory.structure.store").InMemoryStructureStore | typeof import("structure/infrastructure/in-memory/structure/commad/in-memory.structure.aggregate-store").InMemoryStructureAggregateStore | typeof import("structure/infrastructure/in-memory/structure/query/in-memory.structure.query-store").InMemoryStructureQueryStore | {
    provide: typeof import("structure/domain/structure/command/structure-aggregate.repository").StructureAggregateRepository;
    useClass: typeof import("structure/infrastructure/in-memory/structure/commad/in-memory.structure-aggregate.repository").InMemoryStructureAggregateRepository;
} | {
    provide: typeof import("structure/domain/structure/query/structure.repository").StructureRepository;
    useClass: typeof import("structure/infrastructure/in-memory/structure/query/in-memory.structure.repository").InMemoryStructureRepository;
} | {
    provide: string;
    useClass: typeof import("structure/domain/origin/command/set/set-origin.command-handler").SetOriginCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof import("structure/domain/paging/command/set/set-paging.command-handler").SetPagingCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof import("structure/domain/paging/command/next-page/next-page.command-handler").NextPageCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof import("structure/domain/paging/command/prev-page/prev-page.command-handler").PrevPageCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof import("structure/domain/paging/command/change-pagesize/change-pagesize.command-handler").ChangePagesizeCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof import("structure/domain/schema/command/set/set-schema.command-handler").SetSchemaCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof import("structure/domain/schema/command/grid/vertical/set-schema-vertical-grid.command-handler").SetSchemaVerticalGridCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof import("structure/domain/schema/command/grid/horizontal/set-schema-horizontal-grid.command-handler").SetSchemaHorizontalGridCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof import("structure/domain/schema/command/theme/set-schema-theme.command-handler").SetSchemaThemeCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof import("structure/domain/schema/command/column-header/bottom/change-schema-bottom-header.command-handler").ChangeSchemaBottomHeaderCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof import("structure/domain/schema/command/column-header/top/change-schema-top-header.command-handler").ChangeSchemaTopHeaderCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof import("structure/domain/schema/command/coloring/set/set-row-coloring.command-handler").SetRowColoringCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof import("structure/domain/formation/command/set/set-formation.command-handler").SetFormationCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof import("structure/domain/formation/command/toggle/toggle-selected-row.command-handler").ToggleSelectedRowCommandHandler;
    multi: boolean;
} | {
    provide: string;
    useClass: typeof InitStructureCommandHandler;
    multi: boolean;
})[];
