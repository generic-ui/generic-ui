/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Message } from '../message/message';
/**
 * @abstract
 * @template I
 */
var /**
 * @abstract
 * @template I
 */
DomainEvent = /** @class */ (function (_super) {
    tslib_1.__extends(DomainEvent, _super);
    function DomainEvent(aggregateId, payload, messageType) {
        var _this = _super.call(this, aggregateId, messageType) || this;
        _this.payload = payload;
        return _this;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    DomainEvent.prototype.isSameType = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return this.constructor.name === event.constructor.name;
    };
    /**
     * @return {?}
     */
    DomainEvent.prototype.getPayload = /**
     * @return {?}
     */
    function () {
        return this.payload;
    };
    return DomainEvent;
}(Message));
/**
 * @abstract
 * @template I
 */
export { DomainEvent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DomainEvent.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQUc3Qzs7Ozs7SUFBK0UsdUNBQVU7SUFJeEYscUJBQXNCLFdBQWMsRUFDN0IsT0FBWSxFQUNaLFdBQW1CO1FBRjFCLFlBR0Msa0JBQU0sV0FBVyxFQUFFLFdBQVcsQ0FBQyxTQUUvQjtRQURBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztJQUN4QixDQUFDOzs7OztJQUVELGdDQUFVOzs7O0lBQVYsVUFBVyxLQUFxQjtRQUMvQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3pELENBQUM7Ozs7SUFFRCxnQ0FBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUNGLGtCQUFDO0FBQUQsQ0FBQyxBQWxCRCxDQUErRSxPQUFPLEdBa0JyRjs7Ozs7Ozs7Ozs7SUFoQkEsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEb21haW5FdmVudDxJIGV4dGVuZHMgQWdncmVnYXRlSWQgPSBBZ2dyZWdhdGVJZD4gZXh0ZW5kcyBNZXNzYWdlPEk+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHBheWxvYWQ6IGFueTtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEksXG5cdFx0XHRcdFx0XHQgIHBheWxvYWQ6IGFueSxcblx0XHRcdFx0XHRcdCAgbWVzc2FnZVR5cGU6IHN0cmluZykge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCBtZXNzYWdlVHlwZSk7XG5cdFx0dGhpcy5wYXlsb2FkID0gcGF5bG9hZDtcblx0fVxuXG5cdGlzU2FtZVR5cGUoZXZlbnQ6IERvbWFpbkV2ZW50PEk+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZSA9PT0gZXZlbnQuY29uc3RydWN0b3IubmFtZTtcblx0fVxuXG5cdGdldFBheWxvYWQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5wYXlsb2FkO1xuXHR9XG59XG4iXX0=