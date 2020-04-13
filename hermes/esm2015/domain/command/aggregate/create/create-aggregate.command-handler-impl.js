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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXItaW1wbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL2hlcm1lcy8iLCJzb3VyY2VzIjpbImRvbWFpbi9jb21tYW5kL2FnZ3JlZ2F0ZS9jcmVhdGUvY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXItaW1wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBVUEsTUFBTSxVQUFVLG9DQUFvQyxDQUFzRiw2QkFBa0UsRUFBRSxjQUE2QyxFQUFFLDBCQUE0RCxFQUFFLGFBQXFCLEVBQUUsb0JBQTBDO0lBQzNYLE9BQU8sSUFBSSxpQ0FBaUMsQ0FBVSw2QkFBNkIsRUFBRSxjQUFjLEVBQUUsMEJBQTBCLEVBQUUsYUFBYSxFQUFFLG9CQUFvQixDQUFDLENBQUM7QUFDdkssQ0FBQzs7OztBQUVELE1BQU0sT0FBTyxpQ0FBaUM7Ozs7Ozs7O0lBSTdDLFlBQTZCLDZCQUFrRSxFQUMzRSx1QkFBc0QsRUFDdEQsMEJBQTRELEVBQzVELGFBQXFCLEVBQ3JCLG9CQUEwQztRQUpqQyxrQ0FBNkIsR0FBN0IsNkJBQTZCLENBQXFDO1FBQzNFLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBK0I7UUFDdEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUFrQztRQUM1RCxrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQUNyQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzdELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsT0FBVTs7Y0FFakIsV0FBVyxHQUFHLG1CQUFBLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBSzs7Y0FFM0MsVUFBVSxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUV2RSxVQUFVLENBQUMsU0FBUzs7OztRQUFDLENBQUMsT0FBK0IsRUFBRSxFQUFFOztrQkFFbEQsU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDOztrQkFFdkMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUU7O2tCQUMvQix3QkFBd0IsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFOztrQkFFN0MsYUFBYSxHQUFHLElBQUksd0JBQXdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQztZQUVyRSxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDOztrQkFFNUIsYUFBYSxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUU3RSxhQUFhLENBQUMsU0FBUzs7OztZQUFDLENBQUMsSUFBK0IsRUFBRSxFQUFFO2dCQUUzRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUVyQixJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0QsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUVKLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQVU7UUFDcEIsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVPLHFCQUFxQjs7Y0FDdEIsSUFBSSxHQUFnQixFQUFFOztjQUMzQixjQUFjLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBRXBGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV4QyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFBLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxVQUFVLEVBQUUsRUFBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Q0FFRDs7Ozs7O0lBcERBLHdEQUFxQzs7Ozs7SUFFekIsMEVBQW1GOzs7OztJQUM1RixvRUFBdUU7Ozs7O0lBQ3ZFLHVFQUE2RTs7Ozs7SUFDN0UsMERBQXNDOzs7OztJQUN0QyxpRUFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVyJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLCBBZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9kZWZpbmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlRmFjdG9yeSB9IGZyb20gJy4uL2FnZ3JlZ2F0ZS1mYWN0b3J5JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9hZ2dyZWdhdGUtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uLy4uL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kIH0gZnJvbSAnLi9jcmVhdGUtYWdncmVnYXRlLmNvbW1hbmQnO1xuaW1wb3J0IHsgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICcuLi8uLi8uLi9ldmVudC9kb21haW4tZXZlbnQucHVibGlzaGVyJztcblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJGYWN0b3J5PEkgZXh0ZW5kcyBBZ2dyZWdhdGVJZCwgQSBleHRlbmRzIEFnZ3JlZ2F0ZVJvb3Q8ST4sIEMgZXh0ZW5kcyBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kPihjcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjogQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI8QSwgQz4sIGZhY3RvcnlBcmNoaXZlOiBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTxJLCBBPiwgYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlPEksIEE+LCBhZ2dyZWdhdGVOYW1lOiBzdHJpbmcsIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcik6IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPiB7XG5cdHJldHVybiBuZXcgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+KGNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyLCBmYWN0b3J5QXJjaGl2ZSwgYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsIGFnZ3JlZ2F0ZU5hbWUsIGRvbWFpbkV2ZW50UHVibGlzaGVyKTtcbn1cblxuZXhwb3J0IGNsYXNzIENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBDIGV4dGVuZHMgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZD4ge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZFR5cGU6IHN0cmluZztcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyOiBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjxBLCBDPixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZTogQWdncmVnYXRlRmFjdG9yeUFyY2hpdmU8SSwgQT4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlPEksIEE+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZVR5cGU6IHN0cmluZyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0XHR0aGlzLmNvbW1hbmRUeXBlID0gdGhpcy5jcmVhdGVDb21tYW5kSW5zdGFuY2UoKS5nZXRNZXNzYWdlVHlwZSgpO1xuXHR9XG5cblx0aGFuZGxlQ29tbWFuZChjb21tYW5kOiBDKSB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSBhcyBJO1xuXG5cdFx0Y29uc3Qgb3B0RmFjdG9yeSA9IHRoaXMuYWdncmVnYXRlRmFjdG9yeUFyY2hpdmUuZ2V0KHRoaXMuYWdncmVnYXRlVHlwZSk7XG5cblx0XHRvcHRGYWN0b3J5LmlmUHJlc2VudCgoZmFjdG9yeTogQWdncmVnYXRlRmFjdG9yeTxJLCBBPikgPT4ge1xuXG5cdFx0XHRjb25zdCBhZ2dyZWdhdGUgPSBmYWN0b3J5LmNyZWF0ZShhZ2dyZWdhdGVJZCk7XG5cblx0XHRcdGNvbnN0IHR5cGUgPSBhZ2dyZWdhdGUuZ2V0VHlwZSgpLFxuXHRcdFx0XHRjcmVhdGVDb21tYW5kQ29uc3RydWN0b3IgPSBhZ2dyZWdhdGUuY3JlYXRlRXZlbnQoKTtcblxuXHRcdFx0Y29uc3QgY3JlYXRlQ29tbWFuZCA9IG5ldyBjcmVhdGVDb21tYW5kQ29uc3RydWN0b3IoYWdncmVnYXRlSWQsIHR5cGUpO1xuXG5cdFx0XHRhZ2dyZWdhdGUuYWRkRXZlbnQoY3JlYXRlQ29tbWFuZCk7XG5cblx0XHRcdGNvbnN0IG9wdFJlcG9zaXRvcnkgPSB0aGlzLmFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlLmdldCh0aGlzLmFnZ3JlZ2F0ZVR5cGUpO1xuXG5cdFx0XHRvcHRSZXBvc2l0b3J5LmlmUHJlc2VudCgocmVwbzogQWdncmVnYXRlUmVwb3NpdG9yeTxJLCBBPikgPT4ge1xuXG5cdFx0XHRcdHJlcG8uc2F2ZShhZ2dyZWdhdGUpO1xuXG5cdFx0XHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaEZyb21BZ2dyZWdhdGUoYWdncmVnYXRlKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdH1cblxuXHRmb3JDb21tYW5kKGNvbW1hbmQ6IEMpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb21tYW5kVHlwZSA9PT0gY29tbWFuZC5nZXRNZXNzYWdlVHlwZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVDb21tYW5kSW5zdGFuY2UoKTogQyB7XG5cdFx0Y29uc3QgYXJnczogQXJyYXk8dm9pZD4gPSBbXSxcblx0XHRcdGFyZ3VtZW50TGVuZ3RoID0gdGhpcy5jcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlci5mb3JDb21tYW5kKCkuY29uc3RydWN0b3IubGVuZ3RoO1xuXG5cdFx0YXJncy5maWxsKHVuZGVmaW5lZCwgMCwgYXJndW1lbnRMZW5ndGgpO1xuXG5cdFx0cmV0dXJuIChuZXcgKHRoaXMuY3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIuZm9yQ29tbWFuZCgpIGFzIGFueSkoLi4uYXJncykpO1xuXHR9XG5cbn1cbiJdfQ==