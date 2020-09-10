/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UniqueFilterCalculatedEvent } from '../../domain/unique/calculate/unique-filter-calculated.event';
import { UniqueValuesRepository } from './unique-values.repository';
import { UniqueValuesReadModel } from './unique-values.read-model';
import { UniqueValueReadModel } from './unique-value.read-model';
export class UniqueFilterCalculatedEventHandler {
    /**
     * @param {?} uniqueValuesRepository
     */
    constructor(uniqueValuesRepository) {
        this.uniqueValuesRepository = uniqueValuesRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return UniqueFilterCalculatedEvent;
    }
    /**
     * @param {?} calculatedEvent
     * @return {?}
     */
    handle(calculatedEvent) {
        if (calculatedEvent.ofMessageType('UniqueFilterCalculatedEvent')) {
            /** @type {?} */
            let uvRM = new Map();
            calculatedEvent.getUniqueValues()
                .forEach((/**
             * @param {?} values
             * @param {?} key
             * @return {?}
             */
            (values, key) => {
                /** @type {?} */
                const valuesRM = values.map((/**
                 * @param {?} uv
                 * @return {?}
                 */
                (uv) => {
                    return new UniqueValueReadModel(uv.getId(), uv.getDisplayValue(), uv.isEnabled());
                }));
                uvRM.set(key, valuesRM);
            }));
            /** @type {?} */
            let uniqueValues = new UniqueValuesReadModel(uvRM);
            this.uniqueValuesRepository.next(calculatedEvent.getAggregateId(), uniqueValues);
        }
    }
}
UniqueFilterCalculatedEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UniqueFilterCalculatedEventHandler.ctorParameters = () => [
    { type: UniqueValuesRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    UniqueFilterCalculatedEventHandler.prototype.uniqueValuesRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZG9tYWluLWFwaS91bmlxdWUvdW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDM0csT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHakUsTUFBTSxPQUFPLGtDQUFrQzs7OztJQUU5QyxZQUE2QixzQkFBOEM7UUFBOUMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUMzRSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sMkJBQTJCLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsZUFBNEM7UUFFbEQsSUFBSSxlQUFlLENBQUMsYUFBYSxDQUFDLDZCQUE2QixDQUFDLEVBQUU7O2dCQUU3RCxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7WUFFcEIsZUFBZSxDQUFDLGVBQWUsRUFBRTtpQkFDMUIsT0FBTzs7Ozs7WUFBQyxDQUFDLE1BQTBCLEVBQUUsR0FBVyxFQUFFLEVBQUU7O3NCQUU5QyxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUc7Ozs7Z0JBQUMsQ0FBQyxFQUFlLEVBQUUsRUFBRTtvQkFDL0MsT0FBTyxJQUFJLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsZUFBZSxFQUFFLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7Z0JBQ25GLENBQUMsRUFBQztnQkFFRixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN6QixDQUFDLEVBQUMsQ0FBQzs7Z0JBR0wsWUFBWSxHQUFHLElBQUkscUJBQXFCLENBQzNDLElBQUksQ0FDSjtZQUVELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQ2pGO0lBQ0YsQ0FBQzs7O1lBakNELFVBQVU7Ozs7WUFMRixzQkFBc0I7Ozs7Ozs7SUFRbEIsb0VBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi91bmlxdWUvY2FsY3VsYXRlL3VuaXF1ZS1maWx0ZXItY2FsY3VsYXRlZC5ldmVudCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi91bmlxdWUtdmFsdWVzLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVzUmVhZE1vZGVsIH0gZnJvbSAnLi91bmlxdWUtdmFsdWVzLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWUgfSBmcm9tICcuLi8uLi9kb21haW4vdW5pcXVlL3VuaXF1ZS12YWx1ZSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZVJlYWRNb2RlbCB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLnJlYWQtbW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB1bmlxdWVWYWx1ZXNSZXBvc2l0b3J5OiBVbmlxdWVWYWx1ZXNSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8VW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50PiB7XG5cdFx0cmV0dXJuIFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShjYWxjdWxhdGVkRXZlbnQ6IFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGNhbGN1bGF0ZWRFdmVudC5vZk1lc3NhZ2VUeXBlKCdVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnQnKSkge1xuXG5cdFx0XHRsZXQgdXZSTSA9IG5ldyBNYXAoKTtcblxuXHRcdFx0Y2FsY3VsYXRlZEV2ZW50LmdldFVuaXF1ZVZhbHVlcygpXG5cdFx0XHRcdFx0XHQgICAuZm9yRWFjaCgodmFsdWVzOiBBcnJheTxVbmlxdWVWYWx1ZT4sIGtleTogc3RyaW5nKSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0ICAgY29uc3QgdmFsdWVzUk0gPSB2YWx1ZXMubWFwKCh1djogVW5pcXVlVmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHQgICByZXR1cm4gbmV3IFVuaXF1ZVZhbHVlUmVhZE1vZGVsKHV2LmdldElkKCksIHV2LmdldERpc3BsYXlWYWx1ZSgpLCB1di5pc0VuYWJsZWQoKSk7XG5cdFx0XHRcdFx0XHRcdCAgIH0pO1xuXG5cdFx0XHRcdFx0XHRcdCAgIHV2Uk0uc2V0KGtleSwgdmFsdWVzUk0pO1xuXHRcdFx0XHRcdFx0ICAgfSk7XG5cblxuXHRcdFx0bGV0IHVuaXF1ZVZhbHVlcyA9IG5ldyBVbmlxdWVWYWx1ZXNSZWFkTW9kZWwoXG5cdFx0XHRcdHV2Uk1cblx0XHRcdCk7XG5cblx0XHRcdHRoaXMudW5pcXVlVmFsdWVzUmVwb3NpdG9yeS5uZXh0KGNhbGN1bGF0ZWRFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCB1bmlxdWVWYWx1ZXMpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=