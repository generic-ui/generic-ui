/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @abstract
 */
var PagingCommandInvoker = /** @class */ (function () {
    function PagingCommandInvoker() {
    }
    PagingCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PagingCommandInvoker.ctorParameters = function () { return []; };
    return PagingCommandInvoker;
}());
export { PagingCommandInvoker };
if (false) {
    /**
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    PagingCommandInvoker.prototype.enable = function (structureId) { };
    /**
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    PagingCommandInvoker.prototype.disable = function (structureId) { };
    /**
     * @abstract
     * @param {?} paging
     * @param {?} structureId
     * @return {?}
     */
    PagingCommandInvoker.prototype.setPaging = function (paging, structureId) { };
    /**
     * @abstract
     * @param {?} pageSize
     * @param {?} structureId
     * @return {?}
     */
    PagingCommandInvoker.prototype.changePageSize = function (pageSize, structureId) { };
    /**
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    PagingCommandInvoker.prototype.nextPage = function (structureId) { };
    /**
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    PagingCommandInvoker.prototype.prevPage = function (structureId) { };
    /**
     * @abstract
     * @param {?} pageNumber
     * @param {?} currentPage
     * @param {?} structureId
     * @return {?}
     */
    PagingCommandInvoker.prototype.goToPage = function (pageNumber, currentPage, structureId) { };
    /**
     * @abstract
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    PagingCommandInvoker.prototype.changePagerTop = function (enabled, structureId) { };
    /**
     * @abstract
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    PagingCommandInvoker.prototype.changePagerBottom = function (enabled, structureId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTzNDO0lBR0M7SUFDQSxDQUFDOztnQkFKRCxVQUFVOzs7O0lBdUJYLDJCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F0QnFCLG9CQUFvQjs7Ozs7OztJQUt6QyxtRUFBZ0Q7Ozs7OztJQUVoRCxvRUFBaUQ7Ozs7Ozs7SUFFakQsOEVBQXlFOzs7Ozs7O0lBRXpFLHFGQUEwRTs7Ozs7O0lBRTFFLHFFQUFrRDs7Ozs7O0lBRWxELHFFQUFrRDs7Ozs7Ozs7SUFFbEQsOEZBQTJGOzs7Ozs7O0lBRTNGLG9GQUEwRTs7Ozs7OztJQUUxRSx1RkFBNkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRJbnZva2VyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFBhZ2luZ0NvbmZpZyB9IGZyb20gJy4vcGFnaW5nLWNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBhZ2luZ0NvbW1hbmRJbnZva2VyIGltcGxlbWVudHMgQ29tbWFuZEludm9rZXIge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdGFic3RyYWN0IGVuYWJsZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGRpc2FibGUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRQYWdpbmcocGFnaW5nOiBQYWdpbmdDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgY2hhbmdlUGFnZVNpemUocGFnZVNpemU6IG51bWJlciwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBuZXh0UGFnZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHByZXZQYWdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgZ29Ub1BhZ2UocGFnZU51bWJlcjogbnVtYmVyLCBjdXJyZW50UGFnZTogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IGNoYW5nZVBhZ2VyVG9wKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgY2hhbmdlUGFnZXJCb3R0b20oZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcbn1cbiJdfQ==