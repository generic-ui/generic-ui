/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Input, Output } from '@angular/core';
import { skip } from 'rxjs/operators';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { SchemaTheme } from '../../../schema/domain/schema-theme';
import { SchemaRowColoring } from '../../../schema/domain/schema-row-coloring';
import { StructureCellEditState } from '../edit/structure.cell-edit.state';
import { ColumnMenuConfig } from '../../ui-api/column-menu-config';
/**
 * \@internal
 * @abstract
 */
var StructureGateway = /** @class */ (function (_super) {
    tslib_1.__extends(StructureGateway, _super);
    function StructureGateway(structureId, compositionId, structureCommandService, pagingCommandService, pagingEventService, sourceCommandService, sourceEventService, schemaCommandDispatcher, compositionCommandService, compositionEventService, formationEventService, structureEditModeArchive, structureCellEditArchive, structureInfoPanelEnabledArchive, structureSummariesConfigService, structureCellEditStore, structureColumnMenuConfigArchive, structurePagingDisplayModeArchive, structureRowSelectEnabledArchive, structureSearchEventService, structureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive) {
        var _this = _super.call(this) || this;
        _this.structureId = structureId;
        _this.compositionId = compositionId;
        _this.structureCommandService = structureCommandService;
        _this.pagingCommandService = pagingCommandService;
        _this.pagingEventService = pagingEventService;
        _this.sourceCommandService = sourceCommandService;
        _this.sourceEventService = sourceEventService;
        _this.schemaCommandDispatcher = schemaCommandDispatcher;
        _this.compositionCommandService = compositionCommandService;
        _this.compositionEventService = compositionEventService;
        _this.formationEventService = formationEventService;
        _this.structureEditModeArchive = structureEditModeArchive;
        _this.structureCellEditArchive = structureCellEditArchive;
        _this.structureInfoPanelEnabledArchive = structureInfoPanelEnabledArchive;
        _this.structureSummariesConfigService = structureSummariesConfigService;
        _this.structureCellEditStore = structureCellEditStore;
        _this.structureColumnMenuConfigArchive = structureColumnMenuConfigArchive;
        _this.structurePagingDisplayModeArchive = structurePagingDisplayModeArchive;
        _this.structureRowSelectEnabledArchive = structureRowSelectEnabledArchive;
        _this.structureSearchEventService = structureSearchEventService;
        _this.structureHeaderTopEnabledArchive = structureHeaderTopEnabledArchive;
        _this.structureHeaderBottomEnabledArchive = structureHeaderBottomEnabledArchive;
        _this.source = [];
        _this.columns = [];
        /**
         * ********************
         * OUTPUTS
         * *********************
         */
        _this.pageChanged = new EventEmitter();
        _this.pageSizeChanged = new EventEmitter();
        _this.itemsSelected = new EventEmitter();
        _this.columnsChanged = new EventEmitter();
        _this.containerWidthChanged = new EventEmitter();
        _this.sourceEdited = new EventEmitter();
        _this.cellEditEntered = new EventEmitter();
        _this.cellEditCanceled = new EventEmitter();
        _this.cellEditSubmitted = new EventEmitter();
        _this.searchPhraseChanged = new EventEmitter();
        return _this;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    StructureGateway.prototype.ngOnChanges = /**
     * @param {?} simpleChanges
     * @return {?}
     */
    function (simpleChanges) {
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
        if (simpleChanges.summaries !== undefined && simpleChanges.summaries.currentValue !== undefined) {
            this.structureSummariesConfigService.set(this.summaries);
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
            var pagingConfig = void 0;
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
            var sorting = void 0;
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
            var filtering = void 0;
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
            var quickFilters = void 0;
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
            var searching = void 0;
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
    };
    /**
     * @return {?}
     */
    StructureGateway.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.pagingEventService
            .onPageChange(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageNumber
         * @return {?}
         */
        function (pageNumber) {
            _this.pageChanged.emit(pageNumber);
        }));
        this.pagingEventService
            .onPageSizeChange(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} pageSize
         * @return {?}
         */
        function (pageSize) {
            _this.pageSizeChanged.emit(pageSize);
        }));
        this.formationEventService
            .onItemSelected(this.structureId)
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            _this.itemsSelected.emit(items);
        }));
        this.compositionEventService
            .onColumnsChanged(this.compositionId)
            .pipe(skip(1), // TODO system should emit response that it is ready
        this.takeUntil())
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.columnsChanged.emit();
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
        function (containerWidth) {
            _this.containerWidthChanged.emit(containerWidth);
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
        function (values) {
            _this.sourceEdited.emit(values);
        }));
        this.structureCellEditStore
            .onValue()
            .pipe(this.takeUntil())
            .subscribe((/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            switch (state) {
                case StructureCellEditState.ENTER:
                    _this.cellEditEntered.emit();
                    break;
                case StructureCellEditState.SUBMIT:
                    _this.cellEditSubmitted.emit();
                    break;
                case StructureCellEditState.CANCEL:
                    _this.cellEditCanceled.emit();
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
        function (phrase) {
            _this.searchPhraseChanged.emit(phrase);
        }));
    };
    /**
     * @param {?} page
     * @return {?}
     */
    StructureGateway.prototype.onPageChange = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        this.pageChanged.emit(page);
    };
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
        summaries: [{ type: Input }],
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
    return StructureGateway;
}(SmartComponent));
export { StructureGateway };
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
    StructureGateway.prototype.summaries;
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
    StructureGateway.prototype.structureSummariesConfigService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmdhdGV3YXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvZ2F0ZXdheS9zdHJ1Y3R1cmUuZ2F0ZXdheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBc0IvRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7QUFXbkU7SUFBK0MsNENBQWM7SUFvSDVELDBCQUNRLFdBQXdCLEVBQ3JCLGFBQTRCLEVBQzVCLHVCQUFtRCxFQUNuRCxvQkFBc0QsRUFDdEQsa0JBQWtELEVBQ2xELG9CQUE2QyxFQUM3QyxrQkFBc0MsRUFDdEMsdUJBQWdELEVBQ2hELHlCQUF1RCxFQUN2RCx1QkFBbUQsRUFDbkQscUJBQTRDLEVBQzVDLHdCQUFrRCxFQUNsRCx3QkFBa0QsRUFDbEQsZ0NBQWtFLEVBQ2xFLCtCQUFnRSxFQUNoRSxzQkFBOEMsRUFDOUMsZ0NBQWtFLEVBQ2xFLGlDQUFvRSxFQUNwRSxnQ0FBa0UsRUFDbEUsMkJBQXdELEVBQ3hELGdDQUFrRSxFQUNsRSxtQ0FBd0U7UUF0Qm5GLFlBd0JDLGlCQUFPLFNBQ1A7UUF4Qk8saUJBQVcsR0FBWCxXQUFXLENBQWE7UUFDckIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsNkJB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OztJQUM1RSwyREFBMEU7Ozs7O0lBQzFFLGtEQUF3RDs7Ozs7SUFDeEQsNERBQTRFOzs7OztJQUM1RSw2REFBOEU7Ozs7O0lBQzlFLDREQUE0RTs7Ozs7SUFDNUUsdURBQWtFOzs7OztJQUNsRSw0REFBNEU7Ozs7O0lBQzVFLCtEQUFrRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNraXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFNtYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9zbWFydC1jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uL2RvbWFpbi9wYWdpbmcvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3NjaGVtYS9kb21haW4vc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi9zY2hlbWEtcm93LWNvbG9yaW5nJztcbmltcG9ydCB7IFNvcnRpbmdDb25maWcgfSBmcm9tICcuLi8uLi91aS1hcGkvc29ydGluZy1jb25maWcnO1xuaW1wb3J0IHsgRmlsdGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vdWktYXBpL2ZpbHRlci9maWx0ZXItY29uZmlnJztcbmltcG9ydCB7IFF1aWNrRmlsdGVyc0NvbmZpZyB9IGZyb20gJy4uLy4uL3VpLWFwaS9maWx0ZXIvcXVpY2stZmlsdGVycy5jb25maWcnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vdWktYXBpL3NlYXJjaC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IFN1bW1hcmllc0NvbmZpZyB9IGZyb20gJy4uLy4uL3VpLWFwaS9zdW1tYXJpZXMvc3VtbWFyaWVzLWNvbmZpZyc7XG5pbXBvcnQgeyBFZGl0ZW1JdGVtVmFsdWVzIH0gZnJvbSAnLi4vLi4vdWktYXBpL3NvdXJjZS9ldmVudC9lZGl0ZW0taXRlbS52YWx1ZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi91aS1hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQYWdpbmdDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uL3VpLWFwaS9wYWdpbmcvc3RydWN0dXJlLXBhZ2luZy5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlUGFnaW5nRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnLi4vLi4vdWktYXBpL3BhZ2luZy9zdHJ1Y3R1cmUtcGFnaW5nLmV2ZW50LXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi91aS1hcGkvc291cmNlL3NvdXJjZS5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU291cmNlRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdWktYXBpL3NvdXJjZS9ldmVudC9zb3VyY2UtZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24vdWktYXBpL2NvbXBvc2l0aW9uLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkV2ZW50UmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uLy4uL2NvbXBvc2l0aW9uL3VpLWFwaS9jb21wb3NpdGlvbi5ldmVudC1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZvcm1hdGlvbkV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9mb3JtYXRpb24vZm9ybWF0aW9uLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdE1vZGVBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1tb2RlLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSW5mb1BhbmVsRW5hYmxlZEFyY2hpdmUgfSBmcm9tICcuLi9wYW5lbC9pbmZvL3N0cnVjdHVyZS5pbmZvLXBhbmVsLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vcGFuZWwvc3VtbWFyaWVzL3N0cnVjdHVyZS5zdW1tYXJpZXMtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ2VsbEVkaXRTdG9yZSB9IGZyb20gJy4uL2VkaXQvc3RydWN0dXJlLmNlbGwtZWRpdC5zdG9yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlIH0gZnJvbSAnLi4vZWRpdC9zdHJ1Y3R1cmUuY2VsbC1lZGl0LnN0YXRlJztcbmltcG9ydCB7IENvbHVtbk1lbnVDb25maWcgfSBmcm9tICcuLi8uLi91aS1hcGkvY29sdW1uLW1lbnUtY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL21lbnUvY29uZmlnL3N0cnVjdHVyZS5jb2x1bW4tbWVudS1jb25maWcuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmUgfSBmcm9tICcuLi9wYWdpbmcvbW9kZS9zdHJ1Y3R1cmUtcGFnaW5nLmRpc3BsYXktbW9kZS5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVJvd1NlbGVjdEVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vY29udGVudC9yb3cvc3RydWN0dXJlLnJvdy1zZWxlY3QtZW5hYmxlZC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaEV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3VpLWFwaS9zZWFyY2gvc3RydWN0dXJlLXNlYXJjaC1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vc2NoZW1hL3VpLWFwaS9zY2hlbWEuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vaGVhZGVyL3N0cnVjdHVyZS1oZWFkZXItYm90dG9tLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVIZWFkZXJUb3BFbmFibGVkQXJjaGl2ZSB9IGZyb20gJy4uL2hlYWRlci9zdHJ1Y3R1cmUtaGVhZGVyLXRvcC1lbmFibGVkLmFyY2hpdmUnO1xuXG5cbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdHJ1Y3R1cmVHYXRld2F5IGV4dGVuZHMgU21hcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqXG5cdCAqIElOUFVUU1xuXHQgKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0QElucHV0KClcblx0Y29sdW1uSGVhZGVyVG9wOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbkhlYWRlckJvdHRvbTogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRtYXhIZWlnaHQ6IG51bWJlcjtcblxuXHRASW5wdXQoKVxuXHR3aWR0aDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdHJvd0hlaWdodDogbnVtYmVyO1xuXG5cdEBJbnB1dCgpXG5cdGF1dG9SZXNpemVXaWR0aDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRzb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcblxuXHRASW5wdXQoKVxuXHRjb2x1bW5zOiBBcnJheTxDb2x1bW5Db25maWc+ID0gW107XG5cblx0QElucHV0KClcblx0cGFnaW5nOiBib29sZWFuIHwgUGFnaW5nQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdHZlcnRpY2FsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRob3Jpem9udGFsR3JpZDogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHR0aGVtZTogU2NoZW1hVGhlbWU7XG5cblx0QElucHV0KClcblx0cm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nO1xuXG5cdEBJbnB1dCgpXG5cdHJvd1NlbGVjdGluZzogYm9vbGVhbjtcblxuXHRASW5wdXQoKVxuXHRsb2FkaW5nOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHZpcnR1YWxTY3JvbGw6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0c29ydGluZzogYm9vbGVhbiB8IFNvcnRpbmdDb25maWc7XG5cblx0QElucHV0KClcblx0ZmlsdGVyaW5nOiBib29sZWFuIHwgRmlsdGVyQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdHF1aWNrRmlsdGVyczogYm9vbGVhbiB8IFF1aWNrRmlsdGVyc0NvbmZpZztcblxuXHRASW5wdXQoKVxuXHRzZWFyY2hpbmc6IGJvb2xlYW4gfCBTZWFyY2hDb25maWc7XG5cblx0QElucHV0KClcblx0ZWRpdE1vZGU6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0Y2VsbEVkaXRpbmc6IGJvb2xlYW47XG5cblx0QElucHV0KClcblx0aW5mb1BhbmVsOiBib29sZWFuO1xuXG5cdEBJbnB1dCgpXG5cdHN1bW1hcmllczogU3VtbWFyaWVzQ29uZmlnO1xuXG5cdEBJbnB1dCgpXG5cdGNvbHVtbk1lbnU6IENvbHVtbk1lbnVDb25maWc7XG5cblxuXHQvKioqKioqKioqKioqKioqKioqKioqKipcblx0ICogT1VUUFVUU1xuXHQgKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0QE91dHB1dCgpXG5cdHBhZ2VDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdEBPdXRwdXQoKVxuXHRwYWdlU2l6ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cblx0QE91dHB1dCgpXG5cdGl0ZW1zU2VsZWN0ZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb2x1bW5zQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRjb250YWluZXJXaWR0aENoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdEBPdXRwdXQoKVxuXHRzb3VyY2VFZGl0ZWQ6IEV2ZW50RW1pdHRlcjxFZGl0ZW1JdGVtVmFsdWVzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRFbnRlcmVkOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0QE91dHB1dCgpXG5cdGNlbGxFZGl0Q2FuY2VsZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0Y2VsbEVkaXRTdWJtaXR0ZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXHRAT3V0cHV0KClcblx0c2VhcmNoUGhyYXNlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuXHRcdHB1YmxpYyBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0cHJvdGVjdGVkIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlOiBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRwcm90ZWN0ZWQgcGFnaW5nQ29tbWFuZFNlcnZpY2U6IFN0cnVjdHVyZVBhZ2luZ0NvbW1hbmREaXNwYXRjaGVyLFxuXHRcdHByb3RlY3RlZCBwYWdpbmdFdmVudFNlcnZpY2U6IFN0cnVjdHVyZVBhZ2luZ0V2ZW50UmVwb3NpdG9yeSxcblx0XHRwcm90ZWN0ZWQgc291cmNlQ29tbWFuZFNlcnZpY2U6IFNvdXJjZUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdHByb3RlY3RlZCBzb3VyY2VFdmVudFNlcnZpY2U6IFNvdXJjZUV2ZW50U2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc2NoZW1hQ29tbWFuZERpc3BhdGNoZXI6IFNjaGVtYUNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbkNvbW1hbmRTZXJ2aWNlOiBDb21wb3NpdGlvbkNvbW1hbmREaXNwYXRjaGVyLFxuXHRcdHByb3RlY3RlZCBjb21wb3NpdGlvbkV2ZW50U2VydmljZTogQ29tcG9zaXRpb25FdmVudFJlcG9zaXRvcnksXG5cdFx0cHJvdGVjdGVkIGZvcm1hdGlvbkV2ZW50U2VydmljZTogRm9ybWF0aW9uRXZlbnRTZXJ2aWNlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVFZGl0TW9kZUFyY2hpdmU6IFN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ2VsbEVkaXRBcmNoaXZlOiBTdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUsXG5cdFx0cHJvdGVjdGVkIHN0cnVjdHVyZUluZm9QYW5lbEVuYWJsZWRBcmNoaXZlOiBTdHJ1Y3R1cmVJbmZvUGFuZWxFbmFibGVkQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZTogU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnU2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ2VsbEVkaXRTdG9yZTogU3RydWN0dXJlQ2VsbEVkaXRTdG9yZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlQ29sdW1uTWVudUNvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVQYWdpbmdEaXNwbGF5TW9kZUFyY2hpdmU6IFN0cnVjdHVyZVBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlUm93U2VsZWN0RW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZVJvd1NlbGVjdEVuYWJsZWRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVTZWFyY2hFdmVudFNlcnZpY2U6IFN0cnVjdHVyZVNlYXJjaEV2ZW50U2VydmljZSxcblx0XHRwcm90ZWN0ZWQgc3RydWN0dXJlSGVhZGVyVG9wRW5hYmxlZEFyY2hpdmU6IFN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlLFxuXHRcdHByb3RlY3RlZCBzdHJ1Y3R1cmVIZWFkZXJCb3R0b21FbmFibGVkQXJjaGl2ZTogU3RydWN0dXJlSGVhZGVyQm90dG9tRW5hYmxlZEFyY2hpdmVcblx0KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKHNpbXBsZUNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnRoZW1lICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy50aGVtZS5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kRGlzcGF0Y2hlci5zZXRUaGVtZSh0aGlzLnRoZW1lKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5jb2x1bW5NZW51ICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5jb2x1bW5NZW51LmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbHVtbk1lbnVDb25maWdBcmNoaXZlLm5leHRDb25maWcodGhpcy5jb2x1bW5NZW51KTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5yb3dTZWxlY3RpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnJvd1NlbGVjdGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVSb3dTZWxlY3RFbmFibGVkQXJjaGl2ZS5uZXh0KHRoaXMucm93U2VsZWN0aW5nKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5pbmZvUGFuZWwgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmluZm9QYW5lbC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVJbmZvUGFuZWxFbmFibGVkQXJjaGl2ZS5uZXh0KHRoaXMuaW5mb1BhbmVsKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5zdW1tYXJpZXMgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnN1bW1hcmllcy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdTZXJ2aWNlLnNldCh0aGlzLnN1bW1hcmllcyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuZWRpdE1vZGUgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmVkaXRNb2RlLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUVkaXRNb2RlQXJjaGl2ZS5uZXh0KHRoaXMuZWRpdE1vZGUpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmNlbGxFZGl0aW5nICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5jZWxsRWRpdGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDZWxsRWRpdEFyY2hpdmUubmV4dCh0aGlzLmNlbGxFZGl0aW5nKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy53aWR0aCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMud2lkdGguY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuY29tcG9zaXRpb25Db21tYW5kU2VydmljZS5zZXRXaWR0aCh0aGlzLndpZHRoKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5yb3dIZWlnaHQgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnJvd0hlaWdodC5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRSb3dIZWlnaHQodGhpcy5yb3dIZWlnaHQpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmF1dG9SZXNpemVXaWR0aCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuYXV0b1Jlc2l6ZVdpZHRoLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2Uuc2V0UmVzaXplV2lkdGgodGhpcy5hdXRvUmVzaXplV2lkdGgpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmNvbHVtbkhlYWRlclRvcCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuY29sdW1uSGVhZGVyVG9wLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUhlYWRlclRvcEVuYWJsZWRBcmNoaXZlLm5leHQodGhpcy5jb2x1bW5IZWFkZXJUb3ApO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmNvbHVtbkhlYWRlckJvdHRvbSAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuY29sdW1uSGVhZGVyQm90dG9tLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZUhlYWRlckJvdHRvbUVuYWJsZWRBcmNoaXZlLm5leHQodGhpcy5jb2x1bW5IZWFkZXJCb3R0b20pO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmxvYWRpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmxvYWRpbmcuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2Uuc2V0TG9hZGluZyh0aGlzLmxvYWRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnBhZ2luZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMucGFnaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGxldCBwYWdpbmdDb25maWc6IFBhZ2luZ0NvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnBhZ2luZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdHBhZ2luZ0NvbmZpZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLnBhZ2luZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGFnaW5nQ29uZmlnID0gdGhpcy5wYWdpbmc7XG5cblx0XHRcdFx0aWYgKHRoaXMucGFnaW5nLmRpc3BsYXlNb2RlICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHR0aGlzLnN0cnVjdHVyZVBhZ2luZ0Rpc3BsYXlNb2RlQXJjaGl2ZS5uZXh0KHRoaXMucGFnaW5nLmRpc3BsYXlNb2RlKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnBhZ2luZ0NvbW1hbmRTZXJ2aWNlLnNldFBhZ2luZyhwYWdpbmdDb25maWcpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmNvbHVtbnMpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2UuaW5pdEZpZWxkcyh0aGlzLmNvbHVtbnMsIHRoaXMuY29tcG9zaXRpb25JZCwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdFx0XHQvLyB0aGlzLmNvbXBvc2l0aW9uQ29tbWFuZFNlcnZpY2Uuc2V0Q29sdW1ucyh0aGlzLmNvbHVtbnMpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnZlcnRpY2FsR3JpZCAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMudmVydGljYWxHcmlkLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmREaXNwYXRjaGVyLnNldFZlcnRpY2FsR3JpZCh0aGlzLnZlcnRpY2FsR3JpZCk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuaG9yaXpvbnRhbEdyaWQgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLmhvcml6b250YWxHcmlkLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aGlzLnNjaGVtYUNvbW1hbmREaXNwYXRjaGVyLnNldEhvcml6b250YWxHcmlkKHRoaXMuaG9yaXpvbnRhbEdyaWQpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLnJvd0NvbG9yaW5nICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5yb3dDb2xvcmluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpcy5zY2hlbWFDb21tYW5kRGlzcGF0Y2hlci5zZXRSb3dDb2xvcmluZyh0aGlzLnJvd0NvbG9yaW5nKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5tYXhIZWlnaHQgJiYgdGhpcy5tYXhIZWlnaHQpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0Q29udGFpbmVySGVpZ2h0KHRoaXMubWF4SGVpZ2h0KTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy52aXJ0dWFsU2Nyb2xsICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy52aXJ0dWFsU2Nyb2xsLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRpZiAodGhpcy52aXJ0dWFsU2Nyb2xsKSB7XG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2UuZW5hYmxlVmVydGljYWxTY3JvbGwoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2UuZGlzYWJsZVZlcnRpY2FsU2Nyb2xsKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMuc29ydGluZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuc29ydGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRsZXQgc29ydGluZzogU29ydGluZ0NvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLnNvcnRpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRzb3J0aW5nID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMuc29ydGluZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c29ydGluZyA9IHRoaXMuc29ydGluZztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRTb3J0aW5nQ29uZmlnKHNvcnRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChzaW1wbGVDaGFuZ2VzLmZpbHRlcmluZyAhPT0gdW5kZWZpbmVkICYmIHNpbXBsZUNoYW5nZXMuZmlsdGVyaW5nLmN1cnJlbnRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdGxldCBmaWx0ZXJpbmc6IEZpbHRlckNvbmZpZztcblxuXHRcdFx0aWYgKHR5cGVvZiB0aGlzLmZpbHRlcmluZyA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRcdGZpbHRlcmluZyA9IHtcblx0XHRcdFx0XHRlbmFibGVkOiB0aGlzLmZpbHRlcmluZ1xuXHRcdFx0XHR9O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZmlsdGVyaW5nID0gdGhpcy5maWx0ZXJpbmc7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZFNlcnZpY2Uuc2V0RmlsdGVyQ29uZmlnKGZpbHRlcmluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNpbXBsZUNoYW5nZXMucXVpY2tGaWx0ZXJzICE9PSB1bmRlZmluZWQgJiYgc2ltcGxlQ2hhbmdlcy5xdWlja0ZpbHRlcnMuY3VycmVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcblxuXHRcdFx0bGV0IHF1aWNrRmlsdGVyczogUXVpY2tGaWx0ZXJzQ29uZmlnO1xuXG5cdFx0XHRpZiAodHlwZW9mIHRoaXMucXVpY2tGaWx0ZXJzID09PSAnYm9vbGVhbicpIHtcblx0XHRcdFx0cXVpY2tGaWx0ZXJzID0ge1xuXHRcdFx0XHRcdGVuYWJsZWQ6IHRoaXMucXVpY2tGaWx0ZXJzXG5cdFx0XHRcdH07XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRxdWlja0ZpbHRlcnMgPSB0aGlzLnF1aWNrRmlsdGVycztcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kU2VydmljZS5zZXRRdWlja0ZpbHRlcnNDb25maWcocXVpY2tGaWx0ZXJzKTtcblx0XHR9XG5cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5zZWFyY2hpbmcgIT09IHVuZGVmaW5lZCAmJiBzaW1wbGVDaGFuZ2VzLnNlYXJjaGluZy5jdXJyZW50VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHRsZXQgc2VhcmNoaW5nOiBTZWFyY2hDb25maWc7XG5cblx0XHRcdGlmICh0eXBlb2YgdGhpcy5zZWFyY2hpbmcgPT09ICdib29sZWFuJykge1xuXHRcdFx0XHRzZWFyY2hpbmcgPSB7XG5cdFx0XHRcdFx0ZW5hYmxlZDogdGhpcy5zZWFyY2hpbmdcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlYXJjaGluZyA9IHRoaXMuc2VhcmNoaW5nO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmRTZXJ2aWNlLnNldFNlYXJjaGluZ0NvbmZpZyhzZWFyY2hpbmcpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFNldHRpbmcgc291cmNlIHNob3VsZCBiZSBsYXN0IHN0ZXBcblx0XHQgKi9cblx0XHRpZiAoc2ltcGxlQ2hhbmdlcy5zb3VyY2UpIHtcblx0XHRcdHRoaXMuc291cmNlQ29tbWFuZFNlcnZpY2Uuc2V0T3JpZ2luKHRoaXMuc291cmNlKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdHRoaXMucGFnaW5nRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25QYWdlQ2hhbmdlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgocGFnZU51bWJlcjogbnVtYmVyKSA9PiB7XG5cdFx0XHRcdHRoaXMucGFnZUNoYW5nZWQuZW1pdChwYWdlTnVtYmVyKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5wYWdpbmdFdmVudFNlcnZpY2Vcblx0XHRcdC5vblBhZ2VTaXplQ2hhbmdlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgocGFnZVNpemU6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLnBhZ2VTaXplQ2hhbmdlZC5lbWl0KHBhZ2VTaXplKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5mb3JtYXRpb25FdmVudFNlcnZpY2Vcblx0XHRcdC5vbkl0ZW1TZWxlY3RlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKGl0ZW1zOiBBcnJheTxhbnk+KSA9PiB7XG5cdFx0XHRcdHRoaXMuaXRlbXNTZWxlY3RlZC5lbWl0KGl0ZW1zKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5jb21wb3NpdGlvbkV2ZW50U2VydmljZVxuXHRcdFx0Lm9uQ29sdW1uc0NoYW5nZWQodGhpcy5jb21wb3NpdGlvbklkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdHNraXAoMSksIC8vIFRPRE8gc3lzdGVtIHNob3VsZCBlbWl0IHJlc3BvbnNlIHRoYXQgaXQgaXMgcmVhZHlcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbHVtbnNDaGFuZ2VkLmVtaXQoKTtcblx0XHRcdH0pO1xuXG5cblx0XHR0aGlzLmNvbXBvc2l0aW9uRXZlbnRTZXJ2aWNlXG5cdFx0XHQub25Db250YWluZXJXaWR0aENoYW5nZWQodGhpcy5jb21wb3NpdGlvbklkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIHNraXAoMSksIC8vIFRPRE8gc3lzdGVtIHNob3VsZCBlbWl0IHJlc3BvbnNlIHRoYXQgaXQgaXMgcmVhZHlcblx0XHRcdFx0dGhpcy50YWtlVW50aWwoKVxuXHRcdFx0KVxuXHRcdFx0LnN1YnNjcmliZSgoY29udGFpbmVyV2lkdGg6IG51bWJlcikgPT4ge1xuXHRcdFx0XHR0aGlzLmNvbnRhaW5lcldpZHRoQ2hhbmdlZC5lbWl0KGNvbnRhaW5lcldpZHRoKTtcblx0XHRcdH0pO1xuXG5cdFx0dGhpcy5zb3VyY2VFdmVudFNlcnZpY2Vcblx0XHRcdC5vblNvdXJjZUVkaXRlZCh0aGlzLnN0cnVjdHVyZUlkKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdC8vIHRoaXMudGFrZVVudGlsKClcblx0XHRcdClcblx0XHRcdC5zdWJzY3JpYmUoKHZhbHVlczogRWRpdGVtSXRlbVZhbHVlcykgPT4ge1xuXHRcdFx0XHR0aGlzLnNvdXJjZUVkaXRlZC5lbWl0KHZhbHVlcyk7XG5cdFx0XHR9KTtcblxuXHRcdHRoaXMuc3RydWN0dXJlQ2VsbEVkaXRTdG9yZVxuXHRcdFx0Lm9uVmFsdWUoKVxuXHRcdFx0LnBpcGUodGhpcy50YWtlVW50aWwoKSlcblx0XHRcdC5zdWJzY3JpYmUoKHN0YXRlOiBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlKSA9PiB7XG5cblx0XHRcdFx0c3dpdGNoIChzdGF0ZSkge1xuXG5cdFx0XHRcdFx0Y2FzZSBTdHJ1Y3R1cmVDZWxsRWRpdFN0YXRlLkVOVEVSOlxuXHRcdFx0XHRcdFx0dGhpcy5jZWxsRWRpdEVudGVyZWQuZW1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0XHRjYXNlIFN0cnVjdHVyZUNlbGxFZGl0U3RhdGUuU1VCTUlUOlxuXHRcdFx0XHRcdFx0dGhpcy5jZWxsRWRpdFN1Ym1pdHRlZC5lbWl0KCk7XG5cdFx0XHRcdFx0XHRicmVhaztcblxuXHRcdFx0XHRcdGNhc2UgU3RydWN0dXJlQ2VsbEVkaXRTdGF0ZS5DQU5DRUw6XG5cdFx0XHRcdFx0XHR0aGlzLmNlbGxFZGl0Q2FuY2VsZWQuZW1pdCgpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaEV2ZW50U2VydmljZVxuXHRcdFx0Lm9uU2VhcmNoUGhyYXNlKHRoaXMuc3RydWN0dXJlSWQpXG5cdFx0XHQucGlwZSh0aGlzLnRha2VVbnRpbCgpKVxuXHRcdFx0LnN1YnNjcmliZSgocGhyYXNlOiBzdHJpbmcpID0+IHtcblx0XHRcdFx0dGhpcy5zZWFyY2hQaHJhc2VDaGFuZ2VkLmVtaXQocGhyYXNlKTtcblx0XHRcdH0pO1xuXG5cblx0fVxuXG5cdG9uUGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkIHtcblx0XHR0aGlzLnBhZ2VDaGFuZ2VkLmVtaXQocGFnZSk7XG5cdH1cblxufVxuIl19