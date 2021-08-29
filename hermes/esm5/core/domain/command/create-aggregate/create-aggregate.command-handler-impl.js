/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * @template I, A, C
 */
CreateAggregateCommandHandlerImpl = /** @class */ (function () {
    function CreateAggregateCommandHandlerImpl(createAggregateCommandHandler, aggregateFactoryArchive, aggregateRepositoryArchive, aggregateType, domainEventPublisher) {
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
    CreateAggregateCommandHandlerImpl.prototype.handleCommand = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        var _this = this;
        /** @type {?} */
        var aggregateId = (/** @type {?} */ (command.getAggregateId()));
        /** @type {?} */
        var optFactory = this.aggregateFactoryArchive.get(this.aggregateType);
        optFactory.ifPresent((/**
         * @param {?} factory
         * @return {?}
         */
        function (factory) {
            /** @type {?} */
            var aggregate = factory.create(aggregateId);
            /** @type {?} */
            var type = aggregate.getType();
            /** @type {?} */
            var createCommandConstructor = aggregate.createEvent();
            /** @type {?} */
            var createCommand = new createCommandConstructor(aggregateId, type);
            aggregate.addEvent(createCommand);
            /** @type {?} */
            var optRepository = _this.aggregateRepositoryArchive.get(_this.aggregateType);
            optRepository.ifPresent((/**
             * @param {?} repo
             * @return {?}
             */
            function (repo) {
                repo.save(aggregate);
                _this.domainEventPublisher.publishFromAggregate(aggregate);
            }));
        }));
    };
    /**
     * @param {?} command
     * @return {?}
     */
    CreateAggregateCommandHandlerImpl.prototype.forCommand = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        return this.commandType === command.getMessageType();
    };
    /**
     * @private
     * @return {?}
     */
    CreateAggregateCommandHandlerImpl.prototype.createCommandInstance = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var args = [];
        /** @type {?} */
        var argumentLength = this.createAggregateCommandHandler.forCommand().constructor.length;
        args.fill(undefined, 0, argumentLength);
        return (new ((_a = ((/** @type {?} */ (this.createAggregateCommandHandler.forCommand())))).bind.apply(_a, tslib_1.__spread([void 0], args)))());
    };
    return CreateAggregateCommandHandlerImpl;
}());
/**
 * @template I, A, C
 */
