/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Command } from '@generic-ui/hermes';
var ToggleSelectedRowCommand = /** @class */ (function (_super) {
    tslib_1.__extends(ToggleSelectedRowCommand, _super);
    function ToggleSelectedRowCommand(structureId, selectedRow, type) {
        var _this = _super.call(this, structureId, 'ToggleSelectedRowCommand') || this;
        _this.selectedRow = selectedRow;
        _this.type = type;
        return _this;
    }
    /**
     * @return {?}
     */
    ToggleSelectedRowCommand.prototype.getSelectedRow = /**
     * @return {?}
     */
    function () {
        return this.selectedRow;
    };
    /**
     * @return {?}
     */
    ToggleSelectedRowCommand.prototype.getType = /**
     * @return {?}
     */
    function () {
        return this.type;
    };
    return ToggleSelectedRowCommand;
}(Command));
export { ToggleSelectedRowCommand };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleSelectedRowCommand.prototype.selectedRow;
    /**
     * @type {?}
     * @private
     */
    ToggleSelectedRowCommand.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXNlbGVjdGVkLXJvdy5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi9mb3JtYXRpb24vdG9nZ2xlL3RvZ2dsZS1zZWxlY3RlZC1yb3cuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUs3QztJQUE4QyxvREFBTztJQUVwRCxrQ0FBWSxXQUF3QixFQUNoQixXQUFtQixFQUNuQixJQUF5QjtRQUY3QyxZQUdDLGtCQUFNLFdBQVcsRUFBRSwwQkFBMEIsQ0FBQyxTQUM5QztRQUhtQixpQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixVQUFJLEdBQUosSUFBSSxDQUFxQjs7SUFFN0MsQ0FBQzs7OztJQUVELGlEQUFjOzs7SUFBZDtRQUNDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsMENBQU87OztJQUFQO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFFRiwrQkFBQztBQUFELENBQUMsQUFoQkQsQ0FBOEMsT0FBTyxHQWdCcEQ7Ozs7Ozs7SUFiRywrQ0FBb0M7Ozs7O0lBQ3BDLHdDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSb3dTZWxlY3RUb2dnbGVUeXBlIH0gZnJvbSAnLi4vY29yZS9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcblxuZXhwb3J0IGNsYXNzIFRvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWxlY3RlZFJvdzogc3RyaW5nLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHR5cGU6IFJvd1NlbGVjdFRvZ2dsZVR5cGUpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1RvZ2dsZVNlbGVjdGVkUm93Q29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0U2VsZWN0ZWRSb3coKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5zZWxlY3RlZFJvdztcblx0fVxuXG5cdGdldFR5cGUoKTogUm93U2VsZWN0VG9nZ2xlVHlwZSB7XG5cdFx0cmV0dXJuIHRoaXMudHlwZTtcblx0fVxuXG59XG4iXX0=