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
     * @param {?} schemaId
     * @return {?}
     */
    SchemaCommandInvoker.prototype.create = function (schemaId) { };
    /**
     * @abstract
     * @param {?} theme
     * @param {?} schemaId
     * @param {?} structureId
     * @return {?}
     */
    SchemaCommandInvoker.prototype.setTheme = function (theme, schemaId, structureId) { };
    /**
     * @abstract
     * @param {?} rowColoring
     * @param {?} schemaId
     * @return {?}
     */
    SchemaCommandInvoker.prototype.setRowColoring = function (rowColoring, schemaId) { };
    /**
     * @abstract
     * @param {?} verticalGrid
     * @param {?} schemaId
     * @return {?}
     */
    SchemaCommandInvoker.prototype.setVerticalGrid = function (verticalGrid, schemaId) { };
    /**
     * @abstract
     * @param {?} horizontalGrid
     * @param {?} schemaId
     * @return {?}
     */
    SchemaCommandInvoker.prototype.setHorizontalGrid = function (horizontalGrid, schemaId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFXM0MsTUFBTSxPQUFnQixvQkFBb0I7Ozs7SUFFekM7SUFDQSxDQUFDOzs7WUFKRCxVQUFVOzs7Ozs7Ozs7O0lBTVYsZ0VBQXVEOzs7Ozs7OztJQUV2RCxzRkFJUTs7Ozs7OztJQUVSLHFGQUF5Rjs7Ozs7OztJQUV6Rix1RkFBdUY7Ozs7Ozs7SUFFdkYsMkZBQTJGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSW52b2tlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi90aGVtZS9zY2hlbWEtdGhlbWUnO1xuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vc3RydWN0dXJlL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSb3dDb2xvcmluZyB9IGZyb20gJy4vcm93LWNvbG9yaW5nL3Jvdy1jb2xvcmluZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNjaGVtYUNvbW1hbmRJbnZva2VyIGltcGxlbWVudHMgQ29tbWFuZEludm9rZXIge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0fVxuXG5cdGFic3RyYWN0IGNyZWF0ZShzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRUaGVtZShcblx0XHR0aGVtZTogU2NoZW1hVGhlbWUsXG5cdFx0c2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWRcblx0KTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRSb3dDb2xvcmluZyhyb3dDb2xvcmluZzogUm93Q29sb3JpbmcsIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldFZlcnRpY2FsR3JpZCh2ZXJ0aWNhbEdyaWQ6IGJvb2xlYW4sIHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQpOiB2b2lkO1xuXG5cdGFic3RyYWN0IHNldEhvcml6b250YWxHcmlkKGhvcml6b250YWxHcmlkOiBib29sZWFuLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogdm9pZDtcblxufVxuIl19