import { ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { EditemItemValues } from '../../../source/core/api/event/editem-item.values';
import { StructureId } from '../../../core/api/structure.id';
import { CompositionId } from '../../../../composition/core/api/composition.id';
import { StructureCommandInvoker } from '../../../core/api/structure.command-invoker';
import { PagingCommandInvoker } from '../../../paging/core/api/paging.command-invoker';
import { PagingEventRepository } from '../../../paging/core/api/paging.event-repository';
import { SourceCommandInvoker } from '../../../source/core/api/source.command-invoker';
import { SourceEventService } from '../../../source/core/api/event/source-event.service';
import { CompositionCommandInvoker } from '../../../../composition/core/api/composition.command-invoker';
import { CompositionEventRepository } from '../../../../composition/core/api/composition.event-repository';
import { FormationEventRepository } from '../../../source/core/api/formation/formation.event-repository';
import { StructureEditModeArchive } from '../edit/structure.edit-mode.archive';
import { StructureCellEditArchive } from '../edit/structure.cell-edit.archive';
import { StructureCellEditStore } from '../edit/structure.cell-edit.store';
import { RowSelectEnabledRepository } from '../../../source/core/api/formation/set-enabled/row-select-enabled.repository';
import { SearchEventRepository } from '../../../search/core/api/search.event-repository';
import { SchemaCommandInvoker } from '../../../../schema/core/api/schema.command-invoker';
import { StructureHeaderBottomEnabledArchive } from '../header/structure-header-bottom-enabled.archive';
import { SchemaEventRepository } from '../../../../schema/core/api/schema.event-repository';
import { SchemaReadModelRootId } from '../../../../schema/core/api/schema.read-model-root-id';
import { StructureInfoPanelConfigService } from '../../core/api/panel/info/structure.info-panel-config.service';
import { SortingCommandInvoker } from '../../../sorting/core/api/sorting.command-invoker';
import { SearchCommandInvoker } from '../../../search/core/api/search.command-invoker';
import { FieldCommandInvoker } from '../../../field/core/api/field.command-invoker';
import { CommandDispatcher, DomainEventBus } from '@generic-ui/hermes';
import { StructureColumnInputHandler } from './column/structure-column.input-handler';
import { ColumnFieldFactory } from '../../../../composition/core/domain/column/field/colum-field.factory';
import { RowSelectionTypeArchive } from '../../../source/core/api/formation/type/row-selection-type.archive';
import { FormationCommandInvoker } from '../../../source/core/api/formation/formation.command-invoker';
import { TranslationFacade } from '../../../../l10n/core/api/translation.facade';
import { SchemaRowClassArchive } from '../../../../schema/core/api/styling/schema.row-class.archive';
import { SchemaRowStyleArchive } from '../../../../schema/core/api/styling/schema.row-style.archive';
import { NgChanges } from '../../../../common/cdk/component/ng-changes';
import { ColumnConfig, MultiColumnConfig } from '../../../../composition/core/api/column/column.config';
import { StructureInitialValuesReadyArchive } from '../../../core/api/structure.initial-values-ready.archive';
import { SchemaTheme } from '../../../../schema/core/api/theme/schema-theme';
import { CellEditConfig } from '../../core/api/edit/cell-edit.config';
import { ColumnAutoConfigurator } from '../../../../composition/core/api/column/auto/column-auto.configurator';
import * as i0 from "@angular/core";
/** @internal */
export declare abstract class StructureGateway extends SmartComponent implements OnChanges, OnInit {
    protected readonly changeDetectorRef: ChangeDetectorRef;
    protected readonly domainEventBus: DomainEventBus;
    protected readonly commandDispatcher: CommandDispatcher;
    private readonly columnAutoConfigurator;
    structureId: StructureId;
    protected compositionId: CompositionId;
    protected schemaId: SchemaReadModelRootId;
    protected structureCommandInvoker: StructureCommandInvoker;
    protected structurePagingCommandDispatcher: PagingCommandInvoker;
    protected pagingEventRepository: PagingEventRepository;
    protected sortingCommandDispatcher: SortingCommandInvoker;
    protected searchCommandDispatcher: SearchCommandInvoker;
    protected fieldCommandDispatcher: FieldCommandInvoker;
    protected sourceCommandService: SourceCommandInvoker;
    protected sourceEventService: SourceEventService;
    protected schemaCommandInvoker: SchemaCommandInvoker;
    protected compositionCommandDispatcher: CompositionCommandInvoker;
    protected compositionEventRepository: CompositionEventRepository;
    protected formationEventService: FormationEventRepository;
    protected structureEditModeArchive: StructureEditModeArchive;
    protected structureCellEditArchive: StructureCellEditArchive;
    protected structureInfoPanelConfigService: StructureInfoPanelConfigService;
    protected structureCellEditStore: StructureCellEditStore;
    protected columnFieldFactory: ColumnFieldFactory;
    protected rowSelectEnabledArchive: RowSelectEnabledRepository;
    protected rowSelectionTypeArchive: RowSelectionTypeArchive;
    protected schemaRowClassArchive: SchemaRowClassArchive;
    protected schemaRowStyleArchive: SchemaRowStyleArchive;
    protected formationCommandDispatcher: FormationCommandInvoker;
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
    sourceEdited: EventEmitter<EditemItemValues>;
    cellEditEntered: EventEmitter<void>;
    cellEditCanceled: EventEmitter<void>;
    cellEditSubmitted: EventEmitter<void>;
    structureColumnInputHandler: StructureColumnInputHandler;
    private changeAfterInit;
    protected constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, domainEventBus: DomainEventBus, commandDispatcher: CommandDispatcher, columnAutoConfigurator: ColumnAutoConfigurator, structureId: StructureId, compositionId: CompositionId, schemaId: SchemaReadModelRootId, structureCommandInvoker: StructureCommandInvoker, structurePagingCommandDispatcher: PagingCommandInvoker, pagingEventRepository: PagingEventRepository, sortingCommandDispatcher: SortingCommandInvoker, searchCommandDispatcher: SearchCommandInvoker, fieldCommandDispatcher: FieldCommandInvoker, sourceCommandService: SourceCommandInvoker, sourceEventService: SourceEventService, schemaCommandInvoker: SchemaCommandInvoker, compositionCommandDispatcher: CompositionCommandInvoker, compositionEventRepository: CompositionEventRepository, formationEventService: FormationEventRepository, structureEditModeArchive: StructureEditModeArchive, structureCellEditArchive: StructureCellEditArchive, structureInfoPanelConfigService: StructureInfoPanelConfigService, structureCellEditStore: StructureCellEditStore, columnFieldFactory: ColumnFieldFactory, rowSelectEnabledArchive: RowSelectEnabledRepository, rowSelectionTypeArchive: RowSelectionTypeArchive, schemaRowClassArchive: SchemaRowClassArchive, schemaRowStyleArchive: SchemaRowStyleArchive, formationCommandDispatcher: FormationCommandInvoker, searchEventRepository: SearchEventRepository, structureHeaderBottomEnabledArchive: StructureHeaderBottomEnabledArchive, schemaEventRepository: SchemaEventRepository, translationService: TranslationFacade, structureInitialValuesReadyArchive: StructureInitialValuesReadyArchive);
    ngOnChanges(changes: NgChanges<StructureGateway>): void;
    ngOnInit(): void;
    private componentInitialized;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureGateway, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureGateway, never, never, { "maxHeight": "maxHeight"; "width": "width"; "rowHeight": "rowHeight"; "autoResizeWidth": "autoResizeWidth"; "source": "source"; "columns": "columns"; "editMode": "editMode"; "cellEditing": "cellEditing"; "theme": "theme"; }, { "themeChanged": "themeChanged"; "columnsChanged": "columnsChanged"; "containerWidthChanged": "containerWidthChanged"; "sourceEdited": "sourceEdited"; "cellEditEntered": "cellEditEntered"; "cellEditCanceled": "cellEditCanceled"; "cellEditSubmitted": "cellEditSubmitted"; }, never>;
}
//# sourceMappingURL=structure.gateway.d.ts.map