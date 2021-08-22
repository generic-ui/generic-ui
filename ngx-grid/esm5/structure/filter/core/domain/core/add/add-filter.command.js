/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureCommand } from '../../../../../core/domain/structure.command';
var AddFilterCommand = /** @class */ (function (_super) {
    tslib_1.__extends(AddFilterCommand, _super);
    function AddFilterCommand(structureId, fieldId, filterTypeId, value) {
        var _this = _super.call(this, structureId, 'AddFilterCommand') || this;
        _this.fieldId = fieldId;
        _this.filterTypeId = filterTypeId;
        _this.value = value;
        return _this;
    }
    /**
     * @return {?}
     */
    AddFilterCommand.prototype.getFieldId = /**
     * @return {?}
     */
    function () {
        return this.fieldId;
    };
    /**
     * @return {?}
     */
    AddFilterCommand.prototype.getFilterTypeId = /**
     * @return {?}
     */
    function () {
        return this.filterTypeId;
    };
    /**
     * @return {?}
     */
    AddFilterCommand.prototype.getValue = /**
     * @return {?}
     */
    function () {
        return this.value;
    };
    return AddFilterCommand;
}(StructureCommand));
export { AddFilterCommand };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AddFilterCommand.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    AddFilterCommand.prototype.filterTypeId;
    /**
     * @type {?}
     * @private
     */
    AddFilterCommand.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWZpbHRlci5jb21tYW5kLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL2NvcmUvYWRkL2FkZC1maWx0ZXIuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBR2hGO0lBQXNDLDRDQUFnQjtJQUVyRCwwQkFBWSxXQUF3QixFQUNoQixPQUFnQixFQUNoQixZQUEwQixFQUMxQixLQUFVO1FBSDlCLFlBSUMsa0JBQU0sV0FBVyxFQUFFLGtCQUFrQixDQUFDLFNBQ3RDO1FBSm1CLGFBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsa0JBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBSyxHQUFMLEtBQUssQ0FBSzs7SUFFOUIsQ0FBQzs7OztJQUVELHFDQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsMENBQWU7OztJQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUVGLHVCQUFDO0FBQUQsQ0FBQyxBQXJCRCxDQUFzQyxnQkFBZ0IsR0FxQnJEOzs7Ozs7O0lBbEJHLG1DQUFpQzs7Ozs7SUFDakMsd0NBQTJDOzs7OztJQUMzQyxpQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgRmlsdGVyVHlwZUlkIH0gZnJvbSAnLi4vLi4vdHlwZS9maWx0ZXItdHlwZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmNvbW1hbmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBBZGRGaWx0ZXJDb21tYW5kIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkSWQ6IEZpZWxkSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmFsdWU6IGFueSkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnQWRkRmlsdGVyQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0RmllbGRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZElkO1xuXHR9XG5cblx0Z2V0RmlsdGVyVHlwZUlkKCk6IEZpbHRlclR5cGVJZCB7XG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyVHlwZUlkO1xuXHR9XG5cblx0Z2V0VmFsdWUoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fVxuXG59XG4iXX0=