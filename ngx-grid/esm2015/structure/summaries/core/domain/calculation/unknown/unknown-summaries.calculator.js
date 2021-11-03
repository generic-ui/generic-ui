import { Injectable } from '@angular/core';
import { SummariesCalculator } from '../summaries.calculator';
import { UnknownSummarizedValues } from './unknown-summarized.values';
import { DataType } from '../../../../../field/core/domain/field/data/data-type';
import * as i0 from "@angular/core";
export class UnknownSummariesCalculator extends SummariesCalculator {
    constructor() {
        super();
    }
    forDataType(dataType) {
        return dataType === DataType.UNKNOWN;
    }
    prepare(field) {
    }
    postCalculate(field, items) {
    }
    aggregate(field, value) {
    }
    generateAggregatedValues(field) {
        return new UnknownSummarizedValues();
    }
}
UnknownSummariesCalculator.ɵfac = function UnknownSummariesCalculator_Factory(t) { return new (t || UnknownSummariesCalculator)(); };
UnknownSummariesCalculator.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: UnknownSummariesCalculator, factory: UnknownSummariesCalculator.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(UnknownSummariesCalculator, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1zdW1tYXJpZXMuY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9jYWxjdWxhdGlvbi91bmtub3duL3Vua25vd24tc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdURBQXVELENBQUM7O0FBTWpGLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxtQkFBaUQ7SUFFaEc7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRCxXQUFXLENBQUMsUUFBa0I7UUFDN0IsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUN0QyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVk7SUFDcEIsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFZLEVBQUUsS0FBOEI7SUFDMUQsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFZLEVBQUUsS0FBVTtJQUNsQyxDQUFDO0lBRUQsd0JBQXdCLENBQUMsS0FBWTtRQUNwQyxPQUFPLElBQUksdUJBQXVCLEVBQUUsQ0FBQztJQUN0QyxDQUFDOztvR0FyQlcsMEJBQTBCO2dGQUExQiwwQkFBMEIsV0FBMUIsMEJBQTBCO3VGQUExQiwwQkFBMEI7Y0FEdEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4uL3N1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IFVua25vd25TdW1tYXJpemVkVmFsdWVzIH0gZnJvbSAnLi91bmtub3duLXN1bW1hcml6ZWQudmFsdWVzJztcbmltcG9ydCB7IERhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZGF0YS9kYXRhLXR5cGUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVbmtub3duU3VtbWFyaWVzQ2FsY3VsYXRvciBleHRlbmRzIFN1bW1hcmllc0NhbGN1bGF0b3I8YW55LCBVbmtub3duU3VtbWFyaXplZFZhbHVlcz4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRmb3JEYXRhVHlwZShkYXRhVHlwZTogRGF0YVR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZGF0YVR5cGUgPT09IERhdGFUeXBlLlVOS05PV047XG5cdH1cblxuXHRwcmVwYXJlKGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXHR9XG5cblx0cG9zdENhbGN1bGF0ZShmaWVsZDogRmllbGQsIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IHZvaWQge1xuXHR9XG5cblx0YWdncmVnYXRlKGZpZWxkOiBGaWVsZCwgdmFsdWU6IGFueSk6IHZvaWQge1xuXHR9XG5cblx0Z2VuZXJhdGVBZ2dyZWdhdGVkVmFsdWVzKGZpZWxkOiBGaWVsZCk6IFVua25vd25TdW1tYXJpemVkVmFsdWVzIHtcblx0XHRyZXR1cm4gbmV3IFVua25vd25TdW1tYXJpemVkVmFsdWVzKCk7XG5cdH1cblxufVxuIl19