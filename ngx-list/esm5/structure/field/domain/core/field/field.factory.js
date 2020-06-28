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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2ZpZWxkLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNoQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUd4RDtJQUdDLHNCQUE2QixnQkFBa0MsRUFDM0MsZ0JBQWtDO1FBRHpCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDM0MscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUN0RCxDQUFDOzs7OztJQUVELDZCQUFNOzs7O0lBQU4sVUFBTyxPQUEyQjtRQUFsQyxpQkFhQztRQVhBLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQztTQUNWO1FBRUQsT0FBTyxPQUFPLENBQUMsR0FBRzs7Ozs7UUFBQyxVQUFDLFdBQXdCLEVBQUUsS0FBYTs7Z0JBRXBELE9BQU8sR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFOztnQkFDakQsU0FBUyxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBRXRELE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdFLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVPLG1DQUFZOzs7Ozs7SUFBcEIsVUFBcUIsV0FBd0IsRUFBRSxLQUFhO1FBRTNELElBQUksT0FBTyxXQUFXLENBQUMsS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUMxQyxPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdkM7YUFBTTtZQUNOLE9BQU8sU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN6QjtJQUNGLENBQUM7O2dCQTdCRCxVQUFVOzs7O2dCQUhGLGdCQUFnQjtnQkFEaEIsZ0JBQWdCOztJQW1DekIsbUJBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTlCWSxZQUFZOzs7Ozs7SUFFWix3Q0FBbUQ7Ozs7O0lBQzVELHdDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL2ZpZWxkLmNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgRGF0YUZpZWxkRmFjdG9yeSB9IGZyb20gJy4vZGF0YS9kYXRhLWZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRJZEdlbmVyYXRvciB9IGZyb20gJy4vZmllbGQtaWQuZ2VuZXJhdG9yJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmllbGRGYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpZWxkSWRHZW5lcmF0b3I6IEZpZWxkSWRHZW5lcmF0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGF0YUZpZWxkRmFjdG9yeTogRGF0YUZpZWxkRmFjdG9yeSkge1xuXHR9XG5cblx0Y3JlYXRlKGNvbmZpZ3M6IEFycmF5PEZpZWxkQ29uZmlnPik6IEFycmF5PEZpZWxkPiB7XG5cblx0XHRpZiAoIWNvbmZpZ3MpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29uZmlncy5tYXAoKGZpZWxkQ29uZmlnOiBGaWVsZENvbmZpZywgaW5kZXg6IG51bWJlcikgPT4ge1xuXG5cdFx0XHRjb25zdCBmaWVsZElkID0gdGhpcy5maWVsZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKSxcblx0XHRcdFx0ZGF0YUZpZWxkID0gdGhpcy5kYXRhRmllbGRGYWN0b3J5LmNyZWF0ZShmaWVsZENvbmZpZyk7XG5cblx0XHRcdHJldHVybiBuZXcgRmllbGQoZmllbGRJZCwgZGF0YUZpZWxkLCB0aGlzLmdldEZpZWxkTmFtZShmaWVsZENvbmZpZywgaW5kZXgpKTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0RmllbGROYW1lKGZpZWxkQ29uZmlnOiBGaWVsZENvbmZpZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG5cblx0XHRpZiAodHlwZW9mIGZpZWxkQ29uZmlnLmZpZWxkID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIGZpZWxkQ29uZmlnLmZpZWxkLnRvTG93ZXJDYXNlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAnRmllbGQgIycgKyBpbmRleDtcblx0XHR9XG5cdH1cblxufVxuIl19