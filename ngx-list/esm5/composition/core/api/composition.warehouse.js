/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @abstract
 */
var CompositionWarehouse = /** @class */ (function () {
    function CompositionWarehouse() {
    }
    CompositionWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CompositionWarehouse.ctorParameters = function () { return []; };
    return CompositionWarehouse;
}());
export { CompositionWarehouse };
if (false) {
    /**
     * @abstract
     * @param {?} compositionId
     * @return {?}
     */
    CompositionWarehouse.prototype.onWidth = function (compositionId) { };
    /**
     * @abstract
     * @param {?} compositionId
     * @return {?}
     */
    CompositionWarehouse.prototype.onContainerWidth = function (compositionId) { };
    /**
     * @abstract
     * @param {?} compositionId
     * @return {?}
     */
    CompositionWarehouse.prototype.onWidthForEachColumn = function (compositionId) { };
    /**
     * @abstract
     * @param {?} compositionId
     * @return {?}
     */
    CompositionWarehouse.prototype.onHeaderColumns = function (compositionId) { };
    /**
     * @abstract
     * @param {?} compositionId
     * @return {?}
     */
    CompositionWarehouse.prototype.onAllColumns = function (compositionId) { };
    /**
     * @abstract
     * @param {?} fieldId
     * @param {?} compositionId
     * @return {?}
     */
    CompositionWarehouse.prototype.onSortOrder = function (fieldId, compositionId) { };
    /**
     * @abstract
     * @param {?} compositionId
     * @return {?}
     */
    CompositionWarehouse.prototype.onTemplateColumns = function (compositionId) { };
    /**
     * @abstract
     * @param {?} compositionId
     * @return {?}
     */
    CompositionWarehouse.prototype.onResizeWidth = function (compositionId) { };
    /**
     * @abstract
     * @param {?} compositionId
     * @return {?}
     */
    CompositionWarehouse.prototype.onGroups = function (compositionId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ud2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFXM0M7SUFHQztJQUNBLENBQUM7O2dCQUpELFVBQVU7Ozs7SUF3QlgsMkJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXZCcUIsb0JBQW9COzs7Ozs7O0lBS3pDLHNFQUF5RTs7Ozs7O0lBRXpFLCtFQUFrRjs7Ozs7O0lBRWxGLG1GQUFxRzs7Ozs7O0lBRXJHLDhFQUFpSDs7Ozs7O0lBRWpILDJFQUE4Rzs7Ozs7OztJQUU5RyxtRkFBa0c7Ozs7OztJQUVsRyxnRkFBb0g7Ozs7OztJQUVwSCw0RUFBZ0Y7Ozs7OztJQUVoRix1RUFBbUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIFdhcmVob3VzZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vZG9tYWluL2NvbXBvc2l0aW9uLmlkJztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0IH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtY29udGV4dCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3IgfSBmcm9tICcuLi9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1hY2Nlc3Nvcic7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi9kb21haW4vY29sdW1uL3NvcnQvc29ydC1vcmRlcic7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IEdyb3VwQ29sbGVjdGlvbiB9IGZyb20gJy4vZ3JvdXAvZ3JvdXAuY29sbGVjdGlvbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbXBvc2l0aW9uV2FyZWhvdXNlIGltcGxlbWVudHMgV2FyZWhvdXNlIHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRhYnN0cmFjdCBvbldpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj47XG5cblx0YWJzdHJhY3Qgb25Db250YWluZXJXaWR0aChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG5cdGFic3RyYWN0IG9uV2lkdGhGb3JFYWNoQ29sdW1uKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8bnVtYmVyPj47XG5cblx0YWJzdHJhY3Qgb25IZWFkZXJDb2x1bW5zKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+PjtcblxuXHRhYnN0cmFjdCBvbkFsbENvbHVtbnMoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4+O1xuXG5cdGFic3RyYWN0IG9uU29ydE9yZGVyKGZpZWxkSWQ6IEZpZWxkSWQsIGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFNvcnRPcmRlcj47XG5cblx0YWJzdHJhY3Qgb25UZW1wbGF0ZUNvbHVtbnMoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxDZWxsVGVtcGxhdGVXaXRoQWNjZXNzb3I+PjtcblxuXHRhYnN0cmFjdCBvblJlc2l6ZVdpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG5cdGFic3RyYWN0IG9uR3JvdXBzKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPEdyb3VwQ29sbGVjdGlvbj47XG5cbn1cbiJdfQ==