/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SelectedRow } from '../../../../../structure/source/domain-api/formation/selected-row';
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
     */
    constructor(structureId, schemaId, formationCommandDispatcher, formationWarehouse, sourceCommandInvoker, searchCommandInvoker, gridThemeCommandInvoker) {
        this.structureId = structureId;
        this.schemaId = schemaId;
        this.formationCommandInvoker = formationCommandDispatcher;
        this.formationWarehouse = formationWarehouse;
        this.sourceCommandInvoker = sourceCommandInvoker;
        this.searchCommandInvoker = searchCommandInvoker;
        this.gridThemeCommandInvoker = gridThemeCommandInvoker;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuYXBpLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvYXBpL2d1aS5ncmlkLmFwaS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1FQUFtRSxDQUFDOzs7O0FBT2hHLGdDQWtDQzs7Ozs7O0lBaENBLHVEQUFtQzs7OztJQUVuQyxtREFBb0I7Ozs7SUFFcEIsbURBQW9COzs7O0lBRXBCLHVEQUF5Qzs7OztJQUV6QyxpREFBa0I7Ozs7SUFFbEIsbURBQW9COzs7O0lBRXBCLDBEQUEyQjs7Ozs7SUFFM0Isb0RBQXFDOzs7OztJQUVyQyxzREFBOEM7Ozs7O0lBRzlDLG9EQUE2Qjs7OztJQUU3Qix5REFBMEI7Ozs7O0lBRzFCLHFEQUF5Qzs7Ozs7SUFFekMsOERBQXdDOzs7OztJQUV4QyxnRUFBMEM7Ozs7O0lBRTFDLGlFQUEyRDs7QUFLNUQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7OztJQWdCOUIsWUFBWSxXQUF3QixFQUNqQyxRQUErQixFQUMvQiwwQkFBbUQsRUFDbkQsa0JBQXNDLEVBQ3RDLG9CQUEwQyxFQUMxQyxvQkFBMEMsRUFDMUMsdUJBQW1EO1FBQ3JELElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyx1QkFBdUIsR0FBRywwQkFBMEIsQ0FBQztRQUMxRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUM7UUFDN0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ2pELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsdUJBQXVCLEdBQUcsdUJBQXVCLENBQUM7SUFDeEQsQ0FBQzs7OztJQUVELE9BQU87O2NBRUEsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXOztjQUNuQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7O2NBQ3hCLEdBQUcsR0FBRyxJQUFJLENBQUMsdUJBQXVCOztjQUNsQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGtCQUFrQjs7Y0FDNUIsR0FBRyxHQUFHLElBQUksQ0FBQyxvQkFBb0I7O2NBQy9CLG9CQUFvQixHQUFHLElBQUksQ0FBQyxvQkFBb0I7O2NBQ2hELHVCQUF1QixHQUFHLElBQUksQ0FBQyx1QkFBdUI7UUFFdkQsT0FBTzs7Ozs7WUFFTixTQUFTLENBQUMsTUFBa0I7Z0JBQzNCLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3BDLENBQUM7Ozs7WUFFRCxXQUFXO2dCQUNWLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ25DLENBQUM7Ozs7WUFFRCxXQUFXO2dCQUNWLEdBQUcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ3BDLENBQUM7Ozs7O1lBRUQsU0FBUyxDQUFDLEdBQW1CO2dCQUM1QixHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDOUUsQ0FBQzs7Ozs7WUFFRCxVQUFVLENBQUMsSUFBMkI7O3NCQUMvQixZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUc7Ozs7Z0JBQUMsQ0FBQyxHQUFtQixFQUFFLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFDO2dCQUV4RyxHQUFHLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztZQUMzQyxDQUFDOzs7O1lBRUQsa0JBQWtCO2dCQUNqQixnQ0FBZ0M7WUFDakMsQ0FBQzs7OztZQUVELGVBQWU7O3NCQUVSLElBQUksR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztnQkFFNUMsT0FBTyxJQUFJLENBQUMsR0FBRzs7OztnQkFBQyxDQUFDLENBQWMsRUFBRSxFQUFFO29CQUNsQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztnQkFDMUUsQ0FBQyxFQUFDLENBQUM7WUFDSixDQUFDOzs7O1lBRUQsU0FBUztnQkFDUixHQUFHLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzVCLENBQUM7Ozs7WUFFRCxXQUFXO2dCQUNWLEdBQUcsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUIsQ0FBQzs7Ozs7WUFFRCxNQUFNLENBQUMsTUFBYztnQkFDcEIsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNsRCxDQUFDOzs7O1lBRUQsaUJBQWlCO2dCQUNoQixvQkFBb0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQzlDLENBQUM7Ozs7O1lBRUQsUUFBUSxDQUFDLEtBQXdCO2dCQUNoQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztZQUNoRSxDQUFDOzs7OztZQUVELGVBQWUsQ0FBQyxPQUFnQjtnQkFDL0IsdUJBQXVCLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM1RCxDQUFDOzs7OztZQUVELGlCQUFpQixDQUFDLE9BQWdCO2dCQUNqQyx1QkFBdUIsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDOUQsQ0FBQzs7Ozs7WUFFRCxjQUFjLENBQUMsV0FBb0M7Z0JBQ2xELHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0QsQ0FBQztTQUVELENBQUM7SUFFSCxDQUFDO0NBR0Q7Ozs7OztJQWxIQSx5Q0FBMEM7Ozs7O0lBRTFDLHNDQUFpRDs7Ozs7SUFFakQscURBQWtFOzs7OztJQUVsRSxnREFBd0Q7Ozs7O0lBRXhELGtEQUE0RDs7Ozs7SUFFNUQsa0RBQTREOzs7OztJQUU1RCxxREFBcUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlSb3dDb2xvcmluZywgR3VpU2VsZWN0ZWRSb3csIEd1aVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9ndWkuZ3JpZC5wdWJsaWMtYXBpJztcbmltcG9ydCB7IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24uY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTb3VyY2VDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zb3VyY2UvZG9tYWluLWFwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IFNlbGVjdGVkUm93IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgRm9ybWF0aW9uV2FyZWhvdXNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL2Zvcm1hdGlvbi9mb3JtYXRpb24ud2FyZWhvdXNlJztcbmltcG9ydCB7IFNlYXJjaENvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NlYXJjaC9kb21haW4tYXBpL3NlYXJjaC5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2RvbWFpbi1hcGkvcmVhZC9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vdGhlbWUvZ3VpLmdyaWQudGhlbWUuY29tbWFuZC1pbnZva2VyJztcblxuXG5leHBvcnQgaW50ZXJmYWNlIEd1aUdyaWRBcGkge1xuXG5cdHNldFNvdXJjZShzb3VyY2U6IEFycmF5PGFueT4pOiB2b2lkXG5cblx0c2hvd0xvYWRpbmcoKTogdm9pZDtcblxuXHRoaWRlTG9hZGluZygpOiB2b2lkO1xuXG5cdGdldFNlbGVjdGVkUm93cygpOiBBcnJheTxHdWlTZWxlY3RlZFJvdz47XG5cblx0c2VsZWN0QWxsKCk6IHZvaWQ7XG5cblx0dW5zZWxlY3RBbGwoKTogdm9pZDtcblxuXHRkZWxldGVTZWxlY3RlZFJvd3MoKTogdm9pZDtcblxuXHRkZWxldGVSb3cocm93OiBHdWlTZWxlY3RlZFJvdyk6IHZvaWQ7XG5cblx0ZGVsZXRlUm93cyhyb3dzOiBBcnJheTxHdWlTZWxlY3RlZFJvdz4pOiB2b2lkO1xuXG5cdC8vIFNlYXJjaGluZ1xuXHRzZWFyY2gocGhyYXNlOiBzdHJpbmcpOiB2b2lkO1xuXG5cdGNsZWFyU2VhcmNoUGhyYXNlKCk6IHZvaWQ7XG5cblx0Ly8gVmlzdWFsXG5cdHNldFRoZW1lKHRoZW1lOiBzdHJpbmcgfCBHdWlUaGVtZSk6IHZvaWQ7XG5cblx0c2V0VmVydGljYWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xuXG5cdHNldEhvcml6b250YWxHcmlkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkO1xuXG5cdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZyk6IHZvaWQ7XG5cbn1cblxuXG5leHBvcnQgY2xhc3MgR3VpR3JpZEFwaVByb3ZpZGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQ7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25Db21tYW5kSW52b2tlcjogRm9ybWF0aW9uQ29tbWFuZEludm9rZXI7XG5cblx0cHJpdmF0ZSByZWFkb25seSBmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZTtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvdXJjZUNvbW1hbmRJbnZva2VyOiBTb3VyY2VDb21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaENvbW1hbmRJbnZva2VyOiBTZWFyY2hDb21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyOiBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlcjtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcixcblx0XHRcdFx0Zm9ybWF0aW9uV2FyZWhvdXNlOiBGb3JtYXRpb25XYXJlaG91c2UsXG5cdFx0XHRcdHNvdXJjZUNvbW1hbmRJbnZva2VyOiBTb3VyY2VDb21tYW5kSW52b2tlcixcblx0XHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlcjogR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXIpIHtcblx0XHR0aGlzLnN0cnVjdHVyZUlkID0gc3RydWN0dXJlSWQ7XG5cdFx0dGhpcy5zY2hlbWFJZCA9IHNjaGVtYUlkO1xuXHRcdHRoaXMuZm9ybWF0aW9uQ29tbWFuZEludm9rZXIgPSBmb3JtYXRpb25Db21tYW5kRGlzcGF0Y2hlcjtcblx0XHR0aGlzLmZvcm1hdGlvbldhcmVob3VzZSA9IGZvcm1hdGlvbldhcmVob3VzZTtcblx0XHR0aGlzLnNvdXJjZUNvbW1hbmRJbnZva2VyID0gc291cmNlQ29tbWFuZEludm9rZXI7XG5cdFx0dGhpcy5zZWFyY2hDb21tYW5kSW52b2tlciA9IHNlYXJjaENvbW1hbmRJbnZva2VyO1xuXHRcdHRoaXMuZ3JpZFRoZW1lQ29tbWFuZEludm9rZXIgPSBncmlkVGhlbWVDb21tYW5kSW52b2tlcjtcblx0fVxuXG5cdHByb3ZpZGUoKTogR3VpR3JpZEFwaSB7XG5cblx0XHRjb25zdCBzdHJ1Y3R1cmVJZCA9IHRoaXMuc3RydWN0dXJlSWQsXG5cdFx0XHRzY2hlbWFJZCA9IHRoaXMuc2NoZW1hSWQsXG5cdFx0XHRmY2QgPSB0aGlzLmZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0ZncgPSB0aGlzLmZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdHNjZCA9IHRoaXMuc291cmNlQ29tbWFuZEludm9rZXIsXG5cdFx0XHRzZWFyY2hDb21tYW5kSW52b2tlciA9IHRoaXMuc2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlciA9IHRoaXMuZ3JpZFRoZW1lQ29tbWFuZEludm9rZXI7XG5cblx0XHRyZXR1cm4ge1xuXG5cdFx0XHRzZXRTb3VyY2Uoc291cmNlOiBBcnJheTxhbnk+KTogdm9pZCB7XG5cdFx0XHRcdHNjZC5zZXRPcmlnaW4oc291cmNlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzaG93TG9hZGluZygpOiB2b2lkIHtcblx0XHRcdFx0c2NkLnNldExvYWRpbmcodHJ1ZSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0aGlkZUxvYWRpbmcoKTogdm9pZCB7XG5cdFx0XHRcdHNjZC5zZXRMb2FkaW5nKGZhbHNlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkZWxldGVSb3cocm93OiBHdWlTZWxlY3RlZFJvdyk6IHZvaWQge1xuXHRcdFx0XHRzY2QuZGVsZXRlUm93KG5ldyBTZWxlY3RlZFJvdyhyb3cuZGF0YSwgcm93LmluZGV4LCByb3cuaXRlbUlkKSwgc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0ZGVsZXRlUm93cyhyb3dzOiBBcnJheTxHdWlTZWxlY3RlZFJvdz4pOiB2b2lkIHtcblx0XHRcdFx0Y29uc3Qgc2VsZWN0ZWRSb3dzID0gcm93cy5tYXAoKHJvdzogR3VpU2VsZWN0ZWRSb3cpID0+IG5ldyBTZWxlY3RlZFJvdyhyb3cuZGF0YSwgcm93LmluZGV4LCByb3cuaXRlbUlkKSk7XG5cblx0XHRcdFx0c2NkLmRlbGV0ZVJvd3Moc2VsZWN0ZWRSb3dzLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkZWxldGVTZWxlY3RlZFJvd3MoKTogdm9pZCB7XG5cdFx0XHRcdC8vIHRoaXMuc291cmNlQ29tbWFuZERpc3BhdGNoZXIuXG5cdFx0XHR9LFxuXG5cdFx0XHRnZXRTZWxlY3RlZFJvd3MoKTogQXJyYXk8R3VpU2VsZWN0ZWRSb3c+IHtcblxuXHRcdFx0XHRjb25zdCByb3dzID0gZncuZ2V0U2VsZWN0ZWRSb3dzKHN0cnVjdHVyZUlkKTtcblxuXHRcdFx0XHRyZXR1cm4gcm93cy5tYXAoKHI6IFNlbGVjdGVkUm93KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHsgZGF0YTogci5nZXREYXRhKCksIGluZGV4OiByLmdldEluZGV4KCksIGl0ZW1JZDogci5nZXRJdGVtSWQoKSB9O1xuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cblx0XHRcdHNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHRcdFx0ZmNkLnNlbGVjdEFsbChzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHR1bnNlbGVjdEFsbCgpOiB2b2lkIHtcblx0XHRcdFx0ZmNkLnVuc2VsZWN0QWxsKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNlYXJjaChwaHJhc2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdFx0XHRzZWFyY2hDb21tYW5kSW52b2tlci5zZWFyY2gocGhyYXNlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRjbGVhclNlYXJjaFBocmFzZSgpOiB2b2lkIHtcblx0XHRcdFx0c2VhcmNoQ29tbWFuZEludm9rZXIuc2VhcmNoKCcnLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRUaGVtZSh0aGVtZTogc3RyaW5nIHwgR3VpVGhlbWUpOiB2b2lkIHtcblx0XHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXIuc2V0VGhlbWUodGhlbWUsIHNjaGVtYUlkLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRWZXJ0aWNhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRWZXJ0aWNhbEdyaWQoZW5hYmxlZCwgc2NoZW1hSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0SG9yaXpvbnRhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRIb3Jpem9udGFsR3JpZChlbmFibGVkLCBzY2hlbWFJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZzogc3RyaW5nIHwgR3VpUm93Q29sb3JpbmcpOiB2b2lkIHtcblx0XHRcdFx0Z3JpZFRoZW1lQ29tbWFuZEludm9rZXIuc2V0Um93Q29sb3Jpbmcocm93Q29sb3JpbmcsIHNjaGVtYUlkKTtcblx0XHRcdH1cblxuXHRcdH07XG5cblx0fVxuXG5cbn1cbiJdfQ==