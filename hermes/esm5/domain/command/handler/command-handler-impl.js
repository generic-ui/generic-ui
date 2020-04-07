/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * @template I, A, C
 */
CommandHandlerImpl = /** @class */ (function () {
    function CommandHandlerImpl(commandHandler, aggregateRepositoryArchive, aggregateType) {
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
    CommandHandlerImpl.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.commandHandler.publishDomainEvents(aggregate, command);
    };
    /**
     * @param {?} command
     * @return {?}
     */
    CommandHandlerImpl.prototype.handleCommand = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        var _this = this;
        /** @type {?} */
        var aggregateId = (/** @type {?} */ (command.getAggregateId()));
        /** @type {?} */
        var optRepository = this.aggregateRepositoryArchive.get(this.aggregateType);
        optRepository.ifPresent((/**
         * @param {?} repo
         * @return {?}
         */
        function (repo) {
            /** @type {?} */
            var optAggregate = repo.getById(aggregateId);
            optAggregate.ifPresent((/**
             * @param {?} aggregate
             * @return {?}
             */
            function (aggregate) {
                _this.commandHandler.handleAggregate(aggregate, command);
                _this.publishDomainEvents(aggregate, command);
            }));
        }));
    };
    /**
     * @param {?} command
     * @return {?}
     */
    CommandHandlerImpl.prototype.forCommand = /**
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
    CommandHandlerImpl.prototype.createCommandInstance = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var args = [];
        /** @type {?} */
        var argumentLength = this.commandHandler.forCommand().constructor.length;
        args.fill(undefined, 0, argumentLength);
        return (new ((_a = ((/** @type {?} */ (this.commandHandler.forCommand())))).bind.apply(_a, tslib_1.__spread([void 0], args)))());
    };
    return CommandHandlerImpl;
}());
/**
 * @template I, A, C
 */
