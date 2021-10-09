/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @abstract
 */
var SourceCommandInvoker = /** @class */ (function () {
    function SourceCommandInvoker() {
    }
    SourceCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceCommandInvoker.ctorParameters = function () { return []; };
    return SourceCommandInvoker;
}());
export { SourceCommandInvoker };
if (false) {
    /**
     * @abstract
     * @param {?} items
     * @param {?} structureId
     * @return {?}
     */
    SourceCommandInvoker.prototype.setOrigin = function (items, structureId) { };
    /**
     * @abstract
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    SourceCommandInvoker.prototype.setLoading = function (enabled, structureId) { };
    /**
     * @abstract
     * @param {?} params
     * @param {?} structureId
     * @return {?}
     */
    SourceCommandInvoker.prototype.editItem = function (params, structureId) { };
    /**
     * @abstract
     * @param {?} itemIndex
     * @param {?} fieldIndex
     * @param {?} value
     * @param {?} structureId
     * @return {?}
     */
    SourceCommandInvoker.prototype.editItemByIndex = function (itemIndex, fieldIndex, value, structureId) { };
    /**
     * @abstract
     * @param {?} row
     * @param {?} structureId
     * @return {?}
     */
    SourceCommandInvoker.prototype.deleteRow = function (row, structureId) { };
    /**
     * @abstract
     * @param {?} rows
     * @param {?} structureId
     * @return {?}
     */
    SourceCommandInvoker.prototype.deleteRows = function (rows, structureId) { };
    /**
     * @abstract
     * @param {?} index
     * @param {?} structureId
     * @return {?}
     */
    SourceCommandInvoker.prototype.deleteItemByIndex = function (index, structureId) { };
    /**
     * @abstract
     * @param {?} itemId
     * @param {?} structureId
     * @return {?}
     */
    SourceCommandInvoker.prototype.deleteItemById = function (itemId, structureId) { };
    /**
     * @abstract
     * @param {?} indexes
     * @param {?} structureId
     * @return {?}
     */
    SourceCommandInvoker.prototype.deleteManyItemsByIndex = function (indexes, structureId) { };
    /**
     * @abstract
     * @param {?} itemIds
     * @param {?} structureId
     * @return {?}
     */
    SourceCommandInvoker.prototype.deleteManyItemsByItemIds = function (itemIds, structureId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUTNDO0lBR0M7SUFDQSxDQUFDOztnQkFKRCxVQUFVOzs7O0lBMEJYLDJCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0F6QnFCLG9CQUFvQjs7Ozs7Ozs7SUFLekMsNkVBQXNFOzs7Ozs7O0lBRXRFLGdGQUFzRTs7Ozs7OztJQUV0RSw2RUFBeUY7Ozs7Ozs7OztJQUV6RiwwR0FBNEc7Ozs7Ozs7SUFFNUcsMkVBQXFFOzs7Ozs7O0lBRXJFLDZFQUE4RTs7Ozs7OztJQUU5RSxxRkFBMEU7Ozs7Ozs7SUFFMUUsbUZBQTBFOzs7Ozs7O0lBRTFFLDRGQUF3Rjs7Ozs7OztJQUV4Riw4RkFBNEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyB9IGZyb20gJy4uL2RvbWFpbi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuaW1wb3J0IHsgU2VsZWN0ZWRSb3cgfSBmcm9tICcuL2Zvcm1hdGlvbi9zZWxlY3RlZC1yb3cnO1xuaW1wb3J0IHsgT3JpZ2luSWQgfSBmcm9tICcuLi9kb21haW4vb3JpZ2luL29yaWdpbi1pZCc7XG5pbXBvcnQgeyBDb21tYW5kSW52b2tlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNvdXJjZUNvbW1hbmRJbnZva2VyIGltcGxlbWVudHMgQ29tbWFuZEludm9rZXIge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdGFic3RyYWN0IHNldE9yaWdpbihpdGVtczogQXJyYXk8YW55Piwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRMb2FkaW5nKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgZWRpdEl0ZW0ocGFyYW1zOiBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBlZGl0SXRlbUJ5SW5kZXgoaXRlbUluZGV4OiBudW1iZXIsIGZpZWxkSW5kZXg6IG51bWJlciwgdmFsdWU6IGFueSwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBkZWxldGVSb3cocm93OiBTZWxlY3RlZFJvdywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBkZWxldGVSb3dzKHJvd3M6IEFycmF5PFNlbGVjdGVkUm93Piwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBkZWxldGVJdGVtQnlJbmRleChpbmRleDogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGRlbGV0ZUl0ZW1CeUlkKGl0ZW1JZDogT3JpZ2luSWQsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgZGVsZXRlTWFueUl0ZW1zQnlJbmRleChpbmRleGVzOiBBcnJheTxudW1iZXI+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGRlbGV0ZU1hbnlJdGVtc0J5SXRlbUlkcyhpdGVtSWRzOiBBcnJheTxPcmlnaW5JZD4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cbn1cbiJdfQ==