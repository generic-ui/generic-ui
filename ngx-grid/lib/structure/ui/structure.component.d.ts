import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { StructureDefinition } from './structure-definition';
import { StructureIdGenerator } from './structure-id.generator';
import { StructureId } from '../domain/structure-id';
import { CompositionId } from '../../composition/domain/composition-id';
import { SchemaCssClassManager } from './schema/schema-css-class.manager';
import { StructureCellEditArchive } from './edit/structure.cell-edit.archive';
import { StructureCellEditStore } from './edit/structure.cell-edit.store';
import { StructureEditModeArchive } from './edit/structure.edit-mode.archive';
import { StructureInfoPanelEnabledArchive } from './panel/info/structure.info-panel-enabled.archive';
import { StructureAggregationArchive } from './panel/aggregation/structure.aggregation.archive';
import { StructureAggregationConfigService } from './panel/aggregation/structure.aggregation-config.service';
import { StructureGateway } from './gateway/structure.gateway';
import { PagingCommandService } from '../ui-api/paging/paging-command.service';
import { PagingEventService } from '../ui-api/paging/paging-event.service';
import { SourceCommandService } from '../ui-api/source/source-command.service';
import { SourceEventService } from '../ui-api/source/event/source-event.service';
import { SchemaCommandService } from '../ui-api/schema/schema-command.service';
import { CompositionCommandService } from '../../composition/ui-api/composition.command-service';
import { CompositionEventService } from '../../composition/ui-api/composition.event-service';
import { FormationEventService } from '../ui-api/formation/formation-event.service';
import { StructureCommandService } from '../ui-api/structure/structure-command.service';
import { StructureReadModelService } from '../ui-api/structure/structure-read-model.service';
import { CompositionReadModelService } from '../../composition/ui-api/composition-read-model.service';
import { SchemaReadModelService } from '../ui-api/schema/schema-read-model.service';
import { StructureColumnMenuConfigArchive } from './header/menu/config/structure.column-menu-config.archive';
import { StructurePagingDisplayModeArchive } from './paging/mode/structure-paging.display-mode.archive';
import { StructureRowSelectEnabledArchive } from './content/row/structure.row-select-enabled.archive';
import { StructureSearchEventService } from '../ui-api/structure/search/structure-search-event.service';
import { StructureCellEditCloseAllService } from './edit/structure.cell-edit-close-all.service';
/** @internal */
export declare function structureIdFactory(generator: StructureIdGenerator): StructureId;
/** @internal */
export declare function compositionIdFactory(generator: StructureIdGenerator): CompositionId;
/** @internal */
export declare const structureComponentSelfProviders: (typeof StructurePagingDisplayModeArchive | {
    provide: typeof PagingCommandService;
    useClass: typeof import("./local/paging/local-paging-command.service").LocalPagingCommandService;
} | {
    provide: typeof import("../ui-api/paging/paging-read-model.service").PagingReadModelService;
    useClass: typeof import("./local/paging/local-paging-read-model.service").LocalPagingReadModelService;
} | {
    provide: typeof SchemaCommandService;
    useClass: typeof import("./local/schema/local-schema-command.service").LocalSchemaCommandService;
} | {
    provide: typeof SchemaReadModelService;
    useClass: typeof import("./local/schema/local-schema-read-model.service").LocalSchemaReadModelService;
} | {
    provide: typeof import("../ui-api/formation/formation-command.service").FormationCommandService;
    useClass: typeof import("./local/formation/local-formation-command.service").LocalFormationCommandService;
} | {
    provide: typeof import("../ui-api/formation/formation-read-model.service").FormationReadModelService;
    useClass: typeof import("./local/formation/local-formation-read-model.service").LocalFormationReadModelService;
} | {
    provide: typeof StructureCommandService;
    useClass: typeof import("./local/structure/local-structure-command.service").LocalStructureCommandService;
} | {
    provide: typeof StructureReadModelService;
    useClass: typeof import("./local/structure/local-structure-read-model.service").LocalStructureReadModelService;
} | {
    provide: typeof SourceCommandService;
    useClass: typeof import("./local/source/local-source-command.service").LocalSourceCommandService;
} | {
    provide: typeof import("../ui-api/source/source-read-model.service").SourceReadModelService;
    useClass: typeof import("./local/source/local-source-read-model.service").LocalSourceReadModelService;
} | {
    provide: typeof CompositionCommandService;
    useClass: typeof import("./local/composition/local-composition-command.service").LocalCompositionCommandService;
} | {
    provide: typeof CompositionReadModelService;
    useClass: typeof import("./local/composition/local-composition-read-model.service").LocalCompositionReadModelService;
} | {
    provide: typeof import("../../../generic-ui-ngx-grid").ɵet;
    useClass: typeof import("./local/search/local-structure-search.dispatcher").LocalStructureSearchDispatcher;
} | typeof SchemaCssClassManager | typeof StructureCellEditArchive | typeof StructureCellEditStore | typeof StructureAggregationArchive | typeof StructureAggregationConfigService | typeof StructureColumnMenuConfigArchive | typeof StructureCellEditCloseAllService | {
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
    private schemaReadModelService;
    private schemaStylesManager;
    loaderEnabled: boolean;
    circleLoaderEnabled: boolean;
    initialLoaderAnimation: boolean;
    structureHeight: number;
    private columnHeader;
    private structure;
    constructor(structureId: StructureId, compositionId: CompositionId, pagingCommandService: PagingCommandService, pagingEventService: PagingEventService, sourceCommandService: SourceCommandService, sourceEventService: SourceEventService, schemaCommandService: SchemaCommandService, compositionCommandService: CompositionCommandService, compositionEventService: CompositionEventService, formationEventService: FormationEventService, structureCommandService: StructureCommandService, structureEditModeArchive: StructureEditModeArchive, structureCellEditArchive: StructureCellEditArchive, structureInfoPanelEnabledArchive: StructureInfoPanelEnabledArchive, structureAggregationConfigService: StructureAggregationConfigService, structureCellEditStore: StructureCellEditStore, structureColumnMenuConfigArchive: StructureColumnMenuConfigArchive, structurePagingDisplayModeArchive: StructurePagingDisplayModeArchive, structureRowSelectEnabledArchive: StructureRowSelectEnabledArchive, structureSearchEventService: StructureSearchEventService, elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, structureDefinition: StructureDefinition, structureQueryService: StructureReadModelService, compositionQueryService: CompositionReadModelService, schemaReadModelService: SchemaReadModelService, schemaStylesManager: SchemaCssClassManager);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    isBorderEnabled(): boolean;
    getStructureId(): StructureId;
}
