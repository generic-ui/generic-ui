/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * @template A, C
 */
AggregateCommandHandlerImpl = /** @class */ (function () {
    function AggregateCommandHandlerImpl(createAggregateCommandHandler, aggregateFactoryArchive, aggregateRepositoryArchive, aggregateType) {
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
    AggregateCommandHandlerImpl.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.createAggregateCommandHandler.publishDomainEvents(aggregate, command);
    };
    /**
     * @param {?} command
     * @return {?}
     */
    AggregateCommandHandlerImpl.prototype.handleCommand = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        var _this = this;
        /** @type {?} */
        var aggregateId = command.getAggregateId();
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
            var optRepository = _this.aggregateRepositoryArchive.get(_this.aggregateType);
            optRepository.ifPresent((/**
             * @param {?} repo
             * @return {?}
             */
            function (repo) {
                repo.save(aggregate);
                _this.publishDomainEvents(aggregate, command);
            }));
        }));
    };
    /**
     * @param {?} command
     * @return {?}
     */
    AggregateCommandHandlerImpl.prototype.forCommand = /**
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
    AggregateCommandHandlerImpl.prototype.createCommandInstance = /**
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
    return AggregateCommandHandlerImpl;
}());
/**
 * @template A, C
 */
export { AggregateCommandHandlerImpl };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRlLWNvbW1hbmQtaGFuZGxlci5pbXBsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvY3JlYXRlLWhhbmRsZXIvYWdncmVnYXRlLWNvbW1hbmQtaGFuZGxlci5pbXBsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFRQSxNQUFNLFVBQVUsOEJBQThCLENBQXlDLDZCQUE0RCxFQUFFLGNBQXVDLEVBQUUsMEJBQXNELEVBQUUsYUFBcUI7SUFDMVEsT0FBTyxJQUFJLDJCQUEyQixDQUFPLDZCQUE2QixFQUFFLGNBQWMsRUFBRSwwQkFBMEIsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUN4SSxDQUFDOzs7O0FBRUQ7Ozs7SUFJQyxxQ0FBNkIsNkJBQTRELEVBQ3JFLHVCQUFnRCxFQUNoRCwwQkFBc0QsRUFDdEQsYUFBcUI7UUFIWixrQ0FBNkIsR0FBN0IsNkJBQTZCLENBQStCO1FBQ3JFLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUN0RCxrQkFBYSxHQUFiLGFBQWEsQ0FBUTtRQUN4QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2xFLENBQUM7Ozs7OztJQUVELHlEQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBWSxFQUFFLE9BQVU7UUFDM0MsSUFBSSxDQUFDLDZCQUE2QixDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7OztJQUVELG1EQUFhOzs7O0lBQWIsVUFBYyxPQUFVO1FBQXhCLGlCQW9CQzs7WUFsQk0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLEVBQUU7O1lBRXRDLFVBQVUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7UUFFdkUsVUFBVSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLE9BQTRCOztnQkFFM0MsU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDOztnQkFFdkMsYUFBYSxHQUFHLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQztZQUU3RSxhQUFhLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsSUFBNEI7Z0JBRXBELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBRXJCLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUVKLENBQUM7Ozs7O0lBRUQsZ0RBQVU7Ozs7SUFBVixVQUFXLE9BQVU7UUFDcEIsT0FBTyxJQUFJLENBQUMsV0FBVyxLQUFLLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN0RCxDQUFDOzs7OztJQUVPLDJEQUFxQjs7OztJQUE3Qjs7O1lBQ08sSUFBSSxHQUFnQixFQUFFOztZQUMzQixjQUFjLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNO1FBRXBGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUV4QyxPQUFPLE1BQUssQ0FBQSxLQUFBLENBQUMsbUJBQUEsSUFBSSxDQUFDLDZCQUE2QixDQUFDLFVBQVUsRUFBRSxFQUFPLENBQUMsQ0FBQSwyQ0FBSSxJQUFJLE1BQUUsQ0FBQztJQUNoRixDQUFDO0lBRUYsa0NBQUM7QUFBRCxDQUFDLEFBbERELElBa0RDOzs7Ozs7Ozs7O0lBaERBLGtEQUFxQzs7Ozs7SUFFekIsb0VBQTZFOzs7OztJQUN0Riw4REFBaUU7Ozs7O0lBQ2pFLGlFQUF1RTs7Ozs7SUFDdkUsb0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWdncmVnYXRlIH0gZnJvbSAnLi4vYWdncmVnYXRlL2FnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi4vY29tbWFuZCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVDb21tYW5kSGFuZGxlciB9IGZyb20gJy4vYWdncmVnYXRlLWNvbW1hbmQuaGFuZGxlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSwgQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUgfSBmcm9tICcuLi9jb25maWcvZGVmaW5lJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUZhY3RvcnkgfSBmcm9tICcuL2FnZ3JlZ2F0ZS5mYWN0b3J5JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9hZ2dyZWdhdGUvYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZ2dyZWdhdGVDb21tYW5kSGFuZGxlckZhY3Rvcnk8QSBleHRlbmRzIEFnZ3JlZ2F0ZSwgQyBleHRlbmRzIENvbW1hbmQ+KGNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyOiBBZ2dyZWdhdGVDb21tYW5kSGFuZGxlcjxBLCBDPiwgZmFjdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlLCBhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTogQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsIGFnZ3JlZ2F0ZU5hbWU6IHN0cmluZyk6IEFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxBLCBDPiB7XG5cdHJldHVybiBuZXcgQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEEsIEM+KGNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyLCBmYWN0b3J5QXJjaGl2ZSwgYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsIGFnZ3JlZ2F0ZU5hbWUpO1xufVxuXG5leHBvcnQgY2xhc3MgQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEEgZXh0ZW5kcyBBZ2dyZWdhdGUsIEMgZXh0ZW5kcyBDb21tYW5kPiB7XG5cblx0cHJpdmF0ZSByZWFkb25seSBjb21tYW5kVHlwZTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXI6IEFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyPEEsIEM+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZUZhY3RvcnlBcmNoaXZlOiBBZ2dyZWdhdGVGYWN0b3J5QXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZTogQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlVHlwZTogc3RyaW5nKSB7XG5cdFx0dGhpcy5jb21tYW5kVHlwZSA9IHRoaXMuY3JlYXRlQ29tbWFuZEluc3RhbmNlKCkuZ2V0TWVzc2FnZVR5cGUoKTtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBBLCBjb21tYW5kOiBDKTogdm9pZCB7XG5cdFx0dGhpcy5jcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlci5wdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZSwgY29tbWFuZCk7XG5cdH1cblxuXHRoYW5kbGVDb21tYW5kKGNvbW1hbmQ6IEMpIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUlkID0gY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpO1xuXG5cdFx0Y29uc3Qgb3B0RmFjdG9yeSA9IHRoaXMuYWdncmVnYXRlRmFjdG9yeUFyY2hpdmUuZ2V0KHRoaXMuYWdncmVnYXRlVHlwZSk7XG5cblx0XHRvcHRGYWN0b3J5LmlmUHJlc2VudCgoZmFjdG9yeTogQWdncmVnYXRlRmFjdG9yeTxBPikgPT4ge1xuXG5cdFx0XHRjb25zdCBhZ2dyZWdhdGUgPSBmYWN0b3J5LmNyZWF0ZShhZ2dyZWdhdGVJZCk7XG5cblx0XHRcdGNvbnN0IG9wdFJlcG9zaXRvcnkgPSB0aGlzLmFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlLmdldCh0aGlzLmFnZ3JlZ2F0ZVR5cGUpO1xuXG5cdFx0XHRvcHRSZXBvc2l0b3J5LmlmUHJlc2VudCgocmVwbzogQWdncmVnYXRlUmVwb3NpdG9yeTxBPikgPT4ge1xuXG5cdFx0XHRcdHJlcG8uc2F2ZShhZ2dyZWdhdGUpO1xuXG5cdFx0XHRcdHRoaXMucHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGUsIGNvbW1hbmQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0fVxuXG5cdGZvckNvbW1hbmQoY29tbWFuZDogQyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmNvbW1hbmRUeXBlID09PSBjb21tYW5kLmdldE1lc3NhZ2VUeXBlKCk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUNvbW1hbmRJbnN0YW5jZSgpOiBDIHtcblx0XHRjb25zdCBhcmdzOiBBcnJheTx2b2lkPiA9IFtdLFxuXHRcdFx0YXJndW1lbnRMZW5ndGggPSB0aGlzLmNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyLmZvckNvbW1hbmQoKS5jb25zdHJ1Y3Rvci5sZW5ndGg7XG5cblx0XHRhcmdzLmZpbGwodW5kZWZpbmVkLCAwLCBhcmd1bWVudExlbmd0aCk7XG5cblx0XHRyZXR1cm4gKG5ldyAodGhpcy5jcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlci5mb3JDb21tYW5kKCkgYXMgYW55KSguLi5hcmdzKSk7XG5cdH1cblxufVxuIl19