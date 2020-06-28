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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7QUFHN0M7Ozs7O0lBQWlFLHVDQUFVO0lBTTFFLHFCQUFzQixXQUFjLEVBQzdCLFdBQW1CLEVBQ25CLE9BQWE7UUFGcEIsWUFHQyxrQkFBTSxXQUFXLEVBQUUsV0FBVyxDQUFDLFNBRS9CO1FBREEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0lBQ3hCLENBQUM7Ozs7O0lBRUQsZ0NBQVU7Ozs7SUFBVixVQUFXLEtBQXFCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCx1Q0FBaUI7Ozs7SUFBakIsVUFBa0IsT0FBZ0I7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELGlDQUFXOzs7O0lBQVgsVUFBWSxPQUFnQjtRQUMzQixPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsS0FBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCxnQ0FBVTs7OztJQUFWLFVBQVcsT0FBMkI7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELGdDQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBQ0Ysa0JBQUM7QUFBRCxDQUFDLEFBaENELENBQWlFLE9BQU8sR0FnQ3ZFOzs7Ozs7Ozs7OztJQTlCQSx1Q0FBaUM7Ozs7O0lBRWpDLDhCQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuLi9jb21tYW5kL2NvbW1hbmQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRQYXlsb2FkIH0gZnJvbSAnLi9kb21haW4tZXZlbnQucGF5bG9hZCc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRG9tYWluRXZlbnQ8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkPiBleHRlbmRzIE1lc3NhZ2U8ST4ge1xuXG5cdHByaXZhdGUgcmVxdWVzdENvbW1hbmRJZDogc3RyaW5nO1xuXG5cdHByaXZhdGUgcGF5bG9hZDogRG9tYWluRXZlbnRQYXlsb2FkO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogSSxcblx0XHRcdFx0XHRcdCAgbWVzc2FnZVR5cGU6IHN0cmluZyxcblx0XHRcdFx0XHRcdCAgcGF5bG9hZD86IGFueSkge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCBtZXNzYWdlVHlwZSk7XG5cdFx0dGhpcy5wYXlsb2FkID0gcGF5bG9hZDtcblx0fVxuXG5cdGlzU2FtZVR5cGUoZXZlbnQ6IERvbWFpbkV2ZW50PEk+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZSA9PT0gZXZlbnQuY29uc3RydWN0b3IubmFtZTtcblx0fVxuXG5cdHNldFJlcXVlc3RDb21tYW5kKGNvbW1hbmQ6IENvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLnJlcXVlc3RDb21tYW5kSWQgPSBjb21tYW5kLmdldE1lc3NhZ2VJZCgpO1xuXHR9XG5cblx0ZnJvbUNvbW1hbmQoY29tbWFuZDogQ29tbWFuZCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjb21tYW5kLmdldE1lc3NhZ2VJZCgpID09PSB0aGlzLnJlcXVlc3RDb21tYW5kSWQ7XG5cdH1cblxuXHRzZXRQYXlsb2FkKHBheWxvYWQ6IERvbWFpbkV2ZW50UGF5bG9hZCk6IHZvaWQge1xuXHRcdHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XG5cdH1cblxuXHRnZXRQYXlsb2FkKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMucGF5bG9hZDtcblx0fVxufVxuIl19