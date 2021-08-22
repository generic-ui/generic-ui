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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXR5cGUuY29uZmlnLWZpbHRlci1zZXQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2FwaS90eXBlL2ZpbHRlci10eXBlLmNvbmZpZy1maWx0ZXItc2V0LmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBSzFGLE1BQU0sT0FBTyxxQ0FBcUM7Ozs7SUFFakQsWUFBNkIsb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDdkUsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLHNCQUFzQixDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLHNCQUE4QztRQUVwRCxJQUFJLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFOztrQkFFN0QsR0FBRyxHQUE0QyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUU7WUFFcEYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2hHO0lBQ0YsQ0FBQzs7O1lBbEJELFVBQVU7Ozs7WUFORixvQkFBb0I7Ozs7Ozs7SUFTaEIscUVBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIsIERvbWFpbkV2ZW50VHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEZpbHRlclR5cGVSZXBvc2l0b3J5IH0gZnJvbSAnLi9maWx0ZXItdHlwZS5yZXBvc2l0b3J5JztcbmltcG9ydCB7IEZpbHRlclR5cGVNYXAgfSBmcm9tICcuL2ZpbHRlci10eXBlLW1hcCc7XG5pbXBvcnQgeyBGaWx0ZXJUeXBlc0luaXRlZEV2ZW50IH0gZnJvbSAnLi4vLi4vZG9tYWluL3R5cGUvaW5pdC9maWx0ZXItdHlwZXMtaW5pdGVkLmV2ZW50JztcbmltcG9ydCB7IEZpbHRlclR5cGVSZWFkTW9kZWwgfSBmcm9tICcuL2ZpbHRlci10eXBlLnJlYWQtbW9kZWwnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWx0ZXJUeXBlQ29uZmlnRmlsdGVyU2V0RXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPFN0cnVjdHVyZUlkLCBGaWx0ZXJUeXBlc0luaXRlZEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBmaWx0ZXJUeXBlUmVwb3NpdG9yeTogRmlsdGVyVHlwZVJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxGaWx0ZXJUeXBlc0luaXRlZEV2ZW50PiB7XG5cdFx0cmV0dXJuIEZpbHRlclR5cGVzSW5pdGVkRXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZmlsdGVyVHlwZXNJbml0ZWRFdmVudDogRmlsdGVyVHlwZXNJbml0ZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGZpbHRlclR5cGVzSW5pdGVkRXZlbnQub2ZNZXNzYWdlVHlwZSgnRmlsdGVyVHlwZXNJbml0ZWRFdmVudCcpKSB7XG5cblx0XHRcdGNvbnN0IG1hcDogTWFwPHN0cmluZywgQXJyYXk8RmlsdGVyVHlwZVJlYWRNb2RlbD4+ID0gZmlsdGVyVHlwZXNJbml0ZWRFdmVudC5nZXRNYXAoKTtcblxuXHRcdFx0dGhpcy5maWx0ZXJUeXBlUmVwb3NpdG9yeS5uZXh0KGZpbHRlclR5cGVzSW5pdGVkRXZlbnQuZ2V0QWdncmVnYXRlSWQoKSwgbmV3IEZpbHRlclR5cGVNYXAobWFwKSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==