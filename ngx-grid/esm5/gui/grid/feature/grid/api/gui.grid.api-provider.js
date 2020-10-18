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
                    return { data: r.getData(), index: r.getIndex(), itemId: r.getItemId() };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuYXBpLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvYXBpL2d1aS5ncmlkLmFwaS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlFQUFpRSxDQUFDOzs7O0FBUTlGLGdDQXlDQzs7Ozs7O0lBdkNBLHVEQUFtQzs7OztJQUVuQyxtREFBb0I7Ozs7SUFFcEIsbURBQW9COzs7O0lBRXBCLHVEQUF5Qzs7OztJQUV6QyxpREFBa0I7Ozs7SUFFbEIsbURBQW9COzs7O0lBRXBCLDBEQUEyQjs7Ozs7SUFFM0Isb0RBQXFDOzs7OztJQUVyQyxzREFBOEM7Ozs7O0lBRzlDLG9EQUE2Qjs7OztJQUU3Qix5REFBMEI7Ozs7SUFHMUIsbURBQW9COzs7O0lBRXBCLHNEQUF1Qjs7Ozs7SUFFdkIsK0RBQXdDOzs7OztJQUd4QyxxREFBeUM7Ozs7O0lBRXpDLDhEQUF3Qzs7Ozs7SUFFeEMsZ0VBQTBDOzs7OztJQUUxQyxpRUFBMkQ7O0FBSzVEO0lBa0JDLDRCQUFZLFdBQXdCLEVBQ2pDLFFBQStCLEVBQy9CLDBCQUFtRCxFQUNuRCxrQkFBc0MsRUFDdEMsb0JBQTBDLEVBQzFDLG9CQUEwQyxFQUMxQyx1QkFBbUQsRUFDbkQsMEJBQXNEO1FBQ3hELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyx1QkFBdUIsR0FBRywwQkFBMEIsQ0FBQztRQUMxRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ2pELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNqRCxJQUFJLENBQUMs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Q0FBQyxDQUFDO1lBQ3hELENBQUM7WUFFRCxrQkFBa0I7Ozs7WUFBbEIsVUFBbUIsS0FBYTtnQkFDL0IsMEJBQTBCLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM5RCxDQUFDO1lBRUQsUUFBUTs7OztZQUFSLFVBQVMsS0FBd0I7Z0JBQ2hDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2hFLENBQUM7WUFFRCxlQUFlOzs7O1lBQWYsVUFBZ0IsT0FBZ0I7Z0JBQy9CLHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDNUQsQ0FBQztZQUVELGlCQUFpQjs7OztZQUFqQixVQUFrQixPQUFnQjtnQkFDakMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzlELENBQUM7WUFFRCxjQUFjOzs7O1lBQWQsVUFBZSxXQUFvQztnQkFDbEQsdUJBQXVCLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMvRCxDQUFDO1NBRUQsQ0FBQztJQUVILENBQUM7SUFHRix5QkFBQztBQUFELENBQUMsQUF0SUQsSUFzSUM7Ozs7Ozs7SUFwSUEseUNBQTBDOzs7OztJQUUxQyxzQ0FBaUQ7Ozs7O0lBRWpELHFEQUFrRTs7Ozs7SUFFbEUsZ0RBQXdEOzs7OztJQUV4RCxrREFBNEQ7Ozs7O0lBRTVELGtEQUE0RDs7Ozs7SUFFNUQscURBQXFFOzs7OztJQUVyRSx3REFBd0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlSb3dDb2xvcmluZywgR3VpU2VsZWN0ZWRSb3csIEd1aVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vc2VsZWN0ZWQtcm93JztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvZG9tYWluLXJlYWQvc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlciB9IGZyb20gJy4uL3RoZW1lL2d1aS5ncmlkLnRoZW1lLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuY29tbWFuZC1kaXNwYXRjaGVyJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUdyaWRBcGkge1xuXG5cdHNldFNvdXJjZShzb3VyY2U6IEFycmF5PGFueT4pOiB2b2lkXG5cblx0c2hvd0xvYWRpbmcoKTogdm9pZDtcblxuXHRoaWRlTG9hZGluZygpOiB2b2lkO1xuXG5cdGdldFNlbGVjdGVkUm93cygpOiBBcnJheTxHdWlTZWxlY3RlZFJvdz47XG5cblx0c2VsZWN0QWxsKCk6IHZvaWQ7XG5cblx0dW5zZWxlY3RBbGwoKTogdm9pZDtcblxuXHRkZWxldGVTZWxlY3RlZFJvd3MoKTogdm9pZDtcblxuXHRkZWxldGVSb3cocm93OiBHdWlTZWxlY3RlZFJvdyk6IHZvaWQ7XG5cblx0ZGVsZXRlUm93cyhyb3dzOiBBcnJheTxHdWlTZWxlY3RlZFJvdz4pOiB2b2lkO1xuXG5cdC8vIFNlYXJjaGluZ1xuXHRzZWFyY2gocGhyYXNlOiBzdHJpbmcpOiB2b2lkO1xuXG5cdGNsZWFyU2VhcmNoUGhyYXNlKCk6IHZvaWQ7XG5cblx0Ly8gVmlldyBwb3J0XG5cdHNjcm9sbFRvVG9wKCk6IHZvaWQ7XG5cblx0c2Nyb2xsVG9Cb3R0b20oKTogdm9pZDtcblxuXHRzY3JvbGxUb1Jvd0J5SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQ7XG5cblx0Ly8gVmlzdWFsXG5cdHNldFRoZW1lKHRoZW1lOiBzdHJpbmcgfCBHdWlUaGVtZSk6IHZvaWQ7XG5cblx0c2V0VmVydGljYWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xuXG5cdHNldEhvcml6b250YWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xuXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZyk6IHZvaWQ7XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgR3VpR3JpZEFwaVByb3ZpZGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kSW52b2tlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZUNvbW1hbmRJbnZva2VyOiBTb3VyY2VDb21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaENvbW1hbmRJbnZva2VyOiBTZWFyY2hDb21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyOiBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyOiBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcjtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0Zm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHNvdXJjZUNvbW1hbmRJbnZva2VyOiBTb3VyY2VDb21tYW5kSW52b2tlcixcblx0XHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlcjogR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyOiBTdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcikge1xuXHRcdHRoaXMuc3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVJZDtcblx0XHR0aGlzLnNjaGVtYUlkID0gc2NoZW1hSWQ7XG5cdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kSW52b2tlciA9IGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyO1xuXHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlID0gZm9ybWF0aW9uV2FyZWhvdXNlO1xuXHRcdHRoaXMuc291cmNlQ29tbWFuZEludm9rZXIgPSBzb3VyY2VDb21tYW5kSW52b2tlcjtcblx0XHR0aGlzLnNlYXJjaENvbW1hbmRJbnZva2VyID0gc2VhcmNoQ29tbWFuZEludm9rZXI7XG5cdFx0dGhpcy5ncmlkVGhlbWVDb21tYW5kSW52b2tlciA9IGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMuc3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgPSBzdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcjtcblx0fVxuXG5cdHByb3ZpZGUoKTogR3VpR3JpZEFwaSB7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmVJZCA9IHRoaXMuc3RydWN0dXJlSWQsXG5cdFx0XHRzY2hlbWFJZCA9IHRoaXMuc2NoZW1hSWQsXG5cdFx0XHRmY2QgPSB0aGlzLmZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0ZncgPSB0aGlzLmZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdHNjZCA9IHRoaXMuc291cmNlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRzZWFyY2hDb21tYW5kSW52b2tlciA9IHRoaXMuc2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlciA9IHRoaXMuZ3JpZFRoZW1lQ29tbWFuZEludm9rZXIsXG5cdFx0XHRzdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciA9IHRoaXMuc3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXI7XG5cblx0XHRyZXR1cm4ge1xuXG5cdFx0XHRzZXRTb3VyY2Uoc291cmNlOiBBcnJheTxhbnk+KTogdm9pZCB7XG5cdFx0XHRcdHNjZC5zZXRPcmlnaW4oc291cmNlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzaG93TG9hZGluZygpOiB2b2lkIHtcblx0XHRcdFx0c2NkLnNldExvYWRpbmcodHJ1ZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0aGlkZUxvYWRpbmcoKTogdm9pZCB7XG5cdFx0XHRcdHNjZC5zZXRMb2FkaW5nKGZhbHNlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkZWxldGVSb3cocm93OiBHdWlTZWxlY3RlZFJvdyk6IHZvaWQge1xuXHRcdFx0XHRzY2QuZGVsZXRlUm93KG5ldyBTZWxlY3RlZFJvdyhyb3cuZGF0YSwgcm93LmluZGV4LCByb3cuaXRlbUlkKSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVsZXRlUm93cyhyb3dzOiBBcnJheTxHdWlTZWxlY3RlZFJvdz4pOiB2b2lkIHtcblx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWRSb3dzID0gcm93cy5tYXAoKHJvdzogR3VpU2VsZWN0ZWRSb3cpID0+IG5ldyBTZWxlY3RlZFJvdyhyb3cuZGF0YSwgcm93LmluZGV4LCByb3cuaXRlbUlkKSk7XG5cblx0XHRcdFx0c2NkLmRlbGV0ZVJvd3Moc2VsZWN0ZWRSb3dzLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkZWxldGVTZWxlY3RlZFJvd3MoKTogdm9pZCB7XG5cdFx0XHRcdC8vIHRoaXMuc291cmNlQ29tbWFuZERpc3BhdGNoZXIuXG5cdFx0XHR9LFxuXG5cdFx0XHRnZXRTZWxlY3RlZFJvd3MoKTogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+IHtcblxuXHRcdFx0XHRjb25zdCByb3dzID0gZncuZ2V0U2VsZWN0ZWRSb3dzKHN0cnVjdHVyZUlkKTtcblxuXHRcdFx0XHRyZXR1cm4gcm93cy5tYXAoKHI6IFNlbGVjdGVkUm93KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHsgZGF0YTogci5nZXREYXRhKCksIGluZGV4OiByLmdldEluZGV4KCksIGl0ZW1JZDogci5nZXRJdGVtSWQoKSB9O1xuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cblx0XHRcdHNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHRcdFx0ZmNkLnNlbGVjdEFsbChzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHR1bnNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHRcdFx0ZmNkLnVuc2VsZWN0QWxsKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNlYXJjaChwaHJhc2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0XHRzZWFyY2hDb21tYW5kSW52b2tlci5zZWFyY2gocGhyYXNlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRjbGVhclNlYXJjaFBocmFzZSgpOiB2b2lkIHtcblx0XHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXIuc2VhcmNoKCcnLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBWaWV3IHBvcnRcblx0XHRcdHNjcm9sbFRvVG9wKCk6IHZvaWQge1xuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlci5zY3JvbGxUb1RvcChzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzY3JvbGxUb0JvdHRvbSgpOiB2b2lkIHtcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIuc2Nyb2xsVG9Cb3R0b20oc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2Nyb2xsVG9Sb3dCeUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIuc2Nyb2xsVG9JbmRleChpbmRleCwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0VGhlbWUodGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lKTogdm9pZCB7XG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLnNldFRoZW1lKHRoZW1lLCBzY2hlbWFJZCwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0VmVydGljYWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXIuc2V0VmVydGljYWxHcmlkKGVuYWJsZWQsIHNjaGVtYUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldEhvcml6b250YWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcblx0XHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXIuc2V0SG9yaXpvbnRhbEdyaWQoZW5hYmxlZCwgc2NoZW1hSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0Um93Q29sb3Jpbmcocm93Q29sb3Jpbmc6IHN0cmluZyB8IEd1aVJvd0NvbG9yaW5nKTogdm9pZCB7XG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLnNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nLCBzY2hlbWFJZCk7XG5cdFx0XHR9XG5cblx0XHR9O1xuXG5cdH1cblxuXG59XG4iXX0=