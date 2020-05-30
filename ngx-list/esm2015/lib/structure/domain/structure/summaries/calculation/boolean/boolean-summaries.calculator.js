/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SummariesCalculator } from '../summaries.calculator';
import { BooleanSummarizedValues } from './boolean-summarized.values';
import { DataType } from '../../../../../../../structure/field/domain/data-type/data-type';
import { SummariesType } from '../../summaries.type';
export class BooleanSummariesCalculator extends SummariesCalculator {
    constructor() {
        super();
        this.truthy = new Map();
        this.falsy = new Map();
    }
    /**
     * @param {?} dataType
     * @return {?}
     */
    forDataType(dataType) {
        return dataType === DataType.BOOLEAN;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    prepare(field) {
        /** @type {?} */
        const key = field.getKey();
        if (field.isSummaries(SummariesType.TRUTHY)) {
            this.truthy.set(key, 0);
        }
        if (field.isSummaries(SummariesType.FALSY)) {
            this.falsy.set(key, 0);
        }
    }
    /**
     * @param {?} field
     * @param {?} items
     * @return {?}
     */
    postCalculate(field, items) {
    }
    /**
     * @param {?} field
     * @param {?} value
     * @return {?}
     */
    aggregate(field, value) {
        /** @type {?} */
        const booleanValue = value;
        /** @type {?} */
        const // (value as any === 'true'),
        key = field.getKey();
        /** @type {?} */
        const truthyForField = this.truthy.get(key);
        /** @type {?} */
        const falsyForField = this.falsy.get(key);
        if (booleanValue) {
            if (field.isSummaries(SummariesType.TRUTHY)) {
                this.truthy.set(key, truthyForField + 1);
            }
        }
        else {
            if (field.isSummaries(SummariesType.FALSY)) {
                this.falsy.set(key, falsyForField + 1);
            }
        }
    }
    /**
     * @param {?} field
     * @return {?}
     */
    generateAggregatedValues(field) {
        /** @type {?} */
        const key = field.getKey();
        return new BooleanSummarizedValues(this.truthy.get(key), this.falsy.get(key));
    }
}
BooleanSummariesCalculator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BooleanSummariesCalculator.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    BooleanSummariesCalculator.prototype.truthy;
    /**
     * @type {?}
     * @private
     */
    BooleanSummariesCalculator.prototype.falsy;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1zdW1tYXJpZXMuY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL3N1bW1hcmllcy9jYWxjdWxhdGlvbi9ib29sZWFuL2Jvb2xlYW4tc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlFQUFpRSxDQUFDO0FBRTNGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUtyRCxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsbUJBQXFEO0lBS3BHO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFKUSxXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDbkMsVUFBSyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0lBSW5ELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFFBQWtCO1FBQzdCLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBcUI7O2NBRXRCLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBRTFCLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkI7SUFDRixDQUFDOzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBcUIsRUFBRSxLQUE4QjtJQUNuRSxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBcUIsRUFBRSxLQUFjOztjQUV4QyxZQUFZLEdBQUcsS0FBSzs7Y0FBRSw2QkFBNkI7UUFDeEQsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7O2NBQ3BCLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7O2NBQ3JDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFFcEMsSUFBSSxZQUFZLEVBQUU7WUFDakIsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN6QztTQUNEO2FBQU07WUFDTixJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Q7SUFFRixDQUFDOzs7OztJQUVELHdCQUF3QixDQUFDLEtBQXFCOztjQUV2QyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRTtRQUUxQixPQUFPLElBQUksdUJBQXVCLENBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDbkIsQ0FBQztJQUNILENBQUM7OztZQXpERCxVQUFVOzs7Ozs7Ozs7SUFHViw0Q0FBb0Q7Ozs7O0lBQ3BELDJDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4uL3N1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IEJvb2xlYW5TdW1tYXJpemVkVmFsdWVzIH0gZnJvbSAnLi9ib29sZWFuLXN1bW1hcml6ZWQudmFsdWVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9kYXRhLXR5cGUvZGF0YS10eXBlJztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL2ZpZWxkL2RvbWFpbi9kYXRhLXR5cGUvZmllbGQnO1xuaW1wb3J0IHsgU3VtbWFyaWVzVHlwZSB9IGZyb20gJy4uLy4uL3N1bW1hcmllcy50eXBlJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2Uvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5TdW1tYXJpZXNDYWxjdWxhdG9yIGV4dGVuZHMgU3VtbWFyaWVzQ2FsY3VsYXRvcjxib29sZWFuLCBCb29sZWFuU3VtbWFyaXplZFZhbHVlcz4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdHJ1dGh5ID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcblx0cHJpdmF0ZSByZWFkb25seSBmYWxzeSA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGZvckRhdGFUeXBlKGRhdGFUeXBlOiBEYXRhVHlwZSk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBkYXRhVHlwZSA9PT0gRGF0YVR5cGUuQk9PTEVBTjtcblx0fVxuXG5cdHByZXBhcmUoZmllbGQ6IEZpZWxkPGJvb2xlYW4+KTogdm9pZCB7XG5cblx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKTtcblxuXHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLlRSVVRIWSkpIHtcblx0XHRcdHRoaXMudHJ1dGh5LnNldChrZXksIDApO1xuXHRcdH1cblxuXHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLkZBTFNZKSkge1xuXHRcdFx0dGhpcy5mYWxzeS5zZXQoa2V5LCAwKTtcblx0XHR9XG5cdH1cblxuXHRwb3N0Q2FsY3VsYXRlKGZpZWxkOiBGaWVsZDxib29sZWFuPiwgaXRlbXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogdm9pZCB7XG5cdH1cblxuXHRhZ2dyZWdhdGUoZmllbGQ6IEZpZWxkPGJvb2xlYW4+LCB2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuXG5cdFx0Y29uc3QgYm9vbGVhblZhbHVlID0gdmFsdWUsIC8vICh2YWx1ZSBhcyBhbnkgPT09ICd0cnVlJyksXG5cdFx0XHRrZXkgPSBmaWVsZC5nZXRLZXkoKSxcblx0XHRcdHRydXRoeUZvckZpZWxkID0gdGhpcy50cnV0aHkuZ2V0KGtleSksXG5cdFx0XHRmYWxzeUZvckZpZWxkID0gdGhpcy5mYWxzeS5nZXQoa2V5KTtcblxuXHRcdGlmIChib29sZWFuVmFsdWUpIHtcblx0XHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLlRSVVRIWSkpIHtcblx0XHRcdFx0dGhpcy50cnV0aHkuc2V0KGtleSwgdHJ1dGh5Rm9yRmllbGQgKyAxKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGZpZWxkLmlzU3VtbWFyaWVzKFN1bW1hcmllc1R5cGUuRkFMU1kpKSB7XG5cdFx0XHRcdHRoaXMuZmFsc3kuc2V0KGtleSwgZmFsc3lGb3JGaWVsZCArIDEpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG5cblx0Z2VuZXJhdGVBZ2dyZWdhdGVkVmFsdWVzKGZpZWxkOiBGaWVsZDxib29sZWFuPik6IEJvb2xlYW5TdW1tYXJpemVkVmFsdWVzIHtcblxuXHRcdGNvbnN0IGtleSA9IGZpZWxkLmdldEtleSgpO1xuXG5cdFx0cmV0dXJuIG5ldyBCb29sZWFuU3VtbWFyaXplZFZhbHVlcyhcblx0XHRcdHRoaXMudHJ1dGh5LmdldChrZXkpLFxuXHRcdFx0dGhpcy5mYWxzeS5nZXQoa2V5KVxuXHRcdCk7XG5cdH1cblxufVxuIl19