/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @abstract
 */
export class SchemaCommandInvoker {
    /**
     * @protected
     */
    constructor() {
    }
}
SchemaCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SchemaCommandInvoker.ctorParameters = () => [];
if (false) {
    /**
     * @abstract
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaCommandInvoker.prototype.create = function (schemaId) { };
    /**
     * @abstract
     * @param {?} theme
     * @param {?=} schemaId
     * @param {?=} structureId
     * @return {?}
     */
    SchemaCommandInvoker.prototype.setTheme = function (theme, schemaId, structureId) { };
    /**
     * @abstract
     * @param {?} rowColoring
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaCommandInvoker.prototype.setRowColoring = function (rowColoring, schemaId) { };
    /**
     * @abstract
     * @param {?} verticalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaCommandInvoker.prototype.setVerticalGrid = function (verticalGrid, schemaId) { };
    /**
     * @abstract
     * @param {?} horizontalGrid
     * @param {?=} schemaId
     * @return {?}
     */
    SchemaCommandInvoker.prototype.setHorizontalGrid = function (horizontalGrid, schemaId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFXM0MsTUFBTSxPQUFnQixvQkFBb0I7Ozs7SUFFekM7SUFDQSxDQUFDOzs7WUFKRCxVQUFVOzs7Ozs7Ozs7O0lBTVYsZ0VBQXdEOzs7Ozs7OztJQUV4RCxzRkFJUTs7Ozs7OztJQUVSLHFGQUEwRjs7Ozs7OztJQUUxRix1RkFBd0Y7Ozs7Ozs7SUFFeEYsMkZBQTRGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSW52b2tlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4vcm93LWNvbG9yaW5nL3Jvdy1jb2xvcmluZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjaGVtYUNvbW1hbmRJbnZva2VyIGltcGxlbWVudHMgQ29tbWFuZEludm9rZXIge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdGFic3RyYWN0IGNyZWF0ZShzY2hlbWFJZD86IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2V0VGhlbWUoXG5cdFx0dGhlbWU6IFNjaGVtYVRoZW1lLFxuXHRcdHNjaGVtYUlkPzogU2NoZW1hUmVhZE1vZGVsUm9vdElkLFxuXHRcdHN0cnVjdHVyZUlkPzogU3RydWN0dXJlSWRcblx0KTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZzogUm93Q29sb3JpbmcsIHNjaGVtYUlkPzogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkOiBib29sZWFuLCBzY2hlbWFJZD86IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2V0SG9yaXpvbnRhbEdyaWQoaG9yaXpvbnRhbEdyaWQ6IGJvb2xlYW4sIHNjaGVtYUlkPzogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogdm9pZDtcblxufVxuIl19