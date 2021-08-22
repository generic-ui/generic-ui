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
     * @param {?} command
     * @return {?}
     */
    DomainEvent.prototype.setRequestCommand = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        this.requestCommandId = command.getMessageId();
    };
    /**
     * @param {?} command
     * @return {?}
     */
    DomainEvent.prototype.fromCommand = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        return command.getMessageId() === this.requestCommandId;
    };
    /**
     * @param {?} payload
     * @return {?}
     */
    DomainEvent.prototype.setPayload = /**
     * @param {?} payload
     * @return {?}
     */
    function (payload) {
        this.payload = payload;
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
    DomainEvent.prototype.requestCommandId;
    /**
     * @type {?}
     * @private
     */
    DomainEvent.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQUc3Qzs7Ozs7SUFBK0UsdUNBQVU7SUFNeEYscUJBQXNCLFdBQWMsRUFDN0IsT0FBWSxFQUNaLFdBQW1CO1FBRjFCLFlBR0Msa0JBQU0sV0FBVyxFQUFFLFdBQVcsQ0FBQyxTQUUvQjtRQURBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztJQUN4QixDQUFDOzs7OztJQUVELGdDQUFVOzs7O0lBQVYsVUFBVyxLQUFxQjtRQUMvQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsdUNBQWlCOzs7O0lBQWpCLFVBQWtCLE9BQW1CO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFFRCxpQ0FBVzs7OztJQUFYLFVBQVksT0FBbUI7UUFDOUIsT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsZ0NBQVU7Ozs7SUFBVixVQUFXLE9BQTJCO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxnQ0FBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUNGLGtCQUFDO0FBQUQsQ0FBQyxBQWhDRCxDQUErRSxPQUFPLEdBZ0NyRjs7Ozs7Ozs7Ozs7SUE5QkEsdUNBQWlDOzs7OztJQUVqQyw4QkFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4uL2NvbW1hbmQvY29tbWFuZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudFBheWxvYWQgfSBmcm9tICcuL2RvbWFpbi1ldmVudC5wYXlsb2FkJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlL21lc3NhZ2UnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEb21haW5FdmVudDxJIGV4dGVuZHMgQWdncmVnYXRlSWQgPSBBZ2dyZWdhdGVJZD4gZXh0ZW5kcyBNZXNzYWdlPEk+IHtcblxuXHRwcml2YXRlIHJlcXVlc3RDb21tYW5kSWQ6IHN0cmluZztcblxuXHRwcml2YXRlIHBheWxvYWQ6IERvbWFpbkV2ZW50UGF5bG9hZDtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEksXG5cdFx0XHRcdFx0XHQgIHBheWxvYWQ6IGFueSxcblx0XHRcdFx0XHRcdCAgbWVzc2FnZVR5cGU6IHN0cmluZykge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCBtZXNzYWdlVHlwZSk7XG5cdFx0dGhpcy5wYXlsb2FkID0gcGF5bG9hZDtcblx0fVxuXG5cdGlzU2FtZVR5cGUoZXZlbnQ6IERvbWFpbkV2ZW50PEk+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZSA9PT0gZXZlbnQuY29uc3RydWN0b3IubmFtZTtcblx0fVxuXG5cdHNldFJlcXVlc3RDb21tYW5kKGNvbW1hbmQ6IENvbW1hbmQ8ST4pOiB2b2lkIHtcblx0XHR0aGlzLnJlcXVlc3RDb21tYW5kSWQgPSBjb21tYW5kLmdldE1lc3NhZ2VJZCgpO1xuXHR9XG5cblx0ZnJvbUNvbW1hbmQoY29tbWFuZDogQ29tbWFuZDxJPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjb21tYW5kLmdldE1lc3NhZ2VJZCgpID09PSB0aGlzLnJlcXVlc3RDb21tYW5kSWQ7XG5cdH1cblxuXHRzZXRQYXlsb2FkKHBheWxvYWQ6IERvbWFpbkV2ZW50UGF5bG9hZCk6IHZvaWQge1xuXHRcdHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XG5cdH1cblxuXHRnZXRQYXlsb2FkKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMucGF5bG9hZDtcblx0fVxufVxuIl19