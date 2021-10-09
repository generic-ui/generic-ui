/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FilterTypeArchive } from './filter-type.archive';
import { FilterTypeMap } from './filter-type-map';
import { FilterTypesInitedEvent } from '../../domain/type/init/filter-types-inited.event';
export class FilterTypeConfigFilterSetEventHandler {
    /**
     * @param {?} filterTypeArchive
     */
    constructor(filterTypeArchive) {
        this.filterTypeArchive = filterTypeArchive;
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
            this.filterTypeArchive.next(filterTypesInitedEvent.getAggregateId(), new FilterTypeMap(map));
        }
    }
}
FilterTypeConfigFilterSetEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FilterTypeConfigFilterSetEventHandler.ctorParameters = () => [
    { type: FilterTypeArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FilterTypeConfigFilterSetEventHandler.prototype.filterTypeArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUuY29uZmlnLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2FwaS90eXBlL2ZpbHRlci10eXBlLmNvbmZpZy1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBSzFGLE1BQU0sT0FBTyxxQ0FBcUM7Ozs7SUFFakQsWUFBNkIsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDakUsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLHNCQUE4QztRQUVwRCxJQUFJLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFOztrQkFFN0QsR0FBRyxHQUE0QyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUU7WUFFcEYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzdGO0lBQ0YsQ0FBQzs7O1lBbEJELFVBQVU7Ozs7WUFORixpQkFBaUI7Ozs7Ozs7SUFTYixrRUFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciwgRG9tYWluRXZlbnRUeXBlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUFyY2hpdmUgfSBmcm9tICcuL2ZpbHRlci10eXBlLmFyY2hpdmUnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZU1hcCB9IGZyb20gJy4vZmlsdGVyLXR5cGUtbWFwJztcbmltcG9ydCB7IEZpbHRlclR5cGVzSW5pdGVkRXZlbnQgfSBmcm9tICcuLi8uLi9kb21haW4vdHlwZS9pbml0L2ZpbHRlci10eXBlcy1pbml0ZWQuZXZlbnQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZVJlYWRNb2RlbCB9IGZyb20gJy4vZmlsdGVyLXR5cGUucmVhZC1tb2RlbCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbHRlclR5cGVDb25maWdGaWx0ZXJTZXRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8U3RydWN0dXJlSWQsIEZpbHRlclR5cGVzSW5pdGVkRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGZpbHRlclR5cGVBcmNoaXZlOiBGaWx0ZXJUeXBlQXJjaGl2ZSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPEZpbHRlclR5cGVzSW5pdGVkRXZlbnQ+IHtcblx0XHRyZXR1cm4gRmlsdGVyVHlwZXNJbml0ZWRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShmaWx0ZXJUeXBlc0luaXRlZEV2ZW50OiBGaWx0ZXJUeXBlc0luaXRlZEV2ZW50KTogdm9pZCB7XG5cblx0XHRpZiAoZmlsdGVyVHlwZXNJbml0ZWRFdmVudC5vZk1lc3NhZ2VUeXBlKCdGaWx0ZXJUeXBlc0luaXRlZEV2ZW50JykpIHtcblxuXHRcdFx0Y29uc3QgbWFwOiBNYXA8c3RyaW5nLCBBcnJheTxGaWx0ZXJUeXBlUmVhZE1vZGVsPj4gPSBmaWx0ZXJUeXBlc0luaXRlZEV2ZW50LmdldE1hcCgpO1xuXG5cdFx0XHR0aGlzLmZpbHRlclR5cGVBcmNoaXZlLm5leHQoZmlsdGVyVHlwZXNJbml0ZWRFdmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBuZXcgRmlsdGVyVHlwZU1hcChtYXApKTtcblx0XHR9XG5cdH1cblxufVxuIl19