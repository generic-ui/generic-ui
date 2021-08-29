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
 * @param {?} domainEventPublisher
 * @return {?}
 */
export function createAggregateCommandHandlerFactory(createAggregateCommandHandler, factoryArchive, aggregateRepositoryArchive, aggregateName, domainEventPublisher) {
    return new CreateAggregateCommandHandlerImpl(createAggregateCommandHandler, factoryArchive, aggregateRepositoryArchive, aggregateName, domainEventPublisher);
}
/**
 * @template I, A, C
 */
export class CreateAggregateCommandHandlerImpl {
    /**
     * @param {?} createAggregateCommandHandler
     * @param {?} aggregateFactoryArchive
     * @param {?} aggregateRepositoryArchive
     * @param {?} aggregateType
     * @param {?} domainEventPublisher
     */
    constructor(createAggregateCommandHandler, aggregateFactoryArchive, aggregateRepositoryArchive, aggregateType, domainEventPublisher) {
        this.createAggregateCommandHandler = createAggregateCommandHandler;
        this.aggregateFactoryArchive = aggregateFactoryArchive;
        this.aggregateRepositoryArchive = aggregateRepositoryArchive;
        this.aggregateType = aggregateType;
        this.domainEventPublisher = domainEventPublisher;
        this.commandType = this.createCommandInstance().getMessageType();
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
            const type = aggregate.getType();
            /** @type {?} */
            const createCommandConstructor = aggregate.createEvent();
            /** @type {?} */
            const createCommand = new createCommandConstructor(aggregateId, type);
            aggregate.addEvent(createCommand);
            /** @type {?} */
            const optRepository = this.aggregateRepositoryArchive.get(this.aggregateType);
            optRepository.ifPresent((/**
             * @param {?} repo
             * @return {?}
             */
            (repo) => {
                repo.save(aggregate);
                this.domainEventPublisher.publishFromAggregate(aggregate);
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
    CreateAggregateCommandHandlerImpl.prototype.commandType;
    /**
     * @type {?}
     * @private
     */
    CreateAggregateCommandHandlerImpl.prototype.createAggregateCommandHandler;
    /**
     * @type {?}
     * @private
     */
    CreateAggregateCommandHandlerImpl.prototype.aggregateFactoryArchive;
    /**
     * @type {?}
     * @private
     */
    CreateAggregateCommandHandlerImpl.prototype.aggregateRepositoryArchive;
    /**
     * @type {?}
     * @private
     */
    CreateAggregateCommandHandlerImpl.prototype.aggregateType;
    /**
     * @type {?}
     * @private
     */
    CreateAggregateCommandHandlerImpl.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXItaW1wbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvZG9tYWluL2NvbW1hbmQvY3JlYXRlLWFnZ3JlZ2F0ZS9jcmVhdGUtYWdncmVnYXRlLmNvbW1hbmQtaGFuZGxlci1pbXBsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFVQSxNQUFNLFVBQVUsb0NBQW9DLENBQ25ELDZCQUFrRSxFQUNsRSxjQUE2QyxFQUFFLDBCQUE0RCxFQUMzRyxhQUFxQixFQUFFLG9CQUEwQztJQUdqRSxPQUFPLElBQUksaUNBQWlDLENBQzNDLDZCQUE2QixFQUM3QixjQUFjLEVBQ2QsMEJBQTBCLEVBQzFCLGFBQWEsRUFDYixvQkFBb0IsQ0FDcEIsQ0FBQztBQUNILENBQUM7Ozs7QUFFRCxNQUFNLE9BQU8saUNBQWlDOzs7Ozs7OztJQUk3QyxZQUE2Qiw2QkFBa0UsRUFDM0UsdUJBQXNELEVBQ3RELDBCQUE0RCxFQUM1RCxhQUFxQixFQUNyQixvQkFBMEM7UUFKakMsa0NBQTZCLEdBQTdCLDZCQUE2QixDQUFxQztRQUMzRSw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQStCO1FBQ3RELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBa0M7UUFDNUQsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFDckIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQVU7O2NBRWpCLFdBQVcsR0FBRyxtQkFBQSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUs7O2NBRTNDLFVBQVUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFFdkUsVUFBVSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLE9BQStCLEVBQUUsRUFBRTs7a0JBRWxELFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7a0JBRXZDLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFOztrQkFDL0Isd0JBQXdCLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRTs7a0JBRTdDLGFBQWEsR0FBRyxJQUFJLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7WUFFckUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7a0JBRTVCLGFBQWEsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFFN0UsYUFBYSxDQUFDLFNBQVM7Ozs7WUFBQyxDQUFDLElBQStCLEVBQUUsRUFBRTtnQkFFM0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFckIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNELENBQUMsRUFBQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFFSixDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxPQUFVO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFTyxxQkFBcUI7O2NBQ3RCLElBQUksR0FBZ0IsRUFBRTs7Y0FDM0IsY0FBYyxHQUFHLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUVwRixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFeEMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBQSxJQUFJLENBQUMsNkJBQTZCLENBQUMsVUFBVSxFQUFFLEVBQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDO0NBRUQ7Ozs7OztJQXBEQSx3REFBcUM7Ozs7O0lBRXpCLDBFQUFtRjs7Ozs7SUFDNUYsb0VBQXVFOzs7OztJQUN2RSx1RUFBNkU7Ozs7O0lBQzdFLDBEQUFzQzs7Ozs7SUFDdEMsaUVBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uLy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcm9vdCc7XG5pbXBvcnQgeyBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeUFyY2hpdmUsIEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlIH0gZnJvbSAnLi4vY29uZmlnL2RlZmluZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmQgfSBmcm9tICcuL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uLy4uL2V2ZW50L2RvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckZhY3Rvcnk8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmQ+KFxuXHRjcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjogQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI8QSwgQz4sXG5cdGZhY3RvcnlBcmNoaXZlOiBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTxJLCBBPiwgYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlPEksIEE+LFxuXHRhZ2dyZWdhdGVOYW1lOiBzdHJpbmcsIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlclxuKTogQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+IHtcblxuXHRyZXR1cm4gbmV3IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPihcblx0XHRjcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcixcblx0XHRmYWN0b3J5QXJjaGl2ZSxcblx0XHRhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSxcblx0XHRhZ2dyZWdhdGVOYW1lLFxuXHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyXG5cdCk7XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmRUeXBlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjogQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI8QSwgQz4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlRmFjdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlPEksIEE+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlOiBBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTxJLCBBPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVUeXBlOiBzdHJpbmcsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0dGhpcy5jb21tYW5kVHlwZSA9IHRoaXMuY3JlYXRlQ29tbWFuZEluc3RhbmNlKCkuZ2V0TWVzc2FnZVR5cGUoKTtcblx0fVxuXG5cdGhhbmRsZUNvbW1hbmQoY29tbWFuZDogQykge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkgYXMgSTtcblxuXHRcdGNvbnN0IG9wdEZhY3RvcnkgPSB0aGlzLmFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLmdldCh0aGlzLmFnZ3JlZ2F0ZVR5cGUpO1xuXG5cdFx0b3B0RmFjdG9yeS5pZlByZXNlbnQoKGZhY3Rvcnk6IEFnZ3JlZ2F0ZUZhY3Rvcnk8SSwgQT4pID0+IHtcblxuXHRcdFx0Y29uc3QgYWdncmVnYXRlID0gZmFjdG9yeS5jcmVhdGUoYWdncmVnYXRlSWQpO1xuXG5cdFx0XHRjb25zdCB0eXBlID0gYWdncmVnYXRlLmdldFR5cGUoKSxcblx0XHRcdFx0Y3JlYXRlQ29tbWFuZENvbnN0cnVjdG9yID0gYWdncmVnYXRlLmNyZWF0ZUV2ZW50KCk7XG5cblx0XHRcdGNvbnN0IGNyZWF0ZUNvbW1hbmQgPSBuZXcgY3JlYXRlQ29tbWFuZENvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkLCB0eXBlKTtcblxuXHRcdFx0YWdncmVnYXRlLmFkZEV2ZW50KGNyZWF0ZUNvbW1hbmQpO1xuXG5cdFx0XHRjb25zdCBvcHRSZXBvc2l0b3J5ID0gdGhpcy5hZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZS5nZXQodGhpcy5hZ2dyZWdhdGVUeXBlKTtcblxuXHRcdFx0b3B0UmVwb3NpdG9yeS5pZlByZXNlbnQoKHJlcG86IEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8SSwgQT4pID0+IHtcblxuXHRcdFx0XHRyZXBvLnNhdmUoYWdncmVnYXRlKTtcblxuXHRcdFx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2hGcm9tQWdncmVnYXRlKGFnZ3JlZ2F0ZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHR9XG5cblx0Zm9yQ29tbWFuZChjb21tYW5kOiBDKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tbWFuZFR5cGUgPT09IGNvbW1hbmQuZ2V0TWVzc2FnZVR5cGUoKTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlQ29tbWFuZEluc3RhbmNlKCk6IEMge1xuXHRcdGNvbnN0IGFyZ3M6IEFycmF5PHZvaWQ+ID0gW10sXG5cdFx0XHRhcmd1bWVudExlbmd0aCA9IHRoaXMuY3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIuZm9yQ29tbWFuZCgpLmNvbnN0cnVjdG9yLmxlbmd0aDtcblxuXHRcdGFyZ3MuZmlsbCh1bmRlZmluZWQsIDAsIGFyZ3VtZW50TGVuZ3RoKTtcblxuXHRcdHJldHVybiAobmV3ICh0aGlzLmNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyLmZvckNvbW1hbmQoKSBhcyBhbnkpKC4uLmFyZ3MpKTtcblx0fVxuXG59XG4iXX0=