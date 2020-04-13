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
import { StructurePagingCommandDispatcher } from '../ui-api/paging/structure-paging.command-dispatcher';
import { StructurePagingEventRepository } from '../ui-api/paging/structure-paging.event-repository';
import { SourceCommandDispatcher } from '../ui-api/source/source.command-dispatcher';
import { SourceEventService } from '../ui-api/source/event/source-event.service';
import { CompositionCommandDispatcher } from '../../composition/ui-api/composition.command-dispatcher';
import { CompositionEventRepository } from '../../composition/ui-api/composition.event-repository';
import { FormationEventService } from '../ui-api/formation/formation-event.service';
import { StructureCommandDispatcher } from '../ui-api/structure.command-dispatcher';
import { StructureWarehouse } from '../ui-api/structure.warehouse';
import { CompositionWarehouse } from '../../composition/ui-api/composition.warehouse';
import { StructureColumnMenuConfigArchive } from './header/menu/config/structure.column-menu-config.archive';
import { StructurePagingDisplayModeArchive } from './paging/mode/structure-paging.display-mode.archive';
import { StructureRowSelectEnabledArchive } from './content/row/structure.row-select-enabled.archive';
import { StructureSearchEventService } from '../ui-api/search/structure-search-event.service';
import { StructureCellEditCloseAllService } from './edit/structure.cell-edit-close-all.service';
import { SchemaReadModelRootId } from '../../schema/read/schema.read-model-root-id';
import { SchemaCommandDispatcher } from '../../schema/ui-api/schema.command-dispatcher';
import { StructureHeaderBottomEnabledArchive } from './header/structure-header-bottom-enabled.archive';
import { StructureHeaderTopEnabledArchive } from './header/structure-header-top-enabled.archive';
/** @internal */
export declare function structureIdFactory(generator: StructureIdGenerator): StructureId;
/** @internal */
export declare function compositionIdFactory(generator: StructureIdGenerator): CompositionId;
/** @internal */
export declare function schemaIdFactory(generator: StructureIdGenerator): SchemaReadModelRootId;
/** @internal */
export declare const structureComponentSelfProviders: (typeof StructurePagingDisplayModeArchive | {
    provide: typeof StructurePagingCommandDispatcher;
    useClass: typeof import("./local/paging/local-paging.command-dispatcher").LocalPagingCommandDispatcher;
} | {
    provide: typeof import("../ui-api/paging/structure-paging.warehouse").StructurePagingWarehouse;
    useClass: typeof import("./local/paging/local-paging.warehouse").LocalPagingWarehouse;
} | {
    provide: typeof import("../ui-api/formation/structure-formation.dispatcher").StructureFormationDispatcher;
    useClass: typeof import("./local/formation/local-formation.command-dispatcher").LocalFormationCommandDispatcher;
} | {
    provide: typeof import("../ui-api/formation/structure-formation.warehouse").StructureFormationWarehouse;
    useClass: typeof import("./local/formation/local-formation.warehouse").LocalFormationWarehouse;
} | {
    provide: typeof StructureCommandDispatcher;
    useClass: typeof import("./local/structure/local-structure.command-dispatcher").LocalStructureCommandDispatcher;
} | {
    provide: typeof StructureWarehouse;
    useClass: typeof import("./local/structure/local-structure.warehouse").LocalStructureWarehouse;
} | {
    provide: typeof SourceCommandDispatcher; /** @internal */
    useClass: typeof import("./local/source/local-source.command-dispatcher").LocalSourceCommandDispatcher;
} | {
    provide: typeof import("../ui-api/source/structure-source.warehouse").StructureSourceWarehouse;
    useClass: typeof import("./local/source/local-source.warehouse").LocalSourceWarehouse;
} | {
    provide: typeof CompositionCommandDispatcher;
    useClass: typeof import("./local/composition/local-composition.command-dispatcher").LocalCompositionCommandDispatcher;
} | {
    provide: typeof CompositionWarehouse;
    useClass: typeof import("./local/composition/local-composition.warehouse").LocalCompositionWarehouse;
} | {
    provide: typeof import("../../../generic-ui-ngx-grid").ɵei;
    useClass: typeof import("./local/search/local-structure-search.command-dispatcher").LocalStructureSearchCommandDispatcher;
} | {
    provide: typeof import("../ui-api/vertical-formation/structure-vertical-formation.warehouse").StructureVerticalFormationWarehouse;
    useClass: typeof import("./local/vertical-formation/local-structure-vertical-formation.warehouse").LocalStructureVerticalFormationWarehouse;
} | {
    provide: typeof import("../../../generic-ui-ngx-grid").ɵdl;
    useClass: typeof import("./local/schema/local-schema.warehouse").LocalSchemaWarehouse;
} | {
    provide: typeof SchemaCommandDispatcher;
    useClass: typeof import("./local/schema/local-schema.command-dispatcher").LocalSchemaCommandDispatcher;
} | typeof SchemaCssClassManager | typeof StructureCellEditArchive | typeof StructureCellEditStore | typeof StructureSummariesArchive | typeof StructureSummariesConfigService | typeof StructureColumnMenuConfigArchive | typeof StructureCellEditCloseAllService | {
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
    loaderEnabled: boolean;
    circleLoaderEnabled: boolean;
    initialLoaderAnimation: boolean;
    private structure;
    constructor(structureId: StructureId, compositionId: CompositionId, pagingCommandService: StructurePagingCommandDispatcher, pagingEventService: StructurePagingEventRepository, sourceCommandService: SourceCommandDispatcher, sourceEventService: SourceEventService, schemaCommandDispatcher: SchemaCommandDispatcher, compositionCommandService: CompositionCommandDispatcher, compositionEventService: CompositionEventRepository, formationEventService: FormationEventService, structureCommandService: StructureCommandDispatcher, structureEditModeArchive: StructureEditModeArchive, structureCellEditArchive: StructureCellEditArchive, structureInfoPanelEnabledArchive: StructureInfoPanelEnabledArchive, structureSummariesConfigService: StructureSummariesConfigService, structureCellEditStore: StructureCellEditStore, structureColumnMenuConfigArchive: StructureColumnMenuConfigArchive, structurePagingDisplayModeArchive: StructurePagingDisplayModeArchive, structureRowSelectEnabledArchive: StructureRowSelectEnabledArchive, structureSearchEventService: StructureSearchEventService, structureHeaderTopEnabledArchive: StructureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive: StructureHeaderBottomEnabledArchive, elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, structureDefinition: StructureDefinition, structureReadModelService: StructureWarehouse, compositionReadModelService: CompositionWarehouse, schemaStylesManager: SchemaCssClassManager, schemaReadModelRootId: SchemaReadModelRootId);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    isBorderEnabled(): boolean;
    getStructureId(): StructureId;
}
