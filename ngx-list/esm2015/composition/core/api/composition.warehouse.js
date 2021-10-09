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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24ud2FyZWhvdXNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2FwaS9jb21wb3NpdGlvbi53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFZM0MsTUFBTSxPQUFnQixvQkFBb0I7Ozs7SUFFekM7SUFDQSxDQUFDOzs7WUFKRCxVQUFVOzs7Ozs7Ozs7O0lBTVYsc0VBQXlFOzs7Ozs7SUFFekUsK0VBQWtGOzs7Ozs7SUFFbEYsbUZBQXFHOzs7Ozs7SUFFckcsOEVBQWlIOzs7Ozs7SUFFakgsMkVBQThHOzs7Ozs7O0lBRTlHLG1GQUFrRzs7Ozs7O0lBRWxHLGdGQUFvSDs7Ozs7O0lBRXBILDRFQUFnRjs7Ozs7O0lBRWhGLHVFQUFtRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgV2FyZWhvdXNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ2VsbFRlbXBsYXRlV2l0aENvbnRleHQgfSBmcm9tICcuLi9kb21haW4tcmVhZC9kZWZpbml0aW9uL2NlbGwtdGVtcGxhdGUtd2l0aC1jb250ZXh0JztcbmltcG9ydCB7IENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3NvciB9IGZyb20gJy4uL2RvbWFpbi1yZWFkL2RlZmluaXRpb24vY2VsbC10ZW1wbGF0ZS13aXRoLWFjY2Vzc29yJztcbmltcG9ydCB7IFNvcnRPcmRlciB9IGZyb20gJy4uL2RvbWFpbi9jb2x1bW4vc29ydC9zb3J0LW9yZGVyJztcbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUvZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgR3JvdXBDb2xsZWN0aW9uIH0gZnJvbSAnLi9ncm91cC9ncm91cC5jb2xsZWN0aW9uJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tcG9zaXRpb25XYXJlaG91c2UgaW1wbGVtZW50cyBXYXJlaG91c2Uge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdGFic3RyYWN0IG9uV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPjtcblxuXHRhYnN0cmFjdCBvbkNvbnRhaW5lcldpZHRoKGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj47XG5cblx0YWJzdHJhY3Qgb25XaWR0aEZvckVhY2hDb2x1bW4oY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxudW1iZXI+PjtcblxuXHRhYnN0cmFjdCBvbkhlYWRlckNvbHVtbnMoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxDZWxsVGVtcGxhdGVXaXRoQ29udGV4dD4+O1xuXG5cdGFic3RyYWN0IG9uQWxsQ29sdW1ucyhjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PENlbGxUZW1wbGF0ZVdpdGhDb250ZXh0Pj47XG5cblx0YWJzdHJhY3Qgb25Tb3J0T3JkZXIoZmllbGRJZDogRmllbGRJZCwgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8U29ydE9yZGVyPjtcblxuXHRhYnN0cmFjdCBvblRlbXBsYXRlQ29sdW1ucyhjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkKTogSGVybWVzT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PENlbGxUZW1wbGF0ZVdpdGhBY2Nlc3Nvcj4+O1xuXG5cdGFic3RyYWN0IG9uUmVzaXplV2lkdGgoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj47XG5cblx0YWJzdHJhY3Qgb25Hcm91cHMoY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCk6IEhlcm1lc09ic2VydmFibGU8R3JvdXBDb2xsZWN0aW9uPjtcblxufVxuIl19