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
     * @param {?} phrase
     * @return {?}
     */
    GuiGridApi.prototype.search = function (phrase) { };
    /**
     * @return {?}
     */
    GuiGridApi.prototype.clearSearchPhrase = function () { };
    /**
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
}
var GuiGridApiProvider = /** @class */ (function () {
    function GuiGridApiProvider(structureId, schemaId, formationCommandDispatcher, formationWarehouse, sourceCommandInvoker, searchCommandInvoker, gridThemeCommandInvoker, structureCommandDispatcher) {
        this.structureId = structureId;
        this.schemaId = schemaId;
        this.formationCommandInvoker = formationCommandDispatcher;
        this.formationWarehouse = formationWarehouse;
        this.sourceCommandInvoker = sourceCommandInvoker;
        this.searchCommandInvoker = searchCommandInvoker;
        this.gridThemeCommandInvoker = gridThemeCommandInvoker;
        this.structureCommandDispatcher = structureCommandDispatcher;
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
        var structureCommandDispatcher = this.structureCommandDispatcher;
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
                scd.deleteRow(new SelectedRow(row.data, row.index, row.itemId), structureId);
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
                function (row) { return new SelectedRow(row.data, row.index, row.itemId); }));
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
                    // eslint-disable-next-line id-blacklist
                    return (/** @type {?} */ ({ data: r.getData(), index: r.getIndex(), itemId: r.getItemId() }));
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
            // View port
            scrollToTop: 
            // View port
            /**
             * @return {?}
             */
            function () {
                structureCommandDispatcher.scrollToTop(structureId);
            },
            scrollToBottom: /**
             * @return {?}
             */
            function () {
                structureCommandDispatcher.scrollToBottom(structureId);
            },
            scrollToRowByIndex: /**
             * @param {?} index
             * @return {?}
             */
            function (index) {
                structureCommandDispatcher.scrollToIndex(index, structureId);
            },
            setTheme: /**
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
    GuiGridApiProvider.prototype.structureCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuYXBpLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvYXBpL2d1aS5ncmlkLmFwaS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlFQUFpRSxDQUFDOzs7O0FBUTlGLGdDQXlDQzs7Ozs7O0lBdkNBLHVEQUFtQzs7OztJQUVuQyxtREFBb0I7Ozs7SUFFcEIsbURBQW9COzs7O0lBRXBCLHVEQUF5Qzs7OztJQUV6QyxpREFBa0I7Ozs7SUFFbEIsbURBQW9COzs7O0lBRXBCLDBEQUEyQjs7Ozs7SUFFM0Isb0RBQXFDOzs7OztJQUVyQyxzREFBOEM7Ozs7O0lBRzlDLG9EQUE2Qjs7OztJQUU3Qix5REFBMEI7Ozs7SUFHMUIsbURBQW9COzs7O0lBRXBCLHNEQUF1Qjs7Ozs7SUFFdkIsK0RBQXdDOzs7OztJQUd4QyxxREFBeUM7Ozs7O0lBRXpDLDhEQUF3Qzs7Ozs7SUFFeEMsZ0VBQTBDOzs7OztJQUUxQyxpRUFBMkQ7O0FBSzVEO0lBa0JDLDRCQUFZLFdBQXdCLEVBQ2pDLFFBQStCLEVBQy9CLDBCQUFtRCxFQUNuRCxrQkFBc0MsRUFDdEMsb0JBQTBDLEVBQzFDLG9CQUEwQyxFQUMxQyx1QkFBbUQsRUFDbkQsMEJBQW1EO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyx1QkFBdUIsR0FBRywwQkFBMEIsQ0FBQztRQUMxRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ2pELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNqRCxJQUFJLENBQUMs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QkFBMEIsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDeEQsQ0FBQztZQUVELGtCQUFrQjs7OztZQUFsQixVQUFtQixLQUFhO2dCQUMvQiwwQkFBMEIsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzlELENBQUM7WUFFRCxRQUFROzs7O1lBQVIsVUFBUyxLQUF3QjtnQkFDaEMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDaEUsQ0FBQztZQUVELGVBQWU7Ozs7WUFBZixVQUFnQixPQUFnQjtnQkFDL0IsdUJBQXVCLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM1RCxDQUFDO1lBRUQsaUJBQWlCOzs7O1lBQWpCLFVBQWtCLE9BQWdCO2dCQUNqQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDOUQsQ0FBQztZQUVELGNBQWM7Ozs7WUFBZCxVQUFlLFdBQW9DO2dCQUNsRCx1QkFBdUIsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9ELENBQUM7U0FFRCxDQUFDO0lBRUgsQ0FBQztJQUdGLHlCQUFDO0FBQUQsQ0FBQyxBQXZJRCxJQXVJQzs7Ozs7OztJQXJJQSx5Q0FBMEM7Ozs7O0lBRTFDLHNDQUFpRDs7Ozs7SUFFakQscURBQWtFOzs7OztJQUVsRSxnREFBd0Q7Ozs7O0lBRXhELGtEQUE0RDs7Ozs7SUFFNUQsa0RBQTREOzs7OztJQUU1RCxxREFBcUU7Ozs7O0lBRXJFLHdEQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aVJvd0NvbG9yaW5nLCBHdWlTZWxlY3RlZFJvdywgR3VpVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU291cmNlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL3NvdXJjZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vZm9ybWF0aW9uLndhcmVob3VzZSc7XG5pbXBvcnQgeyBTZWFyY2hDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zZWFyY2gvY29yZS9hcGkvc2VhcmNoLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvY29yZS9hcGkvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uL3RoZW1lL2d1aS5ncmlkLnRoZW1lLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1pbnZva2VyJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUdyaWRBcGkge1xuXG5cdHNldFNvdXJjZShzb3VyY2U6IEFycmF5PGFueT4pOiB2b2lkXG5cblx0c2hvd0xvYWRpbmcoKTogdm9pZDtcblxuXHRoaWRlTG9hZGluZygpOiB2b2lkO1xuXG5cdGdldFNlbGVjdGVkUm93cygpOiBBcnJheTxHdWlTZWxlY3RlZFJvdz47XG5cblx0c2VsZWN0QWxsKCk6IHZvaWQ7XG5cblx0dW5zZWxlY3RBbGwoKTogdm9pZDtcblxuXHRkZWxldGVTZWxlY3RlZFJvd3MoKTogdm9pZDtcblxuXHRkZWxldGVSb3cocm93OiBHdWlTZWxlY3RlZFJvdyk6IHZvaWQ7XG5cblx0ZGVsZXRlUm93cyhyb3dzOiBBcnJheTxHdWlTZWxlY3RlZFJvdz4pOiB2b2lkO1xuXG5cdC8vIFNlYXJjaGluZ1xuXHRzZWFyY2gocGhyYXNlOiBzdHJpbmcpOiB2b2lkO1xuXG5cdGNsZWFyU2VhcmNoUGhyYXNlKCk6IHZvaWQ7XG5cblx0Ly8gVmlldyBwb3J0XG5cdHNjcm9sbFRvVG9wKCk6IHZvaWQ7XG5cblx0c2Nyb2xsVG9Cb3R0b20oKTogdm9pZDtcblxuXHRzY3JvbGxUb1Jvd0J5SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQ7XG5cblx0Ly8gVmlzdWFsXG5cdHNldFRoZW1lKHRoZW1lOiBzdHJpbmcgfCBHdWlUaGVtZSk6IHZvaWQ7XG5cblx0c2V0VmVydGljYWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xuXG5cdHNldEhvcml6b250YWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xuXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZyk6IHZvaWQ7XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgR3VpR3JpZEFwaVByb3ZpZGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kSW52b2tlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZUNvbW1hbmRJbnZva2VyOiBTb3VyY2VDb21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaENvbW1hbmRJbnZva2VyOiBTZWFyY2hDb21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyOiBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyOiBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcjtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0Zm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHNvdXJjZUNvbW1hbmRJbnZva2VyOiBTb3VyY2VDb21tYW5kSW52b2tlcixcblx0XHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlcjogR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyOiBTdHJ1Y3R1cmVDb21tYW5kSW52b2tlcikge1xuXHRcdHRoaXMuc3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVJZDtcblx0XHR0aGlzLnNjaGVtYUlkID0gc2NoZW1hSWQ7XG5cdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kSW52b2tlciA9IGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyO1xuXHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlID0gZm9ybWF0aW9uV2FyZWhvdXNlO1xuXHRcdHRoaXMuc291cmNlQ29tbWFuZEludm9rZXIgPSBzb3VyY2VDb21tYW5kSW52b2tlcjtcblx0XHR0aGlzLnNlYXJjaENvbW1hbmRJbnZva2VyID0gc2VhcmNoQ29tbWFuZEludm9rZXI7XG5cdFx0dGhpcy5ncmlkVGhlbWVDb21tYW5kSW52b2tlciA9IGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgPSBzdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcjtcblx0fVxuXG5cdHByb3ZpZGUoKTogR3VpR3JpZEFwaSB7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmVJZCA9IHRoaXMuc3RydWN0dXJlSWQsXG5cdFx0XHRzY2hlbWFJZCA9IHRoaXMuc2NoZW1hSWQsXG5cdFx0XHRmY2QgPSB0aGlzLmZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0ZncgPSB0aGlzLmZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdHNjZCA9IHRoaXMuc291cmNlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRzZWFyY2hDb21tYW5kSW52b2tlciA9IHRoaXMuc2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlciA9IHRoaXMuZ3JpZFRoZW1lQ29tbWFuZEludm9rZXIsXG5cdFx0XHRzdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciA9IHRoaXMuc3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXI7XG5cblx0XHRyZXR1cm4ge1xuXG5cdFx0XHRzZXRTb3VyY2Uoc291cmNlOiBBcnJheTxhbnk+KTogdm9pZCB7XG5cdFx0XHRcdHNjZC5zZXRPcmlnaW4oc291cmNlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzaG93TG9hZGluZygpOiB2b2lkIHtcblx0XHRcdFx0c2NkLnNldExvYWRpbmcodHJ1ZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0aGlkZUxvYWRpbmcoKTogdm9pZCB7XG5cdFx0XHRcdHNjZC5zZXRMb2FkaW5nKGZhbHNlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkZWxldGVSb3cocm93OiBHdWlTZWxlY3RlZFJvdyk6IHZvaWQge1xuXHRcdFx0XHRzY2QuZGVsZXRlUm93KG5ldyBTZWxlY3RlZFJvdyhyb3cuZGF0YSwgcm93LmluZGV4LCByb3cuaXRlbUlkKSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVsZXRlUm93cyhyb3dzOiBBcnJheTxHdWlTZWxlY3RlZFJvdz4pOiB2b2lkIHtcblx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWRSb3dzID0gcm93cy5tYXAoKHJvdzogR3VpU2VsZWN0ZWRSb3cpID0+IG5ldyBTZWxlY3RlZFJvdyhyb3cuZGF0YSwgcm93LmluZGV4LCByb3cuaXRlbUlkKSk7XG5cblx0XHRcdFx0c2NkLmRlbGV0ZVJvd3Moc2VsZWN0ZWRSb3dzLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkZWxldGVTZWxlY3RlZFJvd3MoKTogdm9pZCB7XG5cdFx0XHRcdC8vIHRoaXMuc291cmNlQ29tbWFuZERpc3BhdGNoZXIuXG5cdFx0XHR9LFxuXG5cdFx0XHRnZXRTZWxlY3RlZFJvd3MoKTogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+IHtcblxuXHRcdFx0XHRjb25zdCByb3dzID0gZncuZ2V0U2VsZWN0ZWRSb3dzKHN0cnVjdHVyZUlkKTtcblxuXHRcdFx0XHRyZXR1cm4gcm93cy5tYXAoKHI6IFNlbGVjdGVkUm93KSA9PiB7XG5cdFx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGlkLWJsYWNrbGlzdFxuXHRcdFx0XHRcdHJldHVybiB7IGRhdGE6IHIuZ2V0RGF0YSgpLCBpbmRleDogci5nZXRJbmRleCgpLCBpdGVtSWQ6IHIuZ2V0SXRlbUlkKCkgfSBhcyBHdWlTZWxlY3RlZFJvdztcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0XHRcdGZjZC5zZWxlY3RBbGwoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0dW5zZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0XHRcdGZjZC51bnNlbGVjdEFsbChzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZWFyY2gocGhyYXNlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXIuc2VhcmNoKHBocmFzZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0Y2xlYXJTZWFyY2hQaHJhc2UoKTogdm9pZCB7XG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyLnNlYXJjaCgnJywgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gVmlldyBwb3J0XG5cdFx0XHRzY3JvbGxUb1RvcCgpOiB2b2lkIHtcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIuc2Nyb2xsVG9Ub3Aoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2Nyb2xsVG9Cb3R0b20oKTogdm9pZCB7XG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyLnNjcm9sbFRvQm90dG9tKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNjcm9sbFRvUm93QnlJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyLnNjcm9sbFRvSW5kZXgoaW5kZXgsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFRoZW1lKHRoZW1lOiBzdHJpbmcgfCBHdWlUaGVtZSk6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRUaGVtZSh0aGVtZSwgc2NoZW1hSWQsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFZlcnRpY2FsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLnNldFZlcnRpY2FsR3JpZChlbmFibGVkLCBzY2hlbWFJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRIb3Jpem9udGFsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLnNldEhvcml6b250YWxHcmlkKGVuYWJsZWQsIHNjaGVtYUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZyk6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZywgc2NoZW1hSWQpO1xuXHRcdFx0fVxuXG5cdFx0fTtcblxuXHR9XG5cblxufVxuIl19