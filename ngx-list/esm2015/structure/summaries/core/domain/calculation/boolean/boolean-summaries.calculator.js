import { Injectable } from '@angular/core';
import { SummariesCalculator } from '../summaries.calculator';
import { BooleanSummarizedValues } from './boolean-summarized.values';
import { DataType } from '../../../../../field/core/domain/field/data/data-type';
import { SummariesType } from '../../summaries.type';
import * as i0 from "@angular/core";
export class BooleanSummariesCalculator extends SummariesCalculator {
    constructor() {
        super();
        this.truthy = new Map();
        this.falsy = new Map();
    }
    forDataType(dataType) {
        return dataType === DataType.BOOLEAN;
    }
    prepare(field) {
        const key = field.getKey();
        if (field.isSummaries(SummariesType.TRUTHY)) {
            this.truthy.set(key, 0);
        }
        if (field.isSummaries(SummariesType.FALSY)) {
            this.falsy.set(key, 0);
        }
    }
    postCalculate(field, items) {
    }
    aggregate(field, value) {
        const booleanValue = value, // (value as any === 'true'),
        key = field.getKey(), truthyForField = this.truthy.get(key), falsyForField = this.falsy.get(key);
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
    generateAggregatedValues(field) {
        const key = field.getKey();
        return new BooleanSummarizedValues(this.truthy.get(key), this.falsy.get(key));
    }
}
BooleanSummariesCalculator.ɵfac = function BooleanSummariesCalculator_Factory(t) { return new (t || BooleanSummariesCalculator)(); };
BooleanSummariesCalculator.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BooleanSummariesCalculator, factory: BooleanSummariesCalculator.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BooleanSummariesCalculator, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi1zdW1tYXJpZXMuY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvc3RydWN0dXJlL3N1bW1hcmllcy9jb3JlL2RvbWFpbi9jYWxjdWxhdGlvbi9ib29sZWFuL2Jvb2xlYW4tc3VtbWFyaWVzLmNhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQU1yRCxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsbUJBQXFEO0lBS3BHO1FBQ0MsS0FBSyxFQUFFLENBQUM7UUFKUSxXQUFNLEdBQUcsSUFBSSxHQUFHLEVBQWtCLENBQUM7UUFDbkMsVUFBSyxHQUFHLElBQUksR0FBRyxFQUFrQixDQUFDO0lBSW5ELENBQUM7SUFFRCxXQUFXLENBQUMsUUFBa0I7UUFDN0IsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLE9BQU8sQ0FBQztJQUN0QyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVk7UUFFbkIsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRTNCLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkI7SUFDRixDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQVksRUFBRSxLQUE4QjtJQUMxRCxDQUFDO0lBRUQsU0FBUyxDQUFDLEtBQVksRUFBRSxLQUFjO1FBRXJDLE1BQU0sWUFBWSxHQUFHLEtBQUssRUFBRSw2QkFBNkI7UUFDeEQsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsRUFDcEIsY0FBYyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUNyQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFckMsSUFBSSxZQUFZLEVBQUU7WUFDakIsSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN6QztTQUNEO2FBQU07WUFDTixJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Q7SUFFRixDQUFDO0lBRUQsd0JBQXdCLENBQUMsS0FBWTtRQUVwQyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFM0IsT0FBTyxJQUFJLHVCQUF1QixDQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQ25CLENBQUM7SUFDSCxDQUFDOztvR0F4RFcsMEJBQTBCO2dGQUExQiwwQkFBMEIsV0FBMUIsMEJBQTBCO3VGQUExQiwwQkFBMEI7Y0FEdEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3VtbWFyaWVzQ2FsY3VsYXRvciB9IGZyb20gJy4uL3N1bW1hcmllcy5jYWxjdWxhdG9yJztcbmltcG9ydCB7IEJvb2xlYW5TdW1tYXJpemVkVmFsdWVzIH0gZnJvbSAnLi9ib29sZWFuLXN1bW1hcml6ZWQudmFsdWVzJztcblxuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9maWVsZC9jb3JlL2RvbWFpbi9maWVsZC9kYXRhL2RhdGEtdHlwZSc7XG5pbXBvcnQgeyBTdW1tYXJpZXNUeXBlIH0gZnJvbSAnLi4vLi4vc3VtbWFyaWVzLnR5cGUnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCb29sZWFuU3VtbWFyaWVzQ2FsY3VsYXRvciBleHRlbmRzIFN1bW1hcmllc0NhbGN1bGF0b3I8Ym9vbGVhbiwgQm9vbGVhblN1bW1hcml6ZWRWYWx1ZXM+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHRydXRoeSA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgZmFsc3kgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyPigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRmb3JEYXRhVHlwZShkYXRhVHlwZTogRGF0YVR5cGUpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gZGF0YVR5cGUgPT09IERhdGFUeXBlLkJPT0xFQU47XG5cdH1cblxuXHRwcmVwYXJlKGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXG5cdFx0Y29uc3Qga2V5ID0gZmllbGQuZ2V0S2V5KCk7XG5cblx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5UUlVUSFkpKSB7XG5cdFx0XHR0aGlzLnRydXRoeS5zZXQoa2V5LCAwKTtcblx0XHR9XG5cblx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5GQUxTWSkpIHtcblx0XHRcdHRoaXMuZmFsc3kuc2V0KGtleSwgMCk7XG5cdFx0fVxuXHR9XG5cblx0cG9zdENhbGN1bGF0ZShmaWVsZDogRmllbGQsIGl0ZW1zOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5Pik6IHZvaWQge1xuXHR9XG5cblx0YWdncmVnYXRlKGZpZWxkOiBGaWVsZCwgdmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcblxuXHRcdGNvbnN0IGJvb2xlYW5WYWx1ZSA9IHZhbHVlLCAvLyAodmFsdWUgYXMgYW55ID09PSAndHJ1ZScpLFxuXHRcdFx0a2V5ID0gZmllbGQuZ2V0S2V5KCksXG5cdFx0XHR0cnV0aHlGb3JGaWVsZCA9IHRoaXMudHJ1dGh5LmdldChrZXkpLFxuXHRcdFx0ZmFsc3lGb3JGaWVsZCA9IHRoaXMuZmFsc3kuZ2V0KGtleSk7XG5cblx0XHRpZiAoYm9vbGVhblZhbHVlKSB7XG5cdFx0XHRpZiAoZmllbGQuaXNTdW1tYXJpZXMoU3VtbWFyaWVzVHlwZS5UUlVUSFkpKSB7XG5cdFx0XHRcdHRoaXMudHJ1dGh5LnNldChrZXksIHRydXRoeUZvckZpZWxkICsgMSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChmaWVsZC5pc1N1bW1hcmllcyhTdW1tYXJpZXNUeXBlLkZBTFNZKSkge1xuXHRcdFx0XHR0aGlzLmZhbHN5LnNldChrZXksIGZhbHN5Rm9yRmllbGQgKyAxKTtcblx0XHRcdH1cblx0XHR9XG5cblx0fVxuXG5cdGdlbmVyYXRlQWdncmVnYXRlZFZhbHVlcyhmaWVsZDogRmllbGQpOiBCb29sZWFuU3VtbWFyaXplZFZhbHVlcyB7XG5cblx0XHRjb25zdCBrZXkgPSBmaWVsZC5nZXRLZXkoKTtcblxuXHRcdHJldHVybiBuZXcgQm9vbGVhblN1bW1hcml6ZWRWYWx1ZXMoXG5cdFx0XHR0aGlzLnRydXRoeS5nZXQoa2V5KSxcblx0XHRcdHRoaXMuZmFsc3kuZ2V0KGtleSlcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==