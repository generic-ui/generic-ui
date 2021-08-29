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
    DomainEvent.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vZXZlbnQvZG9tYWluLWV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBRzdDLE1BQU0sT0FBZ0IsV0FBaUQsU0FBUSxPQUFVOzs7Ozs7O0lBSXhGLFlBQXNCLFdBQWMsRUFDN0IsT0FBWSxFQUNaLFdBQW1CO1FBQ3pCLEtBQUssQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBcUI7UUFDL0IsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztJQUN6RCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNULE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0NBQ0Q7Ozs7OztJQWhCQSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtaWQnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UvbWVzc2FnZSc7XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERvbWFpbkV2ZW50PEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCA9IEFnZ3JlZ2F0ZUlkPiBleHRlbmRzIE1lc3NhZ2U8ST4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgcGF5bG9hZDogYW55O1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3RvcihhZ2dyZWdhdGVJZDogSSxcblx0XHRcdFx0XHRcdCAgcGF5bG9hZDogYW55LFxuXHRcdFx0XHRcdFx0ICBtZXNzYWdlVHlwZTogc3RyaW5nKSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIG1lc3NhZ2VUeXBlKTtcblx0XHR0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xuXHR9XG5cblx0aXNTYW1lVHlwZShldmVudDogRG9tYWluRXZlbnQ8ST4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lID09PSBldmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuXHR9XG5cblx0Z2V0UGF5bG9hZCgpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLnBheWxvYWQ7XG5cdH1cbn1cbiJdfQ==