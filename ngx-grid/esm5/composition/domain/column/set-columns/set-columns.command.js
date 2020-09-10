/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Command } from '@generic-ui/hermes';
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
}(Command));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbHVtbnMuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsiY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zZXQtY29sdW1ucy9zZXQtY29sdW1ucy5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTzdDO0lBQXVDLDZDQUFPO0lBRTdDLDJCQUFxQixhQUE0QixFQUM3QixPQUE0QjtRQURoRCxZQUVDLGtCQUFNLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyxTQUN6QztRQUhvQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM3QixhQUFPLEdBQVAsT0FBTyxDQUFxQjs7SUFFaEQsQ0FBQzs7OztJQUVELHFDQUFTOzs7SUFBVDtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRUYsd0JBQUM7QUFBRCxDQUFDLEFBWEQsQ0FBdUMsT0FBTyxHQVc3Qzs7OztJQVRZLDBDQUFxQzs7Ozs7SUFDOUMsb0NBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi5pZCc7XG5cbmltcG9ydCB7IENvbHVtblBhcmFtcyB9IGZyb20gJy4vY29sdW1uLnBhcmFtcyc7XG5cblxuZXhwb3J0IGNsYXNzIFNldENvbHVtbnNDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3IocmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb2x1bW5zOiBBcnJheTxDb2x1bW5QYXJhbXM+KSB7XG5cdFx0c3VwZXIoY29tcG9zaXRpb25JZCwgJ1NldENvbHVtbnNDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRQYXJhbXMoKTogQXJyYXk8Q29sdW1uUGFyYW1zPiB7XG5cdFx0cmV0dXJuIHRoaXMuY29sdW1ucztcblx0fVxuXG59XG4iXX0=