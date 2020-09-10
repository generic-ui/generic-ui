/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UniqueFilterCalculatedEvent } from '../../domain/unique/calculate/unique-filter-calculated.event';
import { UniqueValuesRepository } from './unique-values.repository';
import { UniqueValuesReadModel } from './unique-values.read-model';
import { UniqueValueReadModel } from './unique-value.read-model';
var UniqueFilterCalculatedEventHandler = /** @class */ (function () {
    function UniqueFilterCalculatedEventHandler(uniqueValuesRepository) {
        this.uniqueValuesRepository = uniqueValuesRepository;
    }
    /**
     * @return {?}
     */
    UniqueFilterCalculatedEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return UniqueFilterCalculatedEvent;
    };
    /**
     * @param {?} calculatedEvent
     * @return {?}
     */
    UniqueFilterCalculatedEventHandler.prototype.handle = /**
     * @param {?} calculatedEvent
     * @return {?}
     */
    function (calculatedEvent) {
        if (calculatedEvent.ofMessageType('UniqueFilterCalculatedEvent')) {
            /** @type {?} */
            var uvRM_1 = new Map();
            calculatedEvent.getUniqueValues()
                .forEach((/**
             * @param {?} values
             * @param {?} key
             * @return {?}
             */
            function (values, key) {
                /** @type {?} */
                var valuesRM = values.map((/**
                 * @param {?} uv
                 * @return {?}
                 */
                function (uv) {
                    return new UniqueValueReadModel(uv.getId(), uv.getDisplayValue(), uv.isEnabled());
                }));
                uvRM_1.set(key, valuesRM);
            }));
            /** @type {?} */
            var uniqueValues = new UniqueValuesReadModel(uvRM_1);
            this.uniqueValuesRepository.next(calculatedEvent.getAggregateId(), uniqueValues);
        }
    };
    UniqueFilterCalculatedEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UniqueFilterCalculatedEventHandler.ctorParameters = function () { return [
        { type: UniqueValuesRepository }
    ]; };
    return UniqueFilterCalculatedEventHandler;
}());
export { UniqueFilterCalculatedEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UniqueFilterCalculatedEventHandler.prototype.uniqueValuesRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvZG9tYWluLWFwaS91bmlxdWUvdW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDM0csT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFakU7SUFHQyw0Q0FBNkIsc0JBQThDO1FBQTlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFDM0UsQ0FBQzs7OztJQUVELHFEQUFROzs7SUFBUjtRQUNDLE9BQU8sMkJBQTJCLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFRCxtREFBTTs7OztJQUFOLFVBQU8sZUFBNEM7UUFFbEQsSUFBSSxlQUFlLENBQUMsYUFBYSxDQUFDLDZCQUE2QixDQUFDLEVBQUU7O2dCQUU3RCxNQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUU7WUFFcEIsZUFBZSxDQUFDLGVBQWUsRUFBRTtpQkFDMUIsT0FBTzs7Ozs7WUFBQyxVQUFDLE1BQTBCLEVBQUUsR0FBVzs7b0JBRTFDLFFBQVEsR0FBRyxNQUFNLENBQUMsR0FBRzs7OztnQkFBQyxVQUFDLEVBQWU7b0JBQzNDLE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLGVBQWUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRixDQUFDLEVBQUM7Z0JBRUYsTUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDekIsQ0FBQyxFQUFDLENBQUM7O2dCQUdMLFlBQVksR0FBRyxJQUFJLHFCQUFxQixDQUMzQyxNQUFJLENBQ0o7WUFFRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNqRjtJQUNGLENBQUM7O2dCQWpDRCxVQUFVOzs7O2dCQUxGLHNCQUFzQjs7SUF3Qy9CLHlDQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0FsQ1ksa0NBQWtDOzs7Ozs7SUFFbEMsb0VBQStEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi91bmlxdWUvY2FsY3VsYXRlL3VuaXF1ZS1maWx0ZXItY2FsY3VsYXRlZC5ldmVudCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZXNSZXBvc2l0b3J5IH0gZnJvbSAnLi91bmlxdWUtdmFsdWVzLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVzUmVhZE1vZGVsIH0gZnJvbSAnLi91bmlxdWUtdmFsdWVzLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWUgfSBmcm9tICcuLi8uLi9kb21haW4vdW5pcXVlL3VuaXF1ZS12YWx1ZSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZVJlYWRNb2RlbCB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLnJlYWQtbW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB1bmlxdWVWYWx1ZXNSZXBvc2l0b3J5OiBVbmlxdWVWYWx1ZXNSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8VW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50PiB7XG5cdFx0cmV0dXJuIFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShjYWxjdWxhdGVkRXZlbnQ6IFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGNhbGN1bGF0ZWRFdmVudC5vZk1lc3NhZ2VUeXBlKCdVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnQnKSkge1xuXG5cdFx0XHRsZXQgdXZSTSA9IG5ldyBNYXAoKTtcblxuXHRcdFx0Y2FsY3VsYXRlZEV2ZW50LmdldFVuaXF1ZVZhbHVlcygpXG5cdFx0XHRcdFx0XHQgICAuZm9yRWFjaCgodmFsdWVzOiBBcnJheTxVbmlxdWVWYWx1ZT4sIGtleTogc3RyaW5nKSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0ICAgY29uc3QgdmFsdWVzUk0gPSB2YWx1ZXMubWFwKCh1djogVW5pcXVlVmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHQgICByZXR1cm4gbmV3IFVuaXF1ZVZhbHVlUmVhZE1vZGVsKHV2LmdldElkKCksIHV2LmdldERpc3BsYXlWYWx1ZSgpLCB1di5pc0VuYWJsZWQoKSk7XG5cdFx0XHRcdFx0XHRcdCAgIH0pO1xuXG5cdFx0XHRcdFx0XHRcdCAgIHV2Uk0uc2V0KGtleSwgdmFsdWVzUk0pO1xuXHRcdFx0XHRcdFx0ICAgfSk7XG5cblxuXHRcdFx0bGV0IHVuaXF1ZVZhbHVlcyA9IG5ldyBVbmlxdWVWYWx1ZXNSZWFkTW9kZWwoXG5cdFx0XHRcdHV2Uk1cblx0XHRcdCk7XG5cblx0XHRcdHRoaXMudW5pcXVlVmFsdWVzUmVwb3NpdG9yeS5uZXh0KGNhbGN1bGF0ZWRFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCB1bmlxdWVWYWx1ZXMpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=