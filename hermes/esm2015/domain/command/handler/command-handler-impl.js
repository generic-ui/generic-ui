/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template A, C
 * @param {?} commandHandler
 * @param {?} aggregateRepositoryArchive
 * @param {?} aggregateName
 * @return {?}
 */
export function commandHandlerFactory(commandHandler, aggregateRepositoryArchive, aggregateName) {
    return new CommandHandlerImpl(commandHandler, aggregateRepositoryArchive, aggregateName);
}
/**
 * @template A, C
 */
export class CommandHandlerImpl {
    /**
     * @param {?} commandHandler
     * @param {?} aggregateRepositoryArchive
     * @param {?} aggregateType
     */
    constructor(commandHandler, aggregateRepositoryArchive, aggregateType) {
        this.commandHandler = commandHandler;
        this.aggregateRepositoryArchive = aggregateRepositoryArchive;
        this.aggregateType = aggregateType;
        this.commandType = this.createCommandInstance().getMessageType();
    }
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    publishDomainEvents(aggregate, command) {
        this.commandHandler.publishDomainEvents(aggregate, command);
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handleCommand(command) {
        /** @type {?} */
        const aggregateId = command.getAggregateId();
        /** @type {?} */
        const optRepository = this.aggregateRepositoryArchive.get(this.aggregateType);
        optRepository.ifPresent((/**
         * @param {?} repo
         * @return {?}
         */
        (repo) => {
            /** @type {?} */
            const optAggregate = repo.getById(aggregateId);
            optAggregate.ifPresent((/**
             * @param {?} aggregate
             * @return {?}
             */
            (aggregate) => {
                this.commandHandler.handleAggregate(aggregate, command);
                this.publishDomainEvents(aggregate, command);
            }));
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
     * @private
     * @return {?}
     */
    createCommandInstance() {
        /** @type {?} */
        const args = [];
        /** @type {?} */
        const argumentLength = this.commandHandler.forCommand().constructor.length;
        args.fill(undefined, 0, argumentLength);
        return (new ((/** @type {?} */ (this.commandHandler.forCommand())))(...args));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    CommandHandlerImpl.prototype.commandType;
    /**
     * @type {?}
     * @private
     */
    CommandHandlerImpl.prototype.commandHandler;
    /**
     * @type {?}
     * @private
     */
    CommandHandlerImpl.prototype.aggregateRepositoryArchive;
    /**
     * @type {?}
     * @private
     */
    CommandHandlerImpl.prototype.aggregateType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1oYW5kbGVyLWltcGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJkb21haW4vY29tbWFuZC9oYW5kbGVyL2NvbW1hbmQtaGFuZGxlci1pbXBsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBT0EsTUFBTSxVQUFVLHFCQUFxQixDQUNwQyxjQUFvQyxFQUNwQywwQkFBc0QsRUFDdEQsYUFBcUI7SUFFckIsT0FBTyxJQUFJLGtCQUFrQixDQUFPLGNBQWMsRUFBRSwwQkFBMEIsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNoRyxDQUFDOzs7O0FBRUQsTUFBTSxPQUFPLGtCQUFrQjs7Ozs7O0lBSTlCLFlBQTZCLGNBQW9DLEVBQzdDLDBCQUFzRCxFQUN0RCxhQUFxQjtRQUZaLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQUM3QywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RELGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBQ3hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbEUsQ0FBQzs7Ozs7O0lBRUQsbUJBQW1CLENBQUMsU0FBWSxFQUFFLE9BQVU7UUFDM0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsT0FBVTs7Y0FFakIsV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUU7O2NBRXRDLGFBQWEsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFFN0UsYUFBYSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLElBQTRCLEVBQUUsRUFBRTs7a0JBRWxELFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUU5QyxZQUFZLENBQUMsU0FBUzs7OztZQUFDLENBQUMsU0FBWSxFQUFFLEVBQUU7Z0JBRXZDLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFFeEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM5QyxDQUFDLEVBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBVTtRQUNwQixPQUFPLElBQUksQ0FBQyxXQUFXLEtBQUssT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3RELENBQUM7Ozs7O0lBRU8scUJBQXFCOztjQUN0QixJQUFJLEdBQWdCLEVBQUU7O2NBQzNCLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBRXJFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV4QyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFBLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLEVBQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0NBRUQ7Ozs7OztJQTVDQSx5Q0FBcUM7Ozs7O0lBRXpCLDRDQUFxRDs7Ozs7SUFDOUQsd0RBQXVFOzs7OztJQUN2RSwyQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGUgfSBmcm9tICcuLi9hZ2dyZWdhdGUvYWdncmVnYXRlJztcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuLi9jb21tYW5kJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlIH0gZnJvbSAnLi4vY29uZmlnL2RlZmluZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yZXBvc2l0b3J5JztcbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9jb21tYW5kLmhhbmRsZXInO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb21tYW5kSGFuZGxlckZhY3Rvcnk8QSBleHRlbmRzIEFnZ3JlZ2F0ZSwgQyBleHRlbmRzIENvbW1hbmQ+KFxuXHRjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXI8QSwgQz4sXG5cdGFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlOiBBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSxcblx0YWdncmVnYXRlTmFtZTogc3RyaW5nXG4pOiBDb21tYW5kSGFuZGxlckltcGw8QSwgQz4ge1xuXHRyZXR1cm4gbmV3IENvbW1hbmRIYW5kbGVySW1wbDxBLCBDPihjb21tYW5kSGFuZGxlciwgYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsIGFnZ3JlZ2F0ZU5hbWUpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29tbWFuZEhhbmRsZXJJbXBsPEEgZXh0ZW5kcyBBZ2dyZWdhdGUsIEMgZXh0ZW5kcyBDb21tYW5kPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb21tYW5kVHlwZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZEhhbmRsZXI6IENvbW1hbmRIYW5kbGVyPEEsIEM+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlOiBBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVUeXBlOiBzdHJpbmcpIHtcblx0XHR0aGlzLmNvbW1hbmRUeXBlID0gdGhpcy5jcmVhdGVDb21tYW5kSW5zdGFuY2UoKS5nZXRNZXNzYWdlVHlwZSgpO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IEEsIGNvbW1hbmQ6IEMpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmRIYW5kbGVyLnB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlLCBjb21tYW5kKTtcblx0fVxuXG5cdGhhbmRsZUNvbW1hbmQoY29tbWFuZDogQykge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCk7XG5cblx0XHRjb25zdCBvcHRSZXBvc2l0b3J5ID0gdGhpcy5hZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZS5nZXQodGhpcy5hZ2dyZWdhdGVUeXBlKTtcblxuXHRcdG9wdFJlcG9zaXRvcnkuaWZQcmVzZW50KChyZXBvOiBBZ2dyZWdhdGVSZXBvc2l0b3J5PEE+KSA9PiB7XG5cblx0XHRcdGNvbnN0IG9wdEFnZ3JlZ2F0ZSA9IHJlcG8uZ2V0QnlJZChhZ2dyZWdhdGVJZCk7XG5cblx0XHRcdG9wdEFnZ3JlZ2F0ZS5pZlByZXNlbnQoKGFnZ3JlZ2F0ZTogQSkgPT4ge1xuXG5cdFx0XHRcdHRoaXMuY29tbWFuZEhhbmRsZXIuaGFuZGxlQWdncmVnYXRlKGFnZ3JlZ2F0ZSwgY29tbWFuZCk7XG5cblx0XHRcdFx0dGhpcy5wdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZSwgY29tbWFuZCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdGZvckNvbW1hbmQoY29tbWFuZDogQyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbW1hbmRUeXBlID09PSBjb21tYW5kLmdldE1lc3NhZ2VUeXBlKCk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUNvbW1hbmRJbnN0YW5jZSgpOiBDIHtcblx0XHRjb25zdCBhcmdzOiBBcnJheTx2b2lkPiA9IFtdLFxuXHRcdFx0YXJndW1lbnRMZW5ndGggPSB0aGlzLmNvbW1hbmRIYW5kbGVyLmZvckNvbW1hbmQoKS5jb25zdHJ1Y3Rvci5sZW5ndGg7XG5cblx0XHRhcmdzLmZpbGwodW5kZWZpbmVkLCAwLCBhcmd1bWVudExlbmd0aCk7XG5cblx0XHRyZXR1cm4gKG5ldyAodGhpcy5jb21tYW5kSGFuZGxlci5mb3JDb21tYW5kKCkgYXMgYW55KSguLi5hcmdzKSk7XG5cdH1cblxufVxuIl19