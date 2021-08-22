/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CompositionCommand } from '../../composition.command';
var SetGroupsCommand = /** @class */ (function (_super) {
    tslib_1.__extends(SetGroupsCommand, _super);
    function SetGroupsCommand(compositionId, configs) {
        var _this = _super.call(this, compositionId, 'SetGroupsCommand') || this;
        _this.compositionId = compositionId;
        _this.configs = configs;
        return _this;
    }
    /**
     * @return {?}
     */
    SetGroupsCommand.prototype.getConfigs = /**
     * @return {?}
     */
    function () {
        return this.configs;
    };
    return SetGroupsCommand;
}(CompositionCommand));
export { SetGroupsCommand };
if (false) {
    /** @type {?} */
    SetGroupsCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    SetGroupsCommand.prototype.configs;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWdyb3Vwcy5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJjb21wb3NpdGlvbi9jb3JlL2RvbWFpbi9ncm91cC9zZXQtZ3JvdXBzL3NldC1ncm91cHMuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSS9EO0lBQXNDLDRDQUFrQjtJQUV2RCwwQkFBcUIsYUFBNEIsRUFDN0IsT0FBZ0Q7UUFEcEUsWUFFQyxrQkFBTSxhQUFhLEVBQUUsa0JBQWtCLENBQUMsU0FDeEM7UUFIb0IsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDN0IsYUFBTyxHQUFQLE9BQU8sQ0FBeUM7O0lBRXBFLENBQUM7Ozs7SUFFRCxxQ0FBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVGLHVCQUFDO0FBQUQsQ0FBQyxBQVhELENBQXNDLGtCQUFrQixHQVd2RDs7OztJQVRZLHlDQUFxQzs7Ozs7SUFDOUMsbUNBQWlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmlkJztcblxuaW1wb3J0IHsgQ29tcG9zaXRpb25Db21tYW5kIH0gZnJvbSAnLi4vLi4vY29tcG9zaXRpb24uY29tbWFuZCc7XG5pbXBvcnQgeyBDb2x1bW5Db25maWcsIE11bHRpQ29sdW1uQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vYXBpL2NvbHVtbi9jb2x1bW4uY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgU2V0R3JvdXBzQ29tbWFuZCBleHRlbmRzIENvbXBvc2l0aW9uQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3IocmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb25maWdzOiBBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz4pIHtcblx0XHRzdXBlcihjb21wb3NpdGlvbklkLCAnU2V0R3JvdXBzQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0Q29uZmlncygpOiBBcnJheTxDb2x1bW5Db25maWcgfCBNdWx0aUNvbHVtbkNvbmZpZz4ge1xuXHRcdHJldHVybiB0aGlzLmNvbmZpZ3M7XG5cdH1cblxufVxuIl19