/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Message } from '../message';
/**
 * @abstract
 */
var /**
 * @abstract
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7QUFHckM7Ozs7SUFBMEMsdUNBQU87SUFNaEQscUJBQXNCLFdBQXdCLEVBQ3ZDLFdBQW1CLEVBQ25CLE9BQWE7UUFGcEIsWUFHQyxrQkFBTSxXQUFXLEVBQUUsV0FBVyxDQUFDLFNBRS9CO1FBREEsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0lBQ3hCLENBQUM7Ozs7O0lBRUQsZ0NBQVU7Ozs7SUFBVixVQUFXLEtBQWtCO1FBQzVCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCx1Q0FBaUI7Ozs7SUFBakIsVUFBa0IsT0FBZ0I7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELGlDQUFXOzs7O0lBQVgsVUFBWSxPQUFnQjtRQUMzQixPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsS0FBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCxnQ0FBVTs7OztJQUFWLFVBQVcsT0FBMkI7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELGdDQUFVOzs7SUFBVjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBQ0Ysa0JBQUM7QUFBRCxDQUFDLEFBaENELENBQTBDLE9BQU8sR0FnQ2hEOzs7Ozs7Ozs7O0lBOUJBLHVDQUFpQzs7Ozs7SUFFakMsOEJBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4uL2NvbW1hbmQvY29tbWFuZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudFBheWxvYWQgfSBmcm9tICcuL2RvbWFpbi1ldmVudC5wYXlsb2FkJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRG9tYWluRXZlbnQgZXh0ZW5kcyBNZXNzYWdlIHtcblxuXHRwcml2YXRlIHJlcXVlc3RDb21tYW5kSWQ6IHN0cmluZztcblxuXHRwcml2YXRlIHBheWxvYWQ6IERvbWFpbkV2ZW50UGF5bG9hZDtcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IoYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkLFxuXHRcdFx0XHRcdFx0ICBtZXNzYWdlVHlwZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0ICBwYXlsb2FkPzogYW55KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIG1lc3NhZ2VUeXBlKTtcblx0XHR0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xuXHR9XG5cblx0aXNTYW1lVHlwZShldmVudDogRG9tYWluRXZlbnQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lID09PSBldmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuXHR9XG5cblx0c2V0UmVxdWVzdENvbW1hbmQoY29tbWFuZDogQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMucmVxdWVzdENvbW1hbmRJZCA9IGNvbW1hbmQuZ2V0TWVzc2FnZUlkKCk7XG5cdH1cblxuXHRmcm9tQ29tbWFuZChjb21tYW5kOiBDb21tYW5kKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNvbW1hbmQuZ2V0TWVzc2FnZUlkKCkgPT09IHRoaXMucmVxdWVzdENvbW1hbmRJZDtcblx0fVxuXG5cdHNldFBheWxvYWQocGF5bG9hZDogRG9tYWluRXZlbnRQYXlsb2FkKTogdm9pZCB7XG5cdFx0dGhpcy5wYXlsb2FkID0gcGF5bG9hZDtcblx0fVxuXG5cdGdldFBheWxvYWQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5wYXlsb2FkO1xuXHR9XG59XG4iXX0=