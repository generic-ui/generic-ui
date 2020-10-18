/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Field } from './field';
import { DataFieldFactory } from './data/data-field.factory';
import { FieldIdGenerator } from './field-id.generator';
var FieldFactory = /** @class */ (function () {
    function FieldFactory(fieldIdGenerator, dataFieldFactory) {
        this.fieldIdGenerator = fieldIdGenerator;
        this.dataFieldFactory = dataFieldFactory;
    }
    /**
     * @param {?} configs
     * @return {?}
     */
    FieldFactory.prototype.create = /**
     * @param {?} configs
     * @return {?}
     */
    function (configs) {
        var _this = this;
        if (!configs) {
            return [];
        }
        return configs.map((/**
         * @param {?} fieldConfig
         * @param {?} index
         * @return {?}
         */
        function (fieldConfig, index) {
            /** @type {?} */
            var fieldId = _this.fieldIdGenerator.generateId();
            /** @type {?} */
            var dataField = _this.dataFieldFactory.create(fieldConfig);
            return new Field(fieldId, dataField, _this.getFieldName(fieldConfig, index));
        }));
    };
    /**
     * @private
     * @param {?} fieldConfig
     * @param {?} index
     * @return {?}
     */
    FieldFactory.prototype.getFieldName = /**
     * @private
     * @param {?} fieldConfig
     * @param {?} index
     * @return {?}
     */
    function (fieldConfig, index) {
        if (typeof fieldConfig.field === 'string') {
            return fieldConfig.field.toLowerCase();
        }
        else {
            return 'Field #' + index;
        }
    };
    FieldFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FieldFactory.ctorParameters = function () { return [
        { type: FieldIdGenerator },
        { type: DataFieldFactory }
    ]; };
    return FieldFactory;
}());
export { FieldFactory };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldFactory.prototype.fieldIdGenerator;
    /**
     * @type {?}
     * @private
     */
    FieldFactory.prototype.dataFieldFactory;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNoQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUd4RDtJQUdDLHNCQUE2QixnQkFBa0MsRUFDM0MsZ0JBQWtDO1FBRHpCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDM0MscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN0RCxDQUFDOzs7OztJQUVELDZCQUFNOzs7O0lBQU4sVUFBTyxPQUEyQjtRQUFsQyxpQkFhQztRQVhBLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQztTQUNWO1FBRUQsT0FBTyxPQUFPLENBQUMsR0FBRzs7Ozs7UUFBQyxVQUFDLFdBQXdCLEVBQUUsS0FBYTs7Z0JBRXBELE9BQU8sR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFOztnQkFDakQsU0FBUyxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBRXRELE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdFLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVPLG1DQUFZOzs7Ozs7SUFBcEIsVUFBcUIsV0FBd0IsRUFBRSxLQUFhO1FBRTNELElBQUksT0FBTyxXQUFXLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUMxQyxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdkM7YUFBTTtZQUNOLE9BQU8sU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN6QjtJQUNGLENBQUM7O2dCQTdCRCxVQUFVOzs7O2dCQUhGLGdCQUFnQjtnQkFEaEIsZ0JBQWdCOztJQW1DekIsbUJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTlCWSxZQUFZOzs7Ozs7SUFFWix3Q0FBbUQ7Ozs7O0lBQzVELHdDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi9hcGkvZmllbGQuY29uZmlnJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi9maWVsZCc7XG5pbXBvcnQgeyBEYXRhRmllbGRGYWN0b3J5IH0gZnJvbSAnLi9kYXRhL2RhdGEtZmllbGQuZmFjdG9yeSc7XG5pbXBvcnQgeyBGaWVsZElkR2VuZXJhdG9yIH0gZnJvbSAnLi9maWVsZC1pZC5nZW5lcmF0b3InO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWVsZEZhY3Rvcnkge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZmllbGRJZEdlbmVyYXRvcjogRmllbGRJZEdlbmVyYXRvcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkYXRhRmllbGRGYWN0b3J5OiBEYXRhRmllbGRGYWN0b3J5KSB7XG5cdH1cblxuXHRjcmVhdGUoY29uZmlnczogQXJyYXk8RmllbGRDb25maWc+KTogQXJyYXk8RmllbGQ+IHtcblxuXHRcdGlmICghY29uZmlncykge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb25maWdzLm1hcCgoZmllbGRDb25maWc6IEZpZWxkQ29uZmlnLCBpbmRleDogbnVtYmVyKSA9PiB7XG5cblx0XHRcdGNvbnN0IGZpZWxkSWQgPSB0aGlzLmZpZWxkSWRHZW5lcmF0b3IuZ2VuZXJhdGVJZCgpLFxuXHRcdFx0XHRkYXRhRmllbGQgPSB0aGlzLmRhdGFGaWVsZEZhY3RvcnkuY3JlYXRlKGZpZWxkQ29uZmlnKTtcblxuXHRcdFx0cmV0dXJuIG5ldyBGaWVsZChmaWVsZElkLCBkYXRhRmllbGQsIHRoaXMuZ2V0RmllbGROYW1lKGZpZWxkQ29uZmlnLCBpbmRleCkpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJpdmF0ZSBnZXRGaWVsZE5hbWUoZmllbGRDb25maWc6IEZpZWxkQ29uZmlnLCBpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcblxuXHRcdGlmICh0eXBlb2YgZmllbGRDb25maWcuZmllbGQgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gZmllbGRDb25maWcuZmllbGQudG9Mb3dlckNhc2UoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuICdGaWVsZCAjJyArIGluZGV4O1xuXHRcdH1cblx0fVxuXG59XG4iXX0=