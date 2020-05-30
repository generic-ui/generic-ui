/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventBus, EventRepository } from '@generic-ui/hermes';
import { ListViewModeSetEvent } from '../domain/mode/list-view-mode-set.event';
export class ListViewEventRepository extends EventRepository {
    /**
     * @param {?} domainEventBus
     */
    constructor(domainEventBus) {
        super(domainEventBus);
    }
    /**
     * @param {?} listViewReadModelRootId
     * @return {?}
     */
    onModeChange(listViewReadModelRootId) {
        return this.onEvent(listViewReadModelRootId, ListViewModeSetEvent);
    }
}
ListViewEventRepository.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ListViewEventRepository.ctorParameters = () => [
    { type: DomainEventBus }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmV2ZW50LXJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2RvbWFpbi1hcGkvbGlzdC12aWV3LmV2ZW50LXJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUtyRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUcvRSxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsZUFBb0Q7Ozs7SUFFaEcsWUFBWSxjQUE4QjtRQUN6QyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsdUJBQWdEO1FBRTVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBRXBFLENBQUM7OztZQVhELFVBQVU7Ozs7WUFQRixjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEJ1cywgRXZlbnRSZXBvc2l0b3J5IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uL2RvbWFpbi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuL3JlYWQvbGlzdC12aWV3LnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGVTZXRFdmVudCB9IGZyb20gJy4uL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlLXNldC5ldmVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0V2ZW50UmVwb3NpdG9yeSBleHRlbmRzIEV2ZW50UmVwb3NpdG9yeTxMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCwgTGlzdFZpZXdJZD4ge1xuXG5cdGNvbnN0cnVjdG9yKGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cykge1xuXHRcdHN1cGVyKGRvbWFpbkV2ZW50QnVzKTtcblx0fVxuXG5cdG9uTW9kZUNoYW5nZShsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQpIHtcblxuXHRcdHJldHVybiB0aGlzLm9uRXZlbnQobGlzdFZpZXdSZWFkTW9kZWxSb290SWQsIExpc3RWaWV3TW9kZVNldEV2ZW50KTtcblxuXHR9XG5cblxufVxuIl19