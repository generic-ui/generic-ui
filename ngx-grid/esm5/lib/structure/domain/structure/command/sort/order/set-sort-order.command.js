/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Command } from '@generic-ui/hermes';
var SetSortOrderCommand = /** @class */ (function (_super) {
    tslib_1.__extends(SetSortOrderCommand, _super);
    function SetSortOrderCommand(structureId, compositionId, fieldId, sortOrder) {
        var _this = _super.call(this, structureId, 'SetSortOrderCommand') || this;
        _this.compositionId = compositionId;
        _this.fieldId = fieldId;
        _this.sortOrder = sortOrder;
        return _this;
    }
    /**
     * @return {?}
     */
    SetSortOrderCommand.prototype.getCompositionId = /**
     * @return {?}
     */
    function () {
        return this.compositionId;
    };
    /**
     * @return {?}
     */
    SetSortOrderCommand.prototype.getFieldId = /**
     * @return {?}
     */
    function () {
        return this.fieldId;
    };
    /**
     * @return {?}
     */
    SetSortOrderCommand.prototype.getSortOrder = /**
     * @return {?}
     */
    function () {
        return this.sortOrder;
    };
    return SetSortOrderCommand;
}(Command));
export { SetSortOrderCommand };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSortOrderCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    SetSortOrderCommand.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    SetSortOrderCommand.prototype.sortOrder;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNvcnQtb3JkZXIuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc29ydC9vcmRlci9zZXQtc29ydC1vcmRlci5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBUTdDO0lBQXlDLCtDQUFPO0lBRS9DLDZCQUFZLFdBQXdCLEVBQ2hCLGFBQTRCLEVBQzVCLE9BQWdCLEVBQ2hCLFNBQXFCO1FBSHpDLFlBSUMsa0JBQU0sV0FBVyxFQUFFLHFCQUFxQixDQUFDLFNBQ3pDO1FBSm1CLG1CQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLGFBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsZUFBUyxHQUFULFNBQVMsQ0FBWTs7SUFFekMsQ0FBQzs7OztJQUVELDhDQUFnQjs7O0lBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFFRCx3Q0FBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELDBDQUFZOzs7SUFBWjtRQUNDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDO0lBQ0YsMEJBQUM7QUFBRCxDQUFDLEFBcEJELENBQXlDLE9BQU8sR0FvQi9DOzs7Ozs7O0lBakJHLDRDQUE2Qzs7Ozs7SUFDN0Msc0NBQWlDOzs7OztJQUNqQyx3Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU29ydFN0YXR1cyB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvc2l0aW9uL2NvbW1hbmQvc29ydC9zb3J0LXN0YXR1cyc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vZmllbGQvZGF0YS10eXBlL2ZpZWxkLmlkJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi1pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFNldFNvcnRPcmRlckNvbW1hbmQgZXh0ZW5kcyBDb21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tcG9zaXRpb25JZDogQ29tcG9zaXRpb25JZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBmaWVsZElkOiBGaWVsZElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvcnRPcmRlcjogU29ydFN0YXR1cykge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU2V0U29ydE9yZGVyQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0Q29tcG9zaXRpb25JZCgpOiBDb21wb3NpdGlvbklkIHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvbklkO1xuXHR9XG5cblx0Z2V0RmllbGRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZElkO1xuXHR9XG5cblx0Z2V0U29ydE9yZGVyKCk6IFNvcnRTdGF0dXMge1xuXHRcdHJldHVybiB0aGlzLnNvcnRPcmRlcjtcblx0fVxufVxuIl19