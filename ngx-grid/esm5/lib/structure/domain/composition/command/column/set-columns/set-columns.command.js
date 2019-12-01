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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbHVtbnMuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vY29tcG9zaXRpb24vY29tbWFuZC9jb2x1bW4vc2V0LWNvbHVtbnMvc2V0LWNvbHVtbnMuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU83QztJQUF1Qyw2Q0FBTztJQUU3QywyQkFBcUIsYUFBNEIsRUFDN0IsT0FBNEI7UUFEaEQsWUFFQyxrQkFBTSxhQUFhLEVBQUUsbUJBQW1CLENBQUMsU0FDekM7UUFIb0IsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDN0IsYUFBTyxHQUFQLE9BQU8sQ0FBcUI7O0lBRWhELENBQUM7Ozs7SUFFRCxxQ0FBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVGLHdCQUFDO0FBQUQsQ0FBQyxBQVhELENBQXVDLE9BQU8sR0FXN0M7Ozs7SUFUWSwwQ0FBcUM7Ozs7O0lBQzlDLG9DQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbklkIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9zaXRpb24taWQnO1xuXG5pbXBvcnQgeyBDb2x1bW5QYXJhbXMgfSBmcm9tICcuL2NvbHVtbi5wYXJhbXMnO1xuXG5cbmV4cG9ydCBjbGFzcyBTZXRDb2x1bW5zQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29sdW1uczogQXJyYXk8Q29sdW1uUGFyYW1zPikge1xuXHRcdHN1cGVyKGNvbXBvc2l0aW9uSWQsICdTZXRDb2x1bW5zQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0UGFyYW1zKCk6IEFycmF5PENvbHVtblBhcmFtcz4ge1xuXHRcdHJldHVybiB0aGlzLmNvbHVtbnM7XG5cdH1cblxufVxuIl19