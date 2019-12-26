/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class FormationAggregate {
    /**
     * In the future this class can be responsible for managing:
     * - expanded / collapsed nodes
     * - sorting?
     * - filtering?
     * @param {?} selectedRows
     */
    constructor(selectedRows) {
        this.selectedRows = selectedRows;
    }
    /**
     * @return {?}
     */
    getSelectedRows() {
        return this.selectedRows;
    }
    /**
     * @param {?} selectedRow
     * @return {?}
     */
    toggleRow(selectedRow) {
        if (this.selectedRows.length > 0) {
            if (this.selectedRows[0] === selectedRow) {
                this.selectedRows = [];
                return;
            }
        }
        this.selectedRows = [selectedRow];
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationAggregate.prototype.selectedRows;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLWFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vZm9ybWF0aW9uL2NvbW1hbmQvZm9ybWF0aW9uLWFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7Ozs7SUFTOUIsWUFBb0IsWUFBMkI7UUFBM0IsaUJBQVksR0FBWixZQUFZLENBQWU7SUFDL0MsQ0FBQzs7OztJQUVELGVBQWU7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsV0FBbUI7UUFFNUIsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFFakMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsRUFBRTtnQkFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLE9BQU87YUFDUDtTQUNEO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Q0FDRDs7Ozs7O0lBbkJZLDBDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBGb3JtYXRpb25BZ2dyZWdhdGUge1xuXG5cdC8qKlxuXHQgKiBJbiB0aGUgZnV0dXJlIHRoaXMgY2xhc3MgY2FuIGJlIHJlc3BvbnNpYmxlIGZvciBtYW5hZ2luZzpcblx0ICogLSBleHBhbmRlZCAvIGNvbGxhcHNlZCBub2Rlc1xuXHQgKiAtIHNvcnRpbmc/XG5cdCAqIC0gZmlsdGVyaW5nP1xuXHQgKi9cblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHNlbGVjdGVkUm93czogQXJyYXk8c3RyaW5nPikge1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRSb3dzKCk6IEFycmF5PHN0cmluZz4ge1xuXHRcdHJldHVybiB0aGlzLnNlbGVjdGVkUm93cztcblx0fVxuXG5cdHRvZ2dsZVJvdyhzZWxlY3RlZFJvdzogc3RyaW5nKTogdm9pZCB7XG5cblx0XHRpZiAodGhpcy5zZWxlY3RlZFJvd3MubGVuZ3RoID4gMCkge1xuXG5cdFx0XHRpZiAodGhpcy5zZWxlY3RlZFJvd3NbMF0gPT09IHNlbGVjdGVkUm93KSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWRSb3dzID0gW107XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLnNlbGVjdGVkUm93cyA9IFtzZWxlY3RlZFJvd107XG5cdH1cbn1cbiJdfQ==