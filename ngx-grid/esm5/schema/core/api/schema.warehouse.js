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
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaWarehouse.prototype.onTheme = function (schemaId) { };
    /**
     * @abstract
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaWarehouse.prototype.onSingleTheme = function (schemaId) { };
    /**
     * @abstract
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaWarehouse.prototype.onHorizontalGrid = function (schemaId) { };
    /**
     * @abstract
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaWarehouse.prototype.onVerticalGrid = function (schemaId) { };
    /**
     * @abstract
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaWarehouse.prototype.onRowColoring = function (schemaId) { };
    /**
     * @abstract
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaWarehouse.prototype.onCssClasses = function (schemaId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLndhcmVob3VzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic2NoZW1hL2NvcmUvYXBpL3NjaGVtYS53YXJlaG91c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFVM0M7SUFBQTtJQWVBLENBQUM7O2dCQWZBLFVBQVU7O0lBZVgsc0JBQUM7Q0FBQSxBQWZELElBZUM7U0FkcUIsZUFBZTs7Ozs7OztJQUVwQyw0REFBNEU7Ozs7OztJQUU1RSxrRUFBa0Y7Ozs7OztJQUVsRixxRUFBaUY7Ozs7OztJQUVqRixtRUFBK0U7Ozs7OztJQUUvRSxrRUFBd0Y7Ozs7OztJQUV4RixpRUFBb0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFdhcmVob3VzZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzIH0gZnJvbSAnLi9jc3MtY2xhc3Nlcy9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi9yb3ctY29sb3Jpbmcvc2NoZW1hLXJvdy1jb2xvcmluZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2hlbWFXYXJlaG91c2UgaW1wbGVtZW50cyBXYXJlaG91c2Uge1xuXG5cdGFic3RyYWN0IG9uVGhlbWUoc2NoZW1hSWQ/OiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiBPYnNlcnZhYmxlPFNjaGVtYVRoZW1lPjtcblxuXHRhYnN0cmFjdCBvblNpbmdsZVRoZW1lKHNjaGVtYUlkPzogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogT2JzZXJ2YWJsZTxTY2hlbWFUaGVtZT47XG5cblx0YWJzdHJhY3Qgb25Ib3Jpem9udGFsR3JpZChzY2hlbWFJZD86IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cblx0YWJzdHJhY3Qgb25WZXJ0aWNhbEdyaWQoc2NoZW1hSWQ/OiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG5cdGFic3RyYWN0IG9uUm93Q29sb3Jpbmcoc2NoZW1hSWQ/OiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiBPYnNlcnZhYmxlPFNjaGVtYVJvd0NvbG9yaW5nPjtcblxuXHRhYnN0cmFjdCBvbkNzc0NsYXNzZXMoc2NoZW1hSWQ/OiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiBPYnNlcnZhYmxlPFNjaGVtYUNzc0NsYXNzPjtcblxufVxuIl19