/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template I, A, C
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
 * @template I, A, C
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
        const aggregateId = (/** @type {?} */ (command.getAggregateId()));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWNvbW1hbmQtaGFuZGxlci5pbXBsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvYWdncmVnYXRlL2NyZWF0ZS9hZ2dyZWdhdGUtY29tbWFuZC1oYW5kbGVyLmltcGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBU0EsTUFBTSxVQUFVLDhCQUE4QixDQUF1RSw2QkFBNEQsRUFBRSxjQUE2QyxFQUFFLDBCQUE0RCxFQUFFLGFBQXFCO0lBQ3BULE9BQU8sSUFBSSwyQkFBMkIsQ0FBVSw2QkFBNkIsRUFBRSxjQUFjLEVBQUUsMEJBQTBCLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDM0ksQ0FBQzs7OztBQUVELE1BQU0sT0FBTywyQkFBMkI7Ozs7Ozs7SUFJdkMsWUFBNkIsNkJBQTRELEVBQ3JFLHVCQUFzRCxFQUN0RCwwQkFBNEQsRUFDNUQsYUFBcUI7UUFIWixrQ0FBNkIsR0FBN0IsNkJBQTZCLENBQStCO1FBQ3JFLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBK0I7UUFDdEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUFrQztRQUM1RCxrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2xFLENBQUM7Ozs7OztJQUVELG1CQUFtQixDQUFDLFNBQVksRUFBRSxPQUFVO1FBQzNDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsT0FBVTs7Y0FFakIsV0FBVyxHQUFHLG1CQUFBLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBSzs7Y0FFM0MsVUFBVSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUV2RSxVQUFVLENBQUMsU0FBUzs7OztRQUFDLENBQUMsT0FBK0IsRUFBRSxFQUFFOztrQkFFbEQsU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDOztrQkFFdkMsYUFBYSxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUU3RSxhQUFhLENBQUMsU0FBUzs7OztZQUFDLENBQUMsSUFBK0IsRUFBRSxFQUFFO2dCQUUzRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUVyQixJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLENBQUMsRUFBQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFFSixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFVO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFTyxxQkFBcUI7O2NBQ3RCLElBQUksR0FBZ0IsRUFBRTs7Y0FDM0IsY0FBYyxHQUFHLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUVwRixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsNkJBQTZCLENBQUMsVUFBVSxFQUFFLEVBQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0NBRUQ7Ozs7OztJQWhEQSxrREFBcUM7Ozs7O0lBRXpCLG9FQUE2RTs7Ozs7SUFDdEYsOERBQXVFOzs7OztJQUN2RSxpRUFBNkU7Ozs7O0lBQzdFLG9EQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi9hZ2dyZWdhdGUtcm9vdCc7XG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi4vLi4vY29tbWFuZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vYWdncmVnYXRlLWNvbW1hbmQtaGFuZGxlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSwgQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUgfSBmcm9tICcuLi8uLi9jb25maWcvZGVmaW5lJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuLi9hZ2dyZWdhdGUtZmFjdG9yeSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVSZXBvc2l0b3J5IH0gZnJvbSAnLi4vYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi8uLi9hZ2dyZWdhdGUtaWQnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZ2dyZWdhdGVDb21tYW5kSGFuZGxlckZhY3Rvcnk8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ+KGNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyOiBBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjxBLCBDPiwgZmFjdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlPEksIEE+LCBhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTogQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU8SSwgQT4sIGFnZ3JlZ2F0ZU5hbWU6IHN0cmluZyk6IEFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPiB7XG5cdHJldHVybiBuZXcgQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+KGNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyLCBmYWN0b3J5QXJjaGl2ZSwgYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsIGFnZ3JlZ2F0ZU5hbWUpO1xufVxuXG5leHBvcnQgY2xhc3MgQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEMgZXh0ZW5kcyBDb21tYW5kPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb21tYW5kVHlwZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI6IEFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyPEEsIEM+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlOiBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTxJLCBBPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTogQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU8SSwgQT4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlVHlwZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5jb21tYW5kVHlwZSA9IHRoaXMuY3JlYXRlQ29tbWFuZEluc3RhbmNlKCkuZ2V0TWVzc2FnZVR5cGUoKTtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBBLCBjb21tYW5kOiBDKTogdm9pZCB7XG5cdFx0dGhpcy5jcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlci5wdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZSwgY29tbWFuZCk7XG5cdH1cblxuXHRoYW5kbGVDb21tYW5kKGNvbW1hbmQ6IEMpIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpIGFzIEk7XG5cblx0XHRjb25zdCBvcHRGYWN0b3J5ID0gdGhpcy5hZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZS5nZXQodGhpcy5hZ2dyZWdhdGVUeXBlKTtcblxuXHRcdG9wdEZhY3RvcnkuaWZQcmVzZW50KChmYWN0b3J5OiBBZ2dyZWdhdGVGYWN0b3J5PEksIEE+KSA9PiB7XG5cblx0XHRcdGNvbnN0IGFnZ3JlZ2F0ZSA9IGZhY3RvcnkuY3JlYXRlKGFnZ3JlZ2F0ZUlkKTtcblxuXHRcdFx0Y29uc3Qgb3B0UmVwb3NpdG9yeSA9IHRoaXMuYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUuZ2V0KHRoaXMuYWdncmVnYXRlVHlwZSk7XG5cblx0XHRcdG9wdFJlcG9zaXRvcnkuaWZQcmVzZW50KChyZXBvOiBBZ2dyZWdhdGVSZXBvc2l0b3J5PEksIEE+KSA9PiB7XG5cblx0XHRcdFx0cmVwby5zYXZlKGFnZ3JlZ2F0ZSk7XG5cblx0XHRcdFx0dGhpcy5wdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZSwgY29tbWFuZCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHR9XG5cblx0Zm9yQ29tbWFuZChjb21tYW5kOiBDKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tbWFuZFR5cGUgPT09IGNvbW1hbmQuZ2V0TWVzc2FnZVR5cGUoKTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlQ29tbWFuZEluc3RhbmNlKCk6IEMge1xuXHRcdGNvbnN0IGFyZ3M6IEFycmF5PHZvaWQ+ID0gW10sXG5cdFx0XHRhcmd1bWVudExlbmd0aCA9IHRoaXMuY3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIuZm9yQ29tbWFuZCgpLmNvbnN0cnVjdG9yLmxlbmd0aDtcblxuXHRcdGFyZ3MuZmlsbCh1bmRlZmluZWQsIDAsIGFyZ3VtZW50TGVuZ3RoKTtcblxuXHRcdHJldHVybiAobmV3ICh0aGlzLmNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyLmZvckNvbW1hbmQoKSBhcyBhbnkpKC4uLmFyZ3MpKTtcblx0fVxuXG59XG4iXX0=