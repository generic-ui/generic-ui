/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Command } from '@generic-ui/hermes';
var CompositionSetColumnEnabledCommand = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionSetColumnEnabledCommand, _super);
    function CompositionSetColumnEnabledCommand(compositionId, columnId, enabled) {
        var _this = _super.call(this, compositionId, 'CompositionSetColumnEnabledCommand') || this;
        _this.compositionId = compositionId;
        _this.columnId = columnId;
        _this.enabled = enabled;
        return _this;
    }
    /**
     * @return {?}
     */
    CompositionSetColumnEnabledCommand.prototype.getColumnId = /**
     * @return {?}
     */
    function () {
        return this.columnId;
    };
    /**
     * @return {?}
     */
    CompositionSetColumnEnabledCommand.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    return CompositionSetColumnEnabledCommand;
}(Command));
export { CompositionSetColumnEnabledCommand };
if (false) {
    /** @type {?} */
    CompositionSetColumnEnabledCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    CompositionSetColumnEnabledCommand.prototype.columnId;
    /**
     * @type {?}
     * @private
     */
    CompositionSetColumnEnabledCommand.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uc2V0LWNvbHVtbi1lbmFibGVkLmNvbW1hbmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29sdW1uL3NldC1lbmFibGVkL2NvbXBvc2l0aW9uLnNldC1jb2x1bW4tZW5hYmxlZC5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSzdDO0lBQXdELDhEQUFPO0lBRTlELDRDQUFxQixhQUE0QixFQUM3QixRQUFrQixFQUNsQixPQUFnQjtRQUZwQyxZQUdDLGtCQUFNLGFBQWEsRUFBRSxvQ0FBb0MsQ0FBQyxTQUMxRDtRQUpvQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM3QixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGFBQU8sR0FBUCxPQUFPLENBQVM7O0lBRXBDLENBQUM7Ozs7SUFFRCx3REFBVzs7O0lBQVg7UUFDQyxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELHNEQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRUYseUNBQUM7QUFBRCxDQUFDLEFBaEJELENBQXdELE9BQU8sR0FnQjlEOzs7O0lBZFksMkRBQXFDOzs7OztJQUM5QyxzREFBbUM7Ozs7O0lBQ25DLHFEQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi9jb2x1bW4uaWQnO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uSWQ6IENvbHVtbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihjb21wb3NpdGlvbklkLCAnQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0Q29sdW1uSWQoKTogQ29sdW1uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbklkO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxufVxuIl19