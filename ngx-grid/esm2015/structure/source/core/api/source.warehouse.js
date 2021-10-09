/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @abstract
 */
export class SourceWarehouse {
    /**
     * @protected
     */
    constructor() {
    }
}
SourceWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SourceWarehouse.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2FwaS9zb3VyY2Uud2FyZWhvdXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUTNDLE1BQU0sT0FBZ0IsZUFBZTs7OztJQUVwQztJQUNBLENBQUM7OztZQUpELFVBQVU7Ozs7Ozs7Ozs7O0lBU1YsbUVBQTBFOzs7Ozs7SUFFMUUsa0VBQTJGOzs7Ozs7SUFFM0Ysc0VBQTRFOzs7Ozs7SUFFNUUsb0VBQTZGOzs7Ozs7SUFFN0Ysb0VBQTBFOzs7Ozs7SUFFMUUsaUVBQXdFOzs7Ozs7SUFFeEUsMEVBQXlHOzs7Ozs7O0lBS3pHLDJFQUF3RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEl0ZW1FbnRpdHkgfSBmcm9tICcuLi9kb21haW4vY29yZS9pdGVtL2l0ZW0uZW50aXR5JztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlLCBXYXJlaG91c2UgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTb3VyY2VXYXJlaG91c2UgaW1wbGVtZW50cyBXYXJlaG91c2Uge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdC8qKlxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKi9cblx0YWJzdHJhY3QgZ2V0RW50aXRpZXMoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogUmVhZG9ubHlBcnJheTxJdGVtRW50aXR5PjtcblxuXHRhYnN0cmFjdCBvbkVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxJdGVtRW50aXR5Pj47XG5cblx0YWJzdHJhY3Qgb25FbnRpdGllc1NpemUoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxudW1iZXI+O1xuXG5cdGFic3RyYWN0IG9uY2VFbnRpdGllcyhzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPFJlYWRvbmx5QXJyYXk8SXRlbUVudGl0eT4+O1xuXG5cdGFic3RyYWN0IG9uT3JpZ2luU2l6ZShzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPG51bWJlcj47XG5cblx0YWJzdHJhY3Qgb25Mb2FkaW5nKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj47XG5cblx0YWJzdHJhY3Qgb25QcmVwYXJlZEVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8UmVhZG9ubHlBcnJheTxPcmlnaW5JdGVtRW50aXR5Pj47XG5cblx0LyoqXG5cdCAqIEBkZXByZWNhdGVkXG5cdCAqL1xuXHRhYnN0cmFjdCBnZXRQcmVwYXJlZEVudGl0aWVzKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IFJlYWRvbmx5QXJyYXk8T3JpZ2luSXRlbUVudGl0eT47XG5cbn1cbiJdfQ==