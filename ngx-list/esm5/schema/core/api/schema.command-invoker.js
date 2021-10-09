/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @abstract
 */
var SchemaCommandInvoker = /** @class */ (function () {
    function SchemaCommandInvoker() {
    }
    SchemaCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SchemaCommandInvoker.ctorParameters = function () { return []; };
    return SchemaCommandInvoker;
}());
export { SchemaCommandInvoker };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2NvcmUvYXBpL3NjaGVtYS5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFVM0M7SUFHQztJQUNBLENBQUM7O2dCQUpELFVBQVU7Ozs7SUFvQlgsMkJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQW5CcUIsb0JBQW9COzs7Ozs7O0lBS3pDLGdFQUF1RDs7Ozs7Ozs7SUFFdkQsc0ZBSVE7Ozs7Ozs7SUFFUixxRkFBeUY7Ozs7Ozs7SUFFekYsdUZBQXVGOzs7Ozs7O0lBRXZGLDJGQUEyRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEludm9rZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFUaGVtZSB9IGZyb20gJy4vdGhlbWUvc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4vc2NoZW1hLnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL3N0cnVjdHVyZS9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgUm93Q29sb3JpbmcgfSBmcm9tICcuL3Jvdy1jb2xvcmluZy9yb3ctY29sb3JpbmcnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTY2hlbWFDb21tYW5kSW52b2tlciBpbXBsZW1lbnRzIENvbW1hbmRJbnZva2VyIHtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7XG5cdH1cblxuXHRhYnN0cmFjdCBjcmVhdGUoc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2V0VGhlbWUoXG5cdFx0dGhlbWU6IFNjaGVtYVRoZW1lLFxuXHRcdHNjaGVtYUlkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0c3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkXG5cdCk6IHZvaWQ7XG5cblx0YWJzdHJhY3Qgc2V0Um93Q29sb3Jpbmcocm93Q29sb3Jpbmc6IFJvd0NvbG9yaW5nLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRWZXJ0aWNhbEdyaWQodmVydGljYWxHcmlkOiBib29sZWFuLCBzY2hlbWFJZDogU2NoZW1hUmVhZE1vZGVsUm9vdElkKTogdm9pZDtcblxuXHRhYnN0cmFjdCBzZXRIb3Jpem9udGFsR3JpZChob3Jpem9udGFsR3JpZDogYm9vbGVhbiwgc2NoZW1hSWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCk6IHZvaWQ7XG5cbn1cbiJdfQ==