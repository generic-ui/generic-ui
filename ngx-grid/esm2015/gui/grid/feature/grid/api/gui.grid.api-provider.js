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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuYXBpLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvYXBpL2d1aS5ncmlkLmFwaS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGlFQUFpRSxDQUFDOzs7O0FBUTlGLGdDQXlDQzs7Ozs7O0lBdkNBLHVEQUFtQzs7OztJQUVuQyxtREFBb0I7Ozs7SUFFcEIsbURBQW9COzs7O0lBRXBCLHVEQUF5Qzs7OztJQUV6QyxpREFBa0I7Ozs7SUFFbEIsbURBQW9COzs7O0lBRXBCLDBEQUEyQjs7Ozs7SUFFM0Isb0RBQXFDOzs7OztJQUVyQyxzREFBOEM7Ozs7O0lBRzlDLG9EQUE2Qjs7OztJQUU3Qix5REFBMEI7Ozs7SUFHMUIsbURBQW9COzs7O0lBRXBCLHNEQUF1Qjs7Ozs7SUFFdkIsK0RBQXdDOzs7OztJQUd4QyxxREFBeUM7Ozs7O0lBRXpDLDhEQUF3Qzs7Ozs7SUFFeEMsZ0VBQTBDOzs7OztJQUUxQyxpRUFBMkQ7O0FBSzVELE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7Ozs7O0lBa0I5QixZQUFZLFdBQXdCLEVBQ2pDLFFBQStCLEVBQy9CLDBCQUFtRCxFQUNuRCxrQkFBc0MsRUFDdEMsb0JBQTBDLEVBQzFDLG9CQUEwQyxFQUMxQyx1QkFBbUQsRUFDbkQsMEJBQW1EO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyx1QkFBdUIsR0FBRywwQkFBMEIsQ0FBQztRQUMxRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ2pELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxv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LEtBQWE7Z0JBQy9CLDBCQUEwQixDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDOUQsQ0FBQzs7Ozs7WUFFRCxRQUFRLENBQUMsS0FBd0I7Z0JBQ2hDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2hFLENBQUM7Ozs7O1lBRUQsZUFBZSxDQUFDLE9BQWdCO2dCQUMvQix1QkFBdUIsQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzVELENBQUM7Ozs7O1lBRUQsaUJBQWlCLENBQUMsT0FBZ0I7Z0JBQ2pDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM5RCxDQUFDOzs7OztZQUVELGNBQWMsQ0FBQyxXQUFvQztnQkFDbEQsdUJBQXVCLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMvRCxDQUFDO1NBRUQsQ0FBQztJQUVILENBQUM7Q0FHRDs7Ozs7O0lBcElBLHlDQUEwQzs7Ozs7SUFFMUMsc0NBQWlEOzs7OztJQUVqRCxxREFBa0U7Ozs7O0lBRWxFLGdEQUF3RDs7Ozs7SUFFeEQsa0RBQTREOzs7OztJQUU1RCxrREFBNEQ7Ozs7O0lBRTVELHFEQUFxRTs7Ozs7SUFFckUsd0RBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpUm93Q29sb3JpbmcsIEd1aVNlbGVjdGVkUm93LCBHdWlUaGVtZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL2d1aS5ncmlkLnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvc291cmNlLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvY29yZS9hcGkvZm9ybWF0aW9uL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2NvcmUvYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NlYXJjaC9jb3JlL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NjaGVtYS9jb3JlL2FwaS9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vdGhlbWUvZ3VpLmdyaWQudGhlbWUuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5jb21tYW5kLWludm9rZXInO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpR3JpZEFwaSB7XG5cblx0c2V0U291cmNlKHNvdXJjZTogQXJyYXk8YW55Pik6IHZvaWRcblxuXHRzaG93TG9hZGluZygpOiB2b2lkO1xuXG5cdGhpZGVMb2FkaW5nKCk6IHZvaWQ7XG5cblx0Z2V0U2VsZWN0ZWRSb3dzKCk6IEFycmF5PEd1aVNlbGVjdGVkUm93PjtcblxuXHRzZWxlY3RBbGwoKTogdm9pZDtcblxuXHR1bnNlbGVjdEFsbCgpOiB2b2lkO1xuXG5cdGRlbGV0ZVNlbGVjdGVkUm93cygpOiB2b2lkO1xuXG5cdGRlbGV0ZVJvdyhyb3c6IEd1aVNlbGVjdGVkUm93KTogdm9pZDtcblxuXHRkZWxldGVSb3dzKHJvd3M6IEFycmF5PEd1aVNlbGVjdGVkUm93Pik6IHZvaWQ7XG5cblx0Ly8gU2VhcmNoaW5nXG5cdHNlYXJjaChwaHJhc2U6IHN0cmluZyk6IHZvaWQ7XG5cblx0Y2xlYXJTZWFyY2hQaHJhc2UoKTogdm9pZDtcblxuXHQvLyBWaWV3IHBvcnRcblx0c2Nyb2xsVG9Ub3AoKTogdm9pZDtcblxuXHRzY3JvbGxUb0JvdHRvbSgpOiB2b2lkO1xuXG5cdHNjcm9sbFRvUm93QnlJbmRleChpbmRleDogbnVtYmVyKTogdm9pZDtcblxuXHQvLyBWaXN1YWxcblx0c2V0VGhlbWUodGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lKTogdm9pZDtcblxuXHRzZXRWZXJ0aWNhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQ7XG5cblx0c2V0SG9yaXpvbnRhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQ7XG5cblx0c2V0Um93Q29sb3Jpbmcocm93Q29sb3Jpbmc6IHN0cmluZyB8IEd1aVJvd0NvbG9yaW5nKTogdm9pZDtcblxufVxuXG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkQXBpUHJvdmlkZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkNvbW1hbmRJbnZva2VyOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc291cmNlQ29tbWFuZEludm9rZXI6IFNvdXJjZUNvbW1hbmRJbnZva2VyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoQ29tbWFuZEludm9rZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3JpZFRoZW1lQ29tbWFuZEludm9rZXI6IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXI6IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0Zm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0c291cmNlQ29tbWFuZEludm9rZXI6IFNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRzZWFyY2hDb21tYW5kSW52b2tlcjogU2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyOiBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlcixcblx0XHRcdFx0c3RydWN0dXJlQ29tbWFuZERpc3BhdGNoZXI6IFN0cnVjdHVyZUNvbW1hbmRJbnZva2VyKSB7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUlkO1xuXHRcdHRoaXMuc2NoZW1hSWQgPSBzY2hlbWFJZDtcblx0XHR0aGlzLmZvcm1hdGlvbkNvbW1hbmRJbnZva2VyID0gZm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI7XG5cdFx0dGhpcy5mb3JtYXRpb25XYXJlaG91c2UgPSBmb3JtYXRpb25XYXJlaG91c2U7XG5cdFx0dGhpcy5zb3VyY2VDb21tYW5kSW52b2tlciA9IHNvdXJjZUNvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMuc2VhcmNoQ29tbWFuZEludm9rZXIgPSBzZWFyY2hDb21tYW5kSW52b2tlcjtcblx0XHR0aGlzLmdyaWRUaGVtZUNvbW1hbmRJbnZva2VyID0gZ3JpZFRoZW1lQ29tbWFuZEludm9rZXI7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlciA9IHN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyO1xuXHR9XG5cblx0cHJvdmlkZSgpOiBHdWlHcmlkQXBpIHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gdGhpcy5zdHJ1Y3R1cmVJZCxcblx0XHRcdHNjaGVtYUlkID0gdGhpcy5zY2hlbWFJZCxcblx0XHRcdGZjZCA9IHRoaXMuZm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRmdyA9IHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0c2NkID0gdGhpcy5zb3VyY2VDb21tYW5kSW52b2tlcixcblx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyID0gdGhpcy5zZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyID0gdGhpcy5ncmlkVGhlbWVDb21tYW5kSW52b2tlcixcblx0XHRcdHN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyID0gdGhpcy5zdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlcjtcblxuXHRcdHJldHVybiB7XG5cblx0XHRcdHNldFNvdXJjZShzb3VyY2U6IEFycmF5PGFueT4pOiB2b2lkIHtcblx0XHRcdFx0c2NkLnNldE9yaWdpbihzb3VyY2UsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNob3dMb2FkaW5nKCk6IHZvaWQge1xuXHRcdFx0XHRzY2Quc2V0TG9hZGluZyh0cnVlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRoaWRlTG9hZGluZygpOiB2b2lkIHtcblx0XHRcdFx0c2NkLnNldExvYWRpbmcoZmFsc2UsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRlbGV0ZVJvdyhyb3c6IEd1aVNlbGVjdGVkUm93KTogdm9pZCB7XG5cdFx0XHRcdHNjZC5kZWxldGVSb3cobmV3IFNlbGVjdGVkUm93KHJvdy5kYXRhLCByb3cuaW5kZXgsIHJvdy5pdGVtSWQpLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkZWxldGVSb3dzKHJvd3M6IEFycmF5PEd1aVNlbGVjdGVkUm93Pik6IHZvaWQge1xuXHRcdFx0XHRjb25zdCBzZWxlY3RlZFJvd3MgPSByb3dzLm1hcCgocm93OiBHdWlTZWxlY3RlZFJvdykgPT4gbmV3IFNlbGVjdGVkUm93KHJvdy5kYXRhLCByb3cuaW5kZXgsIHJvdy5pdGVtSWQpKTtcblxuXHRcdFx0XHRzY2QuZGVsZXRlUm93cyhzZWxlY3RlZFJvd3MsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRlbGV0ZVNlbGVjdGVkUm93cygpOiB2b2lkIHtcblx0XHRcdFx0Ly8gdGhpcy5zb3VyY2VDb21tYW5kRGlzcGF0Y2hlci5cblx0XHRcdH0sXG5cblx0XHRcdGdldFNlbGVjdGVkUm93cygpOiBBcnJheTxHdWlTZWxlY3RlZFJvdz4ge1xuXG5cdFx0XHRcdGNvbnN0IHJvd3MgPSBmdy5nZXRTZWxlY3RlZFJvd3Moc3RydWN0dXJlSWQpO1xuXG5cdFx0XHRcdHJldHVybiByb3dzLm1hcCgocjogU2VsZWN0ZWRSb3cpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4geyBkYXRhOiByLmdldERhdGEoKSwgaW5kZXg6IHIuZ2V0SW5kZXgoKSwgaXRlbUlkOiByLmdldEl0ZW1JZCgpIH07XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblxuXHRcdFx0c2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdFx0XHRmY2Quc2VsZWN0QWxsKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHVuc2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdFx0XHRmY2QudW5zZWxlY3RBbGwoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2VhcmNoKHBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyLnNlYXJjaChwaHJhc2UsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGNsZWFyU2VhcmNoUGhyYXNlKCk6IHZvaWQge1xuXHRcdFx0XHRzZWFyY2hDb21tYW5kSW52b2tlci5zZWFyY2goJycsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdC8vIFZpZXcgcG9ydFxuXHRcdFx0c2Nyb2xsVG9Ub3AoKTogdm9pZCB7XG5cdFx0XHRcdHN0cnVjdHVyZUNvbW1hbmREaXNwYXRjaGVyLnNjcm9sbFRvVG9wKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNjcm9sbFRvQm90dG9tKCk6IHZvaWQge1xuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlci5zY3JvbGxUb0JvdHRvbShzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzY3JvbGxUb1Jvd0J5SW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuXHRcdFx0XHRzdHJ1Y3R1cmVDb21tYW5kRGlzcGF0Y2hlci5zY3JvbGxUb0luZGV4KGluZGV4LCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRUaGVtZSh0aGVtZTogc3RyaW5nIHwgR3VpVGhlbWUpOiB2b2lkIHtcblx0XHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXIuc2V0VGhlbWUodGhlbWUsIHNjaGVtYUlkLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRWZXJ0aWNhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRWZXJ0aWNhbEdyaWQoZW5hYmxlZCwgc2NoZW1hSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0SG9yaXpvbnRhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRIb3Jpem9udGFsR3JpZChlbmFibGVkLCBzY2hlbWFJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZzogc3RyaW5nIHwgR3VpUm93Q29sb3JpbmcpOiB2b2lkIHtcblx0XHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXIuc2V0Um93Q29sb3Jpbmcocm93Q29sb3JpbmcsIHNjaGVtYUlkKTtcblx0XHRcdH1cblxuXHRcdH07XG5cblx0fVxuXG5cbn1cbiJdfQ==