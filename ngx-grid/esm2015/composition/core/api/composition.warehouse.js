/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @abstract
 */
export class CompositionWarehouse {
    /**
     * @protected
     */
    constructor() {
    }
}
CompositionWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CompositionWarehouse.ctorParameters = () => [];
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
    /**
     * @abstract
     * @param {?} columnId
     * @param {?} compositionId
     * @return {?}
     */
    CompositionWarehouse.prototype.onHighlightedColumn = function (columnId, compositionId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ud2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFhM0MsTUFBTSxPQUFnQixvQkFBb0I7Ozs7SUFFekM7SUFDQSxDQUFDOzs7WUFKRCxVQUFVOzs7Ozs7Ozs7O0lBTVYsc0VBQXlFOzs7Ozs7SUFFekUsK0VBQWtGOzs7Ozs7SUFFbEYsbUZBQXFHOzs7Ozs7SUFFckcsOEVBQWlIOzs7Ozs7SUFFakgsMkVBQThHOzs7Ozs7O0lBRTlHLG1GQUFrRzs7Ozs7O0lBRWxHLGdGQUFvSDs7Ozs7O0lBRXBILDRFQUFnRjs7Ozs7O0lBRWhGLHVFQUFtRjs7Ozs7OztJQUVuRiw0RkFBMEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIFdhcmVob3VzZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDZWxsVGVtcGxhdGVXaXRoQ29udGV4dCB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWNvbnRleHQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yIH0gZnJvbSAnLi4vZG9tYWluLXJlYWQvZGVmaW5pdGlvbi9jZWxsLXRlbXBsYXRlLXdpdGgtYWNjZXNzb3InO1xuaW1wb3J0IHsgU29ydE9yZGVyIH0gZnJvbSAnLi4vZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBHcm91cENvbGxlY3Rpb24gfSBmcm9tICcuL2dyb3VwL2dyb3VwLmNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuL2NvbHVtbi9jb2x1bW4uaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21wb3NpdGlvbldhcmVob3VzZSBpbXBsZW1lbnRzIFdhcmVob3VzZSB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0YWJzdHJhY3Qgb25XaWR0aChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG5cdGFic3RyYWN0IG9uQ29udGFpbmVyV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPjtcblxuXHRhYnN0cmFjdCBvbldpZHRoRm9yRWFjaENvbHVtbihjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PG51bWJlcj4+O1xuXG5cdGFic3RyYWN0IG9uSGVhZGVyQ29sdW1ucyhjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0Pj47XG5cblx0YWJzdHJhY3Qgb25BbGxDb2x1bW5zKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8Q2VsbFRlbXBsYXRlV2l0aENvbnRleHQ+PjtcblxuXHRhYnN0cmFjdCBvblNvcnRPcmRlcihmaWVsZElkOiBGaWVsZElkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxTb3J0T3JkZXI+O1xuXG5cdGFic3RyYWN0IG9uVGVtcGxhdGVDb2x1bW5zKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8Q2VsbFRlbXBsYXRlV2l0aEFjY2Vzc29yPj47XG5cblx0YWJzdHJhY3Qgb25SZXNpemVXaWR0aChjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuXHRhYnN0cmFjdCBvbkdyb3Vwcyhjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxHcm91cENvbGxlY3Rpb24+O1xuXG5cdGFic3RyYWN0IG9uSGlnaGxpZ2h0ZWRDb2x1bW4oY29sdW1uSWQ6IENvbHVtbklkLCBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuXHQvLyBhYnN0cmFjdCBvbkhpZ2hsaWdodGVkQ29sdW1ucyhjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKVxuXG59XG4iXX0=