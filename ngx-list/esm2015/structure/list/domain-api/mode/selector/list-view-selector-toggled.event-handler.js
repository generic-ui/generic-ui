/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ListViewSelectorRepository } from './list-view.selector.repository';
import { ListViewSelectorToggledEvent } from '../../../domain/mode/selector/list-view-selector-toggled.event';
export class ListViewSelectorToggledEventHandler {
    /**
     * @param {?} listViewSelectorRepository
     */
    constructor(listViewSelectorRepository) {
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
    /**
     * @return {?}
     */
    forEvent() {
        return ListViewSelectorToggledEvent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZG9tYWluLWFwaS9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy1zZWxlY3Rvci10b2dnbGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFJakQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHN0UsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFJOUcsTUFBTSxPQUFPLG1DQUFtQzs7OztJQUUvQyxZQUFvQiwwQkFBc0Q7UUFBdEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtJQUMxRSxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxLQUFtQztRQUV6QyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsOEJBQThCLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUNuRjtJQUNGLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyw0QkFBNEIsQ0FBQztJQUNyQyxDQUFDOzs7WUFmRCxVQUFVOzs7O1lBTkYsMEJBQTBCOzs7Ozs7O0lBU3RCLHlFQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnkgfSBmcm9tICcuL2xpc3Qtdmlldy5zZWxlY3Rvci5yZXBvc2l0b3J5JztcblxuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy1zZWxlY3Rvci10b2dnbGVkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudEhhbmRsZXIgaW1wbGVtZW50cyBEb21haW5FdmVudEhhbmRsZXI8TGlzdFZpZXdJZCwgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgbGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnk6IExpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5KSB7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50JykpIHtcblx0XHRcdHRoaXMubGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnkuc2V0TW9kZShldmVudC5pc0VuYWJsZWQoKSwgZXZlbnQuZ2V0QWdncmVnYXRlSWQoKSk7XG5cdFx0fVxuXHR9XG5cblx0Zm9yRXZlbnQoKTogVHlwZTxMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50PiB7XG5cdFx0cmV0dXJuIExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnQ7XG5cdH1cblxufVxuIl19