/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template A, C
 * @param {?} createAggregateCommandHandler
 * @param {?} factoryArchive
 * @param {?} aggregateRepositoryArchive
 * @param {?} aggregateName
 * @return {?}
 */
export function aggregateCommandHandlerFactory(createAggregateCommandHandler, factoryArchive, aggregateRepositoryArchive, aggregateName) {
    return new AggregateCommandHandlerImpl(createAggregateCommandHandler, factoryArchive, aggregateRepositoryArchive, aggregateName);
}
/**
 * @template A, C
 */
export class AggregateCommandHandlerImpl {
    /**
     * @param {?} createAggregateCommandHandler
     * @param {?} aggregateFactoryArchive
     * @param {?} aggregateRepositoryArchive
     * @param {?} aggregateType
     */
    constructor(createAggregateCommandHandler, aggregateFactoryArchive, aggregateRepositoryArchive, aggregateType) {
        this.createAggregateCommandHandler = createAggregateCommandHandler;
        this.aggregateFactoryArchive = aggregateFactoryArchive;
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
        this.createAggregateCommandHandler.publishDomainEvents(aggregate, command);
    }
    /**
     * @param {?} command
     * @return {?}
     */
    handleCommand(command) {
        /** @type {?} */
        const aggregateId = command.getAggregateId();
        /** @type {?} */
        const optFactory = this.aggregateFactoryArchive.get(this.aggregateType);
        optFactory.ifPresent((/**
         * @param {?} factory
         * @return {?}
         */
        (factory) => {
            /** @type {?} */
            const aggregate = factory.create(aggregateId);
            /** @type {?} */
            const optRepository = this.aggregateRepositoryArchive.get(this.aggregateType);
            optRepository.ifPresent((/**
             * @param {?} repo
             * @return {?}
             */
            (repo) => {
                repo.save(aggregate);
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
        const argumentLength = this.createAggregateCommandHandler.forCommand().constructor.length;
        args.fill(undefined, 0, argumentLength);
        return (new ((/** @type {?} */ (this.createAggregateCommandHandler.forCommand())))(...args));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    AggregateCommandHandlerImpl.prototype.commandType;
    /**
     * @type {?}
     * @private
     */
    AggregateCommandHandlerImpl.prototype.createAggregateCommandHandler;
    /**
     * @type {?}
     * @private
     */
    AggregateCommandHandlerImpl.prototype.aggregateFactoryArchive;
    /**
     * @type {?}
     * @private
     */
    AggregateCommandHandlerImpl.prototype.aggregateRepositoryArchive;
    /**
     * @type {?}
     * @private
     */
    AggregateCommandHandlerImpl.prototype.aggregateType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWNvbW1hbmQtaGFuZGxlci5pbXBsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvY3JlYXRlLWhhbmRsZXIvYWdncmVnYXRlLWNvbW1hbmQtaGFuZGxlci5pbXBsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE1BQU0sVUFBVSw4QkFBOEIsQ0FBeUMsNkJBQTRELEVBQUUsY0FBdUMsRUFBRSwwQkFBc0QsRUFBRSxhQUFxQjtJQUMxUSxPQUFPLElBQUksMkJBQTJCLENBQU8sNkJBQTZCLEVBQUUsY0FBYyxFQUFFLDBCQUEwQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3hJLENBQUM7Ozs7QUFFRCxNQUFNLE9BQU8sMkJBQTJCOzs7Ozs7O0lBSXZDLFlBQTZCLDZCQUE0RCxFQUNyRSx1QkFBZ0QsRUFDaEQsMEJBQXNELEVBQ3RELGFBQXFCO1FBSFosa0NBQTZCLEdBQTdCLDZCQUE2QixDQUErQjtRQUNyRSw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFDdEQsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxTQUFZLEVBQUUsT0FBVTtRQUMzQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVFLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQVU7O2NBRWpCLFdBQVcsR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFOztjQUV0QyxVQUFVLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBRXZFLFVBQVUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxPQUE0QixFQUFFLEVBQUU7O2tCQUUvQyxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7O2tCQUV2QyxhQUFhLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBRTdFLGFBQWEsQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxJQUE0QixFQUFFLEVBQUU7Z0JBRXhELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRXJCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUVKLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQVU7UUFDcEIsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVPLHFCQUFxQjs7Y0FDdEIsSUFBSSxHQUFnQixFQUFFOztjQUMzQixjQUFjLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBRXBGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV4QyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFBLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLEVBQUUsRUFBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Q0FFRDs7Ozs7O0lBaERBLGtEQUFxQzs7Ozs7SUFFekIsb0VBQTZFOzs7OztJQUN0Riw4REFBaUU7Ozs7O0lBQ2pFLGlFQUF1RTs7Ozs7SUFDdkUsb0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlIH0gZnJvbSAnLi4vYWdncmVnYXRlL2FnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi4vY29tbWFuZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vYWdncmVnYXRlLWNvbW1hbmQuaGFuZGxlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSwgQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUgfSBmcm9tICcuLi9jb25maWcvZGVmaW5lJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuL2FnZ3JlZ2F0ZS5mYWN0b3J5JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9hZ2dyZWdhdGUvYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZ2dyZWdhdGVDb21tYW5kSGFuZGxlckZhY3Rvcnk8QSBleHRlbmRzIEFnZ3JlZ2F0ZSwgQyBleHRlbmRzIENvbW1hbmQ+KGNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyOiBBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjxBLCBDPiwgZmFjdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLCBhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTogQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsIGFnZ3JlZ2F0ZU5hbWU6IHN0cmluZyk6IEFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxBLCBDPiB7XG5cdHJldHVybiBuZXcgQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEEsIEM+KGNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyLCBmYWN0b3J5QXJjaGl2ZSwgYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsIGFnZ3JlZ2F0ZU5hbWUpO1xufVxuXG5leHBvcnQgY2xhc3MgQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEEgZXh0ZW5kcyBBZ2dyZWdhdGUsIEMgZXh0ZW5kcyBDb21tYW5kPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb21tYW5kVHlwZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI6IEFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyPEEsIEM+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlOiBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTogQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlVHlwZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5jb21tYW5kVHlwZSA9IHRoaXMuY3JlYXRlQ29tbWFuZEluc3RhbmNlKCkuZ2V0TWVzc2FnZVR5cGUoKTtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBBLCBjb21tYW5kOiBDKTogdm9pZCB7XG5cdFx0dGhpcy5jcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlci5wdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZSwgY29tbWFuZCk7XG5cdH1cblxuXHRoYW5kbGVDb21tYW5kKGNvbW1hbmQ6IEMpIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpO1xuXG5cdFx0Y29uc3Qgb3B0RmFjdG9yeSA9IHRoaXMuYWdncmVnYXRlRmFjdG9yeUFyY2hpdmUuZ2V0KHRoaXMuYWdncmVnYXRlVHlwZSk7XG5cblx0XHRvcHRGYWN0b3J5LmlmUHJlc2VudCgoZmFjdG9yeTogQWdncmVnYXRlRmFjdG9yeTxBPikgPT4ge1xuXG5cdFx0XHRjb25zdCBhZ2dyZWdhdGUgPSBmYWN0b3J5LmNyZWF0ZShhZ2dyZWdhdGVJZCk7XG5cblx0XHRcdGNvbnN0IG9wdFJlcG9zaXRvcnkgPSB0aGlzLmFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlLmdldCh0aGlzLmFnZ3JlZ2F0ZVR5cGUpO1xuXG5cdFx0XHRvcHRSZXBvc2l0b3J5LmlmUHJlc2VudCgocmVwbzogQWdncmVnYXRlUmVwb3NpdG9yeTxBPikgPT4ge1xuXG5cdFx0XHRcdHJlcG8uc2F2ZShhZ2dyZWdhdGUpO1xuXG5cdFx0XHRcdHRoaXMucHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGUsIGNvbW1hbmQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0fVxuXG5cdGZvckNvbW1hbmQoY29tbWFuZDogQyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbW1hbmRUeXBlID09PSBjb21tYW5kLmdldE1lc3NhZ2VUeXBlKCk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUNvbW1hbmRJbnN0YW5jZSgpOiBDIHtcblx0XHRjb25zdCBhcmdzOiBBcnJheTx2b2lkPiA9IFtdLFxuXHRcdFx0YXJndW1lbnRMZW5ndGggPSB0aGlzLmNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyLmZvckNvbW1hbmQoKS5jb25zdHJ1Y3Rvci5sZW5ndGg7XG5cblx0XHRhcmdzLmZpbGwodW5kZWZpbmVkLCAwLCBhcmd1bWVudExlbmd0aCk7XG5cblx0XHRyZXR1cm4gKG5ldyAodGhpcy5jcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlci5mb3JDb21tYW5kKCkgYXMgYW55KSguLi5hcmdzKSk7XG5cdH1cblxufVxuIl19