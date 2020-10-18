/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Field } from './field';
import { DataFieldFactory } from './data/data-field.factory';
import { FieldIdGenerator } from './field-id.generator';
export class FieldFactory {
    /**
     * @param {?} fieldIdGenerator
     * @param {?} dataFieldFactory
     */
    constructor(fieldIdGenerator, dataFieldFactory) {
        this.fieldIdGenerator = fieldIdGenerator;
        this.dataFieldFactory = dataFieldFactory;
    }
    /**
     * @param {?} configs
     * @return {?}
     */
    create(configs) {
        if (!configs) {
            return [];
        }
        return configs.map((/**
         * @param {?} fieldConfig
         * @param {?} index
         * @return {?}
         */
        (fieldConfig, index) => {
            /** @type {?} */
            const fieldId = this.fieldIdGenerator.generateId();
            /** @type {?} */
            const dataField = this.dataFieldFactory.create(fieldConfig);
            return new Field(fieldId, dataField, this.getFieldName(fieldConfig, index));
        }));
    }
    /**
     * @private
     * @param {?} fieldConfig
     * @param {?} index
     * @return {?}
     */
    getFieldName(fieldConfig, index) {
        if (typeof fieldConfig.field === 'string') {
            return fieldConfig.field.toLowerCase();
        }
        else {
            return 'Field #' + index;
        }
    }
}
FieldFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FieldFactory.ctorParameters = () => [
    { type: FieldIdGenerator },
    { type: DataFieldFactory }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNoQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUl4RCxNQUFNLE9BQU8sWUFBWTs7Ozs7SUFFeEIsWUFBNkIsZ0JBQWtDLEVBQzNDLGdCQUFrQztRQUR6QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzNDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDdEQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBMkI7UUFFakMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxPQUFPLE9BQU8sQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsV0FBd0IsRUFBRSxLQUFhLEVBQUUsRUFBRTs7a0JBRXhELE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFOztrQkFDakQsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBRXRELE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdFLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVPLFlBQVksQ0FBQyxXQUF3QixFQUFFLEtBQWE7UUFFM0QsSUFBSSxPQUFPLFdBQVcsQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzFDLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN2QzthQUFNO1lBQ04sT0FBTyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQzs7O1lBN0JELFVBQVU7Ozs7WUFIRixnQkFBZ0I7WUFEaEIsZ0JBQWdCOzs7Ozs7O0lBT1osd0NBQW1EOzs7OztJQUM1RCx3Q0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vYXBpL2ZpZWxkLmNvbmZpZyc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4vZmllbGQnO1xuaW1wb3J0IHsgRGF0YUZpZWxkRmFjdG9yeSB9IGZyb20gJy4vZGF0YS9kYXRhLWZpZWxkLmZhY3RvcnknO1xuaW1wb3J0IHsgRmllbGRJZEdlbmVyYXRvciB9IGZyb20gJy4vZmllbGQtaWQuZ2VuZXJhdG9yJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmllbGRGYWN0b3J5IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpZWxkSWRHZW5lcmF0b3I6IEZpZWxkSWRHZW5lcmF0b3IsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZGF0YUZpZWxkRmFjdG9yeTogRGF0YUZpZWxkRmFjdG9yeSkge1xuXHR9XG5cblx0Y3JlYXRlKGNvbmZpZ3M6IEFycmF5PEZpZWxkQ29uZmlnPik6IEFycmF5PEZpZWxkPiB7XG5cblx0XHRpZiAoIWNvbmZpZ3MpIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29uZmlncy5tYXAoKGZpZWxkQ29uZmlnOiBGaWVsZENvbmZpZywgaW5kZXg6IG51bWJlcikgPT4ge1xuXG5cdFx0XHRjb25zdCBmaWVsZElkID0gdGhpcy5maWVsZElkR2VuZXJhdG9yLmdlbmVyYXRlSWQoKSxcblx0XHRcdFx0ZGF0YUZpZWxkID0gdGhpcy5kYXRhRmllbGRGYWN0b3J5LmNyZWF0ZShmaWVsZENvbmZpZyk7XG5cblx0XHRcdHJldHVybiBuZXcgRmllbGQoZmllbGRJZCwgZGF0YUZpZWxkLCB0aGlzLmdldEZpZWxkTmFtZShmaWVsZENvbmZpZywgaW5kZXgpKTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgZ2V0RmllbGROYW1lKGZpZWxkQ29uZmlnOiBGaWVsZENvbmZpZywgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG5cblx0XHRpZiAodHlwZW9mIGZpZWxkQ29uZmlnLmZpZWxkID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIGZpZWxkQ29uZmlnLmZpZWxkLnRvTG93ZXJDYXNlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAnRmllbGQgIycgKyBpbmRleDtcblx0XHR9XG5cdH1cblxufVxuIl19