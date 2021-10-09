/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @abstract
 */
export class PagingCommandInvoker {
    /**
     * @protected
     */
    constructor() {
    }
}
PagingCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PagingCommandInvoker.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5nLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9jb3JlL2FwaS9wYWdpbmcuY29tbWFuZC1pbnZva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUTNDLE1BQU0sT0FBZ0Isb0JBQW9COzs7O0lBRXpDO0lBQ0EsQ0FBQzs7O1lBSkQsVUFBVTs7Ozs7Ozs7OztJQU1WLG1FQUFnRDs7Ozs7O0lBRWhELG9FQUFpRDs7Ozs7OztJQUVqRCw4RUFBeUU7Ozs7Ozs7SUFFekUscUZBQTBFOzs7Ozs7SUFFMUUscUVBQWtEOzs7Ozs7SUFFbEQscUVBQWtEOzs7Ozs7OztJQUVsRCw4RkFBMkY7Ozs7Ozs7SUFFM0Ysb0ZBQTBFOzs7Ozs7O0lBRTFFLHVGQUE2RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEludm9rZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi9wYWdpbmctY29uZmlnJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGFnaW5nQ29tbWFuZEludm9rZXIgaW1wbGVtZW50cyBDb21tYW5kSW52b2tlciB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0YWJzdHJhY3QgZW5hYmxlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgZGlzYWJsZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldFBhZ2luZyhwYWdpbmc6IFBhZ2luZ0NvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBjaGFuZ2VQYWdlU2l6ZShwYWdlU2l6ZTogbnVtYmVyLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IG5leHRQYWdlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgcHJldlBhZ2Uoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBnb1RvUGFnZShwYWdlTnVtYmVyOiBudW1iZXIsIGN1cnJlbnRQYWdlOiBudW1iZXIsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3QgY2hhbmdlUGFnZXJUb3AoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBjaGFuZ2VQYWdlckJvdHRvbShlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkO1xufVxuIl19