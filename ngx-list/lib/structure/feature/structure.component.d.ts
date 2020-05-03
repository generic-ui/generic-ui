import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { StructureDefinition } from './structure-definition';
import { StructureIdGenerator } from './structure-id.generator';
import { StructureId } from '../domain/structure.id';
import { CompositionId } from '../../composition/domain/composition.id';
import { SchemaCssClassManager } from './schema/schema-css-class.manager';
import { StructureCellEditArchive } from './edit/structure.cell-edit.archive';
import { StructureCellEditStore } from './edit/structure.cell-edit.store';
import { StructureEditModeArchive } from './edit/structure.edit-mode.archive';
import { StructureInfoPanelEnabledArchive } from './panel/info/structure.info-panel-enabled.archive';
import { StructureSummariesArchive } from './panel/summaries/structure.summaries.archive';
import { StructureSummariesConfigService } from './panel/summaries/structure.summaries-config.service';
import { StructureGateway } from './gateway/structure.gateway';
import { StructurePagingCommandDispatcher } from '../feature-api/paging/structure-paging.command-dispatcher';
import { StructurePagingEventRepository } from '../feature-api/paging/structure-paging.event-repository';
import { SourceCommandDispatcher } from '../feature-api/source/source.command-dispatcher';
import { SourceEventService } from '../feature-api/source/event/source-event.service';
import { CompositionCommandDispatcher } from '../../composition/feature-api/composition.command-dispatcher';
import { CompositionEventRepository } from '../../composition/feature-api/composition.event-repository';
import { FormationEventService } from '../feature-api/formation/formation-event.service';
import { StructureCommandDispatcher } from '../feature-api/structure.command-dispatcher';
import { StructureWarehouse } from '../feature-api/structure.warehouse';
import { CompositionWarehouse } from '../../composition/feature-api/composition.warehouse';
import { StructureColumnMenuConfigArchive } from './header/menu/config/structure.column-menu-config.archive';
import { StructurePagingDisplayModeArchive } from './paging/mode/structure-paging.display-mode.archive';
import { StructureRowSelectEnabledArchive } from './content/row/structure.row-select-enabled.archive';
import { StructureSearchEventService } from '../feature-api/search/structure-search-event.service';
import { StructureCellEditCloseAllService } from './edit/structure.cell-edit-close-all.service';
import { SchemaReadModelRootId } from '../../schema/feature-api/read/schema.read-model-root-id';
import { SchemaCommandDispatcher } from '../../schema/feature-api/schema.command-dispatcher';
import { StructureHeaderBottomEnabledArchive } from './header/structure-header-bottom-enabled.archive';
import { StructureHeaderTopEnabledArchive } from './header/structure-header-top-enabled.archive';
import { SchemaEventRepository } from '../../schema/feature-api/schema.event-repository';
import { StructureRowDetailConfigArchive } from './row-detail/structure.row-detail.config-archive';
import { StructureRowDetailService } from './row-detail/structure.row-detail.service';
import { StructureTitlePanelConfigArchive } from './title-panel/structure.title-panel.config-archive';
import { StructureFooterPanelConfigArchive } from './footer-panel/structure.footer-panel.config-archive';
/** @internal */
export declare function structureIdFactory(generator: StructureIdGenerator): StructureId;
/** @internal */
export declare function compositionIdFactory(generator: StructureIdGenerator): CompositionId;
/** @internal */
export declare function schemaIdFactory(generator: StructureIdGenerator): SchemaReadModelRootId;
/** @internal */
export declare const structureComponentSelfProviders: ({
    provide: typeof StructurePagingCommandDispatcher;
    useClass: typeof import("./local/paging/local-paging.command-dispatcher").LocalPagingCommandDispatcher;
} | {
    provide: typeof import("../feature-api/paging/structure-paging.warehouse").StructurePagingWarehouse;
    useClass: typeof import("./local/paging/local-paging.warehouse").LocalPagingWarehouse;
} | {
    provide: typeof import("../feature-api/formation/structure-formation.dispatcher").StructureFormationDispatcher;
    useClass: typeof import("./local/formation/local-formation.command-dispatcher").LocalFormationCommandDispatcher;
} | {
    provide: typeof import("../feature-api/formation/structure-formation.warehouse").StructureFormationWarehouse;
    useClass: typeof import("./local/formation/local-formation.warehouse").LocalFormationWarehouse;
} | {
    provide: typeof StructureCommandDispatcher;
    useClass: typeof import("./local/structure/local-structure.command-dispatcher").LocalStructureCommandDispatcher;
} | {
    provide: typeof StructureWarehouse;
    useClass: typeof import("./local/structure/local-structure.warehouse").LocalStructureWarehouse;
} | {
    provide: typeof SourceCommandDispatcher;
    useClass: typeof import("./local/source/local-source.command-dispatcher").LocalSourceCommandDispatcher;
} | {
    provide: typeof import("../feature-api/source/structure-source.warehouse").StructureSourceWarehouse;
    useClass: typeof import("./local/source/local-source.warehouse").LocalSourceWarehouse;
} | {
    provide: typeof CompositionCommandDispatcher;
    useClass: typeof import("./local/composition/local-composition.command-dispatcher").LocalCompositionCommandDispatcher;
} | {
    provide: typeof CompositionWarehouse;
    useClass: typeof import("./local/composition/local-composition.warehouse").LocalCompositionWarehouse;
} | {
    provide: typeof import("../../../generic-ui-ngx-list").ɵy;
    useClass: typeof import("./local/search/local-structure-search.command-dispatcher").LocalStructureSearchCommandDispatcher;
} | {
    provide: typeof import("../feature-api/vertical-formation/structure-vertical-formation.warehouse").StructureVerticalFormationWarehouse;
    useClass: typeof import("./local/vertical-formation/local-structure-vertical-formation.warehouse").LocalStructureVerticalFormationWarehouse;
} | {
    provide: typeof import("../../../generic-ui-ngx-list").ɵen;
    useClass: typeof import("./local/schema/local-schema.warehouse").LocalSchemaWarehouse;
} | {
    provide: typeof SchemaCommandDispatcher;
    useClass: typeof import("./local/schema/local-schema.command-dispatcher").LocalSchemaCommandDispatcher;
} | typeof SchemaCssClassManager | typeof StructureCellEditArchive | typeof StructureCellEditStore | typeof StructureSummariesArchive | typeof StructureSummariesConfigService | typeof StructureColumnMenuConfigArchive | typeof StructurePagingDisplayModeArchive | typeof StructureTitlePanelConfigArchive | typeof StructureCellEditCloseAllService | typeof StructureRowDetailService | {
    provide: typeof StructureId;
    useFactory: typeof structureIdFactory;
    deps: (typeof StructureIdGenerator)[];
} | {
    provide: typeof SchemaReadModelRootId;
    useFactory: typeof schemaIdFactory;
    deps: (typeof StructureIdGenerator)[];
})[];
/** @internal */
export declare class StructureComponent extends StructureGateway implements OnChanges, OnInit, AfterViewInit {
    private readonly elementRef;
    private readonly changeDetectorRef;
    private readonly renderer;
    private readonly structureDefinition;
    private readonly structureReadModelService;
    private readonly compositionReadModelService;
    private readonly schemaStylesManager;
    private readonly schemaReadModelRootId;
    private readonly structureDetailViewService;
    loaderEnabled: boolean;
    circleLoaderEnabled: boolean;
    initialLoaderAnimation: boolean;
    private structure;
    constructor(structureId: StructureId, compositionId: CompositionId, pagingCommandService: StructurePagingCommandDispatcher, pagingEventService: StructurePagingEventRepository, sourceCommandService: SourceCommandDispatcher, sourceEventService: SourceEventService, schemaCommandDispatcher: SchemaCommandDispatcher, compositionCommandService: CompositionCommandDispatcher, compositionEventService: CompositionEventRepository, formationEventService: FormationEventService, structureCommandService: StructureCommandDispatcher, structureEditModeArchive: StructureEditModeArchive, structureCellEditArchive: StructureCellEditArchive, structureInfoPanelEnabledArchive: StructureInfoPanelEnabledArchive, structureSummariesConfigService: StructureSummariesConfigService, structureCellEditStore: StructureCellEditStore, structureColumnMenuConfigArchive: StructureColumnMenuConfigArchive, structurePagingDisplayModeArchive: StructurePagingDisplayModeArchive, structureRowSelectEnabledArchive: StructureRowSelectEnabledArchive, structureSearchEventService: StructureSearchEventService, structureHeaderTopEnabledArchive: StructureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive: StructureHeaderBottomEnabledArchive, structureDetailViewConfigArchive: StructureRowDetailConfigArchive, structureTitlePanelConfigArchive: StructureTitlePanelConfigArchive, structureFooterPanelConfigArchive: StructureFooterPanelConfigArchive, schemaEventRepository: SchemaEventRepository, elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, structureDefinition: StructureDefinition, structureReadModelService: StructureWarehouse, compositionReadModelService: CompositionWarehouse, schemaStylesManager: SchemaCssClassManager, schemaReadModelRootId: SchemaReadModelRootId, structureDetailViewService: StructureRowDetailService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    isBorderEnabled(): boolean;
    getStructureId(): StructureId;
    getElementRef(): ElementRef;
}
