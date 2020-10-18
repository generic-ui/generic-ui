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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24uc2V0LWNvbHVtbi1lbmFibGVkLmNvbW1hbmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9zZXQtZW5hYmxlZC9jb21wb3NpdGlvbi5zZXQtY29sdW1uLWVuYWJsZWQuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRS9EO0lBQXdELDhEQUFrQjtJQUV6RSw0Q0FBcUIsYUFBNEIsRUFDN0IsUUFBa0IsRUFDbEIsT0FBZ0I7UUFGcEMsWUFHQyxrQkFBTSxhQUFhLEVBQUUsb0NBQW9DLENBQUMsU0FDMUQ7UUFKb0IsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDN0IsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixhQUFPLEdBQVAsT0FBTyxDQUFTOztJQUVwQyxDQUFDOzs7O0lBRUQsd0RBQVc7OztJQUFYO1FBQ0MsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxzREFBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVGLHlDQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUF3RCxrQkFBa0IsR0FnQnpFOzs7O0lBZFksMkRBQXFDOzs7OztJQUM5QyxzREFBbUM7Ozs7O0lBQ25DLHFEQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29sdW1uSWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvY29sdW1uL2NvbHVtbi5pZCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5jb21tYW5kJztcblxuZXhwb3J0IGNsYXNzIENvbXBvc2l0aW9uU2V0Q29sdW1uRW5hYmxlZENvbW1hbmQgZXh0ZW5kcyBDb21wb3NpdGlvbkNvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uSWQ6IENvbHVtbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihjb21wb3NpdGlvbklkLCAnQ29tcG9zaXRpb25TZXRDb2x1bW5FbmFibGVkQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0Q29sdW1uSWQoKTogQ29sdW1uSWQge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbklkO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxufVxuIl19