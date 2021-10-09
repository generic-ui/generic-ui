/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @abstract
 */
export class SourceCommandInvoker {
    /**
     * @protected
     */
    constructor() {
    }
}
SourceCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceCommandInvoker.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2UuY29tbWFuZC1pbnZva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUzNDLE1BQU0sT0FBZ0Isb0JBQW9COzs7O0lBRXpDO0lBQ0EsQ0FBQzs7O1lBSkQsVUFBVTs7Ozs7Ozs7Ozs7SUFNViw2RUFBc0U7Ozs7Ozs7SUFFdEUsZ0ZBQXNFOzs7Ozs7O0lBRXRFLDZFQUF5Rjs7Ozs7Ozs7O0lBRXpGLDBHQUE0Rzs7Ozs7OztJQUU1RywyRUFBcUU7Ozs7Ozs7SUFFckUsNkVBQThFOzs7Ozs7O0lBRTlFLHFGQUEwRTs7Ozs7OztJQUUxRSxtRkFBMEU7Ozs7Ozs7SUFFMUUsNEZBQXdGOzs7Ozs7O0lBRXhGLDhGQUE0RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi4vZG9tYWluL29yaWdpbi9lZGl0L3N0cnVjdHVyZS5lZGl0LXNvdXJjZS1pdGVtLnBhcmFtcyc7XG5pbXBvcnQgeyBTZWxlY3RlZFJvdyB9IGZyb20gJy4vZm9ybWF0aW9uL3NlbGVjdGVkLXJvdyc7XG5pbXBvcnQgeyBPcmlnaW5JZCB9IGZyb20gJy4uL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWlkJztcbmltcG9ydCB7IENvbW1hbmRJbnZva2VyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU291cmNlQ29tbWFuZEludm9rZXIgaW1wbGVtZW50cyBDb21tYW5kSW52b2tlciB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0YWJzdHJhY3Qgc2V0T3JpZ2luKGl0ZW1zOiBBcnJheTxhbnk+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldExvYWRpbmcoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBlZGl0SXRlbShwYXJhbXM6IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGVkaXRJdGVtQnlJbmRleChpdGVtSW5kZXg6IG51bWJlciwgZmllbGRJbmRleDogbnVtYmVyLCB2YWx1ZTogYW55LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGRlbGV0ZVJvdyhyb3c6IFNlbGVjdGVkUm93LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGRlbGV0ZVJvd3Mocm93czogQXJyYXk8U2VsZWN0ZWRSb3c+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGRlbGV0ZUl0ZW1CeUluZGV4KGluZGV4OiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgZGVsZXRlSXRlbUJ5SWQoaXRlbUlkOiBPcmlnaW5JZCwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBkZWxldGVNYW55SXRlbXNCeUluZGV4KGluZGV4ZXM6IEFycmF5PG51bWJlcj4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgZGVsZXRlTWFueUl0ZW1zQnlJdGVtSWRzKGl0ZW1JZHM6IEFycmF5PE9yaWdpbklkPiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxufVxuIl19