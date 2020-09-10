/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Command } from '@generic-ui/hermes';
var ToggleFilterCommand = /** @class */ (function (_super) {
    tslib_1.__extends(ToggleFilterCommand, _super);
    function ToggleFilterCommand(structureId, fieldId, externalFilterId, filterValue) {
        var _this = _super.call(this, structureId, 'ToggleFilterCommand') || this;
        _this.fieldId = fieldId;
        _this.externalFilterId = externalFilterId;
        _this.filterValue = filterValue;
        return _this;
    }
    /**
     * @return {?}
     */
    ToggleFilterCommand.prototype.getFieldId = /**
     * @return {?}
     */
    function () {
        return this.fieldId;
    };
    /**
     * @return {?}
     */
    ToggleFilterCommand.prototype.getExternalFilterId = /**
     * @return {?}
     */
    function () {
        return this.externalFilterId;
    };
    /**
     * @return {?}
     */
    ToggleFilterCommand.prototype.getFilterValue = /**
     * @return {?}
     */
    function () {
        return this.filterValue;
    };
    return ToggleFilterCommand;
}(Command));
export { ToggleFilterCommand };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleFilterCommand.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    ToggleFilterCommand.prototype.externalFilterId;
    /**
     * @type {?}
     * @private
     */
    ToggleFilterCommand.prototype.filterValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLWZpbHRlci5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi90b2dnbGUvdG9nZ2xlLWZpbHRlci5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTzdDO0lBQXlDLCtDQUFPO0lBRS9DLDZCQUFZLFdBQXdCLEVBQ2hCLE9BQWdCLEVBQ2hCLGdCQUF3QixFQUN4QixXQUFtQjtRQUh2QyxZQUlDLGtCQUFNLFdBQVcsRUFBRSxxQkFBcUIsQ0FBQyxTQUN6QztRQUptQixhQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLHNCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUTtRQUN4QixpQkFBVyxHQUFYLFdBQVcsQ0FBUTs7SUFFdkMsQ0FBQzs7OztJQUVELHdDQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsaURBQW1COzs7SUFBbkI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDOzs7O0lBRUQsNENBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7SUFFRiwwQkFBQztBQUFELENBQUMsQUFyQkQsQ0FBeUMsT0FBTyxHQXFCL0M7Ozs7Ozs7SUFsQkcsc0NBQWlDOzs7OztJQUNqQywrQ0FBeUM7Ozs7O0lBQ3pDLDBDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQuaWQnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFRvZ2dsZUZpbHRlckNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRJZDogRmllbGRJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBleHRlcm5hbEZpbHRlcklkOiBzdHJpbmcsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyVmFsdWU6IHN0cmluZykge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnVG9nZ2xlRmlsdGVyQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0RmllbGRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZElkO1xuXHR9XG5cblx0Z2V0RXh0ZXJuYWxGaWx0ZXJJZCgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmV4dGVybmFsRmlsdGVySWQ7XG5cdH1cblxuXHRnZXRGaWx0ZXJWYWx1ZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLmZpbHRlclZhbHVlO1xuXHR9XG5cbn1cbiJdfQ==