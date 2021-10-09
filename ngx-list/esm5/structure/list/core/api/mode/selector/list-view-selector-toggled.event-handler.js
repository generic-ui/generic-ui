/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ListViewSelectorArchive } from './list-view.selector.archive';
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
            this.listViewSelectorRepository.next(event.getAggregateId(), event.isEnabled());
        }
    };
    ListViewSelectorToggledEventHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ListViewSelectorToggledEventHandler.ctorParameters = function () { return [
        { type: ListViewSelectorArchive }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuZXZlbnQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvY29yZS9hcGkvbW9kZS9zZWxlY3Rvci9saXN0LXZpZXctc2VsZWN0b3ItdG9nZ2xlZC5ldmVudC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3ZFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBRzlHO0lBR0MsNkNBQW9CLDBCQUFtRDtRQUFuRCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQXlCO0lBQ3ZFLENBQUM7Ozs7SUFFRCxzREFBUTs7O0lBQVI7UUFDQyxPQUFPLDRCQUE0QixDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRUQsb0RBQU07Ozs7SUFBTixVQUFPLEtBQW1DO1FBRXpDLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxFQUFFO1lBQ3hELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ2hGO0lBQ0YsQ0FBQzs7Z0JBZkQsVUFBVTs7OztnQkFORix1QkFBdUI7O0lBdUJoQywwQ0FBQztDQUFBLEFBakJELElBaUJDO1NBaEJZLG1DQUFtQzs7Ozs7O0lBRW5DLHlFQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnRIYW5kbGVyLCBEb21haW5FdmVudFR5cGUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld1NlbGVjdG9yQXJjaGl2ZSB9IGZyb20gJy4vbGlzdC12aWV3LnNlbGVjdG9yLmFyY2hpdmUnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL21vZGUvc2VsZWN0b3IvbGlzdC12aWV3LXNlbGVjdG9yLXRvZ2dsZWQuZXZlbnQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50SGFuZGxlciBpbXBsZW1lbnRzIERvbWFpbkV2ZW50SGFuZGxlcjxMaXN0Vmlld0lkLCBMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50PiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBsaXN0Vmlld1NlbGVjdG9yUmVwb3NpdG9yeTogTGlzdFZpZXdTZWxlY3RvckFyY2hpdmUpIHtcblx0fVxuXG5cdGZvckV2ZW50KCk6IERvbWFpbkV2ZW50VHlwZTxMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50PiB7XG5cdFx0cmV0dXJuIExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnQ7XG5cdH1cblxuXHRoYW5kbGUoZXZlbnQ6IExpc3RWaWV3U2VsZWN0b3JUb2dnbGVkRXZlbnQpOiB2b2lkIHtcblxuXHRcdGlmIChldmVudC5vZk1lc3NhZ2VUeXBlKCdMaXN0Vmlld1NlbGVjdG9yVG9nZ2xlZEV2ZW50JykpIHtcblx0XHRcdHRoaXMubGlzdFZpZXdTZWxlY3RvclJlcG9zaXRvcnkubmV4dChldmVudC5nZXRBZ2dyZWdhdGVJZCgpLCBldmVudC5pc0VuYWJsZWQoKSk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==