/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template I, A, C
 * @param {?} commandHandler
 * @param {?} aggregateRepositoryArchive
 * @param {?} aggregateName
 * @return {?}
 */
export function commandHandlerFactory(commandHandler, aggregateRepositoryArchive, aggregateName) {
    return new CommandHandlerImpl(commandHandler, aggregateRepositoryArchive, aggregateName);
}
/**
 * @template I, A, C
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
        const aggregateId = (/** @type {?} */ (command.getAggregateId()));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1oYW5kbGVyLWltcGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2RvbWFpbi9jb21tYW5kL2hhbmRsZXIvY29tbWFuZC1oYW5kbGVyLWltcGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxNQUFNLFVBQVUscUJBQXFCLENBQ3BDLGNBQW9DLEVBQ3BDLDBCQUE0RCxFQUM1RCxhQUFxQjtJQUVyQixPQUFPLElBQUksa0JBQWtCLENBQVUsY0FBYyxFQUFFLDBCQUEwQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ25HLENBQUM7Ozs7QUFFRCxNQUFNLE9BQU8sa0JBQWtCOzs7Ozs7SUFJOUIsWUFBNkIsY0FBb0MsRUFDN0MsMEJBQTRELEVBQzVELGFBQXFCO1FBRlosbUJBQWMsR0FBZCxjQUFjLENBQXNCO1FBQzdDLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBa0M7UUFDNUQsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxTQUFZLEVBQUUsT0FBVTtRQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxPQUFVOztjQUVqQixXQUFXLEdBQUcsbUJBQUEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFLOztjQUUzQyxhQUFhLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBRTdFLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxJQUErQixFQUFFLEVBQUU7O2tCQUVyRCxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7WUFFOUMsWUFBWSxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLFNBQVksRUFBRSxFQUFFO2dCQUV2QyxJQUFJLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBRXhELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQVU7UUFDcEIsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVPLHFCQUFxQjs7Y0FDdEIsSUFBSSxHQUFnQixFQUFFOztjQUMzQixjQUFjLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUVyRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxFQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztDQUVEOzs7Ozs7SUE1Q0EseUNBQXFDOzs7OztJQUV6Qiw0Q0FBcUQ7Ozs7O0lBQzlELHdEQUE2RTs7Ozs7SUFDN0UsMkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uLy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcm9vdCc7XG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi4vY29tbWFuZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSB9IGZyb20gJy4uL2NvbmZpZy9kZWZpbmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlUmVwb3NpdG9yeSB9IGZyb20gJy4uLy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vY29tbWFuZC5oYW5kbGVyJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hbmRIYW5kbGVyRmFjdG9yeTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBDIGV4dGVuZHMgQ29tbWFuZDxJPj4oXG5cdGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlcjxBLCBDPixcblx0YWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlPEksIEE+LFxuXHRhZ2dyZWdhdGVOYW1lOiBzdHJpbmdcbik6IENvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPiB7XG5cdHJldHVybiBuZXcgQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+KGNvbW1hbmRIYW5kbGVyLCBhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSwgYWdncmVnYXRlTmFtZSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb21tYW5kSGFuZGxlckltcGw8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ8ST4+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmRUeXBlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXI8QSwgQz4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlPEksIEE+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZVR5cGU6IHN0cmluZykge1xuXHRcdHRoaXMuY29tbWFuZFR5cGUgPSB0aGlzLmNyZWF0ZUNvbW1hbmRJbnN0YW5jZSgpLmdldE1lc3NhZ2VUeXBlKCk7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogQSwgY29tbWFuZDogQyk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZEhhbmRsZXIucHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGUsIGNvbW1hbmQpO1xuXHR9XG5cblx0aGFuZGxlQ29tbWFuZChjb21tYW5kOiBDKTogdm9pZCB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSBhcyBJO1xuXG5cdFx0Y29uc3Qgb3B0UmVwb3NpdG9yeSA9IHRoaXMuYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUuZ2V0KHRoaXMuYWdncmVnYXRlVHlwZSk7XG5cblx0XHRvcHRSZXBvc2l0b3J5LmlmUHJlc2VudCgocmVwbzogQWdncmVnYXRlUmVwb3NpdG9yeTxJLCBBPikgPT4ge1xuXG5cdFx0XHRjb25zdCBvcHRBZ2dyZWdhdGUgPSByZXBvLmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0XHRvcHRBZ2dyZWdhdGUuaWZQcmVzZW50KChhZ2dyZWdhdGU6IEEpID0+IHtcblxuXHRcdFx0XHR0aGlzLmNvbW1hbmRIYW5kbGVyLmhhbmRsZUFnZ3JlZ2F0ZShhZ2dyZWdhdGUsIGNvbW1hbmQpO1xuXG5cdFx0XHRcdHRoaXMucHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGUsIGNvbW1hbmQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRmb3JDb21tYW5kKGNvbW1hbmQ6IEMpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb21tYW5kVHlwZSA9PT0gY29tbWFuZC5nZXRNZXNzYWdlVHlwZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVDb21tYW5kSW5zdGFuY2UoKTogQyB7XG5cdFx0Y29uc3QgYXJnczogQXJyYXk8dm9pZD4gPSBbXSxcblx0XHRcdGFyZ3VtZW50TGVuZ3RoID0gdGhpcy5jb21tYW5kSGFuZGxlci5mb3JDb21tYW5kKCkuY29uc3RydWN0b3IubGVuZ3RoO1xuXG5cdFx0YXJncy5maWxsKHVuZGVmaW5lZCwgMCwgYXJndW1lbnRMZW5ndGgpO1xuXG5cdFx0cmV0dXJuIChuZXcgKHRoaXMuY29tbWFuZEhhbmRsZXIuZm9yQ29tbWFuZCgpIGFzIGFueSkoLi4uYXJncykpO1xuXHR9XG5cbn1cbiJdfQ==