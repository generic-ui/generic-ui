/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FormationAggregate = /** @class */ (function () {
    function FormationAggregate(selectedRows) {
        this.selectedRows = selectedRows;
    }
    /**
     * In the future this class can be responsible for managing:
     * - expanded / collapsed nodes
     * - sorting?
     * - filtering?
     */
    /**
     * In the future this class can be responsible for managing:
     * - expanded / collapsed nodes
     * - sorting?
     * - filtering?
     * @return {?}
     */
    FormationAggregate.default = /**
     * In the future this class can be responsible for managing:
     * - expanded / collapsed nodes
     * - sorting?
     * - filtering?
     * @return {?}
     */
    function () {
        return new FormationAggregate([]);
    };
    /**
     * @return {?}
     */
    FormationAggregate.prototype.getSelectedRows = /**
     * @return {?}
     */
    function () {
        return this.selectedRows;
    };
    /**
     * @param {?} selectedRow
     * @return {?}
     */
    FormationAggregate.prototype.toggleRow = /**
     * @param {?} selectedRow
     * @return {?}
     */
    function (selectedRow) {
        if (this.selectedRows.length > 0) {
            if (this.selectedRows[0] === selectedRow) {
                this.selectedRows = [];
                return;
            }
        }
        this.selectedRows = [selectedRow];
    };
    return FormationAggregate;
}());
export { FormationAggregate };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormationAggregate.prototype.selectedRows;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0aW9uLWFnZ3JlZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vZm9ybWF0aW9uL2NvbW1hbmQvZm9ybWF0aW9uLWFnZ3JlZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUE7SUFhQyw0QkFBb0IsWUFBMkI7UUFBM0IsaUJBQVksR0FBWixZQUFZLENBQWU7SUFDL0MsQ0FBQztJQVpEOzs7OztPQUtHOzs7Ozs7OztJQUVJLDBCQUFPOzs7Ozs7O0lBQWQ7UUFDQyxPQUFPLElBQUksa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7OztJQUtELDRDQUFlOzs7SUFBZjtRQUNDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELHNDQUFTOzs7O0lBQVQsVUFBVSxXQUFtQjtRQUU1QixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUVqQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssV0FBVyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztnQkFDdkIsT0FBTzthQUNQO1NBQ0Q7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNGLHlCQUFDO0FBQUQsQ0FBQyxBQWhDRCxJQWdDQzs7Ozs7OztJQW5CWSwwQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgRm9ybWF0aW9uQWdncmVnYXRlIHtcblxuXHQvKipcblx0ICogSW4gdGhlIGZ1dHVyZSB0aGlzIGNsYXNzIGNhbiBiZSByZXNwb25zaWJsZSBmb3IgbWFuYWdpbmc6XG5cdCAqIC0gZXhwYW5kZWQgLyBjb2xsYXBzZWQgbm9kZXNcblx0ICogLSBzb3J0aW5nP1xuXHQgKiAtIGZpbHRlcmluZz9cblx0ICovXG5cblx0c3RhdGljIGRlZmF1bHQoKSB7XG5cdFx0cmV0dXJuIG5ldyBGb3JtYXRpb25BZ2dyZWdhdGUoW10pO1xuXHR9XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzZWxlY3RlZFJvd3M6IEFycmF5PHN0cmluZz4pIHtcblx0fVxuXG5cdGdldFNlbGVjdGVkUm93cygpOiBBcnJheTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZFJvd3M7XG5cdH1cblxuXHR0b2dnbGVSb3coc2VsZWN0ZWRSb3c6IHN0cmluZyk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRSb3dzLmxlbmd0aCA+IDApIHtcblxuXHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRSb3dzWzBdID09PSBzZWxlY3RlZFJvdykge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkUm93cyA9IFtdO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy5zZWxlY3RlZFJvd3MgPSBbc2VsZWN0ZWRSb3ddO1xuXHR9XG59XG4iXX0=