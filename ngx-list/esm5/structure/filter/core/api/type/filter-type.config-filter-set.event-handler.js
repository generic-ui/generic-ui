/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FilterTypeRepository } from './filter-type.repository';
import { FilterTypeMap } from './filter-type-map';
import { FilterTypesInitedEvent } from '../../domain/type/init/filter-types-inited.event';
var FilterTypeConfigFilterSetEventHandler = /** @class */ (function () {
    function FilterTypeConfigFilterSetEventHandler(filterTypeRepository) {
        this.filterTypeRepository = filterTypeRepository;
    }
    /**
     * @return {?}
     */
    FilterTypeConfigFilterSetEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return FilterTypesInitedEvent;
    };
    /**
     * @param {?} filterTypesInitedEvent
     * @return {?}
     */
    FilterTypeConfigFilterSetEventHandler.prototype.handle = /**
     * @param {?} filterTypesInitedEvent
     * @return {?}
     */
    function (filterTypesInitedEvent) {
        if (filterTypesInitedEvent.ofMessageType('FilterTypesInitedEvent')) {
            /** @type {?} */
            var map = filterTypesInitedEvent.getMap();
            this.filterTypeRepository.next(filterTypesInitedEvent.getAggregateId(), new FilterTypeMap(map));
        }
    };
    FilterTypeConfigFilterSetEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FilterTypeConfigFilterSetEventHandler.ctorParameters = function () { return [
        { type: FilterTypeRepository }
    ]; };
    return FilterTypeConfigFilterSetEventHandler;
}());
export { FilterTypeConfigFilterSetEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterTypeConfigFilterSetEventHandler.prototype.filterTypeRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUuY29uZmlnLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2FwaS90eXBlL2ZpbHRlci10eXBlLmNvbmZpZy1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBSTFGO0lBR0MsK0NBQTZCLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ3ZFLENBQUM7Ozs7SUFFRCx3REFBUTs7O0lBQVI7UUFDQyxPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsc0RBQU07Ozs7SUFBTixVQUFPLHNCQUE4QztRQUVwRCxJQUFJLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFOztnQkFFN0QsR0FBRyxHQUE0QyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUU7WUFFcEYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hHO0lBQ0YsQ0FBQzs7Z0JBbEJELFVBQVU7Ozs7Z0JBTkYsb0JBQW9COztJQTBCN0IsNENBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQW5CWSxxQ0FBcUM7Ozs7OztJQUVyQyxxRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZVJlcG9zaXRvcnkgfSBmcm9tICcuL2ZpbHRlci10eXBlLnJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRmlsdGVyVHlwZU1hcCB9IGZyb20gJy4vZmlsdGVyLXR5cGUtbWFwJztcbmltcG9ydCB7IEZpbHRlclR5cGVzSW5pdGVkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vdHlwZS9pbml0L2ZpbHRlci10eXBlcy1pbml0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZVJlYWRNb2RlbCB9IGZyb20gJy4vZmlsdGVyLXR5cGUucmVhZC1tb2RlbCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbHRlclR5cGVDb25maWdGaWx0ZXJTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIEZpbHRlclR5cGVzSW5pdGVkRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpbHRlclR5cGVSZXBvc2l0b3J5OiBGaWx0ZXJUeXBlUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPEZpbHRlclR5cGVzSW5pdGVkRXZlbnQ+IHtcblx0XHRyZXR1cm4gRmlsdGVyVHlwZXNJbml0ZWRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShmaWx0ZXJUeXBlc0luaXRlZEV2ZW50OiBGaWx0ZXJUeXBlc0luaXRlZEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZmlsdGVyVHlwZXNJbml0ZWRFdmVudC5vZk1lc3NhZ2VUeXBlKCdGaWx0ZXJUeXBlc0luaXRlZEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3QgbWFwOiBNYXA8c3RyaW5nLCBBcnJheTxGaWx0ZXJUeXBlUmVhZE1vZGVsPj4gPSBmaWx0ZXJUeXBlc0luaXRlZEV2ZW50LmdldE1hcCgpO1xuXG5cdFx0XHR0aGlzLmZpbHRlclR5cGVSZXBvc2l0b3J5Lm5leHQoZmlsdGVyVHlwZXNJbml0ZWRFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBuZXcgRmlsdGVyVHlwZU1hcChtYXApKTtcblx0XHR9XG5cdH1cblxufVxuIl19