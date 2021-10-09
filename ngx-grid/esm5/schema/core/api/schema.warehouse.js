/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @abstract
 */
var SchemaWarehouse = /** @class */ (function () {
    function SchemaWarehouse() {
    }
    SchemaWarehouse.decorators = [
        { type: Injectable }
    ];
    return SchemaWarehouse;
}());
export { SchemaWarehouse };
if (false) {
    /**
     * @abstract
     * @param {?} schemaId
     * @return {?}
     */
    SchemaWarehouse.prototype.onTheme = function (schemaId) { };
    /**
     * @abstract
     * @param {?} schemaId
     * @return {?}
     */
    SchemaWarehouse.prototype.onceTheme = function (schemaId) { };
    /**
     * @abstract
     * @param {?} schemaId
     * @return {?}
     */
    SchemaWarehouse.prototype.onHorizontalGrid = function (schemaId) { };
    /**
     * @abstract
     * @param {?} schemaId
     * @return {?}
     */
    SchemaWarehouse.prototype.onVerticalGrid = function (schemaId) { };
    /**
     * @abstract
     * @param {?} schemaId
     * @return {?}
     */
    SchemaWarehouse.prototype.onRowColoring = function (schemaId) { };
    /**
     * @abstract
     * @param {?} schemaId
     * @return {?}
     */
    SchemaWarehouse.prototype.onCssClasses = function (schemaId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic2NoZW1hL2NvcmUvYXBpL3NjaGVtYS53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFTM0M7SUFBQTtJQWVBLENBQUM7O2dCQWZBLFVBQVU7O0lBZVgsc0JBQUM7Q0FBQSxBQWZELElBZUM7U0FkcUIsZUFBZTs7Ozs7OztJQUVwQyw0REFBaUY7Ozs7OztJQUVqRiw4REFBbUY7Ozs7OztJQUVuRixxRUFBc0Y7Ozs7OztJQUV0RixtRUFBb0Y7Ozs7OztJQUVwRixrRUFBNkY7Ozs7OztJQUU3RixpRUFBeUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUsIFdhcmVob3VzZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzIH0gZnJvbSAnLi9jc3MtY2xhc3Nlcy9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi9yb3ctY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2hlbWFXYXJlaG91c2UgaW1wbGVtZW50cyBXYXJlaG91c2Uge1xuXG5cdGFic3RyYWN0IG9uVGhlbWUoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8U2NoZW1hVGhlbWU+O1xuXG5cdGFic3RyYWN0IG9uY2VUaGVtZShzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxTY2hlbWFUaGVtZT47XG5cblx0YWJzdHJhY3Qgb25Ib3Jpem9udGFsR3JpZChzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuXHRhYnN0cmFjdCBvblZlcnRpY2FsR3JpZChzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogSGVybWVzT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuXHRhYnN0cmFjdCBvblJvd0NvbG9yaW5nKHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiBIZXJtZXNPYnNlcnZhYmxlPFNjaGVtYVJvd0NvbG9yaW5nPjtcblxuXHRhYnN0cmFjdCBvbkNzc0NsYXNzZXMoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IEhlcm1lc09ic2VydmFibGU8U2NoZW1hQ3NzQ2xhc3M+O1xuXG59XG4iXX0=