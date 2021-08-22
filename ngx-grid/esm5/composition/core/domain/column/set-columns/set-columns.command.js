/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CompositionCommand } from '../../composition.command';
var SetColumnsCommand = /** @class */ (function (_super) {
    tslib_1.__extends(SetColumnsCommand, _super);
    function SetColumnsCommand(compositionId, columns) {
        var _this = _super.call(this, compositionId, 'SetColumnsCommand') || this;
        _this.compositionId = compositionId;
        _this.columns = columns;
        return _this;
    }
    /**
     * @return {?}
     */
    SetColumnsCommand.prototype.getParams = /**
     * @return {?}
     */
    function () {
        return this.columns;
    };
    return SetColumnsCommand;
}(CompositionCommand));
export { SetColumnsCommand };
if (false) {
    /** @type {?} */
    SetColumnsCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    SetColumnsCommand.prototype.columns;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbHVtbnMuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vY29yZS9kb21haW4vY29sdW1uL3NldC1jb2x1bW5zL3NldC1jb2x1bW5zLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUcvRDtJQUF1Qyw2Q0FBa0I7SUFFeEQsMkJBQXFCLGFBQTRCLEVBQzdCLE9BQTRCO1FBRGhELFlBRUMsa0JBQU0sYUFBYSxFQUFFLG1CQUFtQixDQUFDLFNBQ3pDO1FBSG9CLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzdCLGFBQU8sR0FBUCxPQUFPLENBQXFCOztJQUVoRCxDQUFDOzs7O0lBRUQscUNBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFRix3QkFBQztBQUFELENBQUMsQUFYRCxDQUF1QyxrQkFBa0IsR0FXeEQ7Ozs7SUFUWSwwQ0FBcUM7Ozs7O0lBQzlDLG9DQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5pZCc7XG5cbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vY29sdW1uLnBhcmFtcyc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbW1hbmQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5jb21tYW5kJztcblxuXG5leHBvcnQgY2xhc3MgU2V0Q29sdW1uc0NvbW1hbmQgZXh0ZW5kcyBDb21wb3NpdGlvbkNvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uczogQXJyYXk8Q29sdW1uUGFyYW1zPikge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uSWQsICdTZXRDb2x1bW5zQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0UGFyYW1zKCk6IEFycmF5PENvbHVtblBhcmFtcz4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnM7XG5cdH1cblxufVxuIl19