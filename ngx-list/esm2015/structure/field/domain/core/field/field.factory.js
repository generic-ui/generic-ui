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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2ZpZWxkLmZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNoQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUl4RCxNQUFNLE9BQU8sWUFBWTs7Ozs7SUFFeEIsWUFBNkIsZ0JBQWtDLEVBQzNDLGdCQUFrQztRQUR6QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzNDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDdEQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsT0FBMkI7UUFFakMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7UUFFRCxPQUFPLE9BQU8sQ0FBQyxHQUFHOzs7OztRQUFDLENBQUMsV0FBd0IsRUFBRSxLQUFhLEVBQUUsRUFBRTs7a0JBRXhELE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFOztrQkFDakQsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO1lBRXRELE9BQU8sSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzdFLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVPLFlBQVksQ0FBQyxXQUF3QixFQUFFLEtBQWE7UUFFM0QsSUFBSSxPQUFPLFdBQVcsQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzFDLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN2QzthQUFNO1lBQ04sT0FBTyxTQUFTLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO0lBQ0YsQ0FBQzs7O1lBN0JELFVBQVU7Ozs7WUFIRixnQkFBZ0I7WUFEaEIsZ0JBQWdCOzs7Ozs7O0lBT1osd0NBQW1EOzs7OztJQUM1RCx3Q0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpZWxkQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9maWVsZC5jb25maWcnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuL2ZpZWxkJztcbmltcG9ydCB7IERhdGFGaWVsZEZhY3RvcnkgfSBmcm9tICcuL2RhdGEvZGF0YS1maWVsZC5mYWN0b3J5JztcbmltcG9ydCB7IEZpZWxkSWRHZW5lcmF0b3IgfSBmcm9tICcuL2ZpZWxkLWlkLmdlbmVyYXRvcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkRmFjdG9yeSB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmaWVsZElkR2VuZXJhdG9yOiBGaWVsZElkR2VuZXJhdG9yLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGRhdGFGaWVsZEZhY3Rvcnk6IERhdGFGaWVsZEZhY3RvcnkpIHtcblx0fVxuXG5cdGNyZWF0ZShjb25maWdzOiBBcnJheTxGaWVsZENvbmZpZz4pOiBBcnJheTxGaWVsZD4ge1xuXG5cdFx0aWYgKCFjb25maWdzKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvbmZpZ3MubWFwKChmaWVsZENvbmZpZzogRmllbGRDb25maWcsIGluZGV4OiBudW1iZXIpID0+IHtcblxuXHRcdFx0Y29uc3QgZmllbGRJZCA9IHRoaXMuZmllbGRJZEdlbmVyYXRvci5nZW5lcmF0ZUlkKCksXG5cdFx0XHRcdGRhdGFGaWVsZCA9IHRoaXMuZGF0YUZpZWxkRmFjdG9yeS5jcmVhdGUoZmllbGRDb25maWcpO1xuXG5cdFx0XHRyZXR1cm4gbmV3IEZpZWxkKGZpZWxkSWQsIGRhdGFGaWVsZCwgdGhpcy5nZXRGaWVsZE5hbWUoZmllbGRDb25maWcsIGluZGV4KSk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcml2YXRlIGdldEZpZWxkTmFtZShmaWVsZENvbmZpZzogRmllbGRDb25maWcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmcge1xuXG5cdFx0aWYgKHR5cGVvZiBmaWVsZENvbmZpZy5maWVsZCA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiBmaWVsZENvbmZpZy5maWVsZC50b0xvd2VyQ2FzZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gJ0ZpZWxkICMnICsgaW5kZXg7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==