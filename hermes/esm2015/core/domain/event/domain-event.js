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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBRzdDLE1BQU0sT0FBZ0IsV0FBaUQsU0FBUSxPQUFVOzs7Ozs7O0lBTXhGLFlBQXNCLFdBQWMsRUFDN0IsV0FBbUIsRUFDbkIsT0FBYTtRQUNuQixLQUFLLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQXFCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDekQsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxPQUFtQjtRQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQW1CO1FBQzlCLE9BQU8sT0FBTyxDQUFDLFlBQVksRUFBRSxLQUFLLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUN6RCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUEyQjtRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0NBQ0Q7Ozs7OztJQTlCQSx1Q0FBaUM7Ozs7O0lBRWpDLDhCQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi4vY29tbWFuZC9jb21tYW5kJztcbmltcG9ydCB7IERvbWFpbkV2ZW50UGF5bG9hZCB9IGZyb20gJy4vZG9tYWluLWV2ZW50LnBheWxvYWQnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZSc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERvbWFpbkV2ZW50PEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCA9IEFnZ3JlZ2F0ZUlkPiBleHRlbmRzIE1lc3NhZ2U8ST4ge1xuXG5cdHByaXZhdGUgcmVxdWVzdENvbW1hbmRJZDogc3RyaW5nO1xuXG5cdHByaXZhdGUgcGF5bG9hZDogRG9tYWluRXZlbnRQYXlsb2FkO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogSSxcblx0XHRcdFx0XHRcdCAgbWVzc2FnZVR5cGU6IHN0cmluZyxcblx0XHRcdFx0XHRcdCAgcGF5bG9hZD86IGFueSkge1xuXHRcdHN1cGVyKGFnZ3JlZ2F0ZUlkLCBtZXNzYWdlVHlwZSk7XG5cdFx0dGhpcy5wYXlsb2FkID0gcGF5bG9hZDtcblx0fVxuXG5cdGlzU2FtZVR5cGUoZXZlbnQ6IERvbWFpbkV2ZW50PEk+KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IubmFtZSA9PT0gZXZlbnQuY29uc3RydWN0b3IubmFtZTtcblx0fVxuXG5cdHNldFJlcXVlc3RDb21tYW5kKGNvbW1hbmQ6IENvbW1hbmQ8ST4pOiB2b2lkIHtcblx0XHR0aGlzLnJlcXVlc3RDb21tYW5kSWQgPSBjb21tYW5kLmdldE1lc3NhZ2VJZCgpO1xuXHR9XG5cblx0ZnJvbUNvbW1hbmQoY29tbWFuZDogQ29tbWFuZDxJPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiBjb21tYW5kLmdldE1lc3NhZ2VJZCgpID09PSB0aGlzLnJlcXVlc3RDb21tYW5kSWQ7XG5cdH1cblxuXHRzZXRQYXlsb2FkKHBheWxvYWQ6IERvbWFpbkV2ZW50UGF5bG9hZCk6IHZvaWQge1xuXHRcdHRoaXMucGF5bG9hZCA9IHBheWxvYWQ7XG5cdH1cblxuXHRnZXRQYXlsb2FkKCk6IGFueSB7XG5cdFx0cmV0dXJuIHRoaXMucGF5bG9hZDtcblx0fVxufVxuIl19