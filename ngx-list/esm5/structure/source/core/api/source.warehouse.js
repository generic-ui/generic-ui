/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @abstract
 */
var SourceWarehouse = /** @class */ (function () {
    function SourceWarehouse() {
    }
    SourceWarehouse.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceWarehouse.ctorParameters = function () { return []; };
    return SourceWarehouse;
}());
export { SourceWarehouse };
if (false) {
    /**
     * @deprecated
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    SourceWarehouse.prototype.getEntities = function (structureId) { };
    /**
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    SourceWarehouse.prototype.onEntities = function (structureId) { };
    /**
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    SourceWarehouse.prototype.onEntitiesSize = function (structureId) { };
    /**
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    SourceWarehouse.prototype.onceEntities = function (structureId) { };
    /**
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    SourceWarehouse.prototype.onOriginSize = function (structureId) { };
    /**
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    SourceWarehouse.prototype.onLoading = function (structureId) { };
    /**
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    SourceWarehouse.prototype.onPreparedEntities = function (structureId) { };
    /**
     * @deprecated
     * @abstract
     * @param {?} structureId
     * @return {?}
     */
    SourceWarehouse.prototype.getPreparedEntities = function (structureId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2Uud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBTzNDO0lBR0M7SUFDQSxDQUFDOztnQkFKRCxVQUFVOzs7O0lBNEJYLHNCQUFDO0NBQUEsQUE1QkQsSUE0QkM7U0EzQnFCLGVBQWU7Ozs7Ozs7O0lBUXBDLG1FQUEwRTs7Ozs7O0lBRTFFLGtFQUEyRjs7Ozs7O0lBRTNGLHNFQUE0RTs7Ozs7O0lBRTVFLG9FQUE2Rjs7Ozs7O0lBRTdGLG9FQUEwRTs7Ozs7O0lBRTFFLGlFQUF3RTs7Ozs7O0lBRXhFLDBFQUF5Rzs7Ozs7OztJQUt6RywyRUFBd0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBJdGVtRW50aXR5IH0gZnJvbSAnLi4vZG9tYWluL2NvcmUvaXRlbS9pdGVtLmVudGl0eSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSwgV2FyZWhvdXNlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU291cmNlV2FyZWhvdXNlIGltcGxlbWVudHMgV2FyZWhvdXNlIHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHQvKipcblx0ICogQGRlcHJlY2F0ZWRcblx0ICovXG5cdGFic3RyYWN0IGdldEVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFJlYWRvbmx5QXJyYXk8SXRlbUVudGl0eT47XG5cblx0YWJzdHJhY3Qgb25FbnRpdGllcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8SXRlbUVudGl0eT4+O1xuXG5cdGFic3RyYWN0IG9uRW50aXRpZXNTaXplKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8bnVtYmVyPjtcblxuXHRhYnN0cmFjdCBvbmNlRW50aXRpZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxSZWFkb25seUFycmF5PEl0ZW1FbnRpdHk+PjtcblxuXHRhYnN0cmFjdCBvbk9yaWdpblNpemUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG5cdGFic3RyYWN0IG9uTG9hZGluZyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG5cdGFic3RyYWN0IG9uUHJlcGFyZWRFbnRpdGllcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8T3JpZ2luSXRlbUVudGl0eT4+O1xuXG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0YWJzdHJhY3QgZ2V0UHJlcGFyZWRFbnRpdGllcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBSZWFkb25seUFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+O1xuXG59XG4iXX0=