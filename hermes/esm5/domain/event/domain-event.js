/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Message } from '../message';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2V2ZW50L2RvbWFpbi1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUdBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7O0FBR3JDOzs7OztJQUFpRSx1Q0FBTztJQU12RSxxQkFBc0IsV0FBYyxFQUM3QixXQUFtQixFQUNuQixPQUFhO1FBRnBCLFlBR0Msa0JBQU0sV0FBVyxFQUFFLFdBQVcsQ0FBQyxTQUUvQjtRQURBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztJQUN4QixDQUFDOzs7OztJQUVELGdDQUFVOzs7O0lBQVYsVUFBVyxLQUFxQjtRQUMvQixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsdUNBQWlCOzs7O0lBQWpCLFVBQWtCLE9BQWdCO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDaEQsQ0FBQzs7Ozs7SUFFRCxpQ0FBVzs7OztJQUFYLFVBQVksT0FBZ0I7UUFDM0IsT0FBTyxPQUFPLENBQUMsWUFBWSxFQUFFLEtBQUssSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsZ0NBQVU7Ozs7SUFBVixVQUFXLE9BQTJCO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRCxnQ0FBVTs7O0lBQVY7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUNGLGtCQUFDO0FBQUQsQ0FBQyxBQWhDRCxDQUFpRSxPQUFPLEdBZ0N2RTs7Ozs7Ozs7Ozs7SUE5QkEsdUNBQWlDOzs7OztJQUVqQyw4QkFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi4vY29tbWFuZC9jb21tYW5kJztcbmltcG9ydCB7IERvbWFpbkV2ZW50UGF5bG9hZCB9IGZyb20gJy4vZG9tYWluLWV2ZW50LnBheWxvYWQnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL21lc3NhZ2UnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEb21haW5FdmVudDxJIGV4dGVuZHMgQWdncmVnYXRlSWQ+IGV4dGVuZHMgTWVzc2FnZSB7XG5cblx0cHJpdmF0ZSByZXF1ZXN0Q29tbWFuZElkOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSBwYXlsb2FkOiBEb21haW5FdmVudFBheWxvYWQ7XG5cblx0cHJvdGVjdGVkIGNvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkOiBJLFxuXHRcdFx0XHRcdFx0ICBtZXNzYWdlVHlwZTogc3RyaW5nLFxuXHRcdFx0XHRcdFx0ICBwYXlsb2FkPzogYW55KSB7XG5cdFx0c3VwZXIoYWdncmVnYXRlSWQsIG1lc3NhZ2VUeXBlKTtcblx0XHR0aGlzLnBheWxvYWQgPSBwYXlsb2FkO1xuXHR9XG5cblx0aXNTYW1lVHlwZShldmVudDogRG9tYWluRXZlbnQ8ST4pOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lID09PSBldmVudC5jb25zdHJ1Y3Rvci5uYW1lO1xuXHR9XG5cblx0c2V0UmVxdWVzdENvbW1hbmQoY29tbWFuZDogQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMucmVxdWVzdENvbW1hbmRJZCA9IGNvbW1hbmQuZ2V0TWVzc2FnZUlkKCk7XG5cdH1cblxuXHRmcm9tQ29tbWFuZChjb21tYW5kOiBDb21tYW5kKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIGNvbW1hbmQuZ2V0TWVzc2FnZUlkKCkgPT09IHRoaXMucmVxdWVzdENvbW1hbmRJZDtcblx0fVxuXG5cdHNldFBheWxvYWQocGF5bG9hZDogRG9tYWluRXZlbnRQYXlsb2FkKTogdm9pZCB7XG5cdFx0dGhpcy5wYXlsb2FkID0gcGF5bG9hZDtcblx0fVxuXG5cdGdldFBheWxvYWQoKTogYW55IHtcblx0XHRyZXR1cm4gdGhpcy5wYXlsb2FkO1xuXHR9XG59XG4iXX0=