/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Reactive } from './reactive';
/**
 * @abstract
 */
var /**
 * @abstract
 */
ReactiveService = /** @class */ (function (_super) {
    tslib_1.__extends(ReactiveService, _super);
    function ReactiveService() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    ReactiveService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe();
    };
    return ReactiveService;
}(Reactive));
/**
 * @abstract
 */
export { ReactiveService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9yZWFjdGl2ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztBQUV0Qzs7OztJQUE4QywyQ0FBUTtJQUVyRDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUYsc0JBQUM7QUFBRCxDQUFDLEFBVkQsQ0FBOEMsUUFBUSxHQVVyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4vcmVhY3RpdmUnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVhY3RpdmVTZXJ2aWNlIGV4dGVuZHMgUmVhY3RpdmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy51bnN1YnNjcmliZSgpO1xuXHR9XG5cbn1cbiJdfQ==