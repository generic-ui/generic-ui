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
var GuiGridApiProvider = /** @class */ (function () {
    function GuiGridApiProvider(structureId, schemaId, formationCommandDispatcher, formationWarehouse, sourceCommandInvoker, searchCommandInvoker, gridThemeCommandInvoker) {
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3VpLmdyaWQuYXBpLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJndWkvZ3JpZC9mZWF0dXJlL2dyaWQvYXBpL2d1aS5ncmlkLmFwaS1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1FQUFtRSxDQUFDOzs7O0FBT2hHLGdDQWtDQzs7Ozs7O0lBaENBLHVEQUFtQzs7OztJQUVuQyxtREFBb0I7Ozs7SUFFcEIsbURBQW9COzs7O0lBRXBCLHVEQUF5Qzs7OztJQUV6QyxpREFBa0I7Ozs7SUFFbEIsbURBQW9COzs7O0lBRXBCLDBEQUEyQjs7Ozs7SUFFM0Isb0RBQXFDOzs7OztJQUVyQyxzREFBOEM7Ozs7O0lBRzlDLG9EQUE2Qjs7OztJQUU3Qix5REFBMEI7Ozs7O0lBRzFCLHFEQUF5Qzs7Ozs7SUFFekMsOERBQXdDOzs7OztJQUV4QyxnRUFBMEM7Ozs7O0lBRTFDLGlFQUEyRDs7QUFLNUQ7SUFnQkMsNEJBQVksV0FBd0IsRUFDakMsUUFBK0IsRUFDL0IsMEJBQW1ELEVBQ25ELGtCQUFzQyxFQUN0QyxvQkFBMEMsRUFDMUMsb0JBQTBDLEVBQzFDLHVCQUFtRDtRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsMEJBQTBCLENBQUM7UUFDMUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO1FBQzdDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUNqRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDakQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLHVCQUF1QixDQUFDO0lBQ3hELENBQUM7Ozs7SUFFRCxvQ0FBTzs7O0lBQVA7O1lBRU8s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RSxRQUFRLENBQUMsQ0FBQztZQUM5RCxDQUFDO1lBRUQsY0FBYzs7OztZQUFkLFVBQWUsV0FBb0M7Z0JBQ2xELHVCQUF1QixDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDL0QsQ0FBQztTQUVELENBQUM7SUFFSCxDQUFDO0lBR0YseUJBQUM7QUFBRCxDQUFDLEFBcEhELElBb0hDOzs7Ozs7O0lBbEhBLHlDQUEwQzs7Ozs7SUFFMUMsc0NBQWlEOzs7OztJQUVqRCxxREFBa0U7Ozs7O0lBRWxFLGdEQUF3RDs7Ozs7SUFFeEQsa0RBQTREOzs7OztJQUU1RCxrREFBNEQ7Ozs7O0lBRTVELHFEQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aVJvd0NvbG9yaW5nLCBHdWlTZWxlY3RlZFJvdywgR3VpVGhlbWUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL2d1aS5ncmlkLnB1YmxpYy1hcGknO1xuaW1wb3J0IHsgRm9ybWF0aW9uQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNvdXJjZUNvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NvdXJjZS9kb21haW4tYXBpL3NvdXJjZS5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBGb3JtYXRpb25XYXJlaG91c2UgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi1hcGkvZm9ybWF0aW9uL2Zvcm1hdGlvbi53YXJlaG91c2UnO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc2VhcmNoL2RvbWFpbi1hcGkvc2VhcmNoLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zY2hlbWEvZG9tYWluLWFwaS9yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgR3VpR3JpZFRoZW1lQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi90aGVtZS9ndWkuZ3JpZC50aGVtZS5jb21tYW5kLWludm9rZXInO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgR3VpR3JpZEFwaSB7XG5cblx0c2V0U291cmNlKHNvdXJjZTogQXJyYXk8YW55Pik6IHZvaWRcblxuXHRzaG93TG9hZGluZygpOiB2b2lkO1xuXG5cdGhpZGVMb2FkaW5nKCk6IHZvaWQ7XG5cblx0Z2V0U2VsZWN0ZWRSb3dzKCk6IEFycmF5PEd1aVNlbGVjdGVkUm93PjtcblxuXHRzZWxlY3RBbGwoKTogdm9pZDtcblxuXHR1bnNlbGVjdEFsbCgpOiB2b2lkO1xuXG5cdGRlbGV0ZVNlbGVjdGVkUm93cygpOiB2b2lkO1xuXG5cdGRlbGV0ZVJvdyhyb3c6IEd1aVNlbGVjdGVkUm93KTogdm9pZDtcblxuXHRkZWxldGVSb3dzKHJvd3M6IEFycmF5PEd1aVNlbGVjdGVkUm93Pik6IHZvaWQ7XG5cblx0Ly8gU2VhcmNoaW5nXG5cdHNlYXJjaChwaHJhc2U6IHN0cmluZyk6IHZvaWQ7XG5cblx0Y2xlYXJTZWFyY2hQaHJhc2UoKTogdm9pZDtcblxuXHQvLyBWaXN1YWxcblx0c2V0VGhlbWUodGhlbWU6IHN0cmluZyB8IEd1aVRoZW1lKTogdm9pZDtcblxuXHRzZXRWZXJ0aWNhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQ7XG5cblx0c2V0SG9yaXpvbnRhbEdyaWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQ7XG5cblx0c2V0Um93Q29sb3Jpbmcocm93Q29sb3Jpbmc6IHN0cmluZyB8IEd1aVJvd0NvbG9yaW5nKTogdm9pZDtcblxufVxuXG5cbmV4cG9ydCBjbGFzcyBHdWlHcmlkQXBpUHJvdmlkZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZDtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbkNvbW1hbmRJbnZva2VyOiBGb3JtYXRpb25Db21tYW5kSW52b2tlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGZvcm1hdGlvbldhcmVob3VzZTogRm9ybWF0aW9uV2FyZWhvdXNlO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc291cmNlQ29tbWFuZEludm9rZXI6IFNvdXJjZUNvbW1hbmRJbnZva2VyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoQ29tbWFuZEludm9rZXI6IFNlYXJjaENvbW1hbmRJbnZva2VyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgZ3JpZFRoZW1lQ29tbWFuZEludm9rZXI6IEd1aUdyaWRUaGVtZUNvbW1hbmRJbnZva2VyO1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0c2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0Zm9ybWF0aW9uQ29tbWFuZERpc3BhdGNoZXI6IEZvcm1hdGlvbkNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRmb3JtYXRpb25XYXJlaG91c2U6IEZvcm1hdGlvbldhcmVob3VzZSxcblx0XHRcdFx0c291cmNlQ29tbWFuZEludm9rZXI6IFNvdXJjZUNvbW1hbmRJbnZva2VyLFxuXHRcdFx0XHRzZWFyY2hDb21tYW5kSW52b2tlcjogU2VhcmNoQ29tbWFuZEludm9rZXIsXG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyOiBHdWlHcmlkVGhlbWVDb21tYW5kSW52b2tlcikge1xuXHRcdHRoaXMuc3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVJZDtcblx0XHR0aGlzLnNjaGVtYUlkID0gc2NoZW1hSWQ7XG5cdFx0dGhpcy5mb3JtYXRpb25Db21tYW5kSW52b2tlciA9IGZvcm1hdGlvbkNvbW1hbmREaXNwYXRjaGVyO1xuXHRcdHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlID0gZm9ybWF0aW9uV2FyZWhvdXNlO1xuXHRcdHRoaXMuc291cmNlQ29tbWFuZEludm9rZXIgPSBzb3VyY2VDb21tYW5kSW52b2tlcjtcblx0XHR0aGlzLnNlYXJjaENvbW1hbmRJbnZva2VyID0gc2VhcmNoQ29tbWFuZEludm9rZXI7XG5cdFx0dGhpcy5ncmlkVGhlbWVDb21tYW5kSW52b2tlciA9IGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyO1xuXHR9XG5cblx0cHJvdmlkZSgpOiBHdWlHcmlkQXBpIHtcblxuXHRcdGNvbnN0IHN0cnVjdHVyZUlkID0gdGhpcy5zdHJ1Y3R1cmVJZCxcblx0XHRcdHNjaGVtYUlkID0gdGhpcy5zY2hlbWFJZCxcblx0XHRcdGZjZCA9IHRoaXMuZm9ybWF0aW9uQ29tbWFuZEludm9rZXIsXG5cdFx0XHRmdyA9IHRoaXMuZm9ybWF0aW9uV2FyZWhvdXNlLFxuXHRcdFx0c2NkID0gdGhpcy5zb3VyY2VDb21tYW5kSW52b2tlcixcblx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyID0gdGhpcy5zZWFyY2hDb21tYW5kSW52b2tlcixcblx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyID0gdGhpcy5ncmlkVGhlbWVDb21tYW5kSW52b2tlcjtcblxuXHRcdHJldHVybiB7XG5cblx0XHRcdHNldFNvdXJjZShzb3VyY2U6IEFycmF5PGFueT4pOiB2b2lkIHtcblx0XHRcdFx0c2NkLnNldE9yaWdpbihzb3VyY2UsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNob3dMb2FkaW5nKCk6IHZvaWQge1xuXHRcdFx0XHRzY2Quc2V0TG9hZGluZyh0cnVlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRoaWRlTG9hZGluZygpOiB2b2lkIHtcblx0XHRcdFx0c2NkLnNldExvYWRpbmcoZmFsc2UsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRlbGV0ZVJvdyhyb3c6IEd1aVNlbGVjdGVkUm93KTogdm9pZCB7XG5cdFx0XHRcdHNjZC5kZWxldGVSb3cobmV3IFNlbGVjdGVkUm93KHJvdy5kYXRhLCByb3cuaW5kZXgsIHJvdy5pdGVtSWQpLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRkZWxldGVSb3dzKHJvd3M6IEFycmF5PEd1aVNlbGVjdGVkUm93Pik6IHZvaWQge1xuXHRcdFx0XHRjb25zdCBzZWxlY3RlZFJvd3MgPSByb3dzLm1hcCgocm93OiBHdWlTZWxlY3RlZFJvdykgPT4gbmV3IFNlbGVjdGVkUm93KHJvdy5kYXRhLCByb3cuaW5kZXgsIHJvdy5pdGVtSWQpKTtcblxuXHRcdFx0XHRzY2QuZGVsZXRlUm93cyhzZWxlY3RlZFJvd3MsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGRlbGV0ZVNlbGVjdGVkUm93cygpOiB2b2lkIHtcblx0XHRcdFx0Ly8gdGhpcy5zb3VyY2VDb21tYW5kRGlzcGF0Y2hlci5cblx0XHRcdH0sXG5cblx0XHRcdGdldFNlbGVjdGVkUm93cygpOiBBcnJheTxHdWlTZWxlY3RlZFJvdz4ge1xuXG5cdFx0XHRcdGNvbnN0IHJvd3MgPSBmdy5nZXRTZWxlY3RlZFJvd3Moc3RydWN0dXJlSWQpO1xuXG5cdFx0XHRcdHJldHVybiByb3dzLm1hcCgocjogU2VsZWN0ZWRSb3cpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4geyBkYXRhOiByLmdldERhdGEoKSwgaW5kZXg6IHIuZ2V0SW5kZXgoKSwgaXRlbUlkOiByLmdldEl0ZW1JZCgpIH07XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSxcblxuXHRcdFx0c2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdFx0XHRmY2Quc2VsZWN0QWxsKHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHVuc2VsZWN0QWxsKCk6IHZvaWQge1xuXHRcdFx0XHRmY2QudW5zZWxlY3RBbGwoc3RydWN0dXJlSWQpO1xuXHRcdFx0fSxcblxuXHRcdFx0c2VhcmNoKHBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0XHRcdHNlYXJjaENvbW1hbmRJbnZva2VyLnNlYXJjaChwaHJhc2UsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdGNsZWFyU2VhcmNoUGhyYXNlKCk6IHZvaWQge1xuXHRcdFx0XHRzZWFyY2hDb21tYW5kSW52b2tlci5zZWFyY2goJycsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFRoZW1lKHRoZW1lOiBzdHJpbmcgfCBHdWlUaGVtZSk6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRUaGVtZSh0aGVtZSwgc2NoZW1hSWQsIHN0cnVjdHVyZUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFZlcnRpY2FsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLnNldFZlcnRpY2FsR3JpZChlbmFibGVkLCBzY2hlbWFJZCk7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXRIb3Jpem9udGFsR3JpZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0XHRcdGdyaWRUaGVtZUNvbW1hbmRJbnZva2VyLnNldEhvcml6b250YWxHcmlkKGVuYWJsZWQsIHNjaGVtYUlkKTtcblx0XHRcdH0sXG5cblx0XHRcdHNldFJvd0NvbG9yaW5nKHJvd0NvbG9yaW5nOiBzdHJpbmcgfCBHdWlSb3dDb2xvcmluZyk6IHZvaWQge1xuXHRcdFx0XHRncmlkVGhlbWVDb21tYW5kSW52b2tlci5zZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZywgc2NoZW1hSWQpO1xuXHRcdFx0fVxuXG5cdFx0fTtcblxuXHR9XG5cblxufVxuIl19