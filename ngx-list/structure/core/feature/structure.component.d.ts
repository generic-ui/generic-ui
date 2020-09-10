import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { StructureDefinition } from './structure-definition';
import { StructureIdGenerator } from './structure-id.generator';
import { StructureId } from '../domain/structure.id';
import { CompositionId } from '../../../composition/domain/composition.id';
import { SchemaCssClassManager } from './schema/schema-css-class.manager';
import { StructureCellEditArchive } from './edit/structure.cell-edit.archive';
import { StructureCellEditStore } from './edit/structure.cell-edit.store';
import { StructureEditModeArchive } from './edit/structure.edit-mode.archive';
import { StructureInfoPanelArchive } from './panel/info/structure.info-panel.archive';
import { StructureSummariesArchive } from './panel/summaries/structure.summaries.archive';
import { StructureSummariesConfigService } from './panel/summaries/structure.summaries-config.service';
import { StructureGateway } from './gateway/structure.gateway';
import { PagingCommandInvoker } from '../../paging/domain-api/paging.command-invoker';
import { PagingEventRepository } from '../../paging/domain-api/paging.event-repository';
import { SourceCommandInvoker } from '../../source/domain-api/source.command-invoker';
import { SourceEventService } from '../../source/domain-api/event/source-event.service';
import { CompositionCommandInvoker } from '../../../composition/domain-api/composition.command-invoker';
import { CompositionEventRepository } from '../../../composition/domain-api/composition.event-repository';
import { FormationEventRepository } from '../../source/domain-api/formation/formation.event-repository';
import { StructureCommandDispatcher } from '../domain-api/structure.command-dispatcher';
import { StructureWarehouse } from '../domain-api/structure.warehouse';
import { CompositionWarehouse } from '../../../composition/domain-api/composition.warehouse';
import { StructureColumnMenuConfigArchive } from './header/menu/config/structure.column-menu-config.archive';
import { PagingDisplayModeArchive } from '../../paging/feature/mode/paging-display-mode.archive';
import { RowSelectEnabledRepository } from '../../source/domain-api/formation/set-enabled/row-select-enabled.repository';
import { SearchEventRepository } from '../../search/domain-api/search.event-repository';
import { StructureCellEditCloseAllService } from './edit/structure.cell-edit-close-all.service';
import { SchemaReadModelRootId } from '../../../schema/domain-api/read/schema.read-model-root-id';
import { SchemaCommandInvoker } from '../../../schema/domain-api/schema.command-invoker';
import { StructureHeaderBottomEnabledArchive } from './header/structure-header-bottom-enabled.archive';
import { StructureHeaderTopEnabledArchive } from './header/structure-header-top-enabled.archive';
import { SchemaEventRepository } from '../../../schema/domain-api/schema.event-repository';
import { StructureRowDetailConfigArchive } from './row-detail/structure.row-detail.config-archive';
import { StructureRowDetailService } from './row-detail/structure.row-detail.service';
import { StructureTitlePanelConfigArchive } from './panel/title-panel/structure.title-panel.config-archive';
import { StructureFooterPanelConfigArchive } from './panel/footer-panel/structure.footer-panel.config-archive';
import { StructureInfoPanelConfigService } from './panel/info/structure.info-panel-config.service';
import { SortingCommandInvoker } from '../../sorting/domain-api/sorting.command-invoker';
import { SearchCommandInvoker } from '../../search/domain-api/search.command-invoker';
import { FieldCommandInvoker } from '../../field/domain-api/field.command-invoker';
import { CommandDispatcher, DomainEventBus } from '@generic-ui/hermes';
import { ColumnFieldFactory } from '../../../composition/domain/column/field/colum-field.factory';
import { FilterContainerRef } from '../../filter/feature/config/filter-container-ref';
import { FormationCommandInvoker } from '../../source/domain-api/formation/formation.command-invoker';
import { RowSelectionTypeArchive } from '../../source/domain-api/formation/type/row-selection-type.archive';
/** @internal */
export declare function structureIdFactory(generator: StructureIdGenerator): StructureId;
/** @internal */
export declare function compositionIdFactory(generator: StructureIdGenerator): CompositionId;
/** @internal */
export declare function schemaIdFactory(generator: StructureIdGenerator): SchemaReadModelRootId;
/** @internal */
export declare const structureComponentSelfProviders: (import("@angular/core").Provider[] | {
    provide: typeof PagingCommandInvoker;
    useClass: typeof import("./local/paging/local-paging.command-dispatcher").LocalPagingCommandDispatcher;
} | {
    provide: typeof import("../../../generic-ui-ngx-list").ɵbh;
    useClass: typeof import("./local/paging/local-paging.warehouse").LocalPagingWarehouse;
} | {
    provide: typeof FormationCommandInvoker;
    useClass: typeof import("./local/formation/local-formation.command-dispatcher").LocalFormationCommandDispatcher;
} | {
    provide: typeof import("../../../generic-ui-ngx-list").ɵey;
    useClass: typeof import("./local/formation/local-formation.warehouse").LocalFormationWarehouse;
} | {
    provide: typeof StructureCommandDispatcher;
    useClass: typeof import("./local/structure/local-structure.command-dispatcher").LocalStructureCommandDispatcher;
} | {
    provide: typeof StructureWarehouse;
    useClass: typeof import("./local/structure/local-structure.warehouse").LocalStructureWarehouse;
} | {
    provide: typeof SourceCommandInvoker;
    useClass: typeof import("./local/source/local-source.command-dispatcher").LocalSourceCommandDispatcher;
} | {
    provide: typeof import("../../../generic-ui-ngx-list").ɵbo;
    useClass: typeof import("./local/source/local-source.warehouse").LocalSourceWarehouse;
} | {
    provide: typeof CompositionCommandInvoker;
    useClass: typeof import("./local/composition/local-composition.command-dispatcher").LocalCompositionCommandDispatcher;
} | {
    provide: typeof CompositionWarehouse;
    useClass: typeof import("./local/composition/local-composition.warehouse").LocalCompositionWarehouse;
} | {
    provide: typeof import("../../../generic-ui-ngx-list").ɵcd;
    useClass: typeof import("./local/search/local-structure-search.command-dispatcher").LocalStructureSearchCommandDispatcher;
} | {
    provide: typeof import("../domain-api/vertical-formation/structure-vertical-formation.warehouse").StructureVerticalFormationWarehouse;
    useClass: typeof import("./local/vertical-formation/local-structure-vertical-formation.warehouse").LocalStructureVerticalFormationWarehouse;
} | {
    provide: typeof import("../../../generic-ui-ngx-list").ɵjl;
    useClass: typeof import("./local/schema/local-schema.warehouse").LocalSchemaWarehouse;
} | {
    provide: typeof SchemaCommandInvoker;
    useClass: typeof import("./local/schema/local-schema.command-dispatcher").LocalSchemaCommandDispatcher;
} | typeof SchemaCssClassManager | typeof StructureCellEditArchive | typeof StructureCellEditStore | typeof StructureInfoPanelArchive | typeof StructureSummariesArchive | typeof StructureSummariesConfigService | typeof StructureColumnMenuConfigArchive | typeof RowSelectEnabledRepository | typeof StructureTitlePanelConfigArchive | typeof StructureInfoPanelConfigService | typeof StructureCellEditCloseAllService | typeof StructureRowDetailService | {
    provide: typeof StructureId;
    useFactory: typeof structureIdFactory;
    deps: (typeof StructureIdGenerator)[];
} | {
    provide: typeof SchemaReadModelRootId;
    useFactory: typeof schemaIdFactory;
    deps: (typeof StructureIdGenerator)[];
})[];
/** @internal */
export declare class StructureComponent extends StructureGateway implements OnChanges, OnInit, AfterViewInit, FilterContainerRef {
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
    constructor(structureId: StructureId, compositionId: CompositionId, pagingCommandService: PagingCommandInvoker, pagingEventRepository: PagingEventRepository, sourceCommandDispatcher: SourceCommandInvoker, sourceEventService: SourceEventService, sortingCommandDispatcher: SortingCommandInvoker, searchCommandDispatcher: SearchCommandInvoker, fieldCommandDispatcher: FieldCommandInvoker, schemaCommandDispatcher: SchemaCommandInvoker, compositionCommandDispatcher: CompositionCommandInvoker, compositionEventRepository: CompositionEventRepository, formationEventService: FormationEventRepository, structureCommandService: StructureCommandDispatcher, structureEditModeArchive: StructureEditModeArchive, structureCellEditArchive: StructureCellEditArchive, structureInfoPanelArchive: StructureInfoPanelArchive, structureInfoPanelConfigService: StructureInfoPanelConfigService, structureSummariesConfigService: StructureSummariesConfigService, structureCellEditStore: StructureCellEditStore, columnFieldFactory: ColumnFieldFactory, structureColumnMenuConfigArchive: StructureColumnMenuConfigArchive, pagingDisplayModeArchive: PagingDisplayModeArchive, rowSelectEnabledArchive: RowSelectEnabledRepository, rowSelectionTypeArchive: RowSelectionTypeArchive, formationCommandDispatcher: FormationCommandInvoker, searchEventRepository: SearchEventRepository, structureHeaderTopEnabledArchive: StructureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive: StructureHeaderBottomEnabledArchive, structureDetailViewConfigArchive: StructureRowDetailConfigArchive, structureTitlePanelConfigArchive: StructureTitlePanelConfigArchive, structureFooterPanelConfigArchive: StructureFooterPanelConfigArchive, schemaEventRepository: SchemaEventRepository, elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, structureDefinition: StructureDefinition, structureReadModelService: StructureWarehouse, compositionReadModelService: CompositionWarehouse, schemaStylesManager: SchemaCssClassManager, schemaReadModelRootId: SchemaReadModelRootId, domainEventBus: DomainEventBus, commandDispatcher: CommandDispatcher, structureDetailViewService: StructureRowDetailService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    isBorderEnabled(): boolean;
    getStructureId(): StructureId;
    getElementRef(): ElementRef;
}
