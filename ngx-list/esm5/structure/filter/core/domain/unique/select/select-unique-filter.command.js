/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureCommand } from '../../../../../core/domain/structure.command';
var SelectUniqueFilterCommand = /** @class */ (function (_super) {
    tslib_1.__extends(SelectUniqueFilterCommand, _super);
    function SelectUniqueFilterCommand(structureId, fieldId, uniqueValueId) {
        var _this = _super.call(this, structureId, 'SelectUniqueFilterCommand') || this;
        _this.fieldId = fieldId;
        _this.uniqueValueId = uniqueValueId;
        return _this;
    }
    /**
     * @return {?}
     */
    SelectUniqueFilterCommand.prototype.getFieldId = /**
     * @return {?}
     */
    function () {
        return this.fieldId;
    };
    /**
     * @return {?}
     */
    SelectUniqueFilterCommand.prototype.getUniqueValueId = /**
     * @return {?}
     */
    function () {
        return this.uniqueValueId;
    };
    return SelectUniqueFilterCommand;
}(StructureCommand));
export { SelectUniqueFilterCommand };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectUniqueFilterCommand.prototype.fieldId;
    /**
     * @type {?}
     * @private
     */
    SelectUniqueFilterCommand.prototype.uniqueValueId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXVuaXF1ZS1maWx0ZXIuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2RvbWFpbi91bmlxdWUvc2VsZWN0L3NlbGVjdC11bmlxdWUtZmlsdGVyLmNvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUdoRjtJQUErQyxxREFBZ0I7SUFFOUQsbUNBQVksV0FBd0IsRUFDaEIsT0FBZ0IsRUFDaEIsYUFBNEI7UUFGaEQsWUFHQyxrQkFBTSxXQUFXLEVBQUUsMkJBQTJCLENBQUMsU0FDL0M7UUFIbUIsYUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTs7SUFFaEQsQ0FBQzs7OztJQUVELDhDQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsb0RBQWdCOzs7SUFBaEI7UUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDM0IsQ0FBQztJQUVGLGdDQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUErQyxnQkFBZ0IsR0FnQjlEOzs7Ozs7O0lBYkcsNENBQWlDOzs7OztJQUNqQyxrREFBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVJZCB9IGZyb20gJy4uL3VuaXF1ZS12YWx1ZS1pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmNvbW1hbmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kIGV4dGVuZHMgU3RydWN0dXJlQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGZpZWxkSWQ6IEZpZWxkSWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdW5pcXVlVmFsdWVJZDogVW5pcXVlVmFsdWVJZCkge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZCcpO1xuXHR9XG5cblx0Z2V0RmllbGRJZCgpOiBGaWVsZElkIHtcblx0XHRyZXR1cm4gdGhpcy5maWVsZElkO1xuXHR9XG5cblx0Z2V0VW5pcXVlVmFsdWVJZCgpOiBVbmlxdWVWYWx1ZUlkIHtcblx0XHRyZXR1cm4gdGhpcy51bmlxdWVWYWx1ZUlkO1xuXHR9XG5cbn1cbiJdfQ==