/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureFieldUiModel } from './structure.field.ui-model';
export class StructureFieldUiConverter {
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
        return new StructureFieldUiModel(field.getId(), field.getDataType());
    }
}
StructureFieldUiConverter.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmZpZWxkLnVpLWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS91aS1hcGkvZmllbGQvc3RydWN0dXJlLmZpZWxkLnVpLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUtuRSxNQUFNLE9BQU8seUJBQXlCOzs7OztJQUVyQyxPQUFPLENBQUMsTUFBd0I7UUFDL0IsT0FBTyxNQUFNLENBQUMsR0FBRzs7OztRQUFDLENBQUMsS0FBZ0IsRUFBRSxFQUFFO1lBQ3RDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLFVBQVUsQ0FBQyxLQUFnQjtRQUVsQyxPQUFPLElBQUkscUJBQXFCLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7OztZQVpELFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUZpZWxkVWlNb2RlbCB9IGZyb20gJy4vc3RydWN0dXJlLmZpZWxkLnVpLW1vZGVsJztcbmltcG9ydCB7IFR5cGVGaWVsZCB9IGZyb20gJy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvZGF0YS10eXBlL3R5cGUuZmllbGQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVGaWVsZFVpQ29udmVydGVyIHtcblxuXHRjb252ZXJ0KGZpZWxkczogQXJyYXk8VHlwZUZpZWxkPik6IEFycmF5PFN0cnVjdHVyZUZpZWxkVWlNb2RlbD4ge1xuXHRcdHJldHVybiBmaWVsZHMubWFwKChmaWVsZDogVHlwZUZpZWxkKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0T25lKGZpZWxkKTtcblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgY29udmVydE9uZShmaWVsZDogVHlwZUZpZWxkKTogU3RydWN0dXJlRmllbGRVaU1vZGVsIHtcblxuXHRcdHJldHVybiBuZXcgU3RydWN0dXJlRmllbGRVaU1vZGVsKGZpZWxkLmdldElkKCksIGZpZWxkLmdldERhdGFUeXBlKCkpO1xuXHR9XG59XG4iXX0=