/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureCommand } from '../../../../core/domain/structure.command';
var SetRowHeightBasedOnThemeCommand = /** @class */ (function (_super) {
    tslib_1.__extends(SetRowHeightBasedOnThemeCommand, _super);
    function SetRowHeightBasedOnThemeCommand(structureId, theme) {
        var _this = _super.call(this, structureId, 'SetRowHeightBasedOnThemeCommand') || this;
        _this.theme = theme;
        return _this;
    }
    /**
     * @return {?}
     */
    SetRowHeightBasedOnThemeCommand.prototype.getTheme = /**
     * @return {?}
     */
    function () {
        return this.theme;
    };
    return SetRowHeightBasedOnThemeCommand;
}(StructureCommand));
export { SetRowHeightBasedOnThemeCommand };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetRowHeightBasedOnThemeCommand.prototype.theme;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXJvdy1oZWlnaHQtYmFzZWQtb24tdGhlbWUuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi9zZXQtcm93LWhlaWdodC10aGVtZS9zZXQtcm93LWhlaWdodC1iYXNlZC1vbi10aGVtZS5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFN0U7SUFBcUQsMkRBQWdCO0lBRXBFLHlDQUFZLFdBQXdCLEVBQ2hCLEtBQWtCO1FBRHRDLFlBRUMsa0JBQU0sV0FBVyxFQUFFLGlDQUFpQyxDQUFDLFNBQ3JEO1FBRm1CLFdBQUssR0FBTCxLQUFLLENBQWE7O0lBRXRDLENBQUM7Ozs7SUFFRCxrREFBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUVGLHNDQUFDO0FBQUQsQ0FBQyxBQVhELENBQXFELGdCQUFnQixHQVdwRTs7Ozs7OztJQVJHLGdEQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2NoZW1hL2NvcmUvYXBpL3RoZW1lL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmNvbW1hbmQnO1xuXG5leHBvcnQgY2xhc3MgU2V0Um93SGVpZ2h0QmFzZWRPblRoZW1lQ29tbWFuZCBleHRlbmRzIFN0cnVjdHVyZUNvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0aGVtZTogU2NoZW1hVGhlbWUpIHtcblx0XHRzdXBlcihzdHJ1Y3R1cmVJZCwgJ1NldFJvd0hlaWdodEJhc2VkT25UaGVtZUNvbW1hbmQnKTtcblx0fVxuXG5cdGdldFRoZW1lKCk6IG51bWJlciB7XG5cdFx0cmV0dXJuIHRoaXMudGhlbWU7XG5cdH1cblxufVxuIl19