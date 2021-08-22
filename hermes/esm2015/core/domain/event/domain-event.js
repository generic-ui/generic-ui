/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Message } from '../message/message';
/**
 * @abstract
 * @template I
 */
export class DomainEvent extends Message {
    /**
     * @protected
     * @param {?} aggregateId
     * @param {?} payload
     * @param {?} messageType
     */
    constructor(aggregateId, payload, messageType) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBRzdDLE1BQU0sT0FBZ0IsV0FBaUQsU0FBUSxPQUFVOzs7Ozs7O0lBTXhGLFlBQXNCLFdBQWMsRUFDN0IsT0FBWSxFQUNaLFdBQW1CO1FBQ3pCLEtBQUssQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBcUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELGlCQUFpQixDQUFDLE9BQW1CO1FBQ3BDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBbUI7UUFDOUIsT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQTJCO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7Q0FDRDs7Ozs7O0lBOUJBLHVDQUFpQzs7Ozs7SUFFakMsOEJBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuLi9jb21tYW5kL2NvbW1hbmQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRQYXlsb2FkIH0gZnJvbSAnLi9kb21haW4tZXZlbnQucGF5bG9hZCc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vbWVzc2FnZS9tZXNzYWdlJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRG9tYWluRXZlbnQ8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkID0gQWdncmVnYXRlSWQ+IGV4dGVuZHMgTWVzc2FnZTxJPiB7XG5cblx0cHJpdmF0ZSByZXF1ZXN0Q29tbWFuZElkOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSBwYXlsb2FkOiBEb21haW5FdmVudFBheWxvYWQ7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBJLFxuXHRcdFx0XHRcdFx0ICBwYXlsb2FkOiBhbnksXG5cdFx0XHRcdFx0XHQgIG1lc3NhZ2VUeXBlOiBzdHJpbmcpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgbWVzc2FnZVR5cGUpO1xuXHRcdHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XG5cdH1cblxuXHRpc1NhbWVUeXBlKGV2ZW50OiBEb21haW5FdmVudDxJPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgPT09IGV2ZW50LmNvbnN0cnVjdG9yLm5hbWU7XG5cdH1cblxuXHRzZXRSZXF1ZXN0Q29tbWFuZChjb21tYW5kOiBDb21tYW5kPEk+KTogdm9pZCB7XG5cdFx0dGhpcy5yZXF1ZXN0Q29tbWFuZElkID0gY29tbWFuZC5nZXRNZXNzYWdlSWQoKTtcblx0fVxuXG5cdGZyb21Db21tYW5kKGNvbW1hbmQ6IENvbW1hbmQ8ST4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gY29tbWFuZC5nZXRNZXNzYWdlSWQoKSA9PT0gdGhpcy5yZXF1ZXN0Q29tbWFuZElkO1xuXHR9XG5cblx0c2V0UGF5bG9hZChwYXlsb2FkOiBEb21haW5FdmVudFBheWxvYWQpOiB2b2lkIHtcblx0XHR0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xuXHR9XG5cblx0Z2V0UGF5bG9hZCgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnBheWxvYWQ7XG5cdH1cbn1cbiJdfQ==