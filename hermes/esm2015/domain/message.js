/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { RandomStringGenerator } from '../common/random-string.generator';
/**
 * @abstract
 * @template I
 */
export class Message {
    /**
     * @protected
     * @param {?} aggregateId
     * @param {?} messageType
     * @param {?=} messageId
     */
    constructor(aggregateId, messageType, messageId = RandomStringGenerator.generate()) {
        this.aggregateId = aggregateId;
        this.messageType = messageType;
        this.messageId = messageId;
    }
    /**
     * @return {?}
     */
    getMessageType() {
        return this.messageType;
    }
    /**
     * @return {?}
     */
    getAggregateId() {
        return this.aggregateId;
    }
    /**
     * @return {?}
     */
    getMessageId() {
        return this.messageId;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.messageType;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    equalsByType(message) {
        return this.getMessageType() === message.getMessageType();
    }
    /**
     * @param {?} message
     * @return {?}
     */
    equals(message) {
        return (this.getMessageType() === message.getMessageType()) && (this.messageId === message.messageId);
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    ofMessageType(arg) {
        if (Array.isArray(arg)) {
            /** @type {?} */
            let found = arg.find((/**
             * @param {?} messageType
             * @return {?}
             */
            (messageType) => this.isMessageType(messageType)));
            return !!found;
        }
        else {
            return this.isMessageType(arg);
        }
    }
    /**
     * @private
     * @param {?} messageType
     * @return {?}
     */
    isMessageType(messageType) {
        return this.getMessageType() === messageType;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    Message.prototype.aggregateId;
    /**
     * @type {?}
     * @protected
     */
    Message.prototype.messageType;
    /**
     * @type {?}
     * @private
     */
    Message.prototype.messageId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9tZXNzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7QUFFMUUsTUFBTSxPQUFnQixPQUFPOzs7Ozs7O0lBRTVCLFlBQXVDLFdBQWMsRUFDM0IsV0FBbUIsRUFDckIsWUFBb0IscUJBQXFCLENBQUMsUUFBUSxFQUFFO1FBRnJDLGdCQUFXLEdBQVgsV0FBVyxDQUFHO1FBQzNCLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ3JCLGNBQVMsR0FBVCxTQUFTLENBQTJDO0lBQzVFLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ2IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLE9BQW1CO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUFtQjtRQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkcsQ0FBQzs7Ozs7SUFJRCxhQUFhLENBQUMsR0FBMkI7UUFFeEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFOztnQkFFbkIsS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxXQUFtQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFDO1lBRTlFLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUVmO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0I7SUFDRixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsV0FBbUI7UUFDeEMsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssV0FBVyxDQUFDO0lBQzlDLENBQUM7Q0FDRDs7Ozs7O0lBL0NzQiw4QkFBK0I7Ozs7O0lBQzlDLDhCQUFzQzs7Ozs7SUFDdEMsNEJBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuL2FnZ3JlZ2F0ZS1pZCc7XG5cbmltcG9ydCB7IFJhbmRvbVN0cmluZ0dlbmVyYXRvciB9IGZyb20gJy4uL2NvbW1vbi9yYW5kb20tc3RyaW5nLmdlbmVyYXRvcic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBNZXNzYWdlPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZD4ge1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZUlkOiBJLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgbWVzc2FnZVR5cGU6IHN0cmluZyxcblx0XHRcdFx0XHRcdCAgcHJpdmF0ZSByZWFkb25seSBtZXNzYWdlSWQ6IHN0cmluZyA9IFJhbmRvbVN0cmluZ0dlbmVyYXRvci5nZW5lcmF0ZSgpKSB7XG5cdH1cblxuXHRnZXRNZXNzYWdlVHlwZSgpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2VUeXBlO1xuXHR9XG5cblx0Z2V0QWdncmVnYXRlSWQoKTogSSB7XG5cdFx0cmV0dXJuIHRoaXMuYWdncmVnYXRlSWQ7XG5cdH1cblxuXHRnZXRNZXNzYWdlSWQoKTogc3RyaW5nIHtcblx0XHRyZXR1cm4gdGhpcy5tZXNzYWdlSWQ7XG5cdH1cblxuXHR0b1N0cmluZygpOiBzdHJpbmcge1xuXHRcdHJldHVybiB0aGlzLm1lc3NhZ2VUeXBlO1xuXHR9XG5cblx0ZXF1YWxzQnlUeXBlKG1lc3NhZ2U6IE1lc3NhZ2U8ST4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlVHlwZSgpID09PSBtZXNzYWdlLmdldE1lc3NhZ2VUeXBlKCk7XG5cdH1cblxuXHRlcXVhbHMobWVzc2FnZTogTWVzc2FnZTxJPik6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAodGhpcy5nZXRNZXNzYWdlVHlwZSgpID09PSBtZXNzYWdlLmdldE1lc3NhZ2VUeXBlKCkpICYmICh0aGlzLm1lc3NhZ2VJZCA9PT0gbWVzc2FnZS5tZXNzYWdlSWQpO1xuXHR9XG5cblx0b2ZNZXNzYWdlVHlwZShtZXNzYWdlVHlwZTogc3RyaW5nKTogYm9vbGVhbjtcblx0b2ZNZXNzYWdlVHlwZShtZXNzYWdlVHlwZXM6IEFycmF5PHN0cmluZz4pOiBib29sZWFuO1xuXHRvZk1lc3NhZ2VUeXBlKGFyZzogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPik6IGJvb2xlYW4ge1xuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXG5cdFx0XHRsZXQgZm91bmQgPSBhcmcuZmluZCgobWVzc2FnZVR5cGU6IHN0cmluZykgPT4gdGhpcy5pc01lc3NhZ2VUeXBlKG1lc3NhZ2VUeXBlKSk7XG5cblx0XHRcdHJldHVybiAhIWZvdW5kO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmlzTWVzc2FnZVR5cGUoYXJnKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGlzTWVzc2FnZVR5cGUobWVzc2FnZVR5cGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VUeXBlKCkgPT09IG1lc3NhZ2VUeXBlO1xuXHR9XG59XG4iXX0=