/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { ListViewSelectorRepository } from './list-view.selector.repository';
var ListViewSelectorToggledEventHandler = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewSelectorToggledEventHandler, _super);
    function ListViewSelectorToggledEventHandler(listViewSelectorRepository) {
        var _this = _super.call(this) || this;
        _this.listViewSelectorRepository = listViewSelectorRepository;
        return _this;
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
    ListViewSelectorToggledEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ListViewSelectorToggledEventHandler.ctorParameters = function () { return [
        { type: ListViewSelectorRepository }
    ]; };
    return ListViewSelectorToggledEventHandler;
}(DomainEventHandler));
export { ListViewSelectorToggledEventHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewSelectorToggledEventHandler.prototype.listViewSelectorRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZG9tYWluLWFwaS9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy1zZWxlY3Rvci10b2dnbGVkLmV2ZW50LWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXhELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBTTdFO0lBQ3lELCtEQUE0RDtJQUVwSCw2Q0FBb0IsMEJBQXNEO1FBQTFFLFlBQ0MsaUJBQU8sU0FDUDtRQUZtQixnQ0FBMEIsR0FBMUIsMEJBQTBCLENBQTRCOztJQUUxRSxDQUFDOzs7OztJQUVELG9EQUFNOzs7O0lBQU4sVUFBTyxLQUFtQztRQUV6QyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsOEJBQThCLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsMEJBQTBCLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztTQUNuRjtJQUNGLENBQUM7O2dCQVpELFVBQVU7Ozs7Z0JBTkYsMEJBQTBCOztJQW9CbkMsMENBQUM7Q0FBQSxBQWRELENBQ3lELGtCQUFrQixHQWExRTtTQWJZLG1DQUFtQzs7Ozs7O0lBRW5DLHlFQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnkgfSBmcm9tICcuL2xpc3Qtdmlldy5zZWxlY3Rvci5yZXBvc2l0b3J5JztcblxuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9saXN0LXZpZXcuaWQnO1xuaW1wb3J0IHsgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9tb2RlL3NlbGVjdG9yL2xpc3Qtdmlldy1zZWxlY3Rvci10b2dnbGVkLmV2ZW50JztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudEhhbmRsZXIgZXh0ZW5kcyBEb21haW5FdmVudEhhbmRsZXI8TGlzdFZpZXdJZCwgTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgbGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnk6IExpc3RWaWV3U2VsZWN0b3JSZXBvc2l0b3J5KSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdGhhbmRsZShldmVudDogTGlzdFZpZXdTZWxlY3RvclRvZ2dsZWRFdmVudCk6IHZvaWQge1xuXG5cdFx0aWYgKGV2ZW50Lm9mTWVzc2FnZVR5cGUoJ0xpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnQnKSkge1xuXHRcdFx0dGhpcy5saXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeS5zZXRNb2RlKGV2ZW50LmlzRW5hYmxlZCgpLCBldmVudC5nZXRBZ2dyZWdhdGVJZCgpKTtcblx0XHR9XG5cdH1cblxufVxuIl19