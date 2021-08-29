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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9hcGkvdW5pcXVlL3VuaXF1ZS1maWx0ZXItY2FsY3VsYXRlZC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzNHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWpFO0lBR0MsNENBQTZCLHNCQUE4QztRQUE5QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO0lBQzNFLENBQUM7Ozs7SUFFRCxxREFBUTs7O0lBQVI7UUFDQyxPQUFPLDJCQUEyQixDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsbURBQU07Ozs7SUFBTixVQUFPLGVBQTRDO1FBRWxELElBQUksZUFBZSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFFOztnQkFFM0QsTUFBSSxHQUFHLElBQUksR0FBRyxFQUFFO1lBRXRCLGVBQWUsQ0FBQyxlQUFlLEVBQUU7aUJBQzFCLE9BQU87Ozs7O1lBQUMsVUFBQyxNQUEwQixFQUFFLEdBQVc7O29CQUUxQyxRQUFRLEdBQUcsTUFBTSxDQUFDLEdBQUc7Ozs7Z0JBQUMsVUFBQyxFQUFlO29CQUMzQyxPQUFPLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxlQUFlLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztnQkFDbkYsQ0FBQyxFQUFDO2dCQUVGLE1BQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3pCLENBQUMsRUFBQyxDQUFDOztnQkFHSCxZQUFZLEdBQUcsSUFBSSxxQkFBcUIsQ0FDN0MsTUFBSSxDQUNKO1lBRUQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDakY7SUFDRixDQUFDOztnQkFqQ0QsVUFBVTs7OztnQkFMRixzQkFBc0I7O0lBd0MvQix5Q0FBQztDQUFBLEFBbkNELElBbUNDO1NBbENZLGtDQUFrQzs7Ozs7O0lBRWxDLG9FQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vdW5pcXVlL2NhbGN1bGF0ZS91bmlxdWUtZmlsdGVyLWNhbGN1bGF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVzUmVwb3NpdG9yeSB9IGZyb20gJy4vdW5pcXVlLXZhbHVlcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlc1JlYWRNb2RlbCB9IGZyb20gJy4vdW5pcXVlLXZhbHVlcy5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3VuaXF1ZS91bmlxdWUtdmFsdWUnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVSZWFkTW9kZWwgfSBmcm9tICcuL3VuaXF1ZS12YWx1ZS5yZWFkLW1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdW5pcXVlVmFsdWVzUmVwb3NpdG9yeTogVW5pcXVlVmFsdWVzUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudD4ge1xuXHRcdHJldHVybiBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoY2FsY3VsYXRlZEV2ZW50OiBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChjYWxjdWxhdGVkRXZlbnQub2ZNZXNzYWdlVHlwZSgnVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3QgdXZSTSA9IG5ldyBNYXAoKTtcblxuXHRcdFx0Y2FsY3VsYXRlZEV2ZW50LmdldFVuaXF1ZVZhbHVlcygpXG5cdFx0XHRcdFx0XHQgICAuZm9yRWFjaCgodmFsdWVzOiBBcnJheTxVbmlxdWVWYWx1ZT4sIGtleTogc3RyaW5nKSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0ICAgY29uc3QgdmFsdWVzUk0gPSB2YWx1ZXMubWFwKCh1djogVW5pcXVlVmFsdWUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHQgICByZXR1cm4gbmV3IFVuaXF1ZVZhbHVlUmVhZE1vZGVsKHV2LmdldElkKCksIHV2LmdldERpc3BsYXlWYWx1ZSgpLCB1di5pc0VuYWJsZWQoKSk7XG5cdFx0XHRcdFx0XHRcdCAgIH0pO1xuXG5cdFx0XHRcdFx0XHRcdCAgIHV2Uk0uc2V0KGtleSwgdmFsdWVzUk0pO1xuXHRcdFx0XHRcdFx0ICAgfSk7XG5cblxuXHRcdFx0Y29uc3QgdW5pcXVlVmFsdWVzID0gbmV3IFVuaXF1ZVZhbHVlc1JlYWRNb2RlbChcblx0XHRcdFx0dXZSTVxuXHRcdFx0KTtcblxuXHRcdFx0dGhpcy51bmlxdWVWYWx1ZXNSZXBvc2l0b3J5Lm5leHQoY2FsY3VsYXRlZEV2ZW50LmdldEFnZ3JlZ2F0ZUlkKCksIHVuaXF1ZVZhbHVlcyk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==