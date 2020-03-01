/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Message } from '../message';
/**
 * @abstract
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztBQUdyQyxNQUFNLE9BQWdCLFdBQVksU0FBUSxPQUFPOzs7Ozs7O0lBTWhELFlBQXNCLFdBQXdCLEVBQ3ZDLFdBQW1CLEVBQ25CLE9BQWE7UUFDbkIsS0FBSyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFrQjtRQUM1QixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsT0FBZ0I7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFnQjtRQUMzQixPQUFPLE9BQU8sQ0FBQyxZQUFZLEVBQUUsS0FBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBMkI7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELFVBQVU7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztDQUNEOzs7Ozs7SUE5QkEsdUNBQWlDOzs7OztJQUVqQyw4QkFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi4vY29tbWFuZC9jb21tYW5kJztcbmltcG9ydCB7IERvbWFpbkV2ZW50UGF5bG9hZCB9IGZyb20gJy4vZG9tYWluLWV2ZW50LnBheWxvYWQnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEb21haW5FdmVudCBleHRlbmRzIE1lc3NhZ2Uge1xuXG5cdHByaXZhdGUgcmVxdWVzdENvbW1hbmRJZDogc3RyaW5nO1xuXG5cdHByaXZhdGUgcGF5bG9hZDogRG9tYWluRXZlbnRQYXlsb2FkO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogQWdncmVnYXRlSWQsXG5cdFx0XHRcdFx0XHQgIG1lc3NhZ2VUeXBlOiBzdHJpbmcsXG5cdFx0XHRcdFx0XHQgIHBheWxvYWQ/OiBhbnkpIHtcblx0XHRzdXBlcihhZ2dyZWdhdGVJZCwgbWVzc2FnZVR5cGUpO1xuXHRcdHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XG5cdH1cblxuXHRpc1NhbWVUeXBlKGV2ZW50OiBEb21haW5FdmVudCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgPT09IGV2ZW50LmNvbnN0cnVjdG9yLm5hbWU7XG5cdH1cblxuXHRzZXRSZXF1ZXN0Q29tbWFuZChjb21tYW5kOiBDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5yZXF1ZXN0Q29tbWFuZElkID0gY29tbWFuZC5nZXRNZXNzYWdlSWQoKTtcblx0fVxuXG5cdGZyb21Db21tYW5kKGNvbW1hbmQ6IENvbW1hbmQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gY29tbWFuZC5nZXRNZXNzYWdlSWQoKSA9PT0gdGhpcy5yZXF1ZXN0Q29tbWFuZElkO1xuXHR9XG5cblx0c2V0UGF5bG9hZChwYXlsb2FkOiBEb21haW5FdmVudFBheWxvYWQpOiB2b2lkIHtcblx0XHR0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xuXHR9XG5cblx0Z2V0UGF5bG9hZCgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnBheWxvYWQ7XG5cdH1cbn1cbiJdfQ==