export { CommandHandlerImpl };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1oYW5kbGVyLWltcGwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJkb21haW4vY29tbWFuZC9oYW5kbGVyL2NvbW1hbmQtaGFuZGxlci1pbXBsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE1BQU0sVUFBVSxxQkFBcUIsQ0FDcEMsY0FBb0MsRUFDcEMsMEJBQTRELEVBQzVELGFBQXFCO0lBRXJCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBVSxjQUFjLEVBQUUsMEJBQTBCLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDbkcsQ0FBQzs7OztBQUVEOzs7O0lBSUMsNEJBQTZCLGNBQW9DLEVBQzdDLDBCQUE0RCxFQUM1RCxhQUFxQjtRQUZaLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQUM3QywrQkFBMEIsR0FBMUIsMEJBQTBCLENBQWtDO1FBQzVELGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBQ3hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbEUsQ0FBQzs7Ozs7O0lBRUQsZ0RBQW1COzs7OztJQUFuQixVQUFvQixTQUFZLEVBQUUsT0FBVTtRQUMzQyxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVELDBDQUFhOzs7O0lBQWIsVUFBYyxPQUFVO1FBQXhCLGlCQWlCQzs7WUFmTSxXQUFXLEdBQUcsbUJBQUEsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFLOztZQUUzQyxhQUFhLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBRTdFLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxJQUErQjs7Z0JBRWpELFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUU5QyxZQUFZLENBQUMsU0FBUzs7OztZQUFDLFVBQUMsU0FBWTtnQkFFbkMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUV4RCxLQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLENBQUMsRUFBQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELHVDQUFVOzs7O0lBQVYsVUFBVyxPQUFVO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdEQsQ0FBQzs7Ozs7SUFFTyxrREFBcUI7Ozs7SUFBN0I7OztZQUNPLElBQUksR0FBZ0IsRUFBRTs7WUFDM0IsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU07UUFFckUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRXhDLE9BQU8sTUFBSyxDQUFBLEtBQUEsQ0FBQyxtQkFBQSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxFQUFPLENBQUMsQ0FBQSwyQ0FBSSxJQUFJLE1BQUUsQ0FBQztJQUNqRSxDQUFDO0lBRUYseUJBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDOzs7Ozs7Ozs7O0lBNUNBLHlDQUFxQzs7Ozs7SUFFekIsNENBQXFEOzs7OztJQUM5RCx3REFBNkU7Ozs7O0lBQzdFLDJDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4uL2NvbW1hbmQnO1xuaW1wb3J0IHsgQWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUgfSBmcm9tICcuLi9jb25maWcvZGVmaW5lJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi9hZ2dyZWdhdGUvYWdncmVnYXRlLXJlcG9zaXRvcnknO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2NvbW1hbmQuaGFuZGxlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uLy4uL2FnZ3JlZ2F0ZS1pZCc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hbmRIYW5kbGVyRmFjdG9yeTxJIGV4dGVuZHMgQWdncmVnYXRlSWQsIEEgZXh0ZW5kcyBBZ2dyZWdhdGVSb290PEk+LCBDIGV4dGVuZHMgQ29tbWFuZD4oXG5cdGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlcjxBLCBDPixcblx0YWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlPEksIEE+LFxuXHRhZ2dyZWdhdGVOYW1lOiBzdHJpbmdcbik6IENvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPiB7XG5cdHJldHVybiBuZXcgQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+KGNvbW1hbmRIYW5kbGVyLCBhZ2dyZWdhdGVSZXBvc2l0b3J5QXJjaGl2ZSwgYWdncmVnYXRlTmFtZSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb21tYW5kSGFuZGxlckltcGw8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ+IHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmRUeXBlOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXI8QSwgQz4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmU6IEFnZ3JlZ2F0ZVJlcG9zaXRvcnlBcmNoaXZlPEksIEE+LFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGFnZ3JlZ2F0ZVR5cGU6IHN0cmluZykge1xuXHRcdHRoaXMuY29tbWFuZFR5cGUgPSB0aGlzLmNyZWF0ZUNvbW1hbmRJbnN0YW5jZSgpLmdldE1lc3NhZ2VUeXBlKCk7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogQSwgY29tbWFuZDogQyk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZEhhbmRsZXIucHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGUsIGNvbW1hbmQpO1xuXHR9XG5cblx0aGFuZGxlQ29tbWFuZChjb21tYW5kOiBDKSB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVJZCA9IGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSBhcyBJO1xuXG5cdFx0Y29uc3Qgb3B0UmVwb3NpdG9yeSA9IHRoaXMuYWdncmVnYXRlUmVwb3NpdG9yeUFyY2hpdmUuZ2V0KHRoaXMuYWdncmVnYXRlVHlwZSk7XG5cblx0XHRvcHRSZXBvc2l0b3J5LmlmUHJlc2VudCgocmVwbzogQWdncmVnYXRlUmVwb3NpdG9yeTxJLCBBPikgPT4ge1xuXG5cdFx0XHRjb25zdCBvcHRBZ2dyZWdhdGUgPSByZXBvLmdldEJ5SWQoYWdncmVnYXRlSWQpO1xuXG5cdFx0XHRvcHRBZ2dyZWdhdGUuaWZQcmVzZW50KChhZ2dyZWdhdGU6IEEpID0+IHtcblxuXHRcdFx0XHR0aGlzLmNvbW1hbmRIYW5kbGVyLmhhbmRsZUFnZ3JlZ2F0ZShhZ2dyZWdhdGUsIGNvbW1hbmQpO1xuXG5cdFx0XHRcdHRoaXMucHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGUsIGNvbW1hbmQpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRmb3JDb21tYW5kKGNvbW1hbmQ6IEMpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5jb21tYW5kVHlwZSA9PT0gY29tbWFuZC5nZXRNZXNzYWdlVHlwZSgpO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVDb21tYW5kSW5zdGFuY2UoKTogQyB7XG5cdFx0Y29uc3QgYXJnczogQXJyYXk8dm9pZD4gPSBbXSxcblx0XHRcdGFyZ3VtZW50TGVuZ3RoID0gdGhpcy5jb21tYW5kSGFuZGxlci5mb3JDb21tYW5kKCkuY29uc3RydWN0b3IubGVuZ3RoO1xuXG5cdFx0YXJncy5maWxsKHVuZGVmaW5lZCwgMCwgYXJndW1lbnRMZW5ndGgpO1xuXG5cdFx0cmV0dXJuIChuZXcgKHRoaXMuY29tbWFuZEhhbmRsZXIuZm9yQ29tbWFuZCgpIGFzIGFueSkoLi4uYXJncykpO1xuXHR9XG5cbn1cbiJdfQ==