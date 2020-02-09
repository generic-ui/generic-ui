/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { skip } from 'rxjs/operators';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { SchemaTheme } from '../../domain/schema/schema-theme';
import { SchemaRowColoring } from '../../domain/schema/schema-row-coloring';
import { StructureCellEditState } from '../edit/structure.cell-edit.state';
import { ColumnMenuConfig } from '../../ui-api/structure/column-menu-config';
/**
 * \@internal
 * @abstract
 */
export class StructureGateway extends SmartComponent {
    /**
     * @protected
     * @param {?} structureId
     * @param {?} compositionId
     * @param {?} structureCommandService
     * @param {?} pagingCommandService
     * @param {?} pagingEventService
     * @param {?} sourceCommandService
     * @param {?} sourceEventService
     * @param {?} schemaCommandService
     * @param {?} compositionCommandService
     * @param {?} compositionEventService
     * @param {?} formationEventService
     * @param {?} structureEditModeArchive
     * @param {?} structureCellEditArchive
     * @param {?} structureInfoPanelEnabledArchive
     * @param {?} structureAggregationConfigService
     * @param {?} structureCellEditStore
     * @param {?} structureColumnMenuConfigArchive
     * @param {?} structurePagingDisplayModeArchive
     */
    constructor(structureId, compositionId, structureCommandService, pagingCommandService, pagingEventService, sourceCommandService, sourceEventService, schemaCommandService, compositionCommandService, compositionEventService, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelEnabledArchive, structureAggregationConfigService, structureCellEditStore, structureColumnMenuConfigArchive, structurePagingDisplayModeArchive) {
        super();
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.structureCommandService = structureCommandService;
        this.pagingCommandService = pagingCommandService;
        this.pagingEventService = pagingEventService;
        this.sourceCommandService = sourceCommandService;
        this.sourceEventService = sourceEventService;
        this.schemaCommandService = schemaCommandService;
        this.compositionCommandService = compositionCommandService;
        this.compositionEventService = compositionEventService;
        this.formationEventService = formationEventService;
        this.structureEditModeArchive = structureEditModeArchive;
        this.structureCellEditArchive = structureCellEditArchive;
        this.structureInfoPanelEnabledArchive = structureInfoPanelEnabledArchive;
        this.structureAggregationConfigService = structureAggregationConfigService;
        this.structureCellEditStore = structureCellEditStore;
        this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        this.structurePagingDisplayModeArchive = structurePagingDisplayModeArchive;
        this.source = [];
        this.columns = [];
        /**
         * ********************
         * OUTPUTS
         * *********************
         */
        this.pageChanged = new EventEmitter();
        this.pageSizeChanged = new EventEmitter();
        this.itemsSelected = new EventEmitter();
        this.columnsChanged = new EventEmitter();
        this.containerWidthChanged = new EventEmitter();
        this.sourceEdited = new EventEmitter();
        this.cellEditEntered = new EventEmitter();
        this.cellEditCanceled = new EventEmitter();
        this.cellEditSubmitted = new EventEmitter();
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ngOnChanges(simpleChanges) {
        if (simpleChanges.columnMenu !== undefined && simpleChanges.columnMenu.currentValue !== undefined) {
            this.structureColumnMenuConfigArchive.nextConfig(this.columnMenu);
        }
        if (simpleChanges.infoPanel !== undefined && simpleChanges.infoPanel.currentValue !== undefined) {
            this.structureInfoPanelEnabledArchive.next(this.infoPanel);
        }
        if (simpleChanges.aggregation !== undefined && simpleChanges.aggregation.currentValue !== undefined) {
            this.structureAggregationConfigService.set(this.aggregation);
        }
        if (simpleChanges.editMode !== undefined && simpleChanges.editMode.currentValue !== undefined) {
            this.structureEditModeArchive.next(this.editMode);
        }
        if (simpleChanges.cellEditing !== undefined && simpleChanges.cellEditing.currentValue !== undefined) {
            this.structureCellEditArchive.next(this.cellEditing);
        }
        if (simpleChanges.width !== undefined && simpleChanges.width.currentValue !== undefined) {
            this.compositionCommandService.setWidth(this.width);
        }
        if (simpleChanges.rowHeight !== undefined && simpleChanges.rowHeight.currentValue !== undefined) {
            this.structureCommandService.setRowHeight(this.rowHeight);
        }
        if (simpleChanges.autoResizeWidth !== undefined && simpleChanges.autoResizeWidth.currentValue !== undefined) {
            this.compositionCommandService.setResizeWidth(this.autoResizeWidth);
        }
        if (simpleChanges.columnHeaderTop !== undefined && simpleChanges.columnHeaderTop.currentValue !== undefined) {
            this.schemaCommandService.changeTopHeader(this.columnHeaderTop);
        }
        if (simpleChanges.columnHeaderBottom !== undefined && simpleChanges.columnHeaderBottom.currentValue !== undefined) {
            this.schemaCommandService.changeBottomHeader(this.columnHeaderBottom);
        }
        if (simpleChanges.loading !== undefined && simpleChanges.loading.currentValue !== undefined) {
            this.sourceCommandService.setLoading(this.loading);
        }
        if (simpleChanges.paging !== undefined && simpleChanges.paging.currentValue !== undefined) {
            /** @type {?} */
            let pagingConfig;
            if (typeof this.paging === 'boolean') {
                pagingConfig = {
                    enabled: this.paging
                };
            }
            else {
                pagingConfig = this.paging;
                if (this.paging.displayMode !== undefined) {
                    this.structurePagingDisplayModeArchive.next(this.paging.displayMode);
                }
            }
            this.pagingCommandService.setPaging(pagingConfig);
        }
        if (simpleChanges.columns) {
            this.structureCommandService.initFields(this.columns, this.compositionId, this.structureId);
            // this.compositionCommandService.setColumns(this.columns);
        }
        if (simpleChanges.verticalGrid !== undefined && simpleChanges.verticalGrid.currentValue !== undefined) {
            this.schemaCommandService.changeVerticalGrid(this.verticalGrid);
        }
        if (simpleChanges.horizontalGrid !== undefined && simpleChanges.horizontalGrid.currentValue !== undefined) {
            this.schemaCommandService.changeHorizontalGrid(this.horizontalGrid);
        }
        if (simpleChanges.theme !== undefined && simpleChanges.theme.currentValue !== undefined) {
            this.schemaCommandService.setTheme(this.theme);
        }
        if (simpleChanges.rowColoring !== undefined && simpleChanges.rowColoring.currentValue !== undefined) {
            this.schemaCommandService.setRowColoring(this.rowColoring);
        }
        if (simpleChanges.maxHeight && this.maxHeight) {
            this.schemaCommandService.setHeight(this.maxHeight);
        }
        if (simpleChanges.virtualScroll !== undefined && simpleChanges.virtualScroll.currentValue !== undefined) {
            if (this.virtualScroll) {
                this.structureCommandService.enableVerticalScroll();
            }
            else {
                this.structureCommandService.disableVerticalScroll();
            }
        }
        if (simpleChanges.sorting !== undefined && simpleChanges.sorting.currentValue !== undefined) {
            /** @type {?} */
            let sorting;
            if (typeof this.sorting === 'boolean') {
                sorting = {
                    enabled: this.sorting
                };
            }
            else {
                sorting = this.sorting;
            }
            this.structureCommandService.setSortingConfig(sorting);
        }
        if (simpleChanges.filtering !== undefined && simpleChanges.filtering.currentValue !== undefined) {
            /** @type {?} */
            let filtering;
            if (typeof this.filtering === 'boolean') {
                filtering = {
                    enabled: this.filtering
                };
            }
            else {
                filtering = this.filtering;
            }
            this.structureCommandService.setFilterConfig(filtering);
        }
        if (simpleChanges.quickFilters !== undefined && simpleChanges.quickFilters.currentValue !== undefined) {
            /** @type {?} */
            let quickFilters;
            if (typeof this.quickFilters === 'boolean') {
                quickFilters = {
                    enabled: this.quickFilters
                };
            }
            else {
                quickFilters = this.quickFilters;
            }
            this.structureCommandService.setQuickFiltersConfig(quickFilters);
        }
        if (simpleChanges.searching !== undefined && simpleChanges.searching.currentValue !== undefined) {
            /** @type {?} */
            let searching;
            if (typeof this.searching === 'boolean') {
                searching = {
                    enabled: this.searching
                };
            }
            else {
                searching = this.searching;
            }
            this.structureCommandService.setSearchingConfig(searching);
        }
        /**
         * Setting source should be last step
         */
        if (simpleChanges.source) {
            this.sourceCommandService.setOrigin(this.source);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.pagingEventService
            .onPageChange(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageNumber
         * @return {?}
         */
        (pageNumber) => {
            this.pageChanged.emit(pageNumber);
        }));
        this.pagingEventService
            .onPageSizeChange(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageSize
         * @return {?}
         */
        (pageSize) => {
            this.pageSizeChanged.emit(pageSize);
        }));
        this.formationEventService
            .onItemSelected(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        (items) => {
            this.itemsSelected.emit(items);
        }));
        this.compositionEventService
            .onColumnsChanged(this.compositionId)
            .pipe(skip(1), // TODO system should emit response that it is ready
        this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.columnsChanged.emit();
        }));
        this.compositionEventService
            .onContainerWidthChanged(this.compositionId)
            .pipe(
        // skip(1), // TODO system should emit response that it is ready
        this.takeUntil())
            .subscribe((/**
         * @param {?} containerWidth
         * @return {?}
         */
        (containerWidth) => {
            this.containerWidthChanged.emit(containerWidth);
        }));
        this.sourceEventService
            .onSourceEdited(this.structureId)
            .pipe(
        // this.takeUntil()
        )
            .subscribe((/**
         * @param {?} values
         * @return {?}
         */
        (values) => {
            this.sourceEdited.emit(values);
        }));
        this.structureCellEditStore
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        (state) => {
            switch (state) {
                case StructureCellEditState.ENTER:
                    this.cellEditEntered.emit();
                    break;
                case StructureCellEditState.SUBMIT:
                    this.cellEditSubmitted.emit();
                    break;
                case StructureCellEditState.CANCEL:
                    this.cellEditCanceled.emit();
                    break;
            }
        }));
    }
    /**
     * @param {?} page
     * @return {?}
     */
    onPageChange(page) {
        this.pageChanged.emit(page);
    }
}
StructureGateway.propDecorators = {
    columnHeaderTop: [{ type: Input }],
    columnHeaderBottom: [{ type: Input }],
    maxHeight: [{ type: Input }],
    width: [{ type: Input }],
    rowHeight: [{ type: Input }],
    autoResizeWidth: [{ type: Input }],
    source: [{ type: Input }],
    columns: [{ type: Input }],
    paging: [{ type: Input }],
    verticalGrid: [{ type: Input }],
    horizontalGrid: [{ type: Input }],
    theme: [{ type: Input }],
    rowColoring: [{ type: Input }],
    loading: [{ type: Input }],
    virtualScroll: [{ type: Input }],
    sorting: [{ type: Input }],
    filtering: [{ type: Input }],
    quickFilters: [{ type: Input }],
    searching: [{ type: Input }],
    editMode: [{ type: Input }],
    cellEditing: [{ type: Input }],
    infoPanel: [{ type: Input }],
    aggregation: [{ type: Input }],
    columnMenu: [{ type: Input }],
    pageChanged: [{ type: Output }],
    pageSizeChanged: [{ type: Output }],
    itemsSelected: [{ type: Output }],
    columnsChanged: [{ type: Output }],
    containerWidthChanged: [{ type: Output }],
    sourceEdited: [{ type: Output }],
    cellEditEntered: [{ type: Output }],
    cellEditCanceled: [{ type: Output }],
    cellEditSubmitted: [{ type: Output }]
};
if (false) {
    /**
     * ********************
     * INPUTS
     * *********************
     * @type {?}
     */
    StructureGateway.prototype.columnHeaderTop;
    /** @type {?} */
    StructureGateway.prototype.columnHeaderBottom;
    /** @type {?} */
    StructureGateway.prototype.maxHeight;
    /** @type {?} */
    StructureGateway.prototype.width;
    /** @type {?} */
    StructureGateway.prototype.rowHeight;
    /** @type {?} */
    StructureGateway.prototype.autoResizeWidth;
    /** @type {?} */
    StructureGateway.prototype.source;
    /** @type {?} */
    StructureGateway.prototype.columns;
    /** @type {?} */
    StructureGateway.prototype.paging;
    /** @type {?} */
    StructureGateway.prototype.verticalGrid;
    /** @type {?} */
    StructureGateway.prototype.horizontalGrid;
    /** @type {?} */
    StructureGateway.prototype.theme;
    /** @type {?} */
    StructureGateway.prototype.rowColoring;
    /** @type {?} */
    StructureGateway.prototype.loading;
    /** @type {?} */
    StructureGateway.prototype.virtualScroll;
    /** @type {?} */
    StructureGateway.prototype.sorting;
    /** @type {?} */
    StructureGateway.prototype.filtering;
    /** @type {?} */
    StructureGateway.prototype.quickFilters;
    /** @type {?} */
    StructureGateway.prototype.searching;
    /** @type {?} */
    StructureGateway.prototype.editMode;
    /** @type {?} */
    StructureGateway.prototype.cellEditing;
    /** @type {?} */
    StructureGateway.prototype.infoPanel;
    /** @type {?} */
    StructureGateway.prototype.aggregation;
    /** @type {?} */
    StructureGateway.prototype.columnMenu;
    /**
     * ********************
     * OUTPUTS
     * *********************
     * @type {?}
     */
    StructureGateway.prototype.pageChanged;
    /** @type {?} */
    StructureGateway.prototype.pageSizeChanged;
    /** @type {?} */
    StructureGateway.prototype.itemsSelected;
    /** @type {?} */
    StructureGateway.prototype.columnsChanged;
    /** @type {?} */
    StructureGateway.prototype.containerWidthChanged;
    /** @type {?} */
    StructureGateway.prototype.sourceEdited;
    /** @type {?} */
    StructureGateway.prototype.cellEditEntered;
    /** @type {?} */
    StructureGateway.prototype.cellEditCanceled;
    /** @type {?} */
    StructureGateway.prototype.cellEditSubmitted;
    /** @type {?} */
    StructureGateway.prototype.structureId;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.compositionId;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.pagingCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.pagingEventService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.sourceCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.sourceEventService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.schemaCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.compositionCommandService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.compositionEventService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.formationEventService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureEditModeArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureCellEditArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureInfoPanelEnabledArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureAggregationConfigService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureCellEditStore;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureColumnMenuConfigArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structurePagingDisplayModeArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvZ2F0ZXdheS9zdHJ1Y3R1cmUuZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUd4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUF1QjVFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7OztBQU03RSxNQUFNLE9BQWdCLGdCQUFpQixTQUFRLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUErRzVELFlBQ1EsV0FBd0IsRUFDckIsYUFBNEIsRUFDNUIsdUJBQWdELEVBQ2hELG9CQUEwQyxFQUMxQyxrQkFBc0MsRUFDdEMsb0JBQTBDLEVBQzFDLGtCQUFzQyxFQUN0QyxvQkFBMEMsRUFDMUMseUJBQW9ELEVBQ3BELHVCQUFnRCxFQUNoRCxxQkFBNEMsRUFDNUMsd0JBQWtELEVBQ2xELHdCQUFrRCxFQUNsRCxnQ0FBa0UsRUFDbEUsaUNBQW9FLEVBQ3BFLHNCQUE4QyxFQUM5QyxnQ0FBa0UsRUFDbEUsaUNBQW9FO1FBRTlFLEtBQUssRUFBRSxDQUFDO1FBbkJELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3JCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FB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Q3lEOztJQUV6RCw0Q0FDMEQ7O0lBRTFELDZDQUMyRDs7SUFJMUQsdUNBQStCOzs7OztJQUMvQix5Q0FBc0M7Ozs7O0lBQ3RDLG1EQUEwRDs7Ozs7SUFDMUQsZ0RBQW9EOzs7OztJQUNwRCw4Q0FBZ0Q7Ozs7O0lBQ2hELGdEQUFvRDs7Ozs7SUFDcEQsOENBQWdEOzs7OztJQUNoRCxnREFBb0Q7Ozs7O0lBQ3BELHFEQUE4RDs7Ozs7SUFDOUQsbURBQTBEOzs7OztJQUMxRCxpREFBc0Q7Ozs7O0lBQ3RELG9EQUE0RDs7Ozs7SUFDNUQsb0RBQTREOzs7OztJQUM1RCw0REFBNEU7Ozs7O0lBQzVFLDZEQUE4RTs7Ozs7SUFDOUUsa0RBQXdEOzs7OztJQUN4RCw0REFBNEU7Ozs7O0lBQzVFLDZEQUE4RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNraXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi5jb25maWcnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vZG9tYWluL3BhZ2luZy9wYWdpbmctY29uZmlnJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vZG9tYWluL3NjaGVtYS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUm93Q29sb3JpbmcgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuaW1wb3J0IHsgU29ydGluZ0NvbmZpZyB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc29ydGluZy1jb25maWcnO1xuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9maWx0ZXIvZmlsdGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBRdWlja0ZpbHRlcnNDb25maWcgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlL2ZpbHRlci9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlL3NlYXJjaC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IEFnZ3JlZ2F0aW9uQ29uZmlnIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9hZ2dyZWdhdGlvbi9hZ2dyZWdhdGlvbi1jb25maWcnO1xuaW1wb3J0IHsgRWRpdGVtSXRlbVZhbHVlcyB9IGZyb20gJy4uLy4uL3VpLWFwaS9zb3VyY2UvZXZlbnQvZWRpdGVtLWl0ZW0udmFsdWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vZG9tYWluL3N0cnVjdHVyZS1pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbXBvc2l0aW9uLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zdHJ1Y3R1cmUtY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2luZ0NvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3BhZ2luZy9wYWdpbmctY29tbWFuZC5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2luZ0V2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9wYWdpbmcvcGFnaW5nLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvc291cmNlL3NvdXJjZS1jb21tYW5kLnNlcnZpY2UnO1xuaW1wb3J0IHsgU291cmNlRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3NvdXJjZS9ldmVudC9zb3VyY2UtZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBTY2hlbWFDb21tYW5kU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zY2hlbWEvc2NoZW1hLWNvbW1hbmQuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi5ldmVudC1zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9wYW5lbC9hZ2dyZWdhdGlvbi9zdHJ1Y3R1cmUuYWdncmVnYXRpb24tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRTdG9yZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5zdG9yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LnN0YXRlJztcbmltcG9ydCB7IENvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlL2NvbHVtbi1tZW51LWNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSB9IGZyb20gJy4uL2hlYWRlci9tZW51L2NvbmZpZy9zdHJ1Y3R1cmUuY29sdW1uLW1lbnUtY29uZmlnLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlIH0gZnJvbSAnLi4vcGFnaW5nL21vZGUvc3RydWN0dXJlLXBhZ2luZy5kaXNwbGF5LW1vZGUuYXJjaGl2ZSc7XG5cblxuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFN0cnVjdHVyZUdhdGV3YXkgZXh0ZW5kcyBTbWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcblxuXHQvKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogSU5QVVRTXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRASW5wdXQoKVxuXHRjb2x1bW5IZWFkZXJUb3A6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0Y29sdW1uSGVhZGVyQm90dG9tOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdG1heEhlaWdodDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHdpZHRoOiBudW1iZXI7XG5cblx0QElucHV0KClcblx0cm93SGVpZ2h0OiBudW1iZXI7XG5cblx0QElucHV0KClcblx0YXV0b1Jlc2l6ZVdpZHRoOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHNvdXJjZTogQXJyYXk8YW55PiA9IFtdO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbnM6IEFycmF5PENvbHVtbkNvbmZpZz4gPSBbXTtcblxuXHRASW5wdXQoKVxuXHRwYWdpbmc6IGJvb2xlYW4gfCBQYWdpbmdDb25maWc7XG5cblx0QElucHV0KClcblx0dmVydGljYWxHcmlkOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGhvcml6b250YWxHcmlkOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHRoZW1lOiBTY2hlbWFUaGVtZTtcblxuXHRASW5wdXQoKVxuXHRyb3dDb2xvcmluZzogU2NoZW1hUm93Q29sb3Jpbmc7XG5cblx0QElucHV0KClcblx0bG9hZGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHR2aXJ0dWFsU2Nyb2xsOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHNvcnRpbmc6IGJvb2xlYW4gfCBTb3J0aW5nQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdGZpbHRlcmluZzogYm9vbGVhbiB8IEZpbHRlckNvbmZpZztcblxuXHRASW5wdXQoKVxuXHRxdWlja0ZpbHRlcnM6IGJvb2xlYW4gfCBRdWlja0ZpbHRlcnNDb25maWc7XG5cblx0QElucHV0KClcblx0c2VhcmNoaW5nOiBib29sZWFuIHwgU2VhcmNoQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdGVkaXRNb2RlOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNlbGxFZGl0aW5nOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGluZm9QYW5lbDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRhZ2dyZWdhdGlvbjogQWdncmVnYXRpb25Db25maWc7XG5cblx0QElucHV0KClcblx0Y29sdW1uTWVudTogQ29sdW1uTWVudUNvbmZpZztcblxuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKlxuXHQgKiBPVVRQVVRTXG5cdCAqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRAT3V0cHV0KClcblx0cGFnZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0QE91dHB1dCgpXG5cdHBhZ2VTaXplQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0aXRlbXNTZWxlY3RlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNvbHVtbnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNvbnRhaW5lcldpZHRoQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHNvdXJjZUVkaXRlZDogRXZlbnRFbWl0dGVyPEVkaXRlbUl0ZW1WYWx1ZXM+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdEVudGVyZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRDYW5jZWxlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdFN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0cHJvdGVjdGVkIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kU2VydmljZSxcblx0XHRwcm90ZWN0ZWQgcGFnaW5nQ29tbWFuZFNlcnZpY2U6IFBhZ2luZ0NvbW1hbmRTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBwYWdpbmdFdmVudFNlcnZpY2U6IFBhZ2luZ0V2ZW50U2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmRTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzb3VyY2VFdmVudFNlcnZpY2U6IFNvdXJjZUV2ZW50U2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc2NoZW1hQ29tbWFuZFNlcnZpY2U6IFNjaGVtYUNvbW1hbmRTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlOiBDb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbkV2ZW50U2VydmljZTogQ29tcG9zaXRpb25FdmVudFNlcnZpY2UsXG5cdFx0cHJvdGVjdGVkIGZvcm1hdGlvbkV2ZW50U2VydmljZTogRm9ybWF0aW9uRXZlbnRTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmU6IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxFbmFibGVkQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQWdncmVnYXRpb25Db25maWdTZXJ2aWNlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGlvbkNvbmZpZ1NlcnZpY2UsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUNlbGxFZGl0U3RvcmU6IFN0cnVjdHVyZUNlbGxFZGl0U3RvcmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlOiBTdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmVcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKHNpbXBsZUNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmNvbHVtbk1lbnUgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmNvbHVtbk1lbnUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUubmV4dENvbmZpZyh0aGlzLmNvbHVtbk1lbnUpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmluZm9QYW5lbCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuaW5mb1BhbmVsLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlLm5leHQodGhpcy5pbmZvUGFuZWwpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmFnZ3JlZ2F0aW9uICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5hZ2dyZWdhdGlvbi5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGlvbkNvbmZpZ1NlcnZpY2Uuc2V0KHRoaXMuYWdncmVnYXRpb24pO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmVkaXRNb2RlICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5lZGl0TW9kZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUubmV4dCh0aGlzLmVkaXRNb2RlKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jZWxsRWRpdGluZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuY2VsbEVkaXRpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlLm5leHQodGhpcy5jZWxsRWRpdGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMud2lkdGggIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLndpZHRoLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2Uuc2V0V2lkdGgodGhpcy53aWR0aCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMucm93SGVpZ2h0ICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5yb3dIZWlnaHQuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0Um93SGVpZ2h0KHRoaXMucm93SGVpZ2h0KTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5hdXRvUmVzaXplV2lkdGggIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmF1dG9SZXNpemVXaWR0aC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLnNldFJlc2l6ZVdpZHRoKHRoaXMuYXV0b1Jlc2l6ZVdpZHRoKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jb2x1bW5IZWFkZXJUb3AgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmNvbHVtbkhlYWRlclRvcC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kU2VydmljZS5jaGFuZ2VUb3BIZWFkZXIodGhpcy5jb2x1bW5IZWFkZXJUb3ApO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmNvbHVtbkhlYWRlckJvdHRvbSAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuY29sdW1uSGVhZGVyQm90dG9tLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmRTZXJ2aWNlLmNoYW5nZUJvdHRvbUhlYWRlcih0aGlzLmNvbHVtbkhlYWRlckJvdHRvbSk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMubG9hZGluZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMubG9hZGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zb3VyY2VDb21tYW5kU2VydmljZS5zZXRMb2FkaW5nKHRoaXMubG9hZGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMucGFnaW5nICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5wYWdpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0bGV0IHBhZ2luZ0NvbmZpZzogUGFnaW5nQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucGFnaW5nID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0cGFnaW5nQ29uZmlnID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMucGFnaW5nXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYWdpbmdDb25maWcgPSB0aGlzLnBhZ2luZztcblxuXHRcdFx0XHRpZiAodGhpcy5wYWdpbmcuZGlzcGxheU1vZGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdHRoaXMuc3RydWN0dXJlUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlLm5leHQodGhpcy5wYWdpbmcuZGlzcGxheU1vZGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucGFnaW5nQ29tbWFuZFNlcnZpY2Uuc2V0UGFnaW5nKHBhZ2luZ0NvbmZpZyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuY29sdW1ucykge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5pbml0RmllbGRzKHRoaXMuY29sdW1ucywgdGhpcy5jb21wb3NpdGlvbklkLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0XHRcdC8vIHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5zZXRDb2x1bW5zKHRoaXMuY29sdW1ucyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMudmVydGljYWxHcmlkICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy52ZXJ0aWNhbEdyaWQuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZFNlcnZpY2UuY2hhbmdlVmVydGljYWxHcmlkKHRoaXMudmVydGljYWxHcmlkKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5ob3Jpem9udGFsR3JpZCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuaG9yaXpvbnRhbEdyaWQuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZFNlcnZpY2UuY2hhbmdlSG9yaXpvbnRhbEdyaWQodGhpcy5ob3Jpem9udGFsR3JpZCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMudGhlbWUgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnRoZW1lLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmRTZXJ2aWNlLnNldFRoZW1lKHRoaXMudGhlbWUpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnJvd0NvbG9yaW5nICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5yb3dDb2xvcmluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kU2VydmljZS5zZXRSb3dDb2xvcmluZyh0aGlzLnJvd0NvbG9yaW5nKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5tYXhIZWlnaHQgJiYgdGhpcy5tYXhIZWlnaHQpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZFNlcnZpY2Uuc2V0SGVpZ2h0KHRoaXMubWF4SGVpZ2h0KTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy52aXJ0dWFsU2Nyb2xsICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy52aXJ0dWFsU2Nyb2xsLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRpZiAodGhpcy52aXJ0dWFsU2Nyb2xsKSB7XG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2UuZW5hYmxlVmVydGljYWxTY3JvbGwoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2UuZGlzYWJsZVZlcnRpY2FsU2Nyb2xsKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuc29ydGluZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuc29ydGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRsZXQgc29ydGluZzogU29ydGluZ0NvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnNvcnRpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRzb3J0aW5nID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMuc29ydGluZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c29ydGluZyA9IHRoaXMuc29ydGluZztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRTb3J0aW5nQ29uZmlnKHNvcnRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmZpbHRlcmluZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuZmlsdGVyaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGxldCBmaWx0ZXJpbmc6IEZpbHRlckNvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLmZpbHRlcmluZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdGZpbHRlcmluZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLmZpbHRlcmluZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZmlsdGVyaW5nID0gdGhpcy5maWx0ZXJpbmc7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0RmlsdGVyQ29uZmlnKGZpbHRlcmluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMucXVpY2tGaWx0ZXJzICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5xdWlja0ZpbHRlcnMuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0bGV0IHF1aWNrRmlsdGVyczogUXVpY2tGaWx0ZXJzQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucXVpY2tGaWx0ZXJzID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0cXVpY2tGaWx0ZXJzID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMucXVpY2tGaWx0ZXJzXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRxdWlja0ZpbHRlcnMgPSB0aGlzLnF1aWNrRmlsdGVycztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRRdWlja0ZpbHRlcnNDb25maWcocXVpY2tGaWx0ZXJzKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5zZWFyY2hpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnNlYXJjaGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRsZXQgc2VhcmNoaW5nOiBTZWFyY2hDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5zZWFyY2hpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRzZWFyY2hpbmcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5zZWFyY2hpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlYXJjaGluZyA9IHRoaXMuc2VhcmNoaW5nO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldFNlYXJjaGluZ0NvbmZpZyhzZWFyY2hpbmcpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNldHRpbmcgc291cmNlIHNob3VsZCBiZSBsYXN0IHN0ZXBcblx0XHQgKi9cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5zb3VyY2UpIHtcblx0XHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2Uuc2V0T3JpZ2luKHRoaXMuc291cmNlKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMucGFnaW5nRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25QYWdlQ2hhbmdlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgocGFnZU51bWJlcjogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMucGFnZUNoYW5nZWQuZW1pdChwYWdlTnVtYmVyKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5wYWdpbmdFdmVudFNlcnZpY2Vcblx0XHRcdC5vblBhZ2VTaXplQ2hhbmdlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgocGFnZVNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2VTaXplQ2hhbmdlZC5lbWl0KHBhZ2VTaXplKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5mb3JtYXRpb25FdmVudFNlcnZpY2Vcblx0XHRcdC5vbkl0ZW1TZWxlY3RlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGl0ZW1zOiBBcnJheTxhbnk+KSA9PiB7XG5cdFx0XHRcdHRoaXMuaXRlbXNTZWxlY3RlZC5lbWl0KGl0ZW1zKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkV2ZW50U2VydmljZVxuXHRcdFx0Lm9uQ29sdW1uc0NoYW5nZWQodGhpcy5jb21wb3NpdGlvbklkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHNraXAoMSksIC8vIFRPRE8gc3lzdGVtIHNob3VsZCBlbWl0IHJlc3BvbnNlIHRoYXQgaXQgaXMgcmVhZHlcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbHVtbnNDaGFuZ2VkLmVtaXQoKTtcblx0XHRcdH0pO1xuXG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25Db250YWluZXJXaWR0aENoYW5nZWQodGhpcy5jb21wb3NpdGlvbklkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIHNraXAoMSksIC8vIFRPRE8gc3lzdGVtIHNob3VsZCBlbWl0IHJlc3BvbnNlIHRoYXQgaXQgaXMgcmVhZHlcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29udGFpbmVyV2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbnRhaW5lcldpZHRoQ2hhbmdlZC5lbWl0KGNvbnRhaW5lcldpZHRoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zb3VyY2VFdmVudFNlcnZpY2Vcblx0XHRcdC5vblNvdXJjZUVkaXRlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlczogRWRpdGVtSXRlbVZhbHVlcykgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZUVkaXRlZC5lbWl0KHZhbHVlcyk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRTdG9yZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHN0YXRlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlKSA9PiB7XG5cblx0XHRcdFx0c3dpdGNoIChzdGF0ZSkge1xuXG5cdFx0XHRcdFx0Y2FzZSBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLkVOVEVSOlxuXHRcdFx0XHRcdFx0dGhpcy5jZWxsRWRpdEVudGVyZWQuZW1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuU1VCTUlUOlxuXHRcdFx0XHRcdFx0dGhpcy5jZWxsRWRpdFN1Ym1pdHRlZC5lbWl0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5DQU5DRUw6XG5cdFx0XHRcdFx0XHR0aGlzLmNlbGxFZGl0Q2FuY2VsZWQuZW1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblxuXHR9XG5cblx0b25QYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuXHRcdHRoaXMucGFnZUNoYW5nZWQuZW1pdChwYWdlKTtcblx0fVxuXG59XG4iXX0=