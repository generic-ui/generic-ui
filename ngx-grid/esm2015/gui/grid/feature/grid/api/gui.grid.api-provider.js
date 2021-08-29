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
                    // eslint-disable-next-line id-blacklist
                    return (/** @type {?} */ ({ data: r.getData(), index: r.getIndex(), itemId: r.getItemId() }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuYXBpLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvYXBpL2d1aS5ncmlkLmFwaS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlFQUFpRSxDQUFDOzs7O0FBUTlGLGdDQXlDQzs7Ozs7O0lBdkNBLHVEQUFtQzs7OztJQUVuQyxtREFBb0I7Ozs7SUFFcEIsbURBQW9COzs7O0lBRXBCLHVEQUF5Qzs7OztJQUV6QyxpREFBa0I7Ozs7SUFFbEIsbURBQW9COzs7O0lBRXBCLDBEQUEyQjs7Ozs7SUFFM0Isb0RBQXFDOzs7OztJQUVyQyxzREFBOEM7Ozs7O0lBRzlDLG9EQUE2Qjs7OztJQUU3Qix5REFBMEI7Ozs7SUFHMUIsbURBQW9COzs7O0lBRXBCLHNEQUF1Qjs7Ozs7SUFFdkIsK0RBQXdDOzs7OztJQUd4QyxxREFBeUM7Ozs7O0lBRXpDLDhEQUF3Qzs7Ozs7SUFFeEMsZ0VBQTBDOzs7OztJQUUxQyxpRUFBMkQ7O0FBSzVELE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7Ozs7O0lBa0I5QixZQUFZLFdBQXdCLEVBQ2pDLFFBQStCLEVBQy9CLDBCQUFtRCxFQUNuRCxrQkFBc0MsRUFDdEMsb0JBQTBDLEVBQzFDLG9CQUEwQyxFQUMxQyx1QkFBbUQsRUFDbkQsMEJBQW1EO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyx1QkFBdUIsR0FBRywwQkFBMEIsQ0FBQztRQUMxRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ2pELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxv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LENBQUM7Ozs7O1lBRUQsa0JBQWtCLENBQUMsS0FBYTtnQkFDL0IsMEJBQTBCLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztZQUM5RCxDQUFDOzs7OztZQUVELFFBQVEsQ0FBQyxLQUF3QjtnQkFDaEMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDaEUsQ0FBQzs7Ozs7WUFFRCxlQUFlLENBQUMsT0FBZ0I7Z0JBQy9CLHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDNUQsQ0FBQzs7Ozs7WUFFRCxpQkFBaUIsQ0FBQyxPQUFnQjtnQkFDakMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzlELENBQUM7Ozs7O1lBRUQsY0FBYyxDQUFDLFdBQW9DO2dCQUNsRCx1QkFBdUIsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9ELENBQUM7U0FFRCxDQUFDO0lBRUgsQ0FBQztDQUdEOzs7Ozs7SUFySUEseUNBQTBDOzs7OztJQUUxQyxzQ0FBaUQ7Ozs7O0lBRWpELHFEQUFrRTs7Ozs7SUFFbEUsZ0RBQXdEOzs7OztJQUV4RCxrREFBNEQ7Ozs7O0lBRTVELGtEQUE0RDs7Ozs7SUFFNUQscURBQXFFOzs7OztJQUVyRSx3REFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlSb3dDb2xvcmluZywgR3VpU2VsZWN0ZWRSb3csIEd1aVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvZ3VpLmdyaWQucHVibGljLWFwaSc7XG5pbXBvcnQgeyBGb3JtYXRpb25Db21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9mb3JtYXRpb24vc2VsZWN0ZWQtcm93JztcbmltcG9ydCB7IEZvcm1hdGlvbldhcmVob3VzZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc2VhcmNoL2NvcmUvYXBpL3NlYXJjaC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi90aGVtZS9ndWkuZ3JpZC50aGVtZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9hcGkvc3RydWN0dXJlLmNvbW1hbmQtaW52b2tlcic7XG5cblxuZXhwb3J0IGludGVyZmFjZSBHdWlHcmlkQXBpIHtcblxuXHRzZXRTb3VyY2Uoc291cmNlOiBBcnJheTxhbnk+KTogdm9pZFxuXG5cdHNob3dMb2FkaW5nKCk6IHZvaWQ7XG5cblx0aGlkZUxvYWRpbmcoKTogdm9pZDtcblxuXHRnZXRTZWxlY3RlZFJvd3MoKTogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+O1xuXG5cdHNlbGVjdEFsbCgpOiB2b2lkO1xuXG5cdHVuc2VsZWN0QWxsKCk6IHZvaWQ7XG5cblx0ZGVsZXRlU2VsZWN0ZWRSb3dzKCk6IHZvaWQ7XG5cblx0ZGVsZXRlUm93KHJvdzogR3VpU2VsZWN0ZWRSb3cpOiB2b2lkO1xuXG5cdGRlbGV0ZVJvd3Mocm93czogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+KTogdm9pZDtcblxuXHQvLyBTZWFyY2hpbmdcblx0c2VhcmNoKHBocmFzZTogc3RyaW5nKTogdm9pZDtcblxuXHRjbGVhclNlYXJjaFBocmFzZSgpOiB2b2lkO1xuXG5cdC8vIFZpZXcgcG9ydFxuXHRzY3JvbGxUb1RvcCgpOiB2b2lkO1xuXG5cdHNjcm9sbFRvQm90dG9tKCk6IHZvaWQ7XG5cblx0c2Nyb2xsVG9Sb3dCeUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkO1xuXG5cdC8vIFZpc3VhbFxuXHRzZXRUaGVtZSh0aGVtZTogc3RyaW5nIHwgR3VpVGhlbWUpOiB2b2lkO1xuXG5cdHNldFZlcnRpY2FsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZDtcblxuXHRzZXRIb3Jpem9udGFsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZDtcblxuXHRzZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZzogc3RyaW5nIHwgR3VpUm93Q29sb3JpbmcpOiB2b2lkO1xuXG59XG5cblxuZXhwb3J0IGNsYXNzIEd1aUdyaWRBcGlQcm92aWRlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uQ29tbWFuZEludm9rZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2U7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzb3VyY2VDb21tYW5kSW52b2tlcjogU291cmNlQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hDb21tYW5kSW52b2tlcjogU2VhcmNoQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBncmlkVGhlbWVDb21tYW5kSW52b2tlcjogR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcjogU3RydWN0dXJlQ29tbWFuZEludm9rZXI7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0XHRzb3VyY2VDb21tYW5kSW52b2tlcjogU291cmNlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyOiBTZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXI6IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcjogU3RydWN0dXJlQ29tbWFuZEludm9rZXIpIHtcblx0XHR0aGlzLnN0cnVjdHVyZUlkID0gc3RydWN0dXJlSWQ7XG5cdFx0dGhpcy5zY2hlbWFJZCA9IHNjaGVtYUlkO1xuXHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZEludm9rZXIgPSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjtcblx0XHR0aGlzLmZvcm1hdGlvbldhcmVob3VzZSA9IGZvcm1hdGlvbldhcmVob3VzZTtcblx0XHR0aGlzLnNvdXJjZUNvbW1hbmRJbnZva2VyID0gc291cmNlQ29tbWFuZEludm9rZXI7XG5cdFx0dGhpcy5zZWFyY2hDb21tYW5kSW52b2tlciA9IHNlYXJjaENvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMuZ3JpZFRoZW1lQ29tbWFuZEludm9rZXIgPSBncmlkVGhlbWVDb21tYW5kSW52b2tlcjtcblx0XHR0aGlzLnN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyID0gc3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXI7XG5cdH1cblxuXHRwcm92aWRlKCk6IEd1aUdyaWRBcGkge1xuXG5cdFx0Y29uc3Qgc3RydWN0dXJlSWQgPSB0aGlzLnN0cnVjdHVyZUlkLFxuXHRcdFx0c2NoZW1hSWQgPSB0aGlzLnNjaGVtYUlkLFxuXHRcdFx0ZmNkID0gdGhpcy5mb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdGZ3ID0gdGhpcy5mb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRzY2QgPSB0aGlzLnNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXIgPSB0aGlzLnNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXIgPSB0aGlzLmdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0c3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXIgPSB0aGlzLnN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyO1xuXG5cdFx0cmV0dXJuIHtcblxuXHRcdFx0c2V0U291cmNlKHNvdXJjZTogQXJyYXk8YW55Pik6IHZvaWQge1xuXHRcdFx0XHRzY2Quc2V0T3JpZ2luKHNvdXJjZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2hvd0xvYWRpbmcoKTogdm9pZCB7XG5cdFx0XHRcdHNjZC5zZXRMb2FkaW5nKHRydWUsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGhpZGVMb2FkaW5nKCk6IHZvaWQge1xuXHRcdFx0XHRzY2Quc2V0TG9hZGluZyhmYWxzZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVsZXRlUm93KHJvdzogR3VpU2VsZWN0ZWRSb3cpOiB2b2lkIHtcblx0XHRcdFx0c2NkLmRlbGV0ZVJvdyhuZXcgU2VsZWN0ZWRSb3cocm93LmRhdGEsIHJvdy5pbmRleCwgcm93Lml0ZW1JZCksIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRlbGV0ZVJvd3Mocm93czogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+KTogdm9pZCB7XG5cdFx0XHRcdGNvbnN0IHNlbGVjdGVkUm93cyA9IHJvd3MubWFwKChyb3c6IEd1aVNlbGVjdGVkUm93KSA9PiBuZXcgU2VsZWN0ZWRSb3cocm93LmRhdGEsIHJvdy5pbmRleCwgcm93Lml0ZW1JZCkpO1xuXG5cdFx0XHRcdHNjZC5kZWxldGVSb3dzKHNlbGVjdGVkUm93cywgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVsZXRlU2VsZWN0ZWRSb3dzKCk6IHZvaWQge1xuXHRcdFx0XHQvLyB0aGlzLnNvdXJjZUNvbW1hbmREaXNwYXRjaGVyLlxuXHRcdFx0fSxcblxuXHRcdFx0Z2V0U2VsZWN0ZWRSb3dzKCk6IEFycmF5PEd1aVNlbGVjdGVkUm93PiB7XG5cblx0XHRcdFx0Y29uc3Qgcm93cyA9IGZ3LmdldFNlbGVjdGVkUm93cyhzdHJ1Y3R1cmVJZCk7XG5cblx0XHRcdFx0cmV0dXJuIHJvd3MubWFwKChyOiBTZWxlY3RlZFJvdykgPT4ge1xuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpZC1ibGFja2xpc3Rcblx0XHRcdFx0XHRyZXR1cm4geyBkYXRhOiByLmdldERhdGEoKSwgaW5kZXg6IHIuZ2V0SW5kZXgoKSwgaXRlbUlkOiByLmdldEl0ZW1JZCgpIH0gYXMgR3VpU2VsZWN0ZWRSb3c7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblxuXHRcdFx0c2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdFx0XHRmY2Quc2VsZWN0QWxsKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHVuc2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdFx0XHRmY2QudW5zZWxlY3RBbGwoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2VhcmNoKHBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyLnNlYXJjaChwaHJhc2UsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGNsZWFyU2VhcmNoUGhyYXNlKCk6IHZvaWQge1xuXHRcdFx0XHRzZWFyY2hDb21tYW5kSW52b2tlci5zZWFyY2goJycsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdC8vIFZpZXcgcG9ydFxuXHRcdFx0c2Nyb2xsVG9Ub3AoKTogdm9pZCB7XG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyLnNjcm9sbFRvVG9wKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNjcm9sbFRvQm90dG9tKCk6IHZvaWQge1xuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlci5zY3JvbGxUb0JvdHRvbShzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzY3JvbGxUb1Jvd0J5SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlci5zY3JvbGxUb0luZGV4KGluZGV4LCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRUaGVtZSh0aGVtZTogc3RyaW5nIHwgR3VpVGhlbWUpOiB2b2lkIHtcblx0XHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXIuc2V0VGhlbWUodGhlbWUsIHNjaGVtYUlkLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRWZXJ0aWNhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRWZXJ0aWNhbEdyaWQoZW5hYmxlZCwgc2NoZW1hSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0SG9yaXpvbnRhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRIb3Jpem9udGFsR3JpZChlbmFibGVkLCBzY2hlbWFJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZzogc3RyaW5nIHwgR3VpUm93Q29sb3JpbmcpOiB2b2lkIHtcblx0XHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXIuc2V0Um93Q29sb3Jpbmcocm93Q29sb3JpbmcsIHNjaGVtYUlkKTtcblx0XHRcdH1cblxuXHRcdH07XG5cblx0fVxuXG5cbn1cbiJdfQ==