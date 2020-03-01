/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isObservable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Optional } from '../../common/optional';
/**
 * @abstract
 * @template A
 */
export class CommandHandler {
    /**
     * @protected
     * @param {?} command
     * @param {?=} domainEvent
     * @param {?=} eventPublisher
     * @param {?=} aggregateRepository
     */
    constructor(command, // any is required when inherited Command has more arguments than Command
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
    handle(command) {
    }
    // TODO change to abstract
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    handleAggregate(aggregate, command) {
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handleEmptyAggregate(command) {
    }
    // TODO change to abstract
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handleCommandForAggregate(command) {
        /** @type {?} */
        const aggregateId = command.getAggregateId();
        /** @type {?} */
        const optAggregate = Optional.of(this.aggregateRepository.getById(aggregateId));
        optAggregate.ifPresent((/**
         * @param {?} aggregate
         * @return {?}
         */
        (aggregate) => {
            this.handleAggregate(aggregate, command);
            this.aggregateRepository.save(aggregate);
            this.publishDomainEvents(aggregate, command);
        }));
        optAggregate.ifEmpty((/**
         * @return {?}
         */
        () => {
            this.handleEmptyAggregate(command);
        }));
    }
    /**
     * @param {?} command
     * @return {?}
     */
    forCommand(command) {
        return this.commandType === command.getMessageType();
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handleCommand(command) {
        if (this.aggregateRepository) {
            this.handleCommandForAggregate(command);
            return;
        }
        /** @type {?} */
        const result = this.handle(command);
        if (isObservable(result)) {
            ((/** @type {?} */ (result)))
                .pipe(take(1))
                .subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                // trigger event
                this.dispatchEvent(command, res);
            }));
        }
        else {
            this.dispatchEvent(command, (/** @type {?} */ (result)));
        }
    }
    /**
     * @private
     * @param {?} command
     * @param {?=} result
     * @return {?}
     */
    dispatchEvent(command, result) {
        if (this.domainEvent && this.eventPublisher) {
            /** @type {?} */
            let aggregateId = command.getAggregateId();
            /** @type {?} */
            const event = new ((/** @type {?} */ (this.domainEvent)))(aggregateId);
            event.setRequestCommand(command);
            if (result) {
                event.setPayload(result);
            }
            this.eventPublisher.publish(event);
        }
    }
    /**
     * @private
     * @return {?}
     */
    createCommandInstance() {
        /** @type {?} */
        const args = [];
        /** @type {?} */
        const argumentLength = this.command.constructor.length;
        args.fill(undefined, 0, argumentLength);
        return (new ((/** @type {?} */ (this.command)))(...args));
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvY29tbWFuZC5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVd0QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7O0FBR2pELE1BQU0sT0FBZ0IsY0FBYzs7Ozs7Ozs7SUFJbkMsWUFBdUMsT0FBNkIsRUFBRSx5RUFBeUU7SUFDdkgsV0FBZ0MsRUFDOUIsY0FBcUMsRUFDckMsbUJBQTRDO1FBSC9CLFlBQU8sR0FBUCxPQUFPLENBQXNCO1FBQzVDLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBdUI7UUFDckMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUF5QjtRQUNyRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLE9BQWdCO0lBQ3ZCLENBQUM7Ozs7Ozs7SUFHRCxlQUFlLENBQUMsU0FBWSxFQUFFLE9BQWdCO0lBQzlDLENBQUM7Ozs7O0lBRUQsb0JBQW9CLENBQUMsT0FBZ0I7SUFDckMsQ0FBQzs7Ozs7OztJQUdELG1CQUFtQixDQUFDLFNBQVksRUFBRSxPQUFnQjtJQUNsRCxDQUFDOzs7OztJQUVELHlCQUF5QixDQUFDLE9BQWdCOztjQUVuQyxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRTs7Y0FFdEMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUvRSxZQUFZLENBQUMsU0FBUzs7OztRQUFDLENBQUMsU0FBWSxFQUFFLEVBQUU7WUFFdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFFekMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUV6QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLENBQUMsRUFBQyxDQUFDO1FBRUgsWUFBWSxDQUFDLE9BQU87OztRQUFDLEdBQUcsRUFBRTtZQUN6QixJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUdELFVBQVUsQ0FBQyxPQUFnQjtRQUMxQixPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQWdCO1FBRTdCLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzdCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV4QyxPQUFPO1NBQ1A7O2NBRUssTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBRW5DLElBQUksWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pCLENBQUMsbUJBQUEsTUFBTSxFQUErQixDQUFDO2lCQUNyQyxJQUFJLENBQ0osSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNQO2lCQUNBLFNBQVM7Ozs7WUFBQyxDQUFDLEdBQThCLEVBQUUsRUFBRTtnQkFFN0MsZ0JBQWdCO2dCQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNsQyxDQUFDLEVBQUMsQ0FBQztTQUNKO2FBQU07WUFDTixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxtQkFBQSxNQUFNLEVBQW1CLENBQUMsQ0FBQztTQUN2RDtJQUNGLENBQUM7Ozs7Ozs7SUFFTyxhQUFhLENBQUMsT0FBZ0IsRUFBRSxNQUF3QjtRQUUvRCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTs7Z0JBRXhDLFdBQVcsR0FBZ0IsT0FBTyxDQUFDLGNBQWMsRUFBRTs7a0JBRWpELEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQUEsSUFBSSxDQUFDLFdBQVcsRUFBTyxDQUFDLENBQUMsV0FBVyxDQUFDO1lBRXhELEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVqQyxJQUFJLE1BQU0sRUFBRTtnQkFDWCxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3pCO1lBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkM7SUFDRixDQUFDOzs7OztJQUVPLHFCQUFxQjs7Y0FDdEIsSUFBSSxHQUFnQixFQUFFOztjQUMzQixjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUVqRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsT0FBTyxFQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNEOzs7Ozs7SUFuR0EscUNBQXFDOzs7OztJQUVmLGlDQUE4Qzs7Ozs7SUFDN0QscUNBQWlEOzs7OztJQUNqRCx3Q0FBd0Q7Ozs7O0lBQ3hELDZDQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzT2JzZXJ2YWJsZSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4vY29tbWFuZCc7XG5pbXBvcnQgeyBFeGVjdXRlUmVzcG9uc2UgfSBmcm9tICcuL2V4ZWN1dGUtcmVzcG9uc2UnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi9hZ2dyZWdhdGUtaWQnO1xuXG5pbXBvcnQgeyBEb21haW5FdmVudCB9IGZyb20gJy4uL2V2ZW50L2RvbWFpbi1ldmVudCc7XG5pbXBvcnQgeyBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uL2V2ZW50L2RvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRQYXlsb2FkIH0gZnJvbSAnLi4vZXZlbnQvZG9tYWluLWV2ZW50LnBheWxvYWQnO1xuaW1wb3J0IHsgQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4vYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQWdncmVnYXRlIH0gZnJvbSAnLi9hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgT3B0aW9uYWwgfSBmcm9tICcuLi8uLi9jb21tb24vb3B0aW9uYWwnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb21tYW5kSGFuZGxlcjxBIGV4dGVuZHMgQWdncmVnYXRlPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb21tYW5kVHlwZTogc3RyaW5nO1xuXG5cdHByb3RlY3RlZCBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmQ6IHR5cGVvZiBDb21tYW5kIHwgYW55LCAvLyBhbnkgaXMgcmVxdWlyZWQgd2hlbiBpbmhlcml0ZWQgQ29tbWFuZCBoYXMgbW9yZSBhcmd1bWVudHMgdGhhbiBDb21tYW5kXG5cdFx0XHRcdFx0XHQgIHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnQ/OiB0eXBlb2YgRG9tYWluRXZlbnQsXG5cdFx0XHRcdFx0XHQgIHByb3RlY3RlZCByZWFkb25seSBldmVudFB1Ymxpc2hlcj86IERvbWFpbkV2ZW50UHVibGlzaGVyLFxuXHRcdFx0XHRcdFx0ICBwcm90ZWN0ZWQgcmVhZG9ubHkgYWdncmVnYXRlUmVwb3NpdG9yeT86IEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8QT4pIHtcblx0XHR0aGlzLmNvbW1hbmRUeXBlID0gdGhpcy5jcmVhdGVDb21tYW5kSW5zdGFuY2UoKS5nZXRNZXNzYWdlVHlwZSgpO1xuXHR9XG5cblx0aGFuZGxlKGNvbW1hbmQ6IENvbW1hbmQpOiBFeGVjdXRlUmVzcG9uc2UgfCBPYnNlcnZhYmxlPEV4ZWN1dGVSZXNwb25zZT4ge1xuXHR9XG5cblx0Ly8gVE9ETyBjaGFuZ2UgdG8gYWJzdHJhY3Rcblx0aGFuZGxlQWdncmVnYXRlKGFnZ3JlZ2F0ZTogQSwgY29tbWFuZDogQ29tbWFuZCk6IHZvaWQge1xuXHR9XG5cblx0aGFuZGxlRW1wdHlBZ2dyZWdhdGUoY29tbWFuZDogQ29tbWFuZCk6IHZvaWQge1xuXHR9XG5cblx0Ly8gVE9ETyBjaGFuZ2UgdG8gYWJzdHJhY3Rcblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IEEsIGNvbW1hbmQ6IENvbW1hbmQpOiB2b2lkIHtcblx0fVxuXG5cdGhhbmRsZUNvbW1hbmRGb3JBZ2dyZWdhdGUoY29tbWFuZDogQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCk7XG5cblx0XHRjb25zdCBvcHRBZ2dyZWdhdGUgPSBPcHRpb25hbC5vZih0aGlzLmFnZ3JlZ2F0ZVJlcG9zaXRvcnkuZ2V0QnlJZChhZ2dyZWdhdGVJZCkpO1xuXG5cdFx0b3B0QWdncmVnYXRlLmlmUHJlc2VudCgoYWdncmVnYXRlOiBBKSA9PiB7XG5cblx0XHRcdHRoaXMuaGFuZGxlQWdncmVnYXRlKGFnZ3JlZ2F0ZSwgY29tbWFuZCk7XG5cblx0XHRcdHRoaXMuYWdncmVnYXRlUmVwb3NpdG9yeS5zYXZlKGFnZ3JlZ2F0ZSk7XG5cblx0XHRcdHRoaXMucHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGUsIGNvbW1hbmQpO1xuXHRcdH0pO1xuXG5cdFx0b3B0QWdncmVnYXRlLmlmRW1wdHkoKCkgPT4ge1xuXHRcdFx0dGhpcy5oYW5kbGVFbXB0eUFnZ3JlZ2F0ZShjb21tYW5kKTtcblx0XHR9KTtcblx0fVxuXG5cblx0Zm9yQ29tbWFuZChjb21tYW5kOiBDb21tYW5kKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tbWFuZFR5cGUgPT09IGNvbW1hbmQuZ2V0TWVzc2FnZVR5cGUoKTtcblx0fVxuXG5cdGhhbmRsZUNvbW1hbmQoY29tbWFuZDogQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuYWdncmVnYXRlUmVwb3NpdG9yeSkge1xuXHRcdFx0dGhpcy5oYW5kbGVDb21tYW5kRm9yQWdncmVnYXRlKGNvbW1hbmQpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmVzdWx0ID0gdGhpcy5oYW5kbGUoY29tbWFuZCk7XG5cblx0XHRpZiAoaXNPYnNlcnZhYmxlKHJlc3VsdCkpIHtcblx0XHRcdChyZXN1bHQgYXMgT2JzZXJ2YWJsZTxFeGVjdXRlUmVzcG9uc2U+KVxuXHRcdFx0XHQucGlwZShcblx0XHRcdFx0XHR0YWtlKDEpXG5cdFx0XHRcdClcblx0XHRcdFx0LnN1YnNjcmliZSgocmVzOiB2b2lkIHwgRG9tYWluRXZlbnRQYXlsb2FkKSA9PiB7XG5cblx0XHRcdFx0XHQvLyB0cmlnZ2VyIGV2ZW50XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaEV2ZW50KGNvbW1hbmQsIHJlcyk7XG5cdFx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQoY29tbWFuZCwgcmVzdWx0IGFzIEV4ZWN1dGVSZXNwb25zZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBkaXNwYXRjaEV2ZW50KGNvbW1hbmQ6IENvbW1hbmQsIHJlc3VsdD86IEV4ZWN1dGVSZXNwb25zZSk6IHZvaWQge1xuXG5cdFx0aWYgKHRoaXMuZG9tYWluRXZlbnQgJiYgdGhpcy5ldmVudFB1Ymxpc2hlcikge1xuXG5cdFx0XHRsZXQgYWdncmVnYXRlSWQ6IEFnZ3JlZ2F0ZUlkID0gY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpO1xuXG5cdFx0XHRjb25zdCBldmVudCA9IG5ldyAodGhpcy5kb21haW5FdmVudCBhcyBhbnkpKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdFx0ZXZlbnQuc2V0UmVxdWVzdENvbW1hbmQoY29tbWFuZCk7XG5cblx0XHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdFx0ZXZlbnQuc2V0UGF5bG9hZChyZXN1bHQpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmV2ZW50UHVibGlzaGVyLnB1Ymxpc2goZXZlbnQpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlQ29tbWFuZEluc3RhbmNlKCk6IENvbW1hbmQge1xuXHRcdGNvbnN0IGFyZ3M6IEFycmF5PHZvaWQ+ID0gW10sXG5cdFx0XHRhcmd1bWVudExlbmd0aCA9IHRoaXMuY29tbWFuZC5jb25zdHJ1Y3Rvci5sZW5ndGg7XG5cblx0XHRhcmdzLmZpbGwodW5kZWZpbmVkLCAwLCBhcmd1bWVudExlbmd0aCk7XG5cblx0XHRyZXR1cm4gKG5ldyAodGhpcy5jb21tYW5kIGFzIGFueSkoLi4uYXJncykpO1xuXHR9XG59XG4iXX0=