export { CreateAggregateCommandHandlerImpl };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXItaW1wbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImNvcmUvZG9tYWluL2NvbW1hbmQvY3JlYXRlLWFnZ3JlZ2F0ZS9jcmVhdGUtYWdncmVnYXRlLmNvbW1hbmQtaGFuZGxlci1pbXBsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBVUEsTUFBTSxVQUFVLG9DQUFvQyxDQUNuRCw2QkFBa0UsRUFDbEUsY0FBNkMsRUFBRSwwQkFBNEQsRUFDM0csYUFBcUIsRUFBRSxvQkFBMEM7SUFHakUsT0FBTyxJQUFJLGlDQUFpQyxDQUMzQyw2QkFBNkIsRUFDN0IsY0FBYyxFQUNkLDBCQUEwQixFQUMxQixhQUFhLEVBQ2Isb0JBQW9CLENBQ3BCLENBQUM7QUFDSCxDQUFDOzs7O0FBRUQ7Ozs7SUFJQywyQ0FBNkIsNkJBQWtFLEVBQzNFLHVCQUFzRCxFQUN0RCwwQkFBNEQsRUFDNUQsYUFBcUIsRUFDckIsb0JBQTBDO1FBSmpDLGtDQUE2QixHQUE3Qiw2QkFBNkIsQ0FBcUM7UUFDM0UsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUErQjtRQUN0RCwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQWtDO1FBQzVELGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBQ3JCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDN0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVELHlEQUFhOzs7O0lBQWIsVUFBYyxPQUFVO1FBQXhCLGlCQTJCQzs7WUF6Qk0sV0FBVyxHQUFHLG1CQUFBLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBSzs7WUFFM0MsVUFBVSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUV2RSxVQUFVLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsT0FBK0I7O2dCQUU5QyxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7O2dCQUV2QyxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRTs7Z0JBQy9CLHdCQUF3QixHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUU7O2dCQUU3QyxhQUFhLEdBQUcsSUFBSSx3QkFBd0IsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDO1lBRXJFLFNBQVMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7O2dCQUU1QixhQUFhLEdBQUcsS0FBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDO1lBRTdFLGFBQWEsQ0FBQyxTQUFTOzs7O1lBQUMsVUFBQyxJQUErQjtnQkFFdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFFckIsS0FBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNELENBQUMsRUFBQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFFSixDQUFDOzs7OztJQUVELHNEQUFVOzs7O0lBQVYsVUFBVyxPQUFVO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFTyxpRUFBcUI7Ozs7SUFBN0I7OztZQUNPLElBQUksR0FBZ0IsRUFBRTs7WUFDM0IsY0FBYyxHQUFHLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTTtRQUVwRixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFFeEMsT0FBTyxNQUFLLENBQUEsS0FBQSxDQUFDLG1CQUFBLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLEVBQUUsRUFBTyxDQUFDLENBQUEsMkNBQUksSUFBSSxNQUFFLENBQUM7SUFDaEYsQ0FBQztJQUVGLHdDQUFDO0FBQUQsQ0FBQyxBQXRERCxJQXNEQzs7Ozs7Ozs7OztJQXBEQSx3REFBcUM7Ozs7O0lBRXpCLDBFQUFtRjs7Ozs7SUFDNUYsb0VBQXVFOzs7OztJQUN2RSx1RUFBNkU7Ozs7O0lBQzdFLDBEQUFzQzs7Ozs7SUFDdEMsaUVBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uLy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcm9vdCc7XG5pbXBvcnQgeyBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXInO1xuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeUFyY2hpdmUsIEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlIH0gZnJvbSAnLi4vY29uZmlnL2RlZmluZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5IH0gZnJvbSAnLi4vLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi8uLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmQgfSBmcm9tICcuL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZCc7XG5pbXBvcnQgeyBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uLy4uL2V2ZW50L2RvbWFpbi1ldmVudC5wdWJsaXNoZXInO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckZhY3Rvcnk8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmQ+KFxuXHRjcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjogQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI8QSwgQz4sXG5cdGZhY3RvcnlBcmNoaXZlOiBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTxJLCBBPiwgYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlPEksIEE+LFxuXHRhZ2dyZWdhdGVOYW1lOiBzdHJpbmcsIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlclxuKTogQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+IHtcblxuXHRyZXR1cm4gbmV3IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPihcblx0XHRjcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcixcblx0XHRmYWN0b3J5QXJjaGl2ZSxcblx0XHRhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSxcblx0XHRhZ2dyZWdhdGVOYW1lLFxuXHRcdGRvbWFpbkV2ZW50UHVibGlzaGVyXG5cdCk7XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmRUeXBlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjogQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI8QSwgQz4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlRmFjdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlPEksIEE+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlOiBBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTxJLCBBPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVUeXBlOiBzdHJpbmcsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdFx0dGhpcy5jb21tYW5kVHlwZSA9IHRoaXMuY3JlYXRlQ29tbWFuZEluc3RhbmNlKCkuZ2V0TWVzc2FnZVR5cGUoKTtcblx0fVxuXG5cdGhhbmRsZUNvbW1hbmQoY29tbWFuZDogQykge1xuXG5cdFx0Y29uc3QgYWdncmVnYXRlSWQgPSBjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkgYXMgSTtcblxuXHRcdGNvbnN0IG9wdEZhY3RvcnkgPSB0aGlzLmFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLmdldCh0aGlzLmFnZ3JlZ2F0ZVR5cGUpO1xuXG5cdFx0b3B0RmFjdG9yeS5pZlByZXNlbnQoKGZhY3Rvcnk6IEFnZ3JlZ2F0ZUZhY3Rvcnk8SSwgQT4pID0+IHtcblxuXHRcdFx0Y29uc3QgYWdncmVnYXRlID0gZmFjdG9yeS5jcmVhdGUoYWdncmVnYXRlSWQpO1xuXG5cdFx0XHRjb25zdCB0eXBlID0gYWdncmVnYXRlLmdldFR5cGUoKSxcblx0XHRcdFx0Y3JlYXRlQ29tbWFuZENvbnN0cnVjdG9yID0gYWdncmVnYXRlLmNyZWF0ZUV2ZW50KCk7XG5cblx0XHRcdGNvbnN0IGNyZWF0ZUNvbW1hbmQgPSBuZXcgY3JlYXRlQ29tbWFuZENvbnN0cnVjdG9yKGFnZ3JlZ2F0ZUlkLCB0eXBlKTtcblxuXHRcdFx0YWdncmVnYXRlLmFkZEV2ZW50KGNyZWF0ZUNvbW1hbmQpO1xuXG5cdFx0XHRjb25zdCBvcHRSZXBvc2l0b3J5ID0gdGhpcy5hZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZS5nZXQodGhpcy5hZ2dyZWdhdGVUeXBlKTtcblxuXHRcdFx0b3B0UmVwb3NpdG9yeS5pZlByZXNlbnQoKHJlcG86IEFnZ3JlZ2F0ZVJlcG9zaXRvcnk8SSwgQT4pID0+IHtcblxuXHRcdFx0XHRyZXBvLnNhdmUoYWdncmVnYXRlKTtcblxuXHRcdFx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2hGcm9tQWdncmVnYXRlKGFnZ3JlZ2F0ZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHR9XG5cblx0Zm9yQ29tbWFuZChjb21tYW5kOiBDKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tbWFuZFR5cGUgPT09IGNvbW1hbmQuZ2V0TWVzc2FnZVR5cGUoKTtcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlQ29tbWFuZEluc3RhbmNlKCk6IEMge1xuXHRcdGNvbnN0IGFyZ3M6IEFycmF5PHZvaWQ+ID0gW10sXG5cdFx0XHRhcmd1bWVudExlbmd0aCA9IHRoaXMuY3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIuZm9yQ29tbWFuZCgpLmNvbnN0cnVjdG9yLmxlbmd0aDtcblxuXHRcdGFyZ3MuZmlsbCh1bmRlZmluZWQsIDAsIGFyZ3VtZW50TGVuZ3RoKTtcblxuXHRcdHJldHVybiAobmV3ICh0aGlzLmNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyLmZvckNvbW1hbmQoKSBhcyBhbnkpKC4uLmFyZ3MpKTtcblx0fVxuXG59XG4iXX0=