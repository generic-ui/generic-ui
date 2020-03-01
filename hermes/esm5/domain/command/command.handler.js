/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { isObservable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Optional } from '../../common/optional';
/**
 * @abstract
 * @template A
 */
var /**
 * @abstract
 * @template A
 */
CommandHandler = /** @class */ (function () {
    function CommandHandler(command, // any is required when inherited Command has more arguments than Command
    domainEvent, eventPublisher, aggregateRepository) {
        this.command = command;
        this.domainEvent = domainEvent;
        this.eventPublisher = eventPublisher;
        this.aggregateRepository = aggregateRepository;
        this.commandType = this.createCommandInstance().getMessageType();
    }
    /**
     * @param {?} command
     * @return {?}
     */
    CommandHandler.prototype.handle = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
    };
    // TODO change to abstract
    // TODO change to abstract
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    CommandHandler.prototype.handleAggregate = 
    // TODO change to abstract
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
    };
    /**
     * @param {?} command
     * @return {?}
     */
    CommandHandler.prototype.handleEmptyAggregate = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
    };
    // TODO change to abstract
    // TODO change to abstract
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    CommandHandler.prototype.publishDomainEvents = 
    // TODO change to abstract
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
    };
    /**
     * @param {?} command
     * @return {?}
     */
    CommandHandler.prototype.handleCommandForAggregate = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        var _this = this;
        /** @type {?} */
        var aggregateId = command.getAggregateId();
        /** @type {?} */
        var optAggregate = Optional.of(this.aggregateRepository.getById(aggregateId));
        optAggregate.ifPresent((/**
         * @param {?} aggregate
         * @return {?}
         */
        function (aggregate) {
            _this.handleAggregate(aggregate, command);
            _this.aggregateRepository.save(aggregate);
            _this.publishDomainEvents(aggregate, command);
        }));
        optAggregate.ifEmpty((/**
         * @return {?}
         */
        function () {
            _this.handleEmptyAggregate(command);
        }));
    };
    /**
     * @param {?} command
     * @return {?}
     */
    CommandHandler.prototype.forCommand = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        return this.commandType === command.getMessageType();
    };
    /**
     * @param {?} command
     * @return {?}
     */
    CommandHandler.prototype.handleCommand = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        var _this = this;
        if (this.aggregateRepository) {
            this.handleCommandForAggregate(command);
            return;
        }
        /** @type {?} */
        var result = this.handle(command);
        if (isObservable(result)) {
            ((/** @type {?} */ (result)))
                .pipe(take(1))
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                // trigger event
                _this.dispatchEvent(command, res);
            }));
        }
        else {
            this.dispatchEvent(command, (/** @type {?} */ (result)));
        }
    };
    /**
     * @private
     * @param {?} command
     * @param {?=} result
     * @return {?}
     */
    CommandHandler.prototype.dispatchEvent = /**
     * @private
     * @param {?} command
     * @param {?=} result
     * @return {?}
     */
    function (command, result) {
        if (this.domainEvent && this.eventPublisher) {
            /** @type {?} */
            var aggregateId = command.getAggregateId();
            /** @type {?} */
            var event_1 = new ((/** @type {?} */ (this.domainEvent)))(aggregateId);
            event_1.setRequestCommand(command);
            if (result) {
                event_1.setPayload(result);
            }
            this.eventPublisher.publish(event_1);
        }
    };
    /**
     * @private
     * @return {?}
     */
    CommandHandler.prototype.createCommandInstance = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var args = [];
        /** @type {?} */
        var argumentLength = this.command.constructor.length;
        args.fill(undefined, 0, argumentLength);
        return (new ((_a = ((/** @type {?} */ (this.command)))).bind.apply(_a, tslib_1.__spread([void 0], args)))());
    };
    return CommandHandler;
}());
/**
 * @abstract
 * @template A
 */
export { CommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CommandHandler.prototype.commandType;
    /**
     * @type {?}
     * @private
     */
    CommandHandler.prototype.command;
    /**
     * @type {?}
     * @private
     */
    CommandHandler.prototype.domainEvent;
    /**
     * @type {?}
     * @protected
     */
    CommandHandler.prototype.eventPublisher;
    /**
     * @type {?}
     * @protected
     */
    CommandHandler.prototype.aggregateRepository;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvY29tbWFuZC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFXdEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUdqRDs7Ozs7SUFJQyx3QkFBdUMsT0FBNkIsRUFBRSx5RUFBeUU7SUFDdkgsV0FBZ0MsRUFDOUIsY0FBcUMsRUFDckMsbUJBQTRDO1FBSC9CLFlBQU8sR0FBUCxPQUFPLENBQXNCO1FBQzVDLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFDckMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUF5QjtRQUNyRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRUQsK0JBQU07Ozs7SUFBTixVQUFPLE9BQWdCO0lBQ3ZCLENBQUM7SUFFRCwwQkFBMEI7Ozs7Ozs7SUFDMUIsd0NBQWU7Ozs7Ozs7SUFBZixVQUFnQixTQUFZLEVBQUUsT0FBZ0I7SUFDOUMsQ0FBQzs7Ozs7SUFFRCw2Q0FBb0I7Ozs7SUFBcEIsVUFBcUIsT0FBZ0I7SUFDckMsQ0FBQztJQUVELDBCQUEwQjs7Ozs7OztJQUMxQiw0Q0FBbUI7Ozs7Ozs7SUFBbkIsVUFBb0IsU0FBWSxFQUFFLE9BQWdCO0lBQ2xELENBQUM7Ozs7O0lBRUQsa0RBQXlCOzs7O0lBQXpCLFVBQTBCLE9BQWdCO1FBQTFDLGlCQWtCQzs7WUFoQk0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUU7O1lBRXRDLFlBQVks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c2VydmFibGUsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuL2NvbW1hbmQnO1xuaW1wb3J0IHsgRXhlY3V0ZVJlc3BvbnNlIH0gZnJvbSAnLi9leGVjdXRlLXJlc3BvbnNlJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vYWdncmVnYXRlLWlkJztcblxuaW1wb3J0IHsgRG9tYWluRXZlbnQgfSBmcm9tICcuLi9ldmVudC9kb21haW4tZXZlbnQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICcuLi9ldmVudC9kb21haW4tZXZlbnQucHVibGlzaGVyJztcbmltcG9ydCB7IERvbWFpbkV2ZW50UGF5bG9hZCB9IGZyb20gJy4uL2V2ZW50L2RvbWFpbi1ldmVudC5wYXlsb2FkJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuL2FnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZSB9IGZyb20gJy4vYWdncmVnYXRlJztcbmltcG9ydCB7IE9wdGlvbmFsIH0gZnJvbSAnLi4vLi4vY29tbW9uL29wdGlvbmFsJztcblxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29tbWFuZEhhbmRsZXI8QSBleHRlbmRzIEFnZ3JlZ2F0ZT4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZFR5cGU6IHN0cmluZztcblxuXHRwcm90ZWN0ZWQgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21tYW5kOiB0eXBlb2YgQ29tbWFuZCB8IGFueSwgLy8gYW55IGlzIHJlcXVpcmVkIHdoZW4gaW5oZXJpdGVkIENvbW1hbmQgaGFzIG1vcmUgYXJndW1lbnRzIHRoYW4gQ29tbWFuZFxuXHRcdFx0XHRcdFx0ICBwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50PzogdHlwZW9mIERvbWFpbkV2ZW50LFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgZXZlbnRQdWJsaXNoZXI/OiBEb21haW5FdmVudFB1Ymxpc2hlcixcblx0XHRcdFx0XHRcdCAgcHJvdGVjdGVkIHJlYWRvbmx5IGFnZ3JlZ2F0ZVJlcG9zaXRvcnk/OiBBZ2dyZWdhdGVSZXBvc2l0b3J5PEE+KSB7XG5cdFx0dGhpcy5jb21tYW5kVHlwZSA9IHRoaXMuY3JlYXRlQ29tbWFuZEluc3RhbmNlKCkuZ2V0TWVzc2FnZVR5cGUoKTtcblx0fVxuXG5cdGhhbmRsZShjb21tYW5kOiBDb21tYW5kKTogRXhlY3V0ZVJlc3BvbnNlIHwgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+IHtcblx0fVxuXG5cdC8vIFRPRE8gY2hhbmdlIHRvIGFic3RyYWN0XG5cdGhhbmRsZUFnZ3JlZ2F0ZShhZ2dyZWdhdGU6IEEsIGNvbW1hbmQ6IENvbW1hbmQpOiB2b2lkIHtcblx0fVxuXG5cdGhhbmRsZUVtcHR5QWdncmVnYXRlKGNvbW1hbmQ6IENvbW1hbmQpOiB2b2lkIHtcblx0fVxuXG5cdC8vIFRPRE8gY2hhbmdlIHRvIGFic3RyYWN0XG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBBLCBjb21tYW5kOiBDb21tYW5kKTogdm9pZCB7XG5cdH1cblxuXHRoYW5kbGVDb21tYW5kRm9yQWdncmVnYXRlKGNvbW1hbmQ6IENvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpO1xuXG5cdFx0Y29uc3Qgb3B0QWdncmVnYXRlID0gT3B0aW9uYWwub2YodGhpcy5hZ2dyZWdhdGVSZXBvc2l0b3J5LmdldEJ5SWQoYWdncmVnYXRlSWQpKTtcblxuXHRcdG9wdEFnZ3JlZ2F0ZS5pZlByZXNlbnQoKGFnZ3JlZ2F0ZTogQSkgPT4ge1xuXG5cdFx0XHR0aGlzLmhhbmRsZUFnZ3JlZ2F0ZShhZ2dyZWdhdGUsIGNvbW1hbmQpO1xuXG5cdFx0XHR0aGlzLmFnZ3JlZ2F0ZVJlcG9zaXRvcnkuc2F2ZShhZ2dyZWdhdGUpO1xuXG5cdFx0XHR0aGlzLnB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlLCBjb21tYW5kKTtcblx0XHR9KTtcblxuXHRcdG9wdEFnZ3JlZ2F0ZS5pZkVtcHR5KCgpID0+IHtcblx0XHRcdHRoaXMuaGFuZGxlRW1wdHlBZ2dyZWdhdGUoY29tbWFuZCk7XG5cdFx0fSk7XG5cdH1cblxuXG5cdGZvckNvbW1hbmQoY29tbWFuZDogQ29tbWFuZCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbW1hbmRUeXBlID09PSBjb21tYW5kLmdldE1lc3NhZ2VUeXBlKCk7XG5cdH1cblxuXHRoYW5kbGVDb21tYW5kKGNvbW1hbmQ6IENvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLmFnZ3JlZ2F0ZVJlcG9zaXRvcnkpIHtcblx0XHRcdHRoaXMuaGFuZGxlQ29tbWFuZEZvckFnZ3JlZ2F0ZShjb21tYW5kKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJlc3VsdCA9IHRoaXMuaGFuZGxlKGNvbW1hbmQpO1xuXG5cdFx0aWYgKGlzT2JzZXJ2YWJsZShyZXN1bHQpKSB7XG5cdFx0XHQocmVzdWx0IGFzIE9ic2VydmFibGU8RXhlY3V0ZVJlc3BvbnNlPilcblx0XHRcdFx0LnBpcGUoXG5cdFx0XHRcdFx0dGFrZSgxKVxuXHRcdFx0XHQpXG5cdFx0XHRcdC5zdWJzY3JpYmUoKHJlczogdm9pZCB8IERvbWFpbkV2ZW50UGF5bG9hZCkgPT4ge1xuXG5cdFx0XHRcdFx0Ly8gdHJpZ2dlciBldmVudFxuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2hFdmVudChjb21tYW5kLCByZXMpO1xuXHRcdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KGNvbW1hbmQsIHJlc3VsdCBhcyBFeGVjdXRlUmVzcG9uc2UpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgZGlzcGF0Y2hFdmVudChjb21tYW5kOiBDb21tYW5kLCByZXN1bHQ/OiBFeGVjdXRlUmVzcG9uc2UpOiB2b2lkIHtcblxuXHRcdGlmICh0aGlzLmRvbWFpbkV2ZW50ICYmIHRoaXMuZXZlbnRQdWJsaXNoZXIpIHtcblxuXHRcdFx0bGV0IGFnZ3JlZ2F0ZUlkOiBBZ2dyZWdhdGVJZCA9IGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKTtcblxuXHRcdFx0Y29uc3QgZXZlbnQgPSBuZXcgKHRoaXMuZG9tYWluRXZlbnQgYXMgYW55KShhZ2dyZWdhdGVJZCk7XG5cblx0XHRcdGV2ZW50LnNldFJlcXVlc3RDb21tYW5kKGNvbW1hbmQpO1xuXG5cdFx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHRcdGV2ZW50LnNldFBheWxvYWQocmVzdWx0KTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5ldmVudFB1Ymxpc2hlci5wdWJsaXNoKGV2ZW50KTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUNvbW1hbmRJbnN0YW5jZSgpOiBDb21tYW5kIHtcblx0XHRjb25zdCBhcmdzOiBBcnJheTx2b2lkPiA9IFtdLFxuXHRcdFx0YXJndW1lbnRMZW5ndGggPSB0aGlzLmNvbW1hbmQuY29uc3RydWN0b3IubGVuZ3RoO1xuXG5cdFx0YXJncy5maWxsKHVuZGVmaW5lZCwgMCwgYXJndW1lbnRMZW5ndGgpO1xuXG5cdFx0cmV0dXJuIChuZXcgKHRoaXMuY29tbWFuZCBhcyBhbnkpKC4uLmFyZ3MpKTtcblx0fVxufVxuIl19