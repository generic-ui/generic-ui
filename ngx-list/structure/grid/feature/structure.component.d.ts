import { AfterViewInit, ChangeDetectorRef, ElementRef, Injector, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { StructureDefinition } from './structure-definition';
import { StructureIdGenerator } from './structure-id.generator';
import { StructureId } from '../../core/domain/structure.id';
import { CompositionId } from '../../../composition/core/domain/composition.id';
import { SchemaCssClassManager } from './schema/schema-css-class.manager';
import { StructureCellEditArchive } from './edit/structure.cell-edit.archive';
import { StructureCellEditStore } from './edit/structure.cell-edit.store';
import { StructureEditModeArchive } from './edit/structure.edit-mode.archive';
import { StructureInfoPanelArchive } from './panel/info/structure.info-panel.archive';
import { StructureSummariesArchive } from './panel/summaries/structure.summaries.archive';
import { StructureSummariesConfigService } from './panel/summaries/structure.summaries-config.service';
import { StructureGateway } from './gate/structure.gateway';
import { PagingCommandInvoker } from '../../paging/core/api/paging.command-invoker';
import { PagingEventRepository } from '../../paging/core/api/paging.event-repository';
import { SourceCommandInvoker } from '../../source/core/api/source.command-invoker';
import { SourceEventService } from '../../source/core/api/event/source-event.service';
import { CompositionCommandInvoker } from '../../../composition/core/api/composition.command-invoker';
import { CompositionEventRepository } from '../../../composition/core/api/composition.event-repository';
import { FormationEventRepository } from '../../source/core/api/formation/formation.event-repository';
import { StructureCommandInvoker } from '../../core/api/structure.command-invoker';
import { StructureWarehouse } from '../core/api/structure.warehouse';
import { CompositionWarehouse } from '../../../composition/core/api/composition.warehouse';
import { StructureColumnMenuConfigArchive } from './header/menu/config/structure.column-menu-config.archive';
import { PagingDisplayModeArchive } from '../../paging/feature/mode/paging-display-mode.archive';
import { RowSelectEnabledRepository } from '../../source/core/api/formation/set-enabled/row-select-enabled.repository';
import { SearchEventRepository } from '../../search/core/api/search.event-repository';
import { StructureCellEditCloseAllService } from './edit/structure.cell-edit-close-all.service';
import { SchemaReadModelRootId } from '../../../schema/core/api/schema.read-model-root-id';
import { SchemaCommandInvoker } from '../../../schema/core/api/schema.command-invoker';
import { StructureHeaderBottomEnabledArchive } from './header/structure-header-bottom-enabled.archive';
import { StructureHeaderTopEnabledArchive } from './header/structure-header-top-enabled.archive';
import { SchemaEventRepository } from '../../../schema/core/api/schema.event-repository';
import { StructureRowDetailConfigArchive } from './row-detail/structure.row-detail.config-archive';
import { StructureRowDetailService } from './row-detail/structure.row-detail.service';
import { StructureTitlePanelConfigArchive } from './panel/banner-panels/title-panel/structure.title-panel.config-archive';
import { StructureFooterPanelConfigArchive } from './panel/banner-panels/footer-panel/structure.footer-panel.config-archive';
import { StructureInfoPanelConfigService } from './panel/info/structure.info-panel-config.service';
import { SortingCommandInvoker } from '../../sorting/core/api/sorting.command-invoker';
import { SearchCommandInvoker } from '../../search/core/api/search.command-invoker';
import { FieldCommandInvoker } from '../../field/core/api/field.command-invoker';
import { CommandDispatcher, DomainEventBus } from '@generic-ui/hermes';
import { ColumnFieldFactory } from '../../../composition/core/domain/column/field/colum-field.factory';
import { FilterContainerRef } from '../../filter/core/api/config/filter-container-ref';
import { FormationCommandInvoker } from '../../source/core/api/formation/formation.command-invoker';
import { RowSelectionTypeArchive } from '../../source/core/api/formation/type/row-selection-type.archive';
import { TranslationService } from '../../../l10n/core/api/translation.service';
import { SchemaRowClassArchive } from '../../../schema/core/api/styling/schema.row-class.archive';
import { SchemaRowStyleArchive } from '../../../schema/core/api/styling/schema.row-style.archive';
import { NgChanges } from '../../../common/cdk/component/ng-changes';
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
    provide: typeof import("../../../generic-ui-ngx-list").ɵbi;
    useClass: typeof import("./local/paging/local-paging.warehouse").LocalPagingWarehouse;
} | {
    provide: typeof FormationCommandInvoker;
    useClass: typeof import("./local/formation/local-formation.command-dispatcher").LocalFormationCommandDispatcher;
} | {
    provide: typeof import("../../../generic-ui-ngx-list").ɵgb;
    useClass: typeof import("./local/formation/local-formation.warehouse").LocalFormationWarehouse;
} | {
    provide: typeof StructureCommandInvoker;
    useClass: typeof import("./local/structure/local-structure.command-dispatcher").LocalStructureCommandDispatcher;
} | {
    provide: typeof StructureWarehouse;
    useClass: typeof import("./local/structure/local-structure.warehouse").LocalStructureWarehouse;
} | {
    provide: typeof SourceCommandInvoker;
    useClass: typeof import("./local/source/local-source.command-dispatcher").LocalSourceCommandDispatcher;
} | {
    provide: typeof import("../../../generic-ui-ngx-list").ɵbw;
    useClass: typeof import("./local/source/local-source.warehouse").LocalSourceWarehouse;
} | {
    provide: typeof CompositionCommandInvoker;
    useClass: typeof import("./local/composition/local-composition.command-dispatcher").LocalCompositionCommandDispatcher;
} | {
    provide: typeof CompositionWarehouse;
    useClass: typeof import("./local/composition/local-composition.warehouse").LocalCompositionWarehouse;
} | {
    provide: typeof import("../../../generic-ui-ngx-list").ɵck;
    useClass: typeof import("./local/search/local-structure-search.command-dispatcher").LocalStructureSearchCommandDispatcher;
} | {
    provide: typeof import("../../../generic-ui-ngx-list").ɵde;
    useClass: typeof import("./local/vertical-formation/local-structure-vertical-formation.warehouse").LocalStructureVerticalFormationWarehouse;
} | {
    provide: typeof import("../../../generic-ui-ngx-list").ɵlf;
    useClass: typeof import("./local/schema/local-schema.warehouse").LocalSchemaWarehouse;
} | {
    provide: typeof SchemaCommandInvoker;
    useClass: typeof import("./local/schema/local-schema.command-dispatcher").LocalSchemaCommandDispatcher;
} | typeof SchemaCssClassManager | typeof StructureCellEditArchive | typeof StructureCellEditStore | typeof StructureInfoPanelArchive | typeof StructureSummariesArchive | typeof StructureSummariesConfigService | typeof StructureColumnMenuConfigArchive | typeof RowSelectEnabledRepository | typeof StructureRowDetailConfigArchive | typeof StructureTitlePanelConfigArchive | typeof StructureFooterPanelConfigArchive | typeof StructureInfoPanelConfigService | typeof StructureCellEditCloseAllService | typeof StructureRowDetailService | {
    provide: typeof StructureId;
    useFactory: typeof structureIdFactory;
    deps: (typeof StructureIdGenerator)[];
} | {
    provide: typeof SchemaReadModelRootId;
    useFactory: typeof schemaIdFactory;
    deps: (typeof StructureIdGenerator)[];
})[];
/** @internal */
export declare class StructureComponent extends StructureGateway implements OnChanges, OnInit, AfterViewInit, OnDestroy, FilterContainerRef {
    private readonly elementRef;
    private readonly detectorRef;
    readonly injector: Injector;
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
    private readonly localStreamCloser;
    private readonly styleModifier;
    constructor(structureId: StructureId, compositionId: CompositionId, pagingCommandService: PagingCommandInvoker, pagingEventRepository: PagingEventRepository, sourceCommandDispatcher: SourceCommandInvoker, sourceEventService: SourceEventService, sortingCommandDispatcher: SortingCommandInvoker, searchCommandDispatcher: SearchCommandInvoker, fieldCommandDispatcher: FieldCommandInvoker, schemaCommandDispatcher: SchemaCommandInvoker, compositionCommandDispatcher: CompositionCommandInvoker, compositionEventRepository: CompositionEventRepository, formationEventService: FormationEventRepository, structureCommandService: StructureCommandInvoker, structureEditModeArchive: StructureEditModeArchive, structureCellEditArchive: StructureCellEditArchive, structureInfoPanelArchive: StructureInfoPanelArchive, structureInfoPanelConfigService: StructureInfoPanelConfigService, structureSummariesConfigService: StructureSummariesConfigService, structureCellEditStore: StructureCellEditStore, columnFieldFactory: ColumnFieldFactory, structureColumnMenuConfigArchive: StructureColumnMenuConfigArchive, pagingDisplayModeArchive: PagingDisplayModeArchive, rowSelectEnabledArchive: RowSelectEnabledRepository, rowSelectionTypeArchive: RowSelectionTypeArchive, schemaRowClassArchive: SchemaRowClassArchive, schemaRowStyleArchive: SchemaRowStyleArchive, formationCommandDispatcher: FormationCommandInvoker, searchEventRepository: SearchEventRepository, structureHeaderTopEnabledArchive: StructureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive: StructureHeaderBottomEnabledArchive, structureDetailViewConfigArchive: StructureRowDetailConfigArchive, structureTitlePanelConfigArchive: StructureTitlePanelConfigArchive, structureFooterPanelConfigArchive: StructureFooterPanelConfigArchive, schemaEventRepository: SchemaEventRepository, translationService: TranslationService, elementRef: ElementRef, detectorRef: ChangeDetectorRef, injector: Injector, structureDefinition: StructureDefinition, structureReadModelService: StructureWarehouse, compositionReadModelService: CompositionWarehouse, schemaStylesManager: SchemaCssClassManager, schemaReadModelRootId: SchemaReadModelRootId, domainEventBus: DomainEventBus, commandDispatcher: CommandDispatcher, structureDetailViewService: StructureRowDetailService);
    ngOnChanges(changes: NgChanges<StructureComponent>): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    isBorderEnabled(): boolean;
    getStructureId(): StructureId;
    getElementRef(): ElementRef;
    protected getSelectorName(): string;
}
