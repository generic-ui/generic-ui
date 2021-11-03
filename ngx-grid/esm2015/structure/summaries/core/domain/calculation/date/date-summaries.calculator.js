import { Injectable } from '@angular/core';
import { SummariesCalculator } from '../summaries.calculator';
import { DateSummarizedValues } from './date-summarized.values';
import { DataType } from '../../../../../field/core/domain/field/data/data-type';
import * as i0 from "@angular/core";
export class DateSummariesCalculator extends SummariesCalculator {
    constructor() {
        super();
    }
    forDataType(dataType) {
        return dataType === DataType.DATE;
    }
    prepare(field) {
    }
    postCalculate(field, items) {
    }
    aggregate(field, value) {
    }
    generateAggregatedValues(field) {
        return new DateSummarizedValues();
    }
}
DateSummariesCalculator.ɵfac = function DateSummariesCalculator_Factory(t) { return new (t || DateSummariesCalculator)(); };
DateSummariesCalculator.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DateSummariesCalculator, factory: DateSummariesCalculator.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DateSummariesCalculator, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1zdW1tYXJpZXMuY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtZ3JpZC9zcmMvc3RydWN0dXJlL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9jYWxjdWxhdGlvbi9kYXRlL2RhdGUtc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdURBQXVELENBQUM7O0FBTWpGLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxtQkFBK0M7SUFFM0Y7UUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRCxXQUFXLENBQUMsUUFBa0I7UUFDN0IsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVk7SUFDcEIsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFZLEVBQUUsS0FBOEI7SUFDMUQsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFZLEVBQUUsS0FBVztJQUNuQyxDQUFDO0lBRUQsd0JBQXdCLENBQUMsS0FBWTtRQUNwQyxPQUFPLElBQUksb0JBQW9CLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs4RkFyQlcsdUJBQXVCOzZFQUF2Qix1QkFBdUIsV0FBdkIsdUJBQXVCO3VGQUF2Qix1QkFBdUI7Y0FEbkMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4uL3N1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IERhdGVTdW1tYXJpemVkVmFsdWVzIH0gZnJvbSAnLi9kYXRlLXN1bW1hcml6ZWQudmFsdWVzJztcblxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9kYXRhL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc291cmNlL2NvcmUvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9maWVsZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGVTdW1tYXJpZXNDYWxjdWxhdG9yIGV4dGVuZHMgU3VtbWFyaWVzQ2FsY3VsYXRvcjxEYXRlLCBEYXRlU3VtbWFyaXplZFZhbHVlcz4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRmb3JEYXRhVHlwZShkYXRhVHlwZTogRGF0YVR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZGF0YVR5cGUgPT09IERhdGFUeXBlLkRBVEU7XG5cdH1cblxuXHRwcmVwYXJlKGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXHR9XG5cblx0cG9zdENhbGN1bGF0ZShmaWVsZDogRmllbGQsIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IHZvaWQge1xuXHR9XG5cblx0YWdncmVnYXRlKGZpZWxkOiBGaWVsZCwgdmFsdWU6IERhdGUpOiB2b2lkIHtcblx0fVxuXG5cdGdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZDogRmllbGQpOiBEYXRlU3VtbWFyaXplZFZhbHVlcyB7XG5cdFx0cmV0dXJuIG5ldyBEYXRlU3VtbWFyaXplZFZhbHVlcygpO1xuXHR9XG5cbn1cbiJdfQ==