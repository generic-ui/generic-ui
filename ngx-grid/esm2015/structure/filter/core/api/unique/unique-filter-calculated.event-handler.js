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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1jYWxjdWxhdGVkLmV2ZW50LWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9hcGkvdW5pcXVlL3VuaXF1ZS1maWx0ZXItY2FsY3VsYXRlZC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQzNHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR2pFLE1BQU0sT0FBTyxrQ0FBa0M7Ozs7SUFFOUMsWUFBNkIsc0JBQThDO1FBQTlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7SUFDM0UsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLDJCQUEyQixDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLGVBQTRDO1FBRWxELElBQUksZUFBZSxDQUFDLGFBQWEsQ0FBQyw2QkFBNkIsQ0FBQyxFQUFFOztnQkFFN0QsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFO1lBRXBCLGVBQWUsQ0FBQyxlQUFlLEVBQUU7aUJBQzFCLE9BQU87Ozs7O1lBQUMsQ0FBQyxNQUEwQixFQUFFLEdBQVcsRUFBRSxFQUFFOztzQkFFOUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxHQUFHOzs7O2dCQUFDLENBQUMsRUFBZSxFQUFFLEVBQUU7b0JBQy9DLE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLGVBQWUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRixDQUFDLEVBQUM7Z0JBRUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDekIsQ0FBQyxFQUFDLENBQUM7O2dCQUdMLFlBQVksR0FBRyxJQUFJLHFCQUFxQixDQUMzQyxJQUFJLENBQ0o7WUFFRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNqRjtJQUNGLENBQUM7OztZQWpDRCxVQUFVOzs7O1lBTEYsc0JBQXNCOzs7Ozs7O0lBUWxCLG9FQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vdW5pcXVlL2NhbGN1bGF0ZS91bmlxdWUtZmlsdGVyLWNhbGN1bGF0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVzUmVwb3NpdG9yeSB9IGZyb20gJy4vdW5pcXVlLXZhbHVlcy5yZXBvc2l0b3J5JztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlc1JlYWRNb2RlbCB9IGZyb20gJy4vdW5pcXVlLXZhbHVlcy5yZWFkLW1vZGVsJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlIH0gZnJvbSAnLi4vLi4vZG9tYWluL3VuaXF1ZS91bmlxdWUtdmFsdWUnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVSZWFkTW9kZWwgfSBmcm9tICcuL3VuaXF1ZS12YWx1ZS5yZWFkLW1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdW5pcXVlVmFsdWVzUmVwb3NpdG9yeTogVW5pcXVlVmFsdWVzUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPFVuaXF1ZUZpbHRlckNhbGN1bGF0ZWRFdmVudD4ge1xuXHRcdHJldHVybiBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoY2FsY3VsYXRlZEV2ZW50OiBVbmlxdWVGaWx0ZXJDYWxjdWxhdGVkRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChjYWxjdWxhdGVkRXZlbnQub2ZNZXNzYWdlVHlwZSgnVW5pcXVlRmlsdGVyQ2FsY3VsYXRlZEV2ZW50JykpIHtcblxuXHRcdFx0bGV0IHV2Uk0gPSBuZXcgTWFwKCk7XG5cblx0XHRcdGNhbGN1bGF0ZWRFdmVudC5nZXRVbmlxdWVWYWx1ZXMoKVxuXHRcdFx0XHRcdFx0ICAgLmZvckVhY2goKHZhbHVlczogQXJyYXk8VW5pcXVlVmFsdWU+LCBrZXk6IHN0cmluZykgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdCAgIGNvbnN0IHZhbHVlc1JNID0gdmFsdWVzLm1hcCgodXY6IFVuaXF1ZVZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0ICAgcmV0dXJuIG5ldyBVbmlxdWVWYWx1ZVJlYWRNb2RlbCh1di5nZXRJZCgpLCB1di5nZXREaXNwbGF5VmFsdWUoKSwgdXYuaXNFbmFibGVkKCkpO1xuXHRcdFx0XHRcdFx0XHQgICB9KTtcblxuXHRcdFx0XHRcdFx0XHQgICB1dlJNLnNldChrZXksIHZhbHVlc1JNKTtcblx0XHRcdFx0XHRcdCAgIH0pO1xuXG5cblx0XHRcdGxldCB1bmlxdWVWYWx1ZXMgPSBuZXcgVW5pcXVlVmFsdWVzUmVhZE1vZGVsKFxuXHRcdFx0XHR1dlJNXG5cdFx0XHQpO1xuXG5cdFx0XHR0aGlzLnVuaXF1ZVZhbHVlc1JlcG9zaXRvcnkubmV4dChjYWxjdWxhdGVkRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgdW5pcXVlVmFsdWVzKTtcblx0XHR9XG5cdH1cblxufVxuIl19