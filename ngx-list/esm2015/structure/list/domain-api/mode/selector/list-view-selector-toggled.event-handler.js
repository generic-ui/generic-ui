/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { ListViewSelectorRepository } from './list-view.selector.repository';
export class ListViewSelectorToggledEventHandler extends DomainEventHandler {
    /**
     * @param {?} listViewSelectorRepository
     */
    constructor(listViewSelectorRepository) {
        super();
        this.listViewSelectorRepository = listViewSelectorRepository;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handle(event) {
        if (event.ofMessageType('ListViewSelectorToggledEvent')) {
            this.listViewSelectorRepository.setMode(event.isEnabled(), event.getAggregateId());
        }
    }
}
ListViewSelectorToggledEventHandler.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ListViewSelectorToggledEventHandler.ctorParameters = () => [
    { type: ListViewSelectorRepository }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewSelectorToggledEventHandler.prototype.listViewSelectorRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZG9tYWluLWFwaS9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy1zZWxlY3Rvci10b2dnbGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFeEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFPN0UsTUFBTSxPQUFPLG1DQUFvQyxTQUFRLGtCQUE0RDs7OztJQUVwSCxZQUFvQiwwQkFBc0Q7UUFDekUsS0FBSyxFQUFFLENBQUM7UUFEVywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO0lBRTFFLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQW1DO1FBRXpDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFO1lBQ3hELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQ25GO0lBQ0YsQ0FBQzs7O1lBWkQsVUFBVTs7OztZQU5GLDBCQUEwQjs7Ozs7OztJQVN0Qix5RUFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IERvbWFpbkV2ZW50SGFuZGxlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IExpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5IH0gZnJvbSAnLi9saXN0LXZpZXcuc2VsZWN0b3IucmVwb3NpdG9yeSc7XG5cbmltcG9ydCB7IExpc3RWaWV3SWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vbW9kZS9zZWxlY3Rvci9saXN0LXZpZXctc2VsZWN0b3ItdG9nZ2xlZC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnRIYW5kbGVyIGV4dGVuZHMgRG9tYWluRXZlbnRIYW5kbGVyPExpc3RWaWV3SWQsIExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGxpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5OiBMaXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeSkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50JykpIHtcblx0XHRcdHRoaXMubGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnkuc2V0TW9kZShldmVudC5pc0VuYWJsZWQoKSwgZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==