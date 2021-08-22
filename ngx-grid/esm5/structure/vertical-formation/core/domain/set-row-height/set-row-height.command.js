/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureCommand } from '../../../../core/domain/structure.command';
var SetRowHeightCommand = /** @class */ (function (_super) {
    tslib_1.__extends(SetRowHeightCommand, _super);
    function SetRowHeightCommand(structureId, rowHeight) {
        var _this = _super.call(this, structureId, 'SetRowHeightCommand') || this;
        _this.rowHeight = rowHeight;
        return _this;
    }
    /**
     * @return {?}
     */
    SetRowHeightCommand.prototype.getRowHeight = /**
     * @return {?}
     */
    function () {
        return this.rowHeight;
    };
    return SetRowHeightCommand;
}(StructureCommand));
export { SetRowHeightCommand };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetRowHeightCommand.prototype.rowHeight;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXJvdy1oZWlnaHQuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3ZlcnRpY2FsLWZvcm1hdGlvbi9jb3JlL2RvbWFpbi9zZXQtcm93LWhlaWdodC9zZXQtcm93LWhlaWdodC5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFN0U7SUFBeUMsK0NBQWdCO0lBRXhELDZCQUFZLFdBQXdCLEVBQ2hCLFNBQWlCO1FBRHJDLFlBRUMsa0JBQU0sV0FBVyxFQUFFLHFCQUFxQixDQUFDLFNBQ3pDO1FBRm1CLGVBQVMsR0FBVCxTQUFTLENBQVE7O0lBRXJDLENBQUM7Ozs7SUFFRCwwQ0FBWTs7O0lBQVo7UUFDQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDdkIsQ0FBQztJQUVGLDBCQUFDO0FBQUQsQ0FBQyxBQVhELENBQXlDLGdCQUFnQixHQVd4RDs7Ozs7OztJQVJHLHdDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuY29tbWFuZCc7XG5cbmV4cG9ydCBjbGFzcyBTZXRSb3dIZWlnaHRDb21tYW5kIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJvd0hlaWdodDogbnVtYmVyKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTZXRSb3dIZWlnaHRDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRSb3dIZWlnaHQoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5yb3dIZWlnaHQ7XG5cdH1cblxufVxuIl19