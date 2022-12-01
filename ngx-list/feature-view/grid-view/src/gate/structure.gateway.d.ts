import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../feature/common/src/cdk/component/lib/src/smart-component';
import { EditedItemModel } from '../../../../core/structure/source/src/api/edit/edited-item.model';
import { StructureId } from '../../../../core/structure/structure-core/src/api/global/structure.id';
import { CompositionId } from '../../../../core/composition/src/api/global/composition.id';
import { StructurePublisher } from '../../../../core/structure/structure-core/src/api/structure.publisher';
import { PagingPublisher } from '../../../../core/structure/paging/src/api/paging.publisher';
import { PagingEventRepository } from '../../../../core/structure/paging/src/api/paging.event-repository';
import { SourcePublisher } from '../../../../core/structure/source/src/api/source.publisher';
import { SourceEventService } from '../../../../core/structure/source/src/api/edit/source-event.service';
import { CompositionPublisher } from '../../../../core/composition/src/api/composition.publisher';
import { CompositionEventRepository } from '../../../../core/composition/src/api/composition.event-repository';
import { FormationEventRepository } from '../../../../core/structure/formation/src/api/formation.event-repository';
import { StructureEditModeArchive } from '../edit/structure.edit-mode.archive';
import { StructureCellEditArchive } from '../edit/structure.cell-edit.archive';
import { StructureCellEditStore } from '../edit/structure.cell-edit.store';
import { SearchEventRepository } from '../../../../core/structure/search/src/api/search.event-repository';
import { SchemaPublisher } from '../../../../core/schema/src/api/schema.publisher';
import { StructureHeaderBottomEnabledArchive } from '../header/structure-header-bottom-enabled.archive';
import { SchemaEventRepository } from '../../../../core/schema/src/api/schema.event-repository';
import { SchemaReadModelRootId } from '../../../../core/schema/src/api/global/schema.read-model-root-id';
import { StructureInfoPanelConfigService } from './panel/info/structure.info-panel-config.service';
import { SortingPublisher } from '../../../../core/structure/sorting/src/api/sorting.publisher';
import { SearchPublisher } from '../../../../core/structure/search/src/api/search.publisher';
import { StructureColumnInputHandler } from './column/structure-column.input-handler';
import { ColumnFieldFactory } from '../../../../core/composition/src/domain/column/field/colum-field.factory';
import { FormationPublisher } from '../../../../core/structure/formation/src/api/formation.publisher';
import { TranslationFacade } from '../../../../core/l10n/src/api/translation.facade';
import { NgChanges } from '../../../../feature/common/src/cdk/component/lib/src/ng-changes';
import { ColumnConfig, MultiColumnConfig } from '../../../../core/composition/src/api/column/column.config';
import { StructureInitialValuesReadyArchive } from '../../../../core/structure/structure-core/src/api/ready/structure.initial-values-ready.archive';
import { SchemaTheme } from '../../../../core/schema/src/api/theme/schema-theme';
import { CellEditConfig } from '../../../../core/structure/structure-core/src/api/edit/cell-edit.config';
import { ColumnAutoConfigurator } from '../../../../core/composition/src/api/column/auto/column-auto.configurator';
import * as i0 from "@angular/core";
/** @internal */
export declare abstract class StructureGateway extends SmartComponent implements OnChanges, OnInit {
    protected readonly changeDetectorRef: ChangeDetectorRef;
    private readonly columnAutoConfigurator;
    structureId: StructureId;
    protected compositionId: CompositionId;
    protected schemaId: SchemaReadModelRootId;
    protected structureCommandInvoker: StructurePublisher;
    protected structurePagingCommandDispatcher: PagingPublisher;
    protected pagingEventRepository: PagingEventRepository;
    protected sortingCommandInvoker: SortingPublisher;
    protected searchCommandInvoker: SearchPublisher;
    protected sourceCommandService: SourcePublisher;
    protected sourceEventService: SourceEventService;
    protected schemaCommandInvoker: SchemaPublisher;
    protected compositionCommandDispatcher: CompositionPublisher;
    protected compositionEventRepository: CompositionEventRepository;
    protected formationEventService: FormationEventRepository;
    protected structureEditModeArchive: StructureEditModeArchive;
    protected structureCellEditArchive: StructureCellEditArchive;
    protected structureInfoPanelConfigService: StructureInfoPanelConfigService;
    protected structureCellEditStore: StructureCellEditStore;
    protected columnFieldFactory: ColumnFieldFactory;
    protected formationCommandDispatcher: FormationPublisher;
    protected searchEventRepository: SearchEventRepository;
    protected structureHeaderBottomEnabledArchive: StructureHeaderBottomEnabledArchive;
    protected schemaEventRepository: SchemaEventRepository;
    protected translationService: TranslationFacade;
    protected structureInitialValuesReadyArchive: StructureInitialValuesReadyArchive;
    /** *********************
     * INPUTS
     ***********************/
    maxHeight: number;
    width: number;
    rowHeight: number;
    autoResizeWidth: boolean;
    source: Array<any>;
    columns: Array<ColumnConfig | MultiColumnConfig>;
    editMode: boolean;
    cellEditing: boolean | CellEditConfig;
    theme: SchemaTheme;
    /** *********************
     * OUTPUTS
     ***********************/
    themeChanged: EventEmitter<SchemaTheme>;
    columnsChanged: EventEmitter<void>;
    containerWidthChanged: EventEmitter<number>;
    sourceEdited: EventEmitter<EditedItemModel>;
    cellEditEntered: EventEmitter<void>;
    cellEditCanceled: EventEmitter<void>;
    cellEditSubmitted: EventEmitter<void>;
    structureColumnInputHandler: StructureColumnInputHandler;
    private changeAfterInit;
    protected constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, columnAutoConfigurator: ColumnAutoConfigurator, structureId: StructureId, compositionId: CompositionId, schemaId: SchemaReadModelRootId, structureCommandInvoker: StructurePublisher, structurePagingCommandDispatcher: PagingPublisher, pagingEventRepository: PagingEventRepository, sortingCommandInvoker: SortingPublisher, searchCommandInvoker: SearchPublisher, sourceCommandService: SourcePublisher, sourceEventService: SourceEventService, schemaCommandInvoker: SchemaPublisher, compositionCommandDispatcher: CompositionPublisher, compositionEventRepository: CompositionEventRepository, formationEventService: FormationEventRepository, structureEditModeArchive: StructureEditModeArchive, structureCellEditArchive: StructureCellEditArchive, structureInfoPanelConfigService: StructureInfoPanelConfigService, structureCellEditStore: StructureCellEditStore, columnFieldFactory: ColumnFieldFactory, formationCommandDispatcher: FormationPublisher, searchEventRepository: SearchEventRepository, structureHeaderBottomEnabledArchive: StructureHeaderBottomEnabledArchive, schemaEventRepository: SchemaEventRepository, translationService: TranslationFacade, structureInitialValuesReadyArchive: StructureInitialValuesReadyArchive);
    ngOnChanges(changes: NgChanges<StructureGateway>): void;
    ngOnInit(): void;
    private componentInitialized;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureGateway, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureGateway, never, never, { "maxHeight": "maxHeight"; "width": "width"; "rowHeight": "rowHeight"; "autoResizeWidth": "autoResizeWidth"; "source": "source"; "columns": "columns"; "editMode": "editMode"; "cellEditing": "cellEditing"; "theme": "theme"; }, { "themeChanged": "themeChanged"; "columnsChanged": "columnsChanged"; "containerWidthChanged": "containerWidthChanged"; "sourceEdited": "sourceEdited"; "cellEditEntered": "cellEditEntered"; "cellEditCanceled": "cellEditCanceled"; "cellEditSubmitted": "cellEditSubmitted"; }, never, never, false, never>;
}
