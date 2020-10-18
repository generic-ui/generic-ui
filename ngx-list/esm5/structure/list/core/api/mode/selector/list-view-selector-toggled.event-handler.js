/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ListViewSelectorRepository } from './list-view.selector.repository';
import { ListViewSelectorToggledEvent } from '../../../domain/mode/selector/list-view-selector-toggled.event';
var ListViewSelectorToggledEventHandler = /** @class */ (function () {
    function ListViewSelectorToggledEventHandler(listViewSelectorRepository) {
        this.listViewSelectorRepository = listViewSelectorRepository;
    }
    /**
     * @return {?}
     */
    ListViewSelectorToggledEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return ListViewSelectorToggledEvent;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ListViewSelectorToggledEventHandler.prototype.handle = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.ofMessageType('ListViewSelectorToggledEvent')) {
            this.listViewSelectorRepository.setMode(event.isEnabled(), event.getAggregateId());
        }
    };
    ListViewSelectorToggledEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ListViewSelectorToggledEventHandler.ctorParameters = function () { return [
        { type: ListViewSelectorRepository }
    ]; };
    return ListViewSelectorToggledEventHandler;
}());
export { ListViewSelectorToggledEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewSelectorToggledEventHandler.prototype.listViewSelectorRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvY29yZS9hcGkvbW9kZS9zZWxlY3Rvci9saXN0LXZpZXctc2VsZWN0b3ItdG9nZ2xlZC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRzdFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBRzlHO0lBR0MsNkNBQW9CLDBCQUFzRDtRQUF0RCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO0lBQzFFLENBQUM7Ozs7SUFFRCxzREFBUTs7O0lBQVI7UUFDQyxPQUFPLDRCQUE0QixDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsb0RBQU07Ozs7SUFBTixVQUFPLEtBQW1DO1FBRXpDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFO1lBQ3hELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFFLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQ25GO0lBQ0YsQ0FBQzs7Z0JBZkQsVUFBVTs7OztnQkFORiwwQkFBMEI7O0lBdUJuQywwQ0FBQztDQUFBLEFBakJELElBaUJDO1NBaEJZLG1DQUFtQzs7Ozs7O0lBRW5DLHlFQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeSB9IGZyb20gJy4vbGlzdC12aWV3LnNlbGVjdG9yLnJlcG9zaXRvcnknO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vLi4vbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vbW9kZS9zZWxlY3Rvci9saXN0LXZpZXctc2VsZWN0b3ItdG9nZ2xlZC5ldmVudCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnRIYW5kbGVyIGltcGxlbWVudHMgRG9tYWluRXZlbnRIYW5kbGVyPExpc3RWaWV3SWQsIExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGxpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5OiBMaXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeSkge1xuXHR9XG5cblx0Zm9yRXZlbnQoKTogRG9tYWluRXZlbnRUeXBlPExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnQ+IHtcblx0XHRyZXR1cm4gTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudDtcblx0fVxuXG5cdGhhbmRsZShldmVudDogTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ0xpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnQnKSkge1xuXHRcdFx0dGhpcy5saXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeS5zZXRNb2RlKGV2ZW50LmlzRW5hYmxlZCgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cdH1cblxufVxuIl19