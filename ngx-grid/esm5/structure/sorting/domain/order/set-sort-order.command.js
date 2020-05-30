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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNvcnQtb3JkZXIuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvcnRpbmcvZG9tYWluL29yZGVyL3NldC1zb3J0LW9yZGVyLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFRN0M7SUFBeUMsK0NBQU87SUFFL0MsNkJBQVksV0FBd0IsRUFDaEIsYUFBNEIsRUFDNUIsT0FBZ0IsRUFDaEIsU0FBb0I7UUFIeEMsWUFJQyxrQkFBTSxXQUFXLEVBQUUscUJBQXFCLENBQUMsU0FDekM7UUFKbUIsbUJBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsYUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixlQUFTLEdBQVQsU0FBUyxDQUFXOztJQUV4QyxDQUFDOzs7O0lBRUQsOENBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELHdDQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsMENBQVk7OztJQUFaO1FBQ0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFDRiwwQkFBQztBQUFELENBQUMsQUFwQkQsQ0FBeUMsT0FBTyxHQW9CL0M7Ozs7Ozs7SUFqQkcsNENBQTZDOzs7OztJQUM3QyxzQ0FBaUM7Ozs7O0lBQ2pDLHdDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTb3J0T3JkZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvY29tcG9zaXRpb24vZG9tYWluL2NvbHVtbi9zb3J0L3NvcnQtb3JkZXInO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi9kYXRhLXR5cGUvZmllbGQuaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25JZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9jb21wb3NpdGlvbi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTZXRTb3J0T3JkZXJDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbXBvc2l0aW9uSWQ6IENvbXBvc2l0aW9uSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmllbGRJZDogRmllbGRJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzb3J0T3JkZXI6IFNvcnRPcmRlcikge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU2V0U29ydE9yZGVyQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0Q29tcG9zaXRpb25JZCgpOiBDb21wb3NpdGlvbklkIHtcblx0XHRyZXR1cm4gdGhpcy5jb21wb3NpdGlvbklkO1xuXHR9XG5cblx0Z2V0RmllbGRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZElkO1xuXHR9XG5cblx0Z2V0U29ydE9yZGVyKCk6IFNvcnRPcmRlciB7XG5cdFx0cmV0dXJuIHRoaXMuc29ydE9yZGVyO1xuXHR9XG59XG4iXX0=