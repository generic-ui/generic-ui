/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureCommand } from '../../../../../core/domain/structure.command';
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
}(StructureCommand));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXNlbGVjdGVkLXJvdy5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2NvcmUvZG9tYWluL2Zvcm1hdGlvbi90b2dnbGUvdG9nZ2xlLXNlbGVjdGVkLXJvdy5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFFaEY7SUFBOEMsb0RBQWdCO0lBRTdELGtDQUFZLFdBQXdCLEVBQ2hCLFdBQW1CLEVBQ25CLElBQXlCO1FBRjdDLFlBR0Msa0JBQU0sV0FBVyxFQUFFLDBCQUEwQixDQUFDLFNBQzlDO1FBSG1CLGlCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLFVBQUksR0FBSixJQUFJLENBQXFCOztJQUU3QyxDQUFDOzs7O0lBRUQsaURBQWM7OztJQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCwwQ0FBTzs7O0lBQVA7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUVGLCtCQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUE4QyxnQkFBZ0IsR0FnQjdEOzs7Ozs7O0lBYkcsK0NBQW9DOzs7OztJQUNwQyx3Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBSb3dTZWxlY3RUb2dnbGVUeXBlIH0gZnJvbSAnLi4vY29yZS9yb3ctc2VsZWN0LXRvZ2dsZS10eXBlJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuY29tbWFuZCc7XG5cbmV4cG9ydCBjbGFzcyBUb2dnbGVTZWxlY3RlZFJvd0NvbW1hbmQgZXh0ZW5kcyBTdHJ1Y3R1cmVDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0ZWRSb3c6IHN0cmluZyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSB0eXBlOiBSb3dTZWxlY3RUb2dnbGVUeXBlKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdUb2dnbGVTZWxlY3RlZFJvd0NvbW1hbmQnKTtcblx0fVxuXG5cdGdldFNlbGVjdGVkUm93KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIHRoaXMuc2VsZWN0ZWRSb3c7XG5cdH1cblxuXHRnZXRUeXBlKCk6IFJvd1NlbGVjdFRvZ2dsZVR5cGUge1xuXHRcdHJldHVybiB0aGlzLnR5cGU7XG5cdH1cblxufVxuIl19