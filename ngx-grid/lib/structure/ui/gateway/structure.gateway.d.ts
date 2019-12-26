import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { ColumnConfig } from '../../domain/composition/column.config';
import { PagingConfig } from '../../domain/paging/paging-config';
import { SchemaTheme } from '../../domain/schema/schema-theme';
import { SchemaRowColoring } from '../../domain/schema/schema-row-coloring';
import { SortingConfig } from '../../ui-api/structure/sorting-config';
import { FilterConfig } from '../../ui-api/structure/filter/filter-config';
import { QuickFiltersConfig } from '../../ui-api/structure/filter/quick-filters.config';
import { SearchConfig } from '../../ui-api/structure/search/search-config';
import { AggregationConfig } from '../../ui-api/structure/aggregation/aggregation-config';
import { EditemItemValues } from '../../ui-api/source/event/editem-item.values';
import { StructureId } from '../../domain/structure-id';
import { CompositionId } from '../../domain/composition/composition-id';
import { StructureCommandService } from '../../ui-api/structure/structure-command.service';
import { PagingCommandService } from '../../ui-api/paging/paging-command.service';
import { PagingEventService } from '../../ui-api/paging/paging-event.service';
import { SourceCommandService } from '../../ui-api/source/source-command.service';
import { SourceEventService } from '../../ui-api/source/event/source-event.service';
import { SchemaCommandService } from '../../ui-api/schema/schema-command.service';
import { CompositionCommandService } from '../../ui-api/composition/composition.command-service';
import { CompositionEventService } from '../../ui-api/composition/composition.event-service';
import { FormationEventService } from '../../ui-api/formation/formation-event.service';
import { StructureEditModeArchive } from '../edit/structure.edit-mode.archive';
import { StructureCellEditArchive } from '../edit/structure.cell-edit.archive';
import { StructureSummaryEnabledArchive } from '../panel/summary/structure.summary-enabled.archive';
import { StructureAggregationConfigService } from '../panel/aggregation/structure.aggregation-config.service';
import { StructureCellEditStore } from '../edit/structure.cell-edit.store';
/** @internal */
export declare abstract class StructureGateway extends SmartComponent implements OnChanges, OnInit {
    structureId: StructureId;
    protected compositionId: CompositionId;
    protected structureCommandService: StructureCommandService;
    protected pagingCommandService: PagingCommandService;
    protected pagingEventService: PagingEventService;
    protected sourceCommandService: SourceCommandService;
    protected sourceEventService: SourceEventService;
    protected schemaCommandService: SchemaCommandService;
    protected compositionCommandService: CompositionCommandService;
    protected compositionEventService: CompositionEventService;
    protected formationEventService: FormationEventService;
    protected structureEditModeArchive: StructureEditModeArchive;
    protected structureCellEditArchive: StructureCellEditArchive;
    protected structureSummaryEnabledArchive: StructureSummaryEnabledArchive;
    protected structureAggregationConfigService: StructureAggregationConfigService;
    protected structureCellEditStore: StructureCellEditStore;
    /***********************
     * INPUTS
     ***********************/
    columnHeaderTop: boolean;
    columnHeaderBottom: boolean;
    height: number;
    width: number;
    autoResizeWidth: boolean;
    source: Array<any>;
    columns: Array<ColumnConfig>;
    paging: boolean | PagingConfig;
    verticalGrid: boolean;
    horizontalGrid: boolean;
    theme: SchemaTheme;
    rowColoring: SchemaRowColoring;
    loading: boolean;
    virtualScroll: boolean;
    sorting: boolean | SortingConfig;
    filtering: boolean | FilterConfig;
    quickFilters: boolean | QuickFiltersConfig;
    searching: boolean | SearchConfig;
    editMode: boolean;
    cellEditing: boolean;
    summaryPanel: boolean;
    aggregation: AggregationConfig;
    /***********************
     * OUTPUTS
     ***********************/
    pageChanged: EventEmitter<number>;
    pageSizeChanged: EventEmitter<number>;
    itemsSelected: EventEmitter<any>;
    columnsChanged: EventEmitter<void>;
    containerWidthChanged: EventEmitter<number>;
    sourceEdited: EventEmitter<EditemItemValues>;
    cellEditEntered: EventEmitter<void>;
    cellEditCanceled: EventEmitter<void>;
    cellEditSubmitted: EventEmitter<void>;
    protected constructor(structureId: StructureId, compositionId: CompositionId, structureCommandService: StructureCommandService, pagingCommandService: PagingCommandService, pagingEventService: PagingEventService, sourceCommandService: SourceCommandService, sourceEventService: SourceEventService, schemaCommandService: SchemaCommandService, compositionCommandService: CompositionCommandService, compositionEventService: CompositionEventService, formationEventService: FormationEventService, structureEditModeArchive: StructureEditModeArchive, structureCellEditArchive: StructureCellEditArchive, structureSummaryEnabledArchive: StructureSummaryEnabledArchive, structureAggregationConfigService: StructureAggregationConfigService, structureCellEditStore: StructureCellEditStore);
    ngOnChanges(simpleChanges: SimpleChanges): void;
    ngOnInit(): void;
    onPageChange(page: number): void;
}
