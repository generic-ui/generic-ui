/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output } from '@angular/core';
import { skip } from 'rxjs/operators';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { SchemaTheme } from '../../../schema/domain/schema-theme';
import { SchemaRowColoring } from '../../../schema/domain/schema-row-coloring';
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
     * @param {?} schemaCommandDispatcher
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
     * @param {?} structureRowSelectEnabledArchive
     * @param {?} structureSearchEventService
     * @param {?} structureHeaderTopEnabledArchive
     * @param {?} structureHeaderBottomEnabledArchive
     */
    constructor(structureId, compositionId, structureCommandService, pagingCommandService, pagingEventService, sourceCommandService, sourceEventService, schemaCommandDispatcher, compositionCommandService, compositionEventService, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelEnabledArchive, structureAggregationConfigService, structureCellEditStore, structureColumnMenuConfigArchive, structurePagingDisplayModeArchive, structureRowSelectEnabledArchive, structureSearchEventService, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive) {
        super();
        this.structureId = structureId;
        this.compositionId = compositionId;
        this.structureCommandService = structureCommandService;
        this.pagingCommandService = pagingCommandService;
        this.pagingEventService = pagingEventService;
        this.sourceCommandService = sourceCommandService;
        this.sourceEventService = sourceEventService;
        this.schemaCommandDispatcher = schemaCommandDispatcher;
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
        this.structureRowSelectEnabledArchive = structureRowSelectEnabledArchive;
        this.structureSearchEventService = structureSearchEventService;
        this.structureHeaderTopEnabledArchive = structureHeaderTopEnabledArchive;
        this.structureHeaderBottomEnabledArchive = structureHeaderBottomEnabledArchive;
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
        this.searchPhraseChanged = new EventEmitter();
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ngOnChanges(simpleChanges) {
        if (simpleChanges.theme !== undefined && simpleChanges.theme.currentValue !== undefined) {
            this.schemaCommandDispatcher.setTheme(this.theme);
        }
        if (simpleChanges.columnMenu !== undefined && simpleChanges.columnMenu.currentValue !== undefined) {
            this.structureColumnMenuConfigArchive.nextConfig(this.columnMenu);
        }
        if (simpleChanges.rowSelecting !== undefined && simpleChanges.rowSelecting.currentValue !== undefined) {
            this.structureRowSelectEnabledArchive.next(this.rowSelecting);
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
            this.structureHeaderTopEnabledArchive.next(this.columnHeaderTop);
        }
        if (simpleChanges.columnHeaderBottom !== undefined && simpleChanges.columnHeaderBottom.currentValue !== undefined) {
            this.structureHeaderBottomEnabledArchive.next(this.columnHeaderBottom);
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
            this.schemaCommandDispatcher.setVerticalGrid(this.verticalGrid);
        }
        if (simpleChanges.horizontalGrid !== undefined && simpleChanges.horizontalGrid.currentValue !== undefined) {
            this.schemaCommandDispatcher.setHorizontalGrid(this.horizontalGrid);
        }
        if (simpleChanges.rowColoring !== undefined && simpleChanges.rowColoring.currentValue !== undefined) {
            this.schemaCommandDispatcher.setRowColoring(this.rowColoring);
        }
        if (simpleChanges.maxHeight && this.maxHeight) {
            this.structureCommandService.setContainerHeight(this.maxHeight);
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
        this.structureSearchEventService
            .onSearchPhrase(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} phrase
         * @return {?}
         */
        (phrase) => {
            this.searchPhraseChanged.emit(phrase);
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
    rowSelecting: [{ type: Input }],
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
    cellEditSubmitted: [{ type: Output }],
    searchPhraseChanged: [{ type: Output }]
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
    StructureGateway.prototype.rowSelecting;
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
    StructureGateway.prototype.searchPhraseChanged;
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
    StructureGateway.prototype.schemaCommandDispatcher;
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
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureRowSelectEnabledArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureSearchEventService;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureHeaderTopEnabledArchive;
    /**
     * @type {?}
     * @protected
     */
    StructureGateway.prototype.structureHeaderBottomEnabledArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvZ2F0ZXdheS9zdHJ1Y3R1cmUuZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDOUYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUd4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFzQi9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDOzs7OztBQVc3RSxNQUFNLE9BQWdCLGdCQUFpQixTQUFRLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBb0g1RCxZQUNRLFdBQXdCLEVBQ3JCLGFBQTRCLEVBQzVCLHVCQUFtRCxFQUNuRCxvQkFBc0QsRUFDdEQsa0JBQWtELEVBQ2xELG9CQUE2QyxFQUM3QyxrQkFBc0MsRUFDdEMsdUJBQWdELEVBQ2hELHlCQUF1RCxFQUN2RCx1QkFBbUQsRUFDbkQscUJBQTRDLEVBQzVDLHdCQUFrRCxFQUNsRCx3QkFBa0QsRUFDbEQsZ0NBQWtFLEVBQ2xFLGlDQUFvRSxFQUNwRSxzQkFBOEMsRUFDOUMsZ0NBQWtFLEVBQ2xFLGlDQUFvRSxFQUNwRSxnQ0FBa0UsRUFDbEUsMkJBQXdELEVBQ3hELGdDQUFrRSxFQUNsRSxtQ0FBd0U7UUFFbEYsS0FBSyxFQUFFLENBQUM7UUF2QkQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7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Ozs7SUFDNUUsNkRBQThFOzs7OztJQUM5RSxrREFBd0Q7Ozs7O0lBQ3hELDREQUE0RTs7Ozs7SUFDNUUsNkRBQThFOzs7OztJQUM5RSw0REFBNEU7Ozs7O0lBQzVFLHVEQUFrRTs7Ozs7SUFDbEUsNERBQTRFOzs7OztJQUM1RSwrREFBa0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBza2lwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTbWFydENvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvc21hcnQtY29tcG9uZW50JztcbmltcG9ydCB7IENvbHVtbkNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL2RvbWFpbi9jb2x1bW4vY29sdW1uLmNvbmZpZyc7XG5pbXBvcnQgeyBQYWdpbmdDb25maWcgfSBmcm9tICcuLi8uLi9kb21haW4vcGFnaW5nL3BhZ2luZy1jb25maWcnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9zY2hlbWEvZG9tYWluL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYS9kb21haW4vc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5pbXBvcnQgeyBTb3J0aW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zb3J0aW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBGaWx0ZXJDb25maWcgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlL2ZpbHRlci9maWx0ZXItY29uZmlnJztcbmltcG9ydCB7IFF1aWNrRmlsdGVyc0NvbmZpZyB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmlsdGVyL3F1aWNrLWZpbHRlcnMuY29uZmlnJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc2VhcmNoL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgQWdncmVnYXRpb25Db25maWcgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlL2FnZ3JlZ2F0aW9uL2FnZ3JlZ2F0aW9uLWNvbmZpZyc7XG5pbXBvcnQgeyBFZGl0ZW1JdGVtVmFsdWVzIH0gZnJvbSAnLi4vLi4vdWktYXBpL3NvdXJjZS9ldmVudC9lZGl0ZW0taXRlbS52YWx1ZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlL3N0cnVjdHVyZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlUGFnaW5nQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi91aS1hcGkvcGFnaW5nL3N0cnVjdHVyZS1wYWdpbmcuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ0V2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3VpLWFwaS9wYWdpbmcvc3RydWN0dXJlLXBhZ2luZy5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vdWktYXBpL3NvdXJjZS9zb3VyY2UuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFNvdXJjZUV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zb3VyY2UvZXZlbnQvc291cmNlLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi91aS1hcGkvY29tcG9zaXRpb24uZXZlbnQtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBGb3JtYXRpb25FdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi91aS1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmVkaXQtbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vcGFuZWwvaW5mby9zdHJ1Y3R1cmUuaW5mby1wYW5lbC1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRpb25Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vcGFuZWwvYWdncmVnYXRpb24vc3RydWN0dXJlLmFnZ3JlZ2F0aW9uLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNlbGxFZGl0U3RvcmUgfSBmcm9tICcuLi9lZGl0L3N0cnVjdHVyZS5jZWxsLWVkaXQuc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5zdGF0ZSc7XG5pbXBvcnQgeyBDb2x1bW5NZW51Q29uZmlnIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9jb2x1bW4tbWVudS1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUgfSBmcm9tICcuLi9oZWFkZXIvbWVudS9jb25maWcvc3RydWN0dXJlLmNvbHVtbi1tZW51LWNvbmZpZy5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSB9IGZyb20gJy4uL3BhZ2luZy9tb2RlL3N0cnVjdHVyZS1wYWdpbmcuZGlzcGxheS1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlUm93U2VsZWN0RW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9jb250ZW50L3Jvdy9zdHJ1Y3R1cmUucm93LXNlbGVjdC1lbmFibGVkLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zZWFyY2gvc3RydWN0dXJlLXNlYXJjaC1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hL3VpLWFwaS9zY2hlbWEuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItYm90dG9tLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLXRvcC1lbmFibGVkLmFyY2hpdmUnO1xuXG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHJ1Y3R1cmVHYXRld2F5IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIElOUFVUU1xuXHQgKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0QElucHV0KClcblx0Y29sdW1uSGVhZGVyVG9wOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbkhlYWRlckJvdHRvbTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRtYXhIZWlnaHQ6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHR3aWR0aDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0hlaWdodDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdGF1dG9SZXNpemVXaWR0aDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+ID0gW107XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBib29sZWFuIHwgUGFnaW5nQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHR0aGVtZTogU2NoZW1hVGhlbWU7XG5cblx0QElucHV0KClcblx0cm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHJvd1NlbGVjdGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRsb2FkaW5nOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHZpcnR1YWxTY3JvbGw6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c29ydGluZzogYm9vbGVhbiB8IFNvcnRpbmdDb25maWc7XG5cblx0QElucHV0KClcblx0ZmlsdGVyaW5nOiBib29sZWFuIHwgRmlsdGVyQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdHF1aWNrRmlsdGVyczogYm9vbGVhbiB8IFF1aWNrRmlsdGVyc0NvbmZpZztcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hpbmc6IGJvb2xlYW4gfCBTZWFyY2hDb25maWc7XG5cblx0QElucHV0KClcblx0ZWRpdE1vZGU6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0Y2VsbEVkaXRpbmc6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0aW5mb1BhbmVsOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGFnZ3JlZ2F0aW9uOiBBZ2dyZWdhdGlvbkNvbmZpZztcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5NZW51OiBDb2x1bW5NZW51Q29uZmlnO1xuXG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIE9VVFBVVFNcblx0ICoqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuXHRAT3V0cHV0KClcblx0cGFnZVNpemVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRpdGVtc1NlbGVjdGVkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y29sdW1uc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y29udGFpbmVyV2lkdGhDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c291cmNlRWRpdGVkOiBFdmVudEVtaXR0ZXI8RWRpdGVtSXRlbVZhbHVlcz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0RW50ZXJlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjZWxsRWRpdENhbmNlbGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0U3VibWl0dGVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdHNlYXJjaFBocmFzZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDb21tYW5kU2VydmljZTogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0cHJvdGVjdGVkIHBhZ2luZ0NvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRwcm90ZWN0ZWQgcGFnaW5nRXZlbnRTZXJ2aWNlOiBTdHJ1Y3R1cmVQYWdpbmdFdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIHNvdXJjZUNvbW1hbmRTZXJ2aWNlOiBTb3VyY2VDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRwcm90ZWN0ZWQgc291cmNlRXZlbnRTZXJ2aWNlOiBTb3VyY2VFdmVudFNlcnZpY2UsXG5cdFx0cHJvdGVjdGVkIHNjaGVtYUNvbW1hbmREaXNwYXRjaGVyOiBTY2hlbWFDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRwcm90ZWN0ZWQgY29tcG9zaXRpb25Db21tYW5kU2VydmljZTogQ29tcG9zaXRpb25Db21tYW5kRGlzcGF0Y2hlcixcblx0XHRwcm90ZWN0ZWQgY29tcG9zaXRpb25FdmVudFNlcnZpY2U6IENvbXBvc2l0aW9uRXZlbnRSZXBvc2l0b3J5LFxuXHRcdHByb3RlY3RlZCBmb3JtYXRpb25FdmVudFNlcnZpY2U6IEZvcm1hdGlvbkV2ZW50U2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlOiBTdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUNlbGxFZGl0QXJjaGl2ZTogU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVJbmZvUGFuZWxFbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSW5mb1BhbmVsRW5hYmxlZEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUFnZ3JlZ2F0aW9uQ29uZmlnU2VydmljZTogU3RydWN0dXJlQWdncmVnYXRpb25Db25maWdTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0b3JlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVDb2x1bW5NZW51Q29uZmlnQXJjaGl2ZTogU3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZVBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZTogU3RydWN0dXJlUGFnaW5nRGlzcGxheU1vZGVBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVSb3dTZWxlY3RFbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlUm93U2VsZWN0RW5hYmxlZEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZVNlYXJjaEV2ZW50U2VydmljZTogU3RydWN0dXJlU2VhcmNoRXZlbnRTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZVxuXHQpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMudGhlbWUgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnRoZW1lLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmREaXNwYXRjaGVyLnNldFRoZW1lKHRoaXMudGhlbWUpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmNvbHVtbk1lbnUgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmNvbHVtbk1lbnUuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmUubmV4dENvbmZpZyh0aGlzLmNvbHVtbk1lbnUpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnJvd1NlbGVjdGluZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMucm93U2VsZWN0aW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVJvd1NlbGVjdEVuYWJsZWRBcmNoaXZlLm5leHQodGhpcy5yb3dTZWxlY3RpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmluZm9QYW5lbCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuaW5mb1BhbmVsLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlLm5leHQodGhpcy5pbmZvUGFuZWwpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmFnZ3JlZ2F0aW9uICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5hZ2dyZWdhdGlvbi5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVBZ2dyZWdhdGlvbkNvbmZpZ1NlcnZpY2Uuc2V0KHRoaXMuYWdncmVnYXRpb24pO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmVkaXRNb2RlICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5lZGl0TW9kZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmUubmV4dCh0aGlzLmVkaXRNb2RlKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jZWxsRWRpdGluZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuY2VsbEVkaXRpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlLm5leHQodGhpcy5jZWxsRWRpdGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMud2lkdGggIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLndpZHRoLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2Uuc2V0V2lkdGgodGhpcy53aWR0aCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMucm93SGVpZ2h0ICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5yb3dIZWlnaHQuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0Um93SGVpZ2h0KHRoaXMucm93SGVpZ2h0KTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5hdXRvUmVzaXplV2lkdGggIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmF1dG9SZXNpemVXaWR0aC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLnNldFJlc2l6ZVdpZHRoKHRoaXMuYXV0b1Jlc2l6ZVdpZHRoKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jb2x1bW5IZWFkZXJUb3AgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmNvbHVtbkhlYWRlclRvcC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZS5uZXh0KHRoaXMuY29sdW1uSGVhZGVyVG9wKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jb2x1bW5IZWFkZXJCb3R0b20gIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmNvbHVtbkhlYWRlckJvdHRvbS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZS5uZXh0KHRoaXMuY29sdW1uSGVhZGVyQm90dG9tKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5sb2FkaW5nICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5sb2FkaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNvdXJjZUNvbW1hbmRTZXJ2aWNlLnNldExvYWRpbmcodGhpcy5sb2FkaW5nKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5wYWdpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnBhZ2luZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRsZXQgcGFnaW5nQ29uZmlnOiBQYWdpbmdDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5wYWdpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRwYWdpbmdDb25maWcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5wYWdpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBhZ2luZ0NvbmZpZyA9IHRoaXMucGFnaW5nO1xuXG5cdFx0XHRcdGlmICh0aGlzLnBhZ2luZy5kaXNwbGF5TW9kZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0dGhpcy5zdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUubmV4dCh0aGlzLnBhZ2luZy5kaXNwbGF5TW9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0dGhpcy5wYWdpbmdDb21tYW5kU2VydmljZS5zZXRQYWdpbmcocGFnaW5nQ29uZmlnKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jb2x1bW5zKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLmluaXRGaWVsZHModGhpcy5jb2x1bW5zLCB0aGlzLmNvbXBvc2l0aW9uSWQsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHRcdFx0Ly8gdGhpcy5jb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlLnNldENvbHVtbnModGhpcy5jb2x1bW5zKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy52ZXJ0aWNhbEdyaWQgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnZlcnRpY2FsR3JpZC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kRGlzcGF0Y2hlci5zZXRWZXJ0aWNhbEdyaWQodGhpcy52ZXJ0aWNhbEdyaWQpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmhvcml6b250YWxHcmlkICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5ob3Jpem9udGFsR3JpZC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kRGlzcGF0Y2hlci5zZXRIb3Jpem9udGFsR3JpZCh0aGlzLmhvcml6b250YWxHcmlkKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5yb3dDb2xvcmluZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMucm93Q29sb3JpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc2NoZW1hQ29tbWFuZERpc3BhdGNoZXIuc2V0Um93Q29sb3JpbmcodGhpcy5yb3dDb2xvcmluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMubWF4SGVpZ2h0ICYmIHRoaXMubWF4SGVpZ2h0KSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldENvbnRhaW5lckhlaWdodCh0aGlzLm1heEhlaWdodCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMudmlydHVhbFNjcm9sbCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMudmlydHVhbFNjcm9sbC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aWYgKHRoaXMudmlydHVhbFNjcm9sbCkge1xuXHRcdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLmVuYWJsZVZlcnRpY2FsU2Nyb2xsKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLmRpc2FibGVWZXJ0aWNhbFNjcm9sbCgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnNvcnRpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnNvcnRpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0bGV0IHNvcnRpbmc6IFNvcnRpbmdDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5zb3J0aW5nID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0c29ydGluZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLnNvcnRpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNvcnRpbmcgPSB0aGlzLnNvcnRpbmc7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0U29ydGluZ0NvbmZpZyhzb3J0aW5nKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5maWx0ZXJpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmZpbHRlcmluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRsZXQgZmlsdGVyaW5nOiBGaWx0ZXJDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5maWx0ZXJpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRmaWx0ZXJpbmcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5maWx0ZXJpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZpbHRlcmluZyA9IHRoaXMuZmlsdGVyaW5nO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldEZpbHRlckNvbmZpZyhmaWx0ZXJpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnF1aWNrRmlsdGVycyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMucXVpY2tGaWx0ZXJzLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGxldCBxdWlja0ZpbHRlcnM6IFF1aWNrRmlsdGVyc0NvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnF1aWNrRmlsdGVycyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHF1aWNrRmlsdGVycyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLnF1aWNrRmlsdGVyc1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cXVpY2tGaWx0ZXJzID0gdGhpcy5xdWlja0ZpbHRlcnM7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0UXVpY2tGaWx0ZXJzQ29uZmlnKHF1aWNrRmlsdGVycyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuc2VhcmNoaW5nICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5zZWFyY2hpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0bGV0IHNlYXJjaGluZzogU2VhcmNoQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMuc2VhcmNoaW5nID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0c2VhcmNoaW5nID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMuc2VhcmNoaW5nXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZWFyY2hpbmcgPSB0aGlzLnNlYXJjaGluZztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRTZWFyY2hpbmdDb25maWcoc2VhcmNoaW5nKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTZXR0aW5nIHNvdXJjZSBzaG91bGQgYmUgbGFzdCBzdGVwXG5cdFx0ICovXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuc291cmNlKSB7XG5cdFx0XHR0aGlzLnNvdXJjZUNvbW1hbmRTZXJ2aWNlLnNldE9yaWdpbih0aGlzLnNvdXJjZSk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHR0aGlzLnBhZ2luZ0V2ZW50U2VydmljZVxuXHRcdFx0Lm9uUGFnZUNoYW5nZSh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHBhZ2VOdW1iZXI6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZU51bWJlcik7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMucGFnaW5nRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25QYWdlU2l6ZUNoYW5nZSh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHBhZ2VTaXplOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5wYWdlU2l6ZUNoYW5nZWQuZW1pdChwYWdlU2l6ZSk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuZm9ybWF0aW9uRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25JdGVtU2VsZWN0ZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChpdGVtczogQXJyYXk8YW55PikgPT4ge1xuXHRcdFx0XHR0aGlzLml0ZW1zU2VsZWN0ZWQuZW1pdChpdGVtcyk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuY29tcG9zaXRpb25FdmVudFNlcnZpY2Vcblx0XHRcdC5vbkNvbHVtbnNDaGFuZ2VkKHRoaXMuY29tcG9zaXRpb25JZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRza2lwKDEpLCAvLyBUT0RPIHN5c3RlbSBzaG91bGQgZW1pdCByZXNwb25zZSB0aGF0IGl0IGlzIHJlYWR5XG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKCgpID0+IHtcblx0XHRcdFx0dGhpcy5jb2x1bW5zQ2hhbmdlZC5lbWl0KCk7XG5cdFx0XHR9KTtcblxuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkV2ZW50U2VydmljZVxuXHRcdFx0Lm9uQ29udGFpbmVyV2lkdGhDaGFuZ2VkKHRoaXMuY29tcG9zaXRpb25JZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHQvLyBza2lwKDEpLCAvLyBUT0RPIHN5c3RlbSBzaG91bGQgZW1pdCByZXNwb25zZSB0aGF0IGl0IGlzIHJlYWR5XG5cdFx0XHRcdHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKGNvbnRhaW5lcldpZHRoOiBudW1iZXIpID0+IHtcblx0XHRcdFx0dGhpcy5jb250YWluZXJXaWR0aENoYW5nZWQuZW1pdChjb250YWluZXJXaWR0aCk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc291cmNlRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25Tb3VyY2VFZGl0ZWQodGhpcy5zdHJ1Y3R1cmVJZClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHQvLyB0aGlzLnRha2VVbnRpbCgpXG5cdFx0XHQpXG5cdFx0XHQuc3Vic2NyaWJlKCh2YWx1ZXM6IEVkaXRlbUl0ZW1WYWx1ZXMpID0+IHtcblx0XHRcdFx0dGhpcy5zb3VyY2VFZGl0ZWQuZW1pdCh2YWx1ZXMpO1xuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZUNlbGxFZGl0U3RvcmVcblx0XHRcdC5vblZhbHVlKClcblx0XHRcdC5waXBlKHRoaXMudGFrZVVudGlsKCkpXG5cdFx0XHQuc3Vic2NyaWJlKChzdGF0ZTogU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZSkgPT4ge1xuXG5cdFx0XHRcdHN3aXRjaCAoc3RhdGUpIHtcblxuXHRcdFx0XHRcdGNhc2UgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5FTlRFUjpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRFbnRlcmVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdFx0Y2FzZSBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLlNVQk1JVDpcblx0XHRcdFx0XHRcdHRoaXMuY2VsbEVkaXRTdWJtaXR0ZWQuZW1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuQ0FOQ0VMOlxuXHRcdFx0XHRcdFx0dGhpcy5jZWxsRWRpdENhbmNlbGVkLmVtaXQoKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zdHJ1Y3R1cmVTZWFyY2hFdmVudFNlcnZpY2Vcblx0XHRcdC5vblNlYXJjaFBocmFzZSh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHBocmFzZTogc3RyaW5nKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2VhcmNoUGhyYXNlQ2hhbmdlZC5lbWl0KHBocmFzZSk7XG5cdFx0XHR9KTtcblxuXG5cdH1cblxuXHRvblBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG5cdFx0dGhpcy5wYWdlQ2hhbmdlZC5lbWl0KHBhZ2UpO1xuXHR9XG5cbn1cbiJdfQ==