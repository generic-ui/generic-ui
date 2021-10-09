/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UniqueFilterCalculatedEvent } from '../../domain/unique/calculate/unique-filter-calculated.event';
import { UniqueValuesArchive } from './unique-values.archive';
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
            const uvRM = new Map();
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
            const uniqueValues = new UniqueValuesReadModel(uvRM);
            this.uniqueValuesRepository.next(calculatedEvent.getAggregateId(), uniqueValues);
        }
    }
}
UniqueFilterCalculatedEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UniqueFilterCalculatedEventHandler.ctorParameters = () => [
    { type: UniqueValuesArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    UniqueFilterCalculatedEventHandler.prototype.uniqueValuesRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9hcGkvdW5pcXVlL3VuaXF1ZS1maWx0ZXItY2FsY3VsYXRlZC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzNHLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR2pFLE1BQU0sT0FBTyxrQ0FBa0M7Ozs7SUFFOUMsWUFBNkIsc0JBQTJDO1FBQTNDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBcUI7SUFDeEUsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLDJCQUEyQixDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLGVBQTRDO1FBRWxELElBQUksZUFBZSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFFOztrQkFFM0QsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFO1lBRXRCLGVBQWUsQ0FBQyxlQUFlLEVBQUU7aUJBQzFCLE9BQU87Ozs7O1lBQUMsQ0FBQyxNQUEwQixFQUFFLEdBQVcsRUFBRSxFQUFFOztzQkFFOUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHOzs7O2dCQUFDLENBQUMsRUFBZSxFQUFFLEVBQUU7b0JBQy9DLE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLGVBQWUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRixDQUFDLEVBQUM7Z0JBRUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDekIsQ0FBQyxFQUFDLENBQUM7O2tCQUdILFlBQVksR0FBRyxJQUFJLHFCQUFxQixDQUM3QyxJQUFJLENBQ0o7WUFFRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNqRjtJQUNGLENBQUM7OztZQWpDRCxVQUFVOzs7O1lBTEYsbUJBQW1COzs7Ozs7O0lBUWYsb0VBQTREIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudCB9IGZyb20gJy4uLy4uL2RvbWFpbi91bmlxdWUvY2FsY3VsYXRlL3VuaXF1ZS1maWx0ZXItY2FsY3VsYXRlZC5ldmVudCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZXNBcmNoaXZlIH0gZnJvbSAnLi91bmlxdWUtdmFsdWVzLmFyY2hpdmUnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVzUmVhZE1vZGVsIH0gZnJvbSAnLi91bmlxdWUtdmFsdWVzLnJlYWQtbW9kZWwnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWUgfSBmcm9tICcuLi8uLi9kb21haW4vdW5pcXVlL3VuaXF1ZS12YWx1ZSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZVJlYWRNb2RlbCB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLnJlYWQtbW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxTdHJ1Y3R1cmVJZCwgVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB1bmlxdWVWYWx1ZXNSZXBvc2l0b3J5OiBVbmlxdWVWYWx1ZXNBcmNoaXZlKSB7XG5cdH1cblxuXHRmb3JFdmVudCgpOiBEb21haW5FdmVudFR5cGU8VW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50PiB7XG5cdFx0cmV0dXJuIFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShjYWxjdWxhdGVkRXZlbnQ6IFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGNhbGN1bGF0ZWRFdmVudC5vZk1lc3NhZ2VUeXBlKCdVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnQnKSkge1xuXG5cdFx0XHRjb25zdCB1dlJNID0gbmV3IE1hcCgpO1xuXG5cdFx0XHRjYWxjdWxhdGVkRXZlbnQuZ2V0VW5pcXVlVmFsdWVzKClcblx0XHRcdFx0XHRcdCAgIC5mb3JFYWNoKCh2YWx1ZXM6IEFycmF5PFVuaXF1ZVZhbHVlPiwga2V5OiBzdHJpbmcpID0+IHtcblxuXHRcdFx0XHRcdFx0XHQgICBjb25zdCB2YWx1ZXNSTSA9IHZhbHVlcy5tYXAoKHV2OiBVbmlxdWVWYWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdCAgIHJldHVybiBuZXcgVW5pcXVlVmFsdWVSZWFkTW9kZWwodXYuZ2V0SWQoKSwgdXYuZ2V0RGlzcGxheVZhbHVlKCksIHV2LmlzRW5hYmxlZCgpKTtcblx0XHRcdFx0XHRcdFx0ICAgfSk7XG5cblx0XHRcdFx0XHRcdFx0ICAgdXZSTS5zZXQoa2V5LCB2YWx1ZXNSTSk7XG5cdFx0XHRcdFx0XHQgICB9KTtcblxuXG5cdFx0XHRjb25zdCB1bmlxdWVWYWx1ZXMgPSBuZXcgVW5pcXVlVmFsdWVzUmVhZE1vZGVsKFxuXHRcdFx0XHR1dlJNXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLnVuaXF1ZVZhbHVlc1JlcG9zaXRvcnkubmV4dChjYWxjdWxhdGVkRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgdW5pcXVlVmFsdWVzKTtcblx0XHR9XG5cdH1cblxufVxuIl19