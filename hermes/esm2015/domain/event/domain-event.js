/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Message } from '../message';
/**
 * @abstract
 * @template I
 */
export class DomainEvent extends Message {
    /**
     * @protected
     * @param {?} aggregateId
     * @param {?} messageType
     * @param {?=} payload
     */
    constructor(aggregateId, messageType, payload) {
        super(aggregateId, messageType);
        this.payload = payload;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    isSameType(event) {
        return this.constructor.name === event.constructor.name;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    setRequestCommand(command) {
        this.requestCommandId = command.getMessageId();
    }
    /**
     * @param {?} command
     * @return {?}
     */
    fromCommand(command) {
        return command.getMessageId() === this.requestCommandId;
    }
    /**
     * @param {?} payload
     * @return {?}
     */
    setPayload(payload) {
        this.payload = payload;
    }
    /**
     * @return {?}
     */
    getPayload() {
        return this.payload;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQzs7Ozs7QUFHckMsTUFBTSxPQUFnQixXQUFtQyxTQUFRLE9BQU87Ozs7Ozs7SUFNdkUsWUFBc0IsV0FBYyxFQUM3QixXQUFtQixFQUNuQixPQUFhO1FBQ25CLEtBQUssQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBcUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLE9BQWdCO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBZ0I7UUFDM0IsT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQTJCO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Q0FDRDs7Ozs7O0lBOUJBLHVDQUFpQzs7Ozs7SUFFakMsOEJBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4uL2NvbW1hbmQvY29tbWFuZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudFBheWxvYWQgfSBmcm9tICcuL2RvbWFpbi1ldmVudC5wYXlsb2FkJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9tZXNzYWdlJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRG9tYWluRXZlbnQ8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkPiBleHRlbmRzIE1lc3NhZ2Uge1xuXG5cdHByaXZhdGUgcmVxdWVzdENvbW1hbmRJZDogc3RyaW5nO1xuXG5cdHByaXZhdGUgcGF5bG9hZDogRG9tYWluRXZlbnRQYXlsb2FkO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogSSxcblx0XHRcdFx0XHRcdCAgbWVzc2FnZVR5cGU6IHN0cmluZyxcblx0XHRcdFx0XHRcdCAgcGF5bG9hZD86IGFueSkge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCBtZXNzYWdlVHlwZSk7XG5cdFx0dGhpcy5wYXlsb2FkID0gcGF5bG9hZDtcblx0fVxuXG5cdGlzU2FtZVR5cGUoZXZlbnQ6IERvbWFpbkV2ZW50PEk+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZSA9PT0gZXZlbnQuY29uc3RydWN0b3IubmFtZTtcblx0fVxuXG5cdHNldFJlcXVlc3RDb21tYW5kKGNvbW1hbmQ6IENvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLnJlcXVlc3RDb21tYW5kSWQgPSBjb21tYW5kLmdldE1lc3NhZ2VJZCgpO1xuXHR9XG5cblx0ZnJvbUNvbW1hbmQoY29tbWFuZDogQ29tbWFuZCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjb21tYW5kLmdldE1lc3NhZ2VJZCgpID09PSB0aGlzLnJlcXVlc3RDb21tYW5kSWQ7XG5cdH1cblxuXHRzZXRQYXlsb2FkKHBheWxvYWQ6IERvbWFpbkV2ZW50UGF5bG9hZCk6IHZvaWQge1xuXHRcdHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XG5cdH1cblxuXHRnZXRQYXlsb2FkKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMucGF5bG9hZDtcblx0fVxufVxuIl19