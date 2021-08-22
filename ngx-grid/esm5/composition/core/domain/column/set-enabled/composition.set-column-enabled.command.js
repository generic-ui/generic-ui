/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CompositionCommand } from '../../composition.command';
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
}(CompositionCommand));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uc2V0LWNvbHVtbi1lbmFibGVkLmNvbW1hbmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5zZXQtY29sdW1uLWVuYWJsZWQuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRS9EO0lBQXdELDhEQUFrQjtJQUV6RSw0Q0FBcUIsYUFBNEIsRUFDN0IsUUFBa0IsRUFDbEIsT0FBZ0I7UUFGcEMsWUFHQyxrQkFBTSxhQUFhLEVBQUUsb0NBQW9DLENBQUMsU0FDMUQ7UUFKb0IsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDN0IsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixhQUFPLEdBQVAsT0FBTyxDQUFTOztJQUVwQyxDQUFDOzs7O0lBRUQsd0RBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxzREFBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVGLHlDQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUF3RCxrQkFBa0IsR0FnQnpFOzs7O0lBZFksMkRBQXFDOzs7OztJQUM5QyxzREFBbUM7Ozs7O0lBQ25DLHFEQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5pZCc7XG5pbXBvcnQgeyBDb2x1bW5JZCB9IGZyb20gJy4uLy4uLy4uL2FwaS9jb2x1bW4vY29sdW1uLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmNvbW1hbmQnO1xuXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZCBleHRlbmRzIENvbXBvc2l0aW9uQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3IocmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5JZDogQ29sdW1uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZW5hYmxlZDogYm9vbGVhbikge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uSWQsICdDb21wb3NpdGlvblNldENvbHVtbkVuYWJsZWRDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRDb2x1bW5JZCgpOiBDb2x1bW5JZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1uSWQ7XG5cdH1cblxuXHRpc0VuYWJsZWQoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuZW5hYmxlZDtcblx0fVxuXG59XG4iXX0=