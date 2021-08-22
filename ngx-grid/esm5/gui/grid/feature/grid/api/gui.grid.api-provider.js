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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuYXBpLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvYXBpL2d1aS5ncmlkLmFwaS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlFQUFpRSxDQUFDOzs7O0FBUTlGLGdDQXlDQzs7Ozs7O0lBdkNBLHVEQUFtQzs7OztJQUVuQyxtREFBb0I7Ozs7SUFFcEIsbURBQW9COzs7O0lBRXBCLHVEQUF5Qzs7OztJQUV6QyxpREFBa0I7Ozs7SUFFbEIsbURBQW9COzs7O0lBRXBCLDBEQUEyQjs7Ozs7SUFFM0Isb0RBQXFDOzs7OztJQUVyQyxzREFBOEM7Ozs7O0lBRzlDLG9EQUE2Qjs7OztJQUU3Qix5REFBMEI7Ozs7SUFHMUIsbURBQW9COzs7O0lBRXBCLHNEQUF1Qjs7Ozs7SUFFdkIsK0RBQXdDOzs7OztJQUd4QyxxREFBeUM7Ozs7O0lBRXpDLDhEQUF3Qzs7Ozs7SUFFeEMsZ0VBQTBDOzs7OztJQUUxQyxpRUFBMkQ7O0FBSzVEO0lBa0JDLDRCQUFZLFdBQXdCLEVBQ2pDLFFBQStCLEVBQy9CLDBCQUFtRCxFQUNuRCxrQkFBc0MsRUFDdEMsb0JBQTBDLEVBQzFDLG9CQUEwQyxFQUMxQyx1QkFBbUQsRUFDbkQsMEJBQW1EO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyx1QkFBdUIsR0FBRywwQkFBMEIsQ0FBQztRQUMxRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ2pELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNqRCxJQUFJLENBQUMs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Q0FBQyxDQUFDO1lBQ3hELENBQUM7WUFFRCxrQkFBa0I7Ozs7WUFBbEIsVUFBbUIsS0FBYTtnQkFDL0IsMEJBQTBCLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM5RCxDQUFDO1lBRUQsUUFBUTs7OztZQUFSLFVBQVMsS0FBd0I7Z0JBQ2hDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2hFLENBQUM7WUFFRCxlQUFlOzs7O1lBQWYsVUFBZ0IsT0FBZ0I7Z0JBQy9CLHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDNUQsQ0FBQztZQUVELGlCQUFpQjs7OztZQUFqQixVQUFrQixPQUFnQjtnQkFDakMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzlELENBQUM7WUFFRCxjQUFjOzs7O1lBQWQsVUFBZSxXQUFvQztnQkFDbEQsdUJBQXVCLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMvRCxDQUFDO1NBRUQsQ0FBQztJQUVILENBQUM7SUFHRix5QkFBQztBQUFELENBQUMsQUF0SUQsSUFzSUM7Ozs7Ozs7SUFwSUEseUNBQTBDOzs7OztJQUUxQyxzQ0FBaUQ7Ozs7O0lBRWpELHFEQUFrRTs7Ozs7SUFFbEUsZ0RBQXdEOzs7OztJQUV4RCxrREFBNEQ7Ozs7O0lBRTVELGtEQUE0RDs7Ozs7SUFFNUQscURBQXFFOzs7OztJQUVyRSx3REFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlSb3dDb2xvcmluZywgR3VpU2VsZWN0ZWRSb3csIEd1aVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vc2VsZWN0ZWQtcm93JztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi90aGVtZS9ndWkuZ3JpZC50aGVtZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9hcGkvc3RydWN0dXJlLmNvbW1hbmQtaW52b2tlcic7XG5cblxuZXhwb3J0IGludGVyZmFjZSBHdWlHcmlkQXBpIHtcblxuXHRzZXRTb3VyY2Uoc291cmNlOiBBcnJheTxhbnk+KTogdm9pZFxuXG5cdHNob3dMb2FkaW5nKCk6IHZvaWQ7XG5cblx0aGlkZUxvYWRpbmcoKTogdm9pZDtcblxuXHRnZXRTZWxlY3RlZFJvd3MoKTogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+O1xuXG5cdHNlbGVjdEFsbCgpOiB2b2lkO1xuXG5cdHVuc2VsZWN0QWxsKCk6IHZvaWQ7XG5cblx0ZGVsZXRlU2VsZWN0ZWRSb3dzKCk6IHZvaWQ7XG5cblx0ZGVsZXRlUm93KHJvdzogR3VpU2VsZWN0ZWRSb3cpOiB2b2lkO1xuXG5cdGRlbGV0ZVJvd3Mocm93czogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+KTogdm9pZDtcblxuXHQvLyBTZWFyY2hpbmdcblx0c2VhcmNoKHBocmFzZTogc3RyaW5nKTogdm9pZDtcblxuXHRjbGVhclNlYXJjaFBocmFzZSgpOiB2b2lkO1xuXG5cdC8vIFZpZXcgcG9ydFxuXHRzY3JvbGxUb1RvcCgpOiB2b2lkO1xuXG5cdHNjcm9sbFRvQm90dG9tKCk6IHZvaWQ7XG5cblx0c2Nyb2xsVG9Sb3dCeUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkO1xuXG5cdC8vIFZpc3VhbFxuXHRzZXRUaGVtZSh0aGVtZTogc3RyaW5nIHwgR3VpVGhlbWUpOiB2b2lkO1xuXG5cdHNldFZlcnRpY2FsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZDtcblxuXHRzZXRIb3Jpem9udGFsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZDtcblxuXHRzZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZzogc3RyaW5nIHwgR3VpUm93Q29sb3JpbmcpOiB2b2lkO1xuXG59XG5cblxuZXhwb3J0IGNsYXNzIEd1aUdyaWRBcGlQcm92aWRlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZEludm9rZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VDb21tYW5kSW52b2tlcjogU291cmNlQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hDb21tYW5kSW52b2tlcjogU2VhcmNoQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncmlkVGhlbWVDb21tYW5kSW52b2tlcjogR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcjogU3RydWN0dXJlQ29tbWFuZEludm9rZXI7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRzb3VyY2VDb21tYW5kSW52b2tlcjogU291cmNlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyOiBTZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXI6IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcjogU3RydWN0dXJlQ29tbWFuZEludm9rZXIpIHtcblx0XHR0aGlzLnN0cnVjdHVyZUlkID0gc3RydWN0dXJlSWQ7XG5cdFx0dGhpcy5zY2hlbWFJZCA9IHNjaGVtYUlkO1xuXHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZEludm9rZXIgPSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjtcblx0XHR0aGlzLmZvcm1hdGlvbldhcmVob3VzZSA9IGZvcm1hdGlvbldhcmVob3VzZTtcblx0XHR0aGlzLnNvdXJjZUNvbW1hbmRJbnZva2VyID0gc291cmNlQ29tbWFuZEludm9rZXI7XG5cdFx0dGhpcy5zZWFyY2hDb21tYW5kSW52b2tlciA9IHNlYXJjaENvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMuZ3JpZFRoZW1lQ29tbWFuZEludm9rZXIgPSBncmlkVGhlbWVDb21tYW5kSW52b2tlcjtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyID0gc3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXI7XG5cdH1cblxuXHRwcm92aWRlKCk6IEd1aUdyaWRBcGkge1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSB0aGlzLnN0cnVjdHVyZUlkLFxuXHRcdFx0c2NoZW1hSWQgPSB0aGlzLnNjaGVtYUlkLFxuXHRcdFx0ZmNkID0gdGhpcy5mb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdGZ3ID0gdGhpcy5mb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRzY2QgPSB0aGlzLnNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXIgPSB0aGlzLnNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXIgPSB0aGlzLmdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0c3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgPSB0aGlzLnN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyO1xuXG5cdFx0cmV0dXJuIHtcblxuXHRcdFx0c2V0U291cmNlKHNvdXJjZTogQXJyYXk8YW55Pik6IHZvaWQge1xuXHRcdFx0XHRzY2Quc2V0T3JpZ2luKHNvdXJjZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2hvd0xvYWRpbmcoKTogdm9pZCB7XG5cdFx0XHRcdHNjZC5zZXRMb2FkaW5nKHRydWUsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGhpZGVMb2FkaW5nKCk6IHZvaWQge1xuXHRcdFx0XHRzY2Quc2V0TG9hZGluZyhmYWxzZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVsZXRlUm93KHJvdzogR3VpU2VsZWN0ZWRSb3cpOiB2b2lkIHtcblx0XHRcdFx0c2NkLmRlbGV0ZVJvdyhuZXcgU2VsZWN0ZWRSb3cocm93LmRhdGEsIHJvdy5pbmRleCwgcm93Lml0ZW1JZCksIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRlbGV0ZVJvd3Mocm93czogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+KTogdm9pZCB7XG5cdFx0XHRcdGNvbnN0IHNlbGVjdGVkUm93cyA9IHJvd3MubWFwKChyb3c6IEd1aVNlbGVjdGVkUm93KSA9PiBuZXcgU2VsZWN0ZWRSb3cocm93LmRhdGEsIHJvdy5pbmRleCwgcm93Lml0ZW1JZCkpO1xuXG5cdFx0XHRcdHNjZC5kZWxldGVSb3dzKHNlbGVjdGVkUm93cywgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVsZXRlU2VsZWN0ZWRSb3dzKCk6IHZvaWQge1xuXHRcdFx0XHQvLyB0aGlzLnNvdXJjZUNvbW1hbmREaXNwYXRjaGVyLlxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0U2VsZWN0ZWRSb3dzKCk6IEFycmF5PEd1aVNlbGVjdGVkUm93PiB7XG5cblx0XHRcdFx0Y29uc3Qgcm93cyA9IGZ3LmdldFNlbGVjdGVkUm93cyhzdHJ1Y3R1cmVJZCk7XG5cblx0XHRcdFx0cmV0dXJuIHJvd3MubWFwKChyOiBTZWxlY3RlZFJvdykgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB7IGRhdGE6IHIuZ2V0RGF0YSgpLCBpbmRleDogci5nZXRJbmRleCgpLCBpdGVtSWQ6IHIuZ2V0SXRlbUlkKCkgfTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0XHRcdGZjZC5zZWxlY3RBbGwoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0dW5zZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0XHRcdGZjZC51bnNlbGVjdEFsbChzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZWFyY2gocGhyYXNlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXIuc2VhcmNoKHBocmFzZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0Y2xlYXJTZWFyY2hQaHJhc2UoKTogdm9pZCB7XG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyLnNlYXJjaCgnJywgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gVmlldyBwb3J0XG5cdFx0XHRzY3JvbGxUb1RvcCgpOiB2b2lkIHtcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIuc2Nyb2xsVG9Ub3Aoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2Nyb2xsVG9Cb3R0b20oKTogdm9pZCB7XG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyLnNjcm9sbFRvQm90dG9tKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNjcm9sbFRvUm93QnlJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyLnNjcm9sbFRvSW5kZXgoaW5kZXgsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFRoZW1lKHRoZW1lOiBzdHJpbmcgfCBHdWlUaGVtZSk6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRUaGVtZSh0aGVtZSwgc2NoZW1hSWQsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFZlcnRpY2FsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLnNldFZlcnRpY2FsR3JpZChlbmFibGVkLCBzY2hlbWFJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRIb3Jpem9udGFsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLnNldEhvcml6b250YWxHcmlkKGVuYWJsZWQsIHNjaGVtYUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZyk6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZywgc2NoZW1hSWQpO1xuXHRcdFx0fVxuXG5cdFx0fTtcblxuXHR9XG5cblxufVxuIl19