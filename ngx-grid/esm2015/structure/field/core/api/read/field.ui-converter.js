/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldReadModel } from './field.read-model';
export class FieldUiConverter {
    /**
     * @param {?} fields
     * @return {?}
     */
    convert(fields) {
        return fields.map((/**
         * @param {?} field
         * @return {?}
         */
        (field) => {
            return this.convertOne(field);
        }));
    }
    /**
     * @private
     * @param {?} field
     * @return {?}
     */
    convertOne(field) {
        return new FieldReadModel(field.getId(), field.getDataType(), field.getName());
    }
}
FieldUiConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQudWktY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvY29yZS9hcGkvcmVhZC9maWVsZC51aS1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBS3BELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBRTVCLE9BQU8sQ0FBQyxNQUFvQjtRQUMzQixPQUFPLE1BQU0sQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxVQUFVLENBQUMsS0FBWTtRQUU5QixPQUFPLElBQUksY0FBYyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7O1lBWkQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmllbGRSZWFkTW9kZWwgfSBmcm9tICcuL2ZpZWxkLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi9kb21haW4vZmllbGQvZmllbGQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWVsZFVpQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGZpZWxkczogQXJyYXk8RmllbGQ+KTogQXJyYXk8RmllbGRSZWFkTW9kZWw+IHtcblx0XHRyZXR1cm4gZmllbGRzLm1hcCgoZmllbGQ6IEZpZWxkKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0T25lKGZpZWxkKTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydE9uZShmaWVsZDogRmllbGQpOiBGaWVsZFJlYWRNb2RlbCB7XG5cblx0XHRyZXR1cm4gbmV3IEZpZWxkUmVhZE1vZGVsKGZpZWxkLmdldElkKCksIGZpZWxkLmdldERhdGFUeXBlKCksIGZpZWxkLmdldE5hbWUoKSk7XG5cdH1cbn1cbiJdfQ==