/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Command } from '@generic-ui/hermes';
var SetPagingCommand = /** @class */ (function (_super) {
    tslib_1.__extends(SetPagingCommand, _super);
    function SetPagingCommand(structureId, config) {
        var _this = _super.call(this, structureId, 'SetPagingCommand') || this;
        _this.config = config;
        return _this;
    }
    /**
     * @return {?}
     */
    SetPagingCommand.prototype.getPagingConfig = /**
     * @return {?}
     */
    function () {
        return this.config;
    };
    return SetPagingCommand;
}(Command));
export { SetPagingCommand };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetPagingCommand.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXBhZ2luZy5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9wYWdpbmcvY29tbWFuZC9zZXQvc2V0LXBhZ2luZy5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSzdDO0lBQXNDLDRDQUFPO0lBRTVDLDBCQUFZLFdBQXdCLEVBQ2hCLE1BQW9CO1FBRHhDLFlBRUMsa0JBQU0sV0FBVyxFQUFFLGtCQUFrQixDQUFDLFNBQ3RDO1FBRm1CLFlBQU0sR0FBTixNQUFNLENBQWM7O0lBRXhDLENBQUM7Ozs7SUFFRCwwQ0FBZTs7O0lBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUVGLHVCQUFDO0FBQUQsQ0FBQyxBQVhELENBQXNDLE9BQU8sR0FXNUM7Ozs7Ozs7SUFSRyxrQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgUGFnaW5nQ29uZmlnIH0gZnJvbSAnLi4vLi4vcGFnaW5nLWNvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBTZXRQYWdpbmdDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbmZpZzogUGFnaW5nQ29uZmlnKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTZXRQYWdpbmdDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRQYWdpbmdDb25maWcoKTogUGFnaW5nQ29uZmlnIHtcblx0XHRyZXR1cm4gdGhpcy5jb25maWc7XG5cdH1cblxufVxuIl19