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
export class GuiGridApiProvider {
    /**
     * @param {?} structureId
     * @param {?} schemaId
     * @param {?} formationCommandDispatcher
     * @param {?} formationWarehouse
     * @param {?} sourceCommandInvoker
     * @param {?} searchCommandInvoker
     * @param {?} gridThemeCommandInvoker
     * @param {?} structureCommandDispatcher
     */
    constructor(structureId, schemaId, formationCommandDispatcher, formationWarehouse, sourceCommandInvoker, searchCommandInvoker, gridThemeCommandInvoker, structureCommandDispatcher) {
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
    provide() {
        /** @type {?} */
        const structureId = this.structureId;
        /** @type {?} */
        const schemaId = this.schemaId;
        /** @type {?} */
        const fcd = this.formationCommandInvoker;
        /** @type {?} */
        const fw = this.formationWarehouse;
        /** @type {?} */
        const scd = this.sourceCommandInvoker;
        /** @type {?} */
        const searchCommandInvoker = this.searchCommandInvoker;
        /** @type {?} */
        const gridThemeCommandInvoker = this.gridThemeCommandInvoker;
        /** @type {?} */
        const structureCommandDispatcher = this.structureCommandDispatcher;
        return {
            /**
             * @param {?} source
             * @return {?}
             */
            setSource(source) {
                scd.setOrigin(source, structureId);
            },
            /**
             * @return {?}
             */
            showLoading() {
                scd.setLoading(true, structureId);
            },
            /**
             * @return {?}
             */
            hideLoading() {
                scd.setLoading(false, structureId);
            },
            /**
             * @param {?} row
             * @return {?}
             */
            deleteRow(row) {
                scd.deleteRow(new SelectedRow(row.data, row.index, row.itemId), structureId);
            },
            /**
             * @param {?} rows
             * @return {?}
             */
            deleteRows(rows) {
                /** @type {?} */
                const selectedRows = rows.map((/**
                 * @param {?} row
                 * @return {?}
                 */
                (row) => new SelectedRow(row.data, row.index, row.itemId)));
                scd.deleteRows(selectedRows, structureId);
            },
            /**
             * @return {?}
             */
            deleteSelectedRows() {
                // this.sourceCommandDispatcher.
            },
            /**
             * @return {?}
             */
            getSelectedRows() {
                /** @type {?} */
                const rows = fw.getSelectedRows(structureId);
                return rows.map((/**
                 * @param {?} r
                 * @return {?}
                 */
                (r) => {
                    return { data: r.getData(), index: r.getIndex(), itemId: r.getItemId() };
                }));
            },
            /**
             * @return {?}
             */
            selectAll() {
                fcd.selectAll(structureId);
            },
            /**
             * @return {?}
             */
            unselectAll() {
                fcd.unselectAll(structureId);
            },
            /**
             * @param {?} phrase
             * @return {?}
             */
            search(phrase) {
                searchCommandInvoker.search(phrase, structureId);
            },
            /**
             * @return {?}
             */
            clearSearchPhrase() {
                searchCommandInvoker.search('', structureId);
            },
            // View port
            /**
             * @return {?}
             */
            scrollToTop() {
                structureCommandDispatcher.scrollToTop(structureId);
            },
            /**
             * @return {?}
             */
            scrollToBottom() {
                structureCommandDispatcher.scrollToBottom(structureId);
            },
            /**
             * @param {?} index
             * @return {?}
             */
            scrollToRowByIndex(index) {
                structureCommandDispatcher.scrollToIndex(index, structureId);
            },
            /**
             * @param {?} theme
             * @return {?}
             */
            setTheme(theme) {
                gridThemeCommandInvoker.setTheme(theme, schemaId, structureId);
            },
            /**
             * @param {?} enabled
             * @return {?}
             */
            setVerticalGrid(enabled) {
                gridThemeCommandInvoker.setVerticalGrid(enabled, schemaId);
            },
            /**
             * @param {?} enabled
             * @return {?}
             */
            setHorizontalGrid(enabled) {
                gridThemeCommandInvoker.setHorizontalGrid(enabled, schemaId);
            },
            /**
             * @param {?} rowColoring
             * @return {?}
             */
            setRowColoring(rowColoring) {
                gridThemeCommandInvoker.setRowColoring(rowColoring, schemaId);
            }
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuYXBpLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvYXBpL2d1aS5ncmlkLmFwaS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlFQUFpRSxDQUFDOzs7O0FBUTlGLGdDQXlDQzs7Ozs7O0lBdkNBLHVEQUFtQzs7OztJQUVuQyxtREFBb0I7Ozs7SUFFcEIsbURBQW9COzs7O0lBRXBCLHVEQUF5Qzs7OztJQUV6QyxpREFBa0I7Ozs7SUFFbEIsbURBQW9COzs7O0lBRXBCLDBEQUEyQjs7Ozs7SUFFM0Isb0RBQXFDOzs7OztJQUVyQyxzREFBOEM7Ozs7O0lBRzlDLG9EQUE2Qjs7OztJQUU3Qix5REFBMEI7Ozs7SUFHMUIsbURBQW9COzs7O0lBRXBCLHNEQUF1Qjs7Ozs7SUFFdkIsK0RBQXdDOzs7OztJQUd4QyxxREFBeUM7Ozs7O0lBRXpDLDhEQUF3Qzs7Ozs7SUFFeEMsZ0VBQTBDOzs7OztJQUUxQyxpRUFBMkQ7O0FBSzVELE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7Ozs7O0lBa0I5QixZQUFZLFdBQXdCLEVBQ2pDLFFBQStCLEVBQy9CLDBCQUFtRCxFQUNuRCxrQkFBc0MsRUFDdEMsb0JBQTBDLEVBQzFDLG9CQUEwQyxFQUMxQyx1QkFBbUQsRUFDbkQsMEJBQXNEO1FBQ3hELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyx1QkFBdUIsR0FBRywwQkFBMEIsQ0FBQztRQUMxRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ2pELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxv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LEtBQWE7Z0JBQy9CLDBCQUEwQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDOUQsQ0FBQzs7Ozs7WUFFRCxRQUFRLENBQUMsS0FBd0I7Z0JBQ2hDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2hFLENBQUM7Ozs7O1lBRUQsZUFBZSxDQUFDLE9BQWdCO2dCQUMvQix1QkFBdUIsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzVELENBQUM7Ozs7O1lBRUQsaUJBQWlCLENBQUMsT0FBZ0I7Z0JBQ2pDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM5RCxDQUFDOzs7OztZQUVELGNBQWMsQ0FBQyxXQUFvQztnQkFDbEQsdUJBQXVCLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMvRCxDQUFDO1NBRUQsQ0FBQztJQUVILENBQUM7Q0FHRDs7Ozs7O0lBcElBLHlDQUEwQzs7Ozs7SUFFMUMsc0NBQWlEOzs7OztJQUVqRCxxREFBa0U7Ozs7O0lBRWxFLGdEQUF3RDs7Ozs7SUFFeEQsa0RBQTREOzs7OztJQUU1RCxrREFBNEQ7Ozs7O0lBRTVELHFEQUFxRTs7Ozs7SUFFckUsd0RBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpUm93Q29sb3JpbmcsIEd1aVNlbGVjdGVkUm93LCBHdWlUaGVtZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL2d1aS5ncmlkLnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvc291cmNlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2RvbWFpbi1yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi90aGVtZS9ndWkuZ3JpZC50aGVtZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9hcGkvc3RydWN0dXJlLmNvbW1hbmQtZGlzcGF0Y2hlcic7XG5cblxuZXhwb3J0IGludGVyZmFjZSBHdWlHcmlkQXBpIHtcblxuXHRzZXRTb3VyY2Uoc291cmNlOiBBcnJheTxhbnk+KTogdm9pZFxuXG5cdHNob3dMb2FkaW5nKCk6IHZvaWQ7XG5cblx0aGlkZUxvYWRpbmcoKTogdm9pZDtcblxuXHRnZXRTZWxlY3RlZFJvd3MoKTogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+O1xuXG5cdHNlbGVjdEFsbCgpOiB2b2lkO1xuXG5cdHVuc2VsZWN0QWxsKCk6IHZvaWQ7XG5cblx0ZGVsZXRlU2VsZWN0ZWRSb3dzKCk6IHZvaWQ7XG5cblx0ZGVsZXRlUm93KHJvdzogR3VpU2VsZWN0ZWRSb3cpOiB2b2lkO1xuXG5cdGRlbGV0ZVJvd3Mocm93czogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+KTogdm9pZDtcblxuXHQvLyBTZWFyY2hpbmdcblx0c2VhcmNoKHBocmFzZTogc3RyaW5nKTogdm9pZDtcblxuXHRjbGVhclNlYXJjaFBocmFzZSgpOiB2b2lkO1xuXG5cdC8vIFZpZXcgcG9ydFxuXHRzY3JvbGxUb1RvcCgpOiB2b2lkO1xuXG5cdHNjcm9sbFRvQm90dG9tKCk6IHZvaWQ7XG5cblx0c2Nyb2xsVG9Sb3dCeUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkO1xuXG5cdC8vIFZpc3VhbFxuXHRzZXRUaGVtZSh0aGVtZTogc3RyaW5nIHwgR3VpVGhlbWUpOiB2b2lkO1xuXG5cdHNldFZlcnRpY2FsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZDtcblxuXHRzZXRIb3Jpem9udGFsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZDtcblxuXHRzZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZzogc3RyaW5nIHwgR3VpUm93Q29sb3JpbmcpOiB2b2lkO1xuXG59XG5cblxuZXhwb3J0IGNsYXNzIEd1aUdyaWRBcGlQcm92aWRlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZEludm9rZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VDb21tYW5kSW52b2tlcjogU291cmNlQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hDb21tYW5kSW52b2tlcjogU2VhcmNoQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncmlkVGhlbWVDb21tYW5kSW52b2tlcjogR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcjogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXI7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRzb3VyY2VDb21tYW5kSW52b2tlcjogU291cmNlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyOiBTZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXI6IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcjogU3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0XHR0aGlzLnN0cnVjdHVyZUlkID0gc3RydWN0dXJlSWQ7XG5cdFx0dGhpcy5zY2hlbWFJZCA9IHNjaGVtYUlkO1xuXHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZEludm9rZXIgPSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjtcblx0XHR0aGlzLmZvcm1hdGlvbldhcmVob3VzZSA9IGZvcm1hdGlvbldhcmVob3VzZTtcblx0XHR0aGlzLnNvdXJjZUNvbW1hbmRJbnZva2VyID0gc291cmNlQ29tbWFuZEludm9rZXI7XG5cdFx0dGhpcy5zZWFyY2hDb21tYW5kSW52b2tlciA9IHNlYXJjaENvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMuZ3JpZFRoZW1lQ29tbWFuZEludm9rZXIgPSBncmlkVGhlbWVDb21tYW5kSW52b2tlcjtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyID0gc3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXI7XG5cdH1cblxuXHRwcm92aWRlKCk6IEd1aUdyaWRBcGkge1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSB0aGlzLnN0cnVjdHVyZUlkLFxuXHRcdFx0c2NoZW1hSWQgPSB0aGlzLnNjaGVtYUlkLFxuXHRcdFx0ZmNkID0gdGhpcy5mb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdGZ3ID0gdGhpcy5mb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRzY2QgPSB0aGlzLnNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXIgPSB0aGlzLnNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXIgPSB0aGlzLmdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0c3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgPSB0aGlzLnN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyO1xuXG5cdFx0cmV0dXJuIHtcblxuXHRcdFx0c2V0U291cmNlKHNvdXJjZTogQXJyYXk8YW55Pik6IHZvaWQge1xuXHRcdFx0XHRzY2Quc2V0T3JpZ2luKHNvdXJjZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2hvd0xvYWRpbmcoKTogdm9pZCB7XG5cdFx0XHRcdHNjZC5zZXRMb2FkaW5nKHRydWUsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGhpZGVMb2FkaW5nKCk6IHZvaWQge1xuXHRcdFx0XHRzY2Quc2V0TG9hZGluZyhmYWxzZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVsZXRlUm93KHJvdzogR3VpU2VsZWN0ZWRSb3cpOiB2b2lkIHtcblx0XHRcdFx0c2NkLmRlbGV0ZVJvdyhuZXcgU2VsZWN0ZWRSb3cocm93LmRhdGEsIHJvdy5pbmRleCwgcm93Lml0ZW1JZCksIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRlbGV0ZVJvd3Mocm93czogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+KTogdm9pZCB7XG5cdFx0XHRcdGNvbnN0IHNlbGVjdGVkUm93cyA9IHJvd3MubWFwKChyb3c6IEd1aVNlbGVjdGVkUm93KSA9PiBuZXcgU2VsZWN0ZWRSb3cocm93LmRhdGEsIHJvdy5pbmRleCwgcm93Lml0ZW1JZCkpO1xuXG5cdFx0XHRcdHNjZC5kZWxldGVSb3dzKHNlbGVjdGVkUm93cywgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVsZXRlU2VsZWN0ZWRSb3dzKCk6IHZvaWQge1xuXHRcdFx0XHQvLyB0aGlzLnNvdXJjZUNvbW1hbmREaXNwYXRjaGVyLlxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0U2VsZWN0ZWRSb3dzKCk6IEFycmF5PEd1aVNlbGVjdGVkUm93PiB7XG5cblx0XHRcdFx0Y29uc3Qgcm93cyA9IGZ3LmdldFNlbGVjdGVkUm93cyhzdHJ1Y3R1cmVJZCk7XG5cblx0XHRcdFx0cmV0dXJuIHJvd3MubWFwKChyOiBTZWxlY3RlZFJvdykgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB7IGRhdGE6IHIuZ2V0RGF0YSgpLCBpbmRleDogci5nZXRJbmRleCgpLCBpdGVtSWQ6IHIuZ2V0SXRlbUlkKCkgfTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0XHRcdGZjZC5zZWxlY3RBbGwoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0dW5zZWxlY3RBbGwoKTogdm9pZCB7XG5cdFx0XHRcdGZjZC51bnNlbGVjdEFsbChzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZWFyY2gocGhyYXNlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXIuc2VhcmNoKHBocmFzZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0Y2xlYXJTZWFyY2hQaHJhc2UoKTogdm9pZCB7XG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyLnNlYXJjaCgnJywgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gVmlldyBwb3J0XG5cdFx0XHRzY3JvbGxUb1RvcCgpOiB2b2lkIHtcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIuc2Nyb2xsVG9Ub3Aoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2Nyb2xsVG9Cb3R0b20oKTogdm9pZCB7XG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyLnNjcm9sbFRvQm90dG9tKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNjcm9sbFRvUm93QnlJbmRleChpbmRleDogbnVtYmVyKTogdm9pZCB7XG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyLnNjcm9sbFRvSW5kZXgoaW5kZXgsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFRoZW1lKHRoZW1lOiBzdHJpbmcgfCBHdWlUaGVtZSk6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRUaGVtZSh0aGVtZSwgc2NoZW1hSWQsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFZlcnRpY2FsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLnNldFZlcnRpY2FsR3JpZChlbmFibGVkLCBzY2hlbWFJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRIb3Jpem9udGFsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLnNldEhvcml6b250YWxHcmlkKGVuYWJsZWQsIHNjaGVtYUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZyk6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZywgc2NoZW1hSWQpO1xuXHRcdFx0fVxuXG5cdFx0fTtcblxuXHR9XG5cblxufVxuIl19