/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Command } from '@generic-ui/hermes';
var SetPagingCommand = /** @class */ (function (_super) {
    tslib_1.__extends(SetPagingCommand, _super);
    function SetPagingCommand(structureId, payload) {
        var _this = _super.call(this, structureId, 'SetPagingCommand') || this;
        _this.structureId = structureId;
        _this.payload = payload;
        return _this;
    }
    /**
     * @return {?}
     */
    SetPagingCommand.prototype.getPagingConfig = /**
     * @return {?}
     */
    function () {
        return this.payload;
    };
    return SetPagingCommand;
}(Command));
export { SetPagingCommand };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetPagingCommand.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    SetPagingCommand.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXBhZ2luZy5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9wYWdpbmcvY29tbWFuZC9zZXQvc2V0LXBhZ2luZy5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSzdDO0lBQXNDLDRDQUFPO0lBRTVDLDBCQUE2QixXQUF3QixFQUNqQyxPQUFxQjtRQUR6QyxZQUVDLGtCQUFNLFdBQVcsRUFBRSxrQkFBa0IsQ0FBQyxTQUN0QztRQUg0QixpQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUNqQyxhQUFPLEdBQVAsT0FBTyxDQUFjOztJQUV6QyxDQUFDOzs7O0lBRUQsMENBQWU7OztJQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFRix1QkFBQztBQUFELENBQUMsQUFYRCxDQUFzQyxPQUFPLEdBVzVDOzs7Ozs7O0lBVFksdUNBQXlDOzs7OztJQUNsRCxtQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vcGFnaW5nLWNvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBTZXRQYWdpbmdDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcGF5bG9hZDogUGFnaW5nQ29uZmlnKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTZXRQYWdpbmdDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRQYWdpbmdDb25maWcoKTogUGFnaW5nQ29uZmlnIHtcblx0XHRyZXR1cm4gdGhpcy5wYXlsb2FkO1xuXHR9XG5cbn1cbiJdfQ==