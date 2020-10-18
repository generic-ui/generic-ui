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
    function DomainEvent(aggregateId, messageType, payload) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQUc3Qzs7Ozs7SUFBK0UsdUNBQVU7SUFNeEYscUJBQXNCLFdBQWMsRUFDN0IsV0FBbUIsRUFDbkIsT0FBYTtRQUZwQixZQUdDLGtCQUFNLFdBQVcsRUFBRSxXQUFXLENBQUMsU0FFL0I7UUFEQSxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxnQ0FBVTs7OztJQUFWLFVBQVcsS0FBcUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELHVDQUFpQjs7OztJQUFqQixVQUFrQixPQUFtQjtRQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRUQsaUNBQVc7Ozs7SUFBWCxVQUFZLE9BQW1CO1FBQzlCLE9BQU8sT0FBTyxDQUFDLFlBQVksRUFBRSxLQUFLLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELGdDQUFVOzs7O0lBQVYsVUFBVyxPQUEyQjtRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsZ0NBQVU7OztJQUFWO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFDRixrQkFBQztBQUFELENBQUMsQUFoQ0QsQ0FBK0UsT0FBTyxHQWdDckY7Ozs7Ozs7Ozs7O0lBOUJBLHVDQUFpQzs7Ozs7SUFFakMsOEJBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuLi9jb21tYW5kL2NvbW1hbmQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRQYXlsb2FkIH0gZnJvbSAnLi9kb21haW4tZXZlbnQucGF5bG9hZCc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRG9tYWluRXZlbnQ8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkID0gQWdncmVnYXRlSWQ+IGV4dGVuZHMgTWVzc2FnZTxJPiB7XG5cblx0cHJpdmF0ZSByZXF1ZXN0Q29tbWFuZElkOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSBwYXlsb2FkOiBEb21haW5FdmVudFBheWxvYWQ7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBJLFxuXHRcdFx0XHRcdFx0ICBtZXNzYWdlVHlwZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0ICBwYXlsb2FkPzogYW55KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIG1lc3NhZ2VUeXBlKTtcblx0XHR0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xuXHR9XG5cblx0aXNTYW1lVHlwZShldmVudDogRG9tYWluRXZlbnQ8ST4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lID09PSBldmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuXHR9XG5cblx0c2V0UmVxdWVzdENvbW1hbmQoY29tbWFuZDogQ29tbWFuZDxJPik6IHZvaWQge1xuXHRcdHRoaXMucmVxdWVzdENvbW1hbmRJZCA9IGNvbW1hbmQuZ2V0TWVzc2FnZUlkKCk7XG5cdH1cblxuXHRmcm9tQ29tbWFuZChjb21tYW5kOiBDb21tYW5kPEk+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNvbW1hbmQuZ2V0TWVzc2FnZUlkKCkgPT09IHRoaXMucmVxdWVzdENvbW1hbmRJZDtcblx0fVxuXG5cdHNldFBheWxvYWQocGF5bG9hZDogRG9tYWluRXZlbnRQYXlsb2FkKTogdm9pZCB7XG5cdFx0dGhpcy5wYXlsb2FkID0gcGF5bG9hZDtcblx0fVxuXG5cdGdldFBheWxvYWQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5wYXlsb2FkO1xuXHR9XG59XG4iXX0=