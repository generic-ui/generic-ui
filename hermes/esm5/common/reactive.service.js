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
        this.hermesUnsubscribe();
    };
    return ReactiveService;
}(Reactive));
/**
 * @abstract
 */
export { ReactiveService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3RpdmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvbW1vbi9yZWFjdGl2ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztBQUV0Qzs7OztJQUE4QywyQ0FBUTtJQUVyRDtlQUNDLGlCQUFPO0lBQ1IsQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtRQUNDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRixzQkFBQztBQUFELENBQUMsQUFWRCxDQUE4QyxRQUFRLEdBVXJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJlYWN0aXZlIH0gZnJvbSAnLi9yZWFjdGl2ZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZWFjdGl2ZVNlcnZpY2UgZXh0ZW5kcyBSZWFjdGl2ZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmhlcm1lc1Vuc3Vic2NyaWJlKCk7XG5cdH1cblxufVxuIl19