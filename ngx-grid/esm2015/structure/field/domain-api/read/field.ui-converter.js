/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FieldUiModel } from './field.ui-model';
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
        return new FieldUiModel(field.getId(), field.getDataType());
    }
}
FieldUiConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQudWktY29udmVydGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvZG9tYWluLWFwaS9yZWFkL2ZpZWxkLnVpLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFLaEQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFFNUIsT0FBTyxDQUFDLE1BQXdCO1FBQy9CLE9BQU8sTUFBTSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLEtBQWdCLEVBQUUsRUFBRTtZQUN0QyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxVQUFVLENBQUMsS0FBZ0I7UUFFbEMsT0FBTyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7O1lBWkQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmllbGRVaU1vZGVsIH0gZnJvbSAnLi9maWVsZC51aS1tb2RlbCc7XG5pbXBvcnQgeyBUeXBlRmllbGQgfSBmcm9tICcuLi8uLi9kb21haW4vZGF0YS10eXBlL3R5cGUuZmllbGQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWVsZFVpQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGZpZWxkczogQXJyYXk8VHlwZUZpZWxkPik6IEFycmF5PEZpZWxkVWlNb2RlbD4ge1xuXHRcdHJldHVybiBmaWVsZHMubWFwKChmaWVsZDogVHlwZUZpZWxkKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0T25lKGZpZWxkKTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydE9uZShmaWVsZDogVHlwZUZpZWxkKTogRmllbGRVaU1vZGVsIHtcblxuXHRcdHJldHVybiBuZXcgRmllbGRVaU1vZGVsKGZpZWxkLmdldElkKCksIGZpZWxkLmdldERhdGFUeXBlKCkpO1xuXHR9XG59XG4iXX0=