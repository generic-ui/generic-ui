import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { StructureDefinition } from './structure-definition';
import { StructureIdGenerator } from './structure-id.generator';
import { StructureId } from '../domain/structure-id';
import { CompositionId } from '../domain/composition/composition-id';
import { SchemaCssClassManager } from './schema/schema-css-class.manager';
import { StructureCellEditArchive } from './edit/structure.cell-edit.archive';
import { StructureCellEditStore } from './edit/structure.cell-edit.store';
import { StructureEditModeArchive } from './edit/structure.edit-mode.archive';
import { StructureSummaryEnabledArchive } from './panel/summary/structure.summary-enabled.archive';
import { StructureAggregationArchive } from './panel/aggregation/structure.aggregation.archive';
import { StructureAggregationConfigService } from './panel/aggregation/structure.aggregation-config.service';
import { StructureGateway } from './gateway/structure.gateway';
import { PagingCommandService } from '../app/paging/paging-command.service';
import { PagingEventService } from '../app/paging/paging-event.service';
import { SourceCommandService } from '../app/source/source-command.service';
import { SourceEventService } from '../app/source/event/source-event.service';
import { SchemaCommandService } from '../app/schema/schema-command.service';
import { CompositionCommandService } from './api/composition/composition.command-service';
import { CompositionEventService } from './api/composition/composition.event-service';
import { FormationEventService } from '../app/formation/formation-event.service';
import { StructureCommandService } from '../app/structure/structure-command.service';
import { StructureQueryService } from '../app/structure/structure-query.service';
import { CompositionQueryService } from './api/composition/composition.query-service';
import { SchemaQueryService } from '../app/schema/schema-query.service';
/** @internal */
export declare function structureIdFactory(generator: StructureIdGenerator): StructureId;
/** @internal */
export declare function compositionIdFactory(generator: StructureIdGenerator): CompositionId;
/** @internal */
export declare const structureComponentSelfProviders: ({
    provide: typeof PagingCommandService;
    useClass: typeof import("./local/paging/local-paging-command.service").LocalPagingCommandService;
} | {
    provide: typeof import("../app/paging/paging-query.service").PagingQueryService;
    useClass: typeof import("./local/paging/local-paging-query.service").LocalPagingQueryService;
} | {
    provide: typeof SchemaCommandService;
    useClass: typeof import("./local/schema/local-schema-command.service").LocalSchemaCommandService;
} | {
    provide: typeof SchemaQueryService;
    useClass: typeof import("./local/schema/local-schema-query.service").LocalSchemaQueryService;
} | {
    provide: typeof import("../app/formation/formation-command.service").FormationCommandService;
    useClass: typeof import("./local/formation/local-formation-command.service").LocalFormationCommandService;
} | {
    provide: typeof import("../app/formation/formation-query.service").FormationQueryService;
    useClass: typeof import("./local/formation/local-formation-query.service").LocalFormationQueryService;
} | {
    provide: typeof StructureCommandService;
    useClass: typeof import("./local/structure/local-structure-command.service").LocalStructureCommandService;
} | {
    provide: typeof StructureQueryService;
    useClass: typeof import("./local/structure/local-structure-query.service").LocalStructureQueryService;
} | {
    provide: typeof SourceCommandService;
    useClass: typeof import("./local/source/local-source-command.service").LocalSourceCommandService;
} | {
    provide: typeof import("../app/source/source-query.service").SourceQueryService;
    useClass: typeof import("./local/source/local-source-query.service").LocalSourceQueryService;
} | {
    provide: typeof CompositionCommandService;
    useClass: typeof import("./local/composition/local-composition-command.service").LocalCompositionCommandService;
} | {
    provide: typeof CompositionQueryService;
    useClass: typeof import("./local/composition/local-composition-query.service").LocalCompositionQueryService;
} | typeof SchemaCssClassManager | typeof StructureCellEditArchive | typeof StructureCellEditStore | typeof StructureAggregationArchive | typeof StructureAggregationConfigService | {
    provide: typeof StructureId;
    useFactory: typeof structureIdFactory;
    deps: (typeof StructureIdGenerator)[];
})[];
/** @internal */
export declare class StructureComponent extends StructureGateway implements OnChanges, OnInit, AfterViewInit {
    private elementRef;
    private changeDetectorRef;
    private renderer;
    private structureDefinition;
    private structureQueryService;
    private compositionQueryService;
    private schemaQueryService;
    private schemaStylesManager;
    loaderEnabled: boolean;
    circleLoaderEnabled: boolean;
    initialLoaderAnimation: boolean;
    structureHeight: number;
    private columnHeader;
    private structure;
    constructor(structureId: StructureId, compositionId: CompositionId, pagingCommandService: PagingCommandService, pagingEventService: PagingEventService, sourceCommandService: SourceCommandService, sourceEventService: SourceEventService, schemaCommandService: SchemaCommandService, compositionCommandService: CompositionCommandService, compositionEventService: CompositionEventService, formationEventService: FormationEventService, structureCommandService: StructureCommandService, structureEditModeArchive: StructureEditModeArchive, structureCellEditArchive: StructureCellEditArchive, structureSummaryEnabledArchive: StructureSummaryEnabledArchive, structureAggregationConfigService: StructureAggregationConfigService, structureCellEditStore: StructureCellEditStore, elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, structureDefinition: StructureDefinition, structureQueryService: StructureQueryService, compositionQueryService: CompositionQueryService, schemaQueryService: SchemaQueryService, schemaStylesManager: SchemaCssClassManager);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    isBorderEnabled(): boolean;
    getStructureId(): StructureId;
}
