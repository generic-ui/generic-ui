/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FilterTypeRepository } from './filter-type.repository';
import { FilterTypeMap } from './filter-type-map';
import { FilterTypesInitedEvent } from '../../domain/type/init/filter-types-inited.event';
export class FilterTypeConfigFilterSetEventHandler {
    /**
     * @param {?} filterTypeRepository
     */
    constructor(filterTypeRepository) {
        this.filterTypeRepository = filterTypeRepository;
    }
    /**
     * @return {?}
     */
    forEvent() {
        return FilterTypesInitedEvent;
    }
    /**
     * @param {?} filterTypesInitedEvent
     * @return {?}
     */
    handle(filterTypesInitedEvent) {
        if (filterTypesInitedEvent.ofMessageType('FilterTypesInitedEvent')) {
            /** @type {?} */
            const map = filterTypesInitedEvent.getMap();
            this.filterTypeRepository.next(filterTypesInitedEvent.getAggregateId(), new FilterTypeMap(map));
        }
    }
}
FilterTypeConfigFilterSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FilterTypeConfigFilterSetEventHandler.ctorParameters = () => [
    { type: FilterTypeRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterTypeConfigFilterSetEventHandler.prototype.filterTypeRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUuY29uZmlnLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9kb21haW4tYXBpL3R5cGUvZmlsdGVyLXR5cGUuY29uZmlnLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUszQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFLMUYsTUFBTSxPQUFPLHFDQUFxQzs7OztJQUVqRCxZQUE2QixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUN2RSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sc0JBQXNCLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsc0JBQThDO1FBRXBELElBQUksc0JBQXNCLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLEVBQUU7O2tCQUU3RCxHQUFHLEdBQTRDLHNCQUFzQixDQUFDLE1BQU0sRUFBRTtZQUVwRixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGNBQWMsRUFBRSxFQUFFLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDaEc7SUFDRixDQUFDOzs7WUFsQkQsVUFBVTs7OztZQU5GLG9CQUFvQjs7Ozs7OztJQVNoQixxRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZVJlcG9zaXRvcnkgfSBmcm9tICcuL2ZpbHRlci10eXBlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRmlsdGVyVHlwZU1hcCB9IGZyb20gJy4vZmlsdGVyLXR5cGUtbWFwJztcbmltcG9ydCB7IEZpbHRlclR5cGVzSW5pdGVkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vdHlwZS9pbml0L2ZpbHRlci10eXBlcy1pbml0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZVJlYWRNb2RlbCB9IGZyb20gJy4vZmlsdGVyLXR5cGUucmVhZC1tb2RlbCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbHRlclR5cGVDb25maWdGaWx0ZXJTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIEZpbHRlclR5cGVzSW5pdGVkRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpbHRlclR5cGVSZXBvc2l0b3J5OiBGaWx0ZXJUeXBlUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPEZpbHRlclR5cGVzSW5pdGVkRXZlbnQ+IHtcblx0XHRyZXR1cm4gRmlsdGVyVHlwZXNJbml0ZWRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShmaWx0ZXJUeXBlc0luaXRlZEV2ZW50OiBGaWx0ZXJUeXBlc0luaXRlZEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZmlsdGVyVHlwZXNJbml0ZWRFdmVudC5vZk1lc3NhZ2VUeXBlKCdGaWx0ZXJUeXBlc0luaXRlZEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3QgbWFwOiBNYXA8c3RyaW5nLCBBcnJheTxGaWx0ZXJUeXBlUmVhZE1vZGVsPj4gPSBmaWx0ZXJUeXBlc0luaXRlZEV2ZW50LmdldE1hcCgpO1xuXG5cdFx0XHR0aGlzLmZpbHRlclR5cGVSZXBvc2l0b3J5Lm5leHQoZmlsdGVyVHlwZXNJbml0ZWRFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBuZXcgRmlsdGVyVHlwZU1hcChtYXApKTtcblx0XHR9XG5cdH1cblxufVxuIl19