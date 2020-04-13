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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXItaW1wbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9jb21tYW5kL2FnZ3JlZ2F0ZS9jcmVhdGUvY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXItaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVVBLE1BQU0sVUFBVSxvQ0FBb0MsQ0FBc0YsNkJBQWtFLEVBQUUsY0FBNkMsRUFBRSwwQkFBNEQsRUFBRSxhQUFxQixFQUFFLG9CQUEwQztJQUMzWCxPQUFPLElBQUksaUNBQWlDLENBQVUsNkJBQTZCLEVBQUUsY0FBYyxFQUFFLDBCQUEwQixFQUFFLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3ZLLENBQUM7Ozs7QUFFRDs7OztJQUlDLDJDQUE2Qiw2QkFBa0UsRUFDM0UsdUJBQXNELEVBQ3RELDBCQUE0RCxFQUM1RCxhQUFxQixFQUNyQixvQkFBMEM7UUFKakMsa0NBQTZCLEdBQTdCLDZCQUE2QixDQUFxQztRQUMzRSw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQStCO1FBQ3RELCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBa0M7UUFDNUQsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFDckIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRUQseURBQWE7Ozs7SUFBYixVQUFjLE9BQVU7UUFBeEIsaUJBMkJDOztZQXpCTSxXQUFXLEdBQUcsbUJBQUEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFLOztZQUUzQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBRXZFLFVBQVUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxPQUErQjs7Z0JBRTlDLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQzs7Z0JBRXZDLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFOztnQkFDL0Isd0JBQXdCLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRTs7Z0JBRTdDLGFBQWEsR0FBRyxJQUFJLHdCQUF3QixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUM7WUFFckUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7Z0JBRTVCLGFBQWEsR0FBRyxLQUFJLENBQUMsMEJBQTBCLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUM7WUFFN0UsYUFBYSxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFDLElBQStCO2dCQUV2RCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUVyQixLQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0QsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUVKLENBQUM7Ozs7O0lBRUQsc0RBQVU7Ozs7SUFBVixVQUFXLE9BQVU7UUFDcEIsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVPLGlFQUFxQjs7OztJQUE3Qjs7O1lBQ08sSUFBSSxHQUFnQixFQUFFOztZQUMzQixjQUFjLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBRXBGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV4QyxPQUFPLE1BQUssQ0FBQSxLQUFBLENBQUMsbUJBQUEsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFVBQVUsRUFBRSxFQUFPLENBQUMsQ0FBQSwyQ0FBSSxJQUFJLE1BQUUsQ0FBQztJQUNoRixDQUFDO0lBRUYsd0NBQUM7QUFBRCxDQUFDLEFBdERELElBc0RDOzs7Ozs7Ozs7O0lBcERBLHdEQUFxQzs7Ozs7SUFFekIsMEVBQW1GOzs7OztJQUM1RixvRUFBdUU7Ozs7O0lBQ3ZFLHVFQUE2RTs7Ozs7SUFDN0UsMERBQXNDOzs7OztJQUN0QyxpRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLCBBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9kZWZpbmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2FnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uLy4uL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kIH0gZnJvbSAnLi9jcmVhdGUtYWdncmVnYXRlLmNvbW1hbmQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi9ldmVudC9kb21haW4tZXZlbnQucHVibGlzaGVyJztcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJGYWN0b3J5PEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEMgZXh0ZW5kcyBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kPihjcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjogQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI8QSwgQz4sIGZhY3RvcnlBcmNoaXZlOiBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTxJLCBBPiwgYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlPEksIEE+LCBhZ2dyZWdhdGVOYW1lOiBzdHJpbmcsIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcik6IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPiB7XG5cdHJldHVybiBuZXcgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+KGNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyLCBmYWN0b3J5QXJjaGl2ZSwgYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsIGFnZ3JlZ2F0ZU5hbWUsIGRvbWFpbkV2ZW50UHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBDIGV4dGVuZHMgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZFR5cGU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyOiBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjxBLCBDPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTogQWdncmVnYXRlRmFjdG9yeUFyY2hpdmU8SSwgQT4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlPEksIEE+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZVR5cGU6IHN0cmluZyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHR0aGlzLmNvbW1hbmRUeXBlID0gdGhpcy5jcmVhdGVDb21tYW5kSW5zdGFuY2UoKS5nZXRNZXNzYWdlVHlwZSgpO1xuXHR9XG5cblx0aGFuZGxlQ29tbWFuZChjb21tYW5kOiBDKSB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSBhcyBJO1xuXG5cdFx0Y29uc3Qgb3B0RmFjdG9yeSA9IHRoaXMuYWdncmVnYXRlRmFjdG9yeUFyY2hpdmUuZ2V0KHRoaXMuYWdncmVnYXRlVHlwZSk7XG5cblx0XHRvcHRGYWN0b3J5LmlmUHJlc2VudCgoZmFjdG9yeTogQWdncmVnYXRlRmFjdG9yeTxJLCBBPikgPT4ge1xuXG5cdFx0XHRjb25zdCBhZ2dyZWdhdGUgPSBmYWN0b3J5LmNyZWF0ZShhZ2dyZWdhdGVJZCk7XG5cblx0XHRcdGNvbnN0IHR5cGUgPSBhZ2dyZWdhdGUuZ2V0VHlwZSgpLFxuXHRcdFx0XHRjcmVhdGVDb21tYW5kQ29uc3RydWN0b3IgPSBhZ2dyZWdhdGUuY3JlYXRlRXZlbnQoKTtcblxuXHRcdFx0Y29uc3QgY3JlYXRlQ29tbWFuZCA9IG5ldyBjcmVhdGVDb21tYW5kQ29uc3RydWN0b3IoYWdncmVnYXRlSWQsIHR5cGUpO1xuXG5cdFx0XHRhZ2dyZWdhdGUuYWRkRXZlbnQoY3JlYXRlQ29tbWFuZCk7XG5cblx0XHRcdGNvbnN0IG9wdFJlcG9zaXRvcnkgPSB0aGlzLmFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlLmdldCh0aGlzLmFnZ3JlZ2F0ZVR5cGUpO1xuXG5cdFx0XHRvcHRSZXBvc2l0b3J5LmlmUHJlc2VudCgocmVwbzogQWdncmVnYXRlUmVwb3NpdG9yeTxJLCBBPikgPT4ge1xuXG5cdFx0XHRcdHJlcG8uc2F2ZShhZ2dyZWdhdGUpO1xuXG5cdFx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaEZyb21BZ2dyZWdhdGUoYWdncmVnYXRlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdH1cblxuXHRmb3JDb21tYW5kKGNvbW1hbmQ6IEMpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb21tYW5kVHlwZSA9PT0gY29tbWFuZC5nZXRNZXNzYWdlVHlwZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVDb21tYW5kSW5zdGFuY2UoKTogQyB7XG5cdFx0Y29uc3QgYXJnczogQXJyYXk8dm9pZD4gPSBbXSxcblx0XHRcdGFyZ3VtZW50TGVuZ3RoID0gdGhpcy5jcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlci5mb3JDb21tYW5kKCkuY29uc3RydWN0b3IubGVuZ3RoO1xuXG5cdFx0YXJncy5maWxsKHVuZGVmaW5lZCwgMCwgYXJndW1lbnRMZW5ndGgpO1xuXG5cdFx0cmV0dXJuIChuZXcgKHRoaXMuY3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIuZm9yQ29tbWFuZCgpIGFzIGFueSkoLi4uYXJncykpO1xuXHR9XG5cbn1cbiJdfQ==