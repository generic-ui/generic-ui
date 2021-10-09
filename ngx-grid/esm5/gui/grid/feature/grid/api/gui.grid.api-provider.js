/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SelectedRow } from '../../../../../structure/source/core/api/formation/selected-row';
/**
 * @record
 */
export function GuiGridApi() { }
if (false) {
    /**
     * @param {?} source
     * @return {?}
     */
    GuiGridApi.prototype.setSource = function (source) { };
    /**
     * @return {?}
     */
    GuiGridApi.prototype.showLoading = function () { };
    /**
     * @return {?}
     */
    GuiGridApi.prototype.hideLoading = function () { };
    /**
     * @return {?}
     */
    GuiGridApi.prototype.getSelectedRows = function () { };
    /**
     * @return {?}
     */
    GuiGridApi.prototype.selectAll = function () { };
    /**
     * @return {?}
     */
    GuiGridApi.prototype.unselectAll = function () { };
    /**
     * @return {?}
     */
    GuiGridApi.prototype.deleteSelectedRows = function () { };
    /**
     * @param {?} row
     * @return {?}
     */
    GuiGridApi.prototype.deleteRow = function (row) { };
    /**
     * @param {?} rows
     * @return {?}
     */
    GuiGridApi.prototype.deleteRows = function (rows) { };
    /**
     * Paging
     * @return {?}
     */
    GuiGridApi.prototype.enablePaging = function () { };
    /**
     * @return {?}
     */
    GuiGridApi.prototype.disablePaging = function () { };
    /**
     * @return {?}
     */
    GuiGridApi.prototype.nextPage = function () { };
    /**
     * @return {?}
     */
    GuiGridApi.prototype.prevPage = function () { };
    /**
     * @param {?} pageSize
     * @return {?}
     */
    GuiGridApi.prototype.changePageSize = function (pageSize) { };
    /**
     * @param {?} config
     * @return {?}
     */
    GuiGridApi.prototype.setPagingConfig = function (config) { };
    /**
     * Searching
     * @param {?} config
     * @return {?}
     */
    GuiGridApi.prototype.setSearchingConfig = function (config) { };
    /**
     * @param {?} phrase
     * @return {?}
     */
    GuiGridApi.prototype.search = function (phrase) { };
    /**
     * @return {?}
     */
    GuiGridApi.prototype.clearSearchPhrase = function () { };
    /**
     * View port
     * @return {?}
     */
    GuiGridApi.prototype.scrollToTop = function () { };
    /**
     * @return {?}
     */
    GuiGridApi.prototype.scrollToBottom = function () { };
    /**
     * @param {?} index
     * @return {?}
     */
    GuiGridApi.prototype.scrollToRowByIndex = function (index) { };
    /**
     * Visual - Schema
     * @param {?} theme
     * @return {?}
     */
    GuiGridApi.prototype.setTheme = function (theme) { };
    /**
     * @param {?} enabled
     * @return {?}
     */
    GuiGridApi.prototype.setVerticalGrid = function (enabled) { };
    /**
     * @param {?} enabled
     * @return {?}
     */
    GuiGridApi.prototype.setHorizontalGrid = function (enabled) { };
    /**
     * @param {?} rowColoring
     * @return {?}
     */
    GuiGridApi.prototype.setRowColoring = function (rowColoring) { };
    /**
     * Virtual scroll
     * @return {?}
     */
    GuiGridApi.prototype.enableVirtualScroll = function () { };
    /**
     * @return {?}
     */
    GuiGridApi.prototype.disableVirtualScroll = function () { };
    /**
     * Summaries
     * @return {?}
     */
    GuiGridApi.prototype.enableSummaries = function () { };
    /**
     * @return {?}
     */
    GuiGridApi.prototype.disableSummaries = function () { };
    /**
     * Sorting
     * @param {?} config
     * @return {?}
     */
    GuiGridApi.prototype.setSortConfig = function (config) { };
}
var GuiGridApiProvider = /** @class */ (function () {
    function GuiGridApiProvider(structureId, schemaId, formationCommandDispatcher, formationWarehouse, sourceCommandInvoker, searchCommandInvoker, gridThemeCommandInvoker, structureCommandInvoker, summariesCommandInvoker, sortingCommandInvoker, pagingCommandInvoker) {
        this.structureId = structureId;
        this.schemaId = schemaId;
        this.formationCommandInvoker = formationCommandDispatcher;
        this.formationWarehouse = formationWarehouse;
        this.sourceCommandInvoker = sourceCommandInvoker;
        this.searchCommandInvoker = searchCommandInvoker;
        this.gridThemeCommandInvoker = gridThemeCommandInvoker;
        this.structureCommandInvoker = structureCommandInvoker;
        this.summariesCommandInvoker = summariesCommandInvoker;
        this.sortingCommandInvoker = sortingCommandInvoker;
        this.pagingCommandInvoker = pagingCommandInvoker;
    }
    /**
     * @return {?}
     */
    GuiGridApiProvider.prototype.provide = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var structureId = this.structureId;
        /** @type {?} */
        var schemaId = this.schemaId;
        /** @type {?} */
        var fcd = this.formationCommandInvoker;
        /** @type {?} */
        var fw = this.formationWarehouse;
        /** @type {?} */
        var scd = this.sourceCommandInvoker;
        /** @type {?} */
        var searchCommandInvoker = this.searchCommandInvoker;
        /** @type {?} */
        var gridThemeCommandInvoker = this.gridThemeCommandInvoker;
        /** @type {?} */
        var structureCommandInvoker = this.structureCommandInvoker;
        /** @type {?} */
        var summariesCommandInvoker = this.summariesCommandInvoker;
        /** @type {?} */
        var sortingCommandInvoker = this.sortingCommandInvoker;
        /** @type {?} */
        var pagingCommandInvoker = this.pagingCommandInvoker;
        return {
            setSource: /**
             * @param {?} source
             * @return {?}
             */
            function (source) {
                scd.setOrigin(source, structureId);
            },
            showLoading: /**
             * @return {?}
             */
            function () {
                scd.setLoading(true, structureId);
            },
            hideLoading: /**
             * @return {?}
             */
            function () {
                scd.setLoading(false, structureId);
            },
            deleteRow: /**
             * @param {?} row
             * @return {?}
             */
            function (row) {
                scd.deleteRow(new SelectedRow(row.source, row.index, row.itemId), structureId);
            },
            deleteRows: /**
             * @param {?} rows
             * @return {?}
             */
            function (rows) {
                /** @type {?} */
                var selectedRows = rows.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) { return new SelectedRow(row.source, row.index, row.itemId); }));
                scd.deleteRows(selectedRows, structureId);
            },
            deleteSelectedRows: /**
             * @return {?}
             */
            function () {
                // this.sourceCommandDispatcher.
            },
            getSelectedRows: /**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var rows = fw.getSelectedRows(structureId);
                return rows.map((/**
                 * @param {?} r
                 * @return {?}
                 */
                function (r) {
                    return (/** @type {?} */ ({ source: r.getSource(), index: r.getIndex(), itemId: r.getItemId() }));
                }));
            },
            selectAll: /**
             * @return {?}
             */
            function () {
                fcd.selectAll(structureId);
            },
            unselectAll: /**
             * @return {?}
             */
            function () {
                fcd.unselectAll(structureId);
            },
            /**
             * Paging
             */
            enablePaging: /**
             * Paging
             * @return {?}
             */
            function () {
                pagingCommandInvoker.enable(structureId);
            },
            disablePaging: /**
             * @return {?}
             */
            function () {
                pagingCommandInvoker.disable(structureId);
            },
            nextPage: /**
             * @return {?}
             */
            function () {
                pagingCommandInvoker.nextPage(structureId);
            },
            prevPage: /**
             * @return {?}
             */
            function () {
                pagingCommandInvoker.prevPage(structureId);
            },
            changePageSize: /**
             * @param {?} pageSize
             * @return {?}
             */
            function (pageSize) {
                pagingCommandInvoker.changePageSize(pageSize, structureId);
            },
            setPagingConfig: /**
             * @param {?} config
             * @return {?}
             */
            function (config) {
                pagingCommandInvoker.setPaging(config, structureId);
            },
            /**
             * Searching
             */
            setSearchingConfig: /**
             * Searching
             * @param {?} config
             * @return {?}
             */
            function (config) {
                searchCommandInvoker.setSearchingConfig(config, structureId);
            },
            search: /**
             * @param {?} phrase
             * @return {?}
             */
            function (phrase) {
                searchCommandInvoker.search(phrase, structureId);
            },
            clearSearchPhrase: /**
             * @return {?}
             */
            function () {
                searchCommandInvoker.search('', structureId);
            },
            /**
             * View port
             */
            scrollToTop: /**
             * View port
             * @return {?}
             */
            function () {
                structureCommandInvoker.scrollToTop(structureId);
            },
            scrollToBottom: /**
             * @return {?}
             */
            function () {
                structureCommandInvoker.scrollToBottom(structureId);
            },
            scrollToRowByIndex: /**
             * @param {?} index
             * @return {?}
             */
            function (index) {
                structureCommandInvoker.scrollToIndex(index, structureId);
            },
            /**
             * Visual - Schema
             */
            setTheme: /**
             * Visual - Schema
             * @param {?} theme
             * @return {?}
             */
            function (theme) {
                gridThemeCommandInvoker.setTheme(theme, schemaId, structureId);
            },
            setVerticalGrid: /**
             * @param {?} enabled
             * @return {?}
             */
            function (enabled) {
                gridThemeCommandInvoker.setVerticalGrid(enabled, schemaId);
            },
            setHorizontalGrid: /**
             * @param {?} enabled
             * @return {?}
             */
            function (enabled) {
                gridThemeCommandInvoker.setHorizontalGrid(enabled, schemaId);
            },
            setRowColoring: /**
             * @param {?} rowColoring
             * @return {?}
             */
            function (rowColoring) {
                gridThemeCommandInvoker.setRowColoring(rowColoring, schemaId);
            },
            /**
             * Virtual scroll
             */
            enableVirtualScroll: /**
             * Virtual scroll
             * @return {?}
             */
            function () {
                structureCommandInvoker.enableVirtualScroll(structureId);
            },
            disableVirtualScroll: /**
             * @return {?}
             */
            function () {
                structureCommandInvoker.disableVirtualScroll(structureId);
            },
            /**
             * Summaries
             */
            enableSummaries: /**
             * Summaries
             * @return {?}
             */
            function () {
                summariesCommandInvoker.setSummariesEnabled(true, structureId);
            },
            disableSummaries: /**
             * @return {?}
             */
            function () {
                summariesCommandInvoker.setSummariesEnabled(false, structureId);
            },
            /**
             * Sorting
             */
            setSortConfig: /**
             * Sorting
             * @param {?} config
             * @return {?}
             */
            function (config) {
                sortingCommandInvoker.setSortingConfig(config, structureId);
            }
        };
    };
    return GuiGridApiProvider;
}());
export { GuiGridApiProvider };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GuiGridApiProvider.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    GuiGridApiProvider.prototype.schemaId;
    /**
     * @type {?}
     * @private
     */
    GuiGridApiProvider.prototype.formationCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    GuiGridApiProvider.prototype.formationWarehouse;
    /**
     * @type {?}
     * @private
     */
    GuiGridApiProvider.prototype.sourceCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    GuiGridApiProvider.prototype.searchCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    GuiGridApiProvider.prototype.gridThemeCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    GuiGridApiProvider.prototype.structureCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    GuiGridApiProvider.prototype.summariesCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    GuiGridApiProvider.prototype.sortingCommandInvoker;
    /**
     * @type {?}
     * @private
     */
    GuiGridApiProvider.prototype.pagingCommandInvoker;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuYXBpLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvYXBpL2d1aS5ncmlkLmFwaS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlFQUFpRSxDQUFDOzs7O0FBYzlGLGdDQW1GQzs7Ozs7O0lBakZBLHVEQUFtQzs7OztJQUVuQyxtREFBb0I7Ozs7SUFFcEIsbURBQW9COzs7O0lBRXBCLHVEQUF5Qzs7OztJQUV6QyxpREFBa0I7Ozs7SUFFbEIsbURBQW9COzs7O0lBRXBCLDBEQUEyQjs7Ozs7SUFFM0Isb0RBQXFDOzs7OztJQUVyQyxzREFBOEM7Ozs7O0lBSzlDLG9EQUFxQjs7OztJQUVyQixxREFBc0I7Ozs7SUFFdEIsZ0RBQWlCOzs7O0lBRWpCLGdEQUFpQjs7Ozs7SUFFakIsOERBQXVDOzs7OztJQUV2Qyw2REFBNEM7Ozs7OztJQUs1QyxnRUFBK0M7Ozs7O0lBRS9DLG9EQUE2Qjs7OztJQUU3Qix5REFBMEI7Ozs7O0lBSzFCLG1EQUFvQjs7OztJQUVwQixzREFBdUI7Ozs7O0lBRXZCLCtEQUF3Qzs7Ozs7O0lBS3hDLHFEQUF5Qzs7Ozs7SUFFekMsOERBQXdDOzs7OztJQUV4QyxnRUFBMEM7Ozs7O0lBRTFDLGlFQUEyRDs7Ozs7SUFLM0QsMkRBQTRCOzs7O0lBRTVCLDREQUE2Qjs7Ozs7SUFLN0IsdURBQXdCOzs7O0lBRXhCLHdEQUF5Qjs7Ozs7O0lBS3pCLDJEQUEyQzs7QUFLNUM7SUF3QkMsNEJBQVksV0FBd0IsRUFDakMsUUFBK0IsRUFDL0IsMEJBQW1ELEVBQ25ELGtCQUFzQyxFQUN0QyxvQkFBMEMsRUFDMUMsb0JBQTBDLEVBQzFDLHVCQUFtRCxFQUNuRCx1QkFBZ0QsRUFDaEQsdUJBQWdELEVBQ2hELHFCQUE0QyxFQUM1QyxvQkFBMEM7UUFDNUMs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LHVCQUF1QixDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNoRSxDQUFDO1lBRUQsZ0JBQWdCOzs7WUFBaEI7Z0JBQ0MsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2pFLENBQUM7WUFFRDs7ZUFFRztZQUNILGFBQWE7Ozs7O1lBQWIsVUFBYyxNQUFxQjtnQkFDbEMscUJBQXFCLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzdELENBQUM7U0FFRCxDQUFDO0lBRUgsQ0FBQztJQUdGLHlCQUFDO0FBQUQsQ0FBQyxBQS9ORCxJQStOQzs7Ozs7OztJQTdOQSx5Q0FBMEM7Ozs7O0lBRTFDLHNDQUFpRDs7Ozs7SUFFakQscURBQWtFOzs7OztJQUVsRSxnREFBd0Q7Ozs7O0lBRXhELGtEQUE0RDs7Ozs7SUFFNUQsa0RBQTREOzs7OztJQUU1RCxxREFBcUU7Ozs7O0lBRXJFLHFEQUFrRTs7Ozs7SUFFbEUscURBQWtFOzs7OztJQUVsRSxtREFBOEQ7Ozs7O0lBRTlELGtEQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aVJvd0NvbG9yaW5nLCBHdWlTZWxlY3RlZFJvdywgR3VpVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL3NvdXJjZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWFyY2hDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uL3RoZW1lL2d1aS5ncmlkLnRoZW1lLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWdpbmdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9wYWdpbmcvY29yZS9hcGkvcGFnaW5nLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgU3VtbWFyaWVzQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc3VtbWFyaWVzL2NvcmUvYXBpL3N1bW1hcmllcy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU29ydGluZ0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvcnRpbmcvY29yZS9hcGkvc29ydGluZy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU29ydGluZ0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3J0aW5nL2NvcmUvYXBpL3NvcnRpbmctY29uZmlnJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUdyaWRBcGkge1xuXG5cdHNldFNvdXJjZShzb3VyY2U6IEFycmF5PGFueT4pOiB2b2lkXG5cblx0c2hvd0xvYWRpbmcoKTogdm9pZDtcblxuXHRoaWRlTG9hZGluZygpOiB2b2lkO1xuXG5cdGdldFNlbGVjdGVkUm93cygpOiBBcnJheTxHdWlTZWxlY3RlZFJvdz47XG5cblx0c2VsZWN0QWxsKCk6IHZvaWQ7XG5cblx0dW5zZWxlY3RBbGwoKTogdm9pZDtcblxuXHRkZWxldGVTZWxlY3RlZFJvd3MoKTogdm9pZDtcblxuXHRkZWxldGVSb3cocm93OiBHdWlTZWxlY3RlZFJvdyk6IHZvaWQ7XG5cblx0ZGVsZXRlUm93cyhyb3dzOiBBcnJheTxHdWlTZWxlY3RlZFJvdz4pOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBQYWdpbmdcblx0ICovXG5cdGVuYWJsZVBhZ2luZygpOiB2b2lkO1xuXG5cdGRpc2FibGVQYWdpbmcoKTogdm9pZDtcblxuXHRuZXh0UGFnZSgpOiB2b2lkO1xuXG5cdHByZXZQYWdlKCk6IHZvaWQ7XG5cblx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IHZvaWQ7XG5cblx0c2V0UGFnaW5nQ29uZmlnKGNvbmZpZzogUGFnaW5nQ29uZmlnKTogdm9pZDtcblxuXHQvKipcblx0ICogU2VhcmNoaW5nXG5cdCAqL1xuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcpOiB2b2lkO1xuXG5cdHNlYXJjaChwaHJhc2U6IHN0cmluZyk6IHZvaWQ7XG5cblx0Y2xlYXJTZWFyY2hQaHJhc2UoKTogdm9pZDtcblxuXHQvKipcblx0ICogVmlldyBwb3J0XG5cdCAqL1xuXHRzY3JvbGxUb1RvcCgpOiB2b2lkO1xuXG5cdHNjcm9sbFRvQm90dG9tKCk6IHZvaWQ7XG5cblx0c2Nyb2xsVG9Sb3dCeUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBWaXN1YWwgLSBTY2hlbWFcblx0ICovXG5cdHNldFRoZW1lKHRoZW1lOiBzdHJpbmcgfCBHdWlUaGVtZSk6IHZvaWQ7XG5cblx0c2V0VmVydGljYWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xuXG5cdHNldEhvcml6b250YWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xuXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZyk6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIFZpcnR1YWwgc2Nyb2xsXG5cdCAqL1xuXHRlbmFibGVWaXJ0dWFsU2Nyb2xsKCk6IHZvaWQ7XG5cblx0ZGlzYWJsZVZpcnR1YWxTY3JvbGwoKTogdm9pZDtcblxuXHQvKipcblx0ICogU3VtbWFyaWVzXG5cdCAqL1xuXHRlbmFibGVTdW1tYXJpZXMoKTogdm9pZDtcblxuXHRkaXNhYmxlU3VtbWFyaWVzKCk6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIFNvcnRpbmdcblx0ICovXG5cdHNldFNvcnRDb25maWcoY29uZmlnOiBTb3J0aW5nQ29uZmlnKTogdm9pZDtcblxufVxuXG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkQXBpUHJvdmlkZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkNvbW1hbmRJbnZva2VyOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc291cmNlQ29tbWFuZEludm9rZXI6IFNvdXJjZUNvbW1hbmRJbnZva2VyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoQ29tbWFuZEludm9rZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3JpZFRoZW1lQ29tbWFuZEludm9rZXI6IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZEludm9rZXI6IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3VtbWFyaWVzQ29tbWFuZEludm9rZXI6IFN1bW1hcmllc0NvbW1hbmRJbnZva2VyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc29ydGluZ0NvbW1hbmRJbnZva2VyOiBTb3J0aW5nQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBwYWdpbmdDb21tYW5kSW52b2tlcjogUGFnaW5nQ29tbWFuZEludm9rZXI7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRzb3VyY2VDb21tYW5kSW52b2tlcjogU291cmNlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyOiBTZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXI6IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kSW52b2tlcjogU3RydWN0dXJlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHN1bW1hcmllc0NvbW1hbmRJbnZva2VyOiBTdW1tYXJpZXNDb21tYW5kSW52b2tlcixcblx0XHRcdFx0c29ydGluZ0NvbW1hbmRJbnZva2VyOiBTb3J0aW5nQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHBhZ2luZ0NvbW1hbmRJbnZva2VyOiBQYWdpbmdDb21tYW5kSW52b2tlcikge1xuXHRcdHRoaXMuc3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVJZDtcblx0XHR0aGlzLnNjaGVtYUlkID0gc2NoZW1hSWQ7XG5cdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kSW52b2tlciA9IGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyO1xuXHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlID0gZm9ybWF0aW9uV2FyZWhvdXNlO1xuXHRcdHRoaXMuc291cmNlQ29tbWFuZEludm9rZXIgPSBzb3VyY2VDb21tYW5kSW52b2tlcjtcblx0XHR0aGlzLnNlYXJjaENvbW1hbmRJbnZva2VyID0gc2VhcmNoQ29tbWFuZEludm9rZXI7XG5cdFx0dGhpcy5ncmlkVGhlbWVDb21tYW5kSW52b2tlciA9IGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZEludm9rZXIgPSBzdHJ1Y3R1cmVDb21tYW5kSW52b2tlcjtcblx0XHR0aGlzLnN1bW1hcmllc0NvbW1hbmRJbnZva2VyID0gc3VtbWFyaWVzQ29tbWFuZEludm9rZXI7XG5cdFx0dGhpcy5zb3J0aW5nQ29tbWFuZEludm9rZXIgPSBzb3J0aW5nQ29tbWFuZEludm9rZXI7XG5cdFx0dGhpcy5wYWdpbmdDb21tYW5kSW52b2tlciA9IHBhZ2luZ0NvbW1hbmRJbnZva2VyO1xuXHR9XG5cblx0cHJvdmlkZSgpOiBHdWlHcmlkQXBpIHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gdGhpcy5zdHJ1Y3R1cmVJZCxcblx0XHRcdHNjaGVtYUlkID0gdGhpcy5zY2hlbWFJZCxcblx0XHRcdGZjZCA9IHRoaXMuZm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRmdyA9IHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0c2NkID0gdGhpcy5zb3VyY2VDb21tYW5kSW52b2tlcixcblx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyID0gdGhpcy5zZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyID0gdGhpcy5ncmlkVGhlbWVDb21tYW5kSW52b2tlcixcblx0XHRcdHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyID0gdGhpcy5zdHJ1Y3R1cmVDb21tYW5kSW52b2tlcixcblx0XHRcdHN1bW1hcmllc0NvbW1hbmRJbnZva2VyID0gdGhpcy5zdW1tYXJpZXNDb21tYW5kSW52b2tlcixcblx0XHRcdHNvcnRpbmdDb21tYW5kSW52b2tlciA9IHRoaXMuc29ydGluZ0NvbW1hbmRJbnZva2VyLFxuXHRcdFx0cGFnaW5nQ29tbWFuZEludm9rZXIgPSB0aGlzLnBhZ2luZ0NvbW1hbmRJbnZva2VyO1xuXG5cdFx0cmV0dXJuIHtcblxuXHRcdFx0c2V0U291cmNlKHNvdXJjZTogQXJyYXk8YW55Pik6IHZvaWQge1xuXHRcdFx0XHRzY2Quc2V0T3JpZ2luKHNvdXJjZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2hvd0xvYWRpbmcoKTogdm9pZCB7XG5cdFx0XHRcdHNjZC5zZXRMb2FkaW5nKHRydWUsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGhpZGVMb2FkaW5nKCk6IHZvaWQge1xuXHRcdFx0XHRzY2Quc2V0TG9hZGluZyhmYWxzZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVsZXRlUm93KHJvdzogR3VpU2VsZWN0ZWRSb3cpOiB2b2lkIHtcblx0XHRcdFx0c2NkLmRlbGV0ZVJvdyhuZXcgU2VsZWN0ZWRSb3cocm93LnNvdXJjZSwgcm93LmluZGV4LCByb3cuaXRlbUlkKSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVsZXRlUm93cyhyb3dzOiBBcnJheTxHdWlTZWxlY3RlZFJvdz4pOiB2b2lkIHtcblx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWRSb3dzID0gcm93cy5tYXAoKHJvdzogR3VpU2VsZWN0ZWRSb3cpID0+IG5ldyBTZWxlY3RlZFJvdyhyb3cuc291cmNlLCByb3cuaW5kZXgsIHJvdy5pdGVtSWQpKTtcblxuXHRcdFx0XHRzY2QuZGVsZXRlUm93cyhzZWxlY3RlZFJvd3MsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRlbGV0ZVNlbGVjdGVkUm93cygpOiB2b2lkIHtcblx0XHRcdFx0Ly8gdGhpcy5zb3VyY2VDb21tYW5kRGlzcGF0Y2hlci5cblx0XHRcdH0sXG5cblx0XHRcdGdldFNlbGVjdGVkUm93cygpOiBBcnJheTxHdWlTZWxlY3RlZFJvdz4ge1xuXG5cdFx0XHRcdGNvbnN0IHJvd3MgPSBmdy5nZXRTZWxlY3RlZFJvd3Moc3RydWN0dXJlSWQpO1xuXG5cdFx0XHRcdHJldHVybiByb3dzLm1hcCgocjogU2VsZWN0ZWRSb3cpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4geyBzb3VyY2U6IHIuZ2V0U291cmNlKCksIGluZGV4OiByLmdldEluZGV4KCksIGl0ZW1JZDogci5nZXRJdGVtSWQoKSB9IGFzIEd1aVNlbGVjdGVkUm93O1xuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cblx0XHRcdHNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHRcdFx0ZmNkLnNlbGVjdEFsbChzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHR1bnNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHRcdFx0ZmNkLnVuc2VsZWN0QWxsKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBQYWdpbmdcblx0XHRcdCAqL1xuXG5cdFx0XHRlbmFibGVQYWdpbmcoKTogdm9pZCB7XG5cdFx0XHRcdHBhZ2luZ0NvbW1hbmRJbnZva2VyLmVuYWJsZShzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkaXNhYmxlUGFnaW5nKCk6IHZvaWQge1xuXHRcdFx0XHRwYWdpbmdDb21tYW5kSW52b2tlci5kaXNhYmxlKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdG5leHRQYWdlKCk6IHZvaWQge1xuXHRcdFx0XHRwYWdpbmdDb21tYW5kSW52b2tlci5uZXh0UGFnZShzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRwcmV2UGFnZSgpOiB2b2lkIHtcblx0XHRcdFx0cGFnaW5nQ29tbWFuZEludm9rZXIucHJldlBhZ2Uoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0Y2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlcik6IHZvaWQge1xuXHRcdFx0XHRwYWdpbmdDb21tYW5kSW52b2tlci5jaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0UGFnaW5nQ29uZmlnKGNvbmZpZzogUGFnaW5nQ29uZmlnKTogdm9pZCB7XG5cdFx0XHRcdHBhZ2luZ0NvbW1hbmRJbnZva2VyLnNldFBhZ2luZyhjb25maWcsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTZWFyY2hpbmdcblx0XHRcdCAqL1xuXHRcdFx0c2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZzogU2VhcmNoQ29uZmlnKTogdm9pZCB7XG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyLnNldFNlYXJjaGluZ0NvbmZpZyhjb25maWcsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNlYXJjaChwaHJhc2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0XHRzZWFyY2hDb21tYW5kSW52b2tlci5zZWFyY2gocGhyYXNlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRjbGVhclNlYXJjaFBocmFzZSgpOiB2b2lkIHtcblx0XHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXIuc2VhcmNoKCcnLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cblx0XHRcdC8qKlxuXHRcdFx0ICogVmlldyBwb3J0XG5cdFx0XHQgKi9cblxuXHRcdFx0c2Nyb2xsVG9Ub3AoKTogdm9pZCB7XG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmRJbnZva2VyLnNjcm9sbFRvVG9wKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNjcm9sbFRvQm90dG9tKCk6IHZvaWQge1xuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5zY3JvbGxUb0JvdHRvbShzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzY3JvbGxUb1Jvd0J5SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5zY3JvbGxUb0luZGV4KGluZGV4LCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFZpc3VhbCAtIFNjaGVtYVxuXHRcdFx0ICovXG5cblx0XHRcdHNldFRoZW1lKHRoZW1lOiBzdHJpbmcgfCBHdWlUaGVtZSk6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRUaGVtZSh0aGVtZSwgc2NoZW1hSWQsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFZlcnRpY2FsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLnNldFZlcnRpY2FsR3JpZChlbmFibGVkLCBzY2hlbWFJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRIb3Jpem9udGFsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLnNldEhvcml6b250YWxHcmlkKGVuYWJsZWQsIHNjaGVtYUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZyk6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZywgc2NoZW1hSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBWaXJ0dWFsIHNjcm9sbFxuXHRcdFx0ICovXG5cdFx0XHRlbmFibGVWaXJ0dWFsU2Nyb2xsKCk6IHZvaWQge1xuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5lbmFibGVWaXJ0dWFsU2Nyb2xsKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRpc2FibGVWaXJ0dWFsU2Nyb2xsKCk6IHZvaWQge1xuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kSW52b2tlci5kaXNhYmxlVmlydHVhbFNjcm9sbChzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvKipcblx0XHRcdCAqIFN1bW1hcmllc1xuXHRcdFx0ICovXG5cdFx0XHRlbmFibGVTdW1tYXJpZXMoKTogdm9pZCB7XG5cdFx0XHRcdHN1bW1hcmllc0NvbW1hbmRJbnZva2VyLnNldFN1bW1hcmllc0VuYWJsZWQodHJ1ZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGlzYWJsZVN1bW1hcmllcygpOiB2b2lkIHtcblx0XHRcdFx0c3VtbWFyaWVzQ29tbWFuZEludm9rZXIuc2V0U3VtbWFyaWVzRW5hYmxlZChmYWxzZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBTb3J0aW5nXG5cdFx0XHQgKi9cblx0XHRcdHNldFNvcnRDb25maWcoY29uZmlnOiBTb3J0aW5nQ29uZmlnKTogdm9pZCB7XG5cdFx0XHRcdHNvcnRpbmdDb21tYW5kSW52b2tlci5zZXRTb3J0aW5nQ29uZmlnKGNvbmZpZywgc3RydWN0dXJlSWQpO1xuXHRcdFx0fVxuXG5cdFx0fTtcblxuXHR9XG5cblxufVxuIl19