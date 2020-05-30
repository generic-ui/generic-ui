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
    /**
     * @return {?}
     */
    ListViewSelectorToggledEventHandler.prototype.forEvent = /**
     * @return {?}
     */
    function () {
        return ListViewSelectorToggledEvent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZG9tYWluLWFwaS9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy1zZWxlY3Rvci10b2dnbGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFJakQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHN0UsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFHOUc7SUFHQyw2Q0FBb0IsMEJBQXNEO1FBQXRELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7SUFDMUUsQ0FBQzs7Ozs7SUFFRCxvREFBTTs7OztJQUFOLFVBQU8sS0FBbUM7UUFFekMsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLDhCQUE4QixDQUFDLEVBQUU7WUFDeEQsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7U0FDbkY7SUFDRixDQUFDOzs7O0lBRUQsc0RBQVE7OztJQUFSO1FBQ0MsT0FBTyw0QkFBNEIsQ0FBQztJQUNyQyxDQUFDOztnQkFmRCxVQUFVOzs7O2dCQU5GLDBCQUEwQjs7SUF1Qm5DLDBDQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FoQlksbUNBQW1DOzs7Ozs7SUFFbkMseUVBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudEhhbmRsZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeSB9IGZyb20gJy4vbGlzdC12aWV3LnNlbGVjdG9yLnJlcG9zaXRvcnknO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL21vZGUvc2VsZWN0b3IvbGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxMaXN0Vmlld0lkLCBMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBsaXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeTogTGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnkpIHtcblx0fVxuXG5cdGhhbmRsZShldmVudDogTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ0xpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnQnKSkge1xuXHRcdFx0dGhpcy5saXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeS5zZXRNb2RlKGV2ZW50LmlzRW5hYmxlZCgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cdH1cblxuXHRmb3JFdmVudCgpOiBUeXBlPExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnQ+IHtcblx0XHRyZXR1cm4gTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudDtcblx0fVxuXG59XG4iXX0=