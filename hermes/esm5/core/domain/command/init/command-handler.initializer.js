/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Reactive } from '../../../../common/reactive';
/**
 * @template I, A, C
 */
var /**
 * @template I, A, C
 */
CommandHandlerInitializer = /** @class */ (function (_super) {
    tslib_1.__extends(CommandHandlerInitializer, _super);
    function CommandHandlerInitializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} commandHandlers
     * @param {?} commandBus
     * @return {?}
     */
    CommandHandlerInitializer.prototype.register = /**
     * @param {?} commandHandlers
     * @param {?} commandBus
     * @return {?}
     */
    function (commandHandlers, commandBus) {
        var _this = this;
        if (commandHandlers) {
            /** @type {?} */
            var set_1 = new Set();
            /** @type {?} */
            var filteredHandlers_1 = [];
            commandHandlers.filter((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                if (!set_1.has(((/** @type {?} */ (handler))).commandHandler)) {
                    set_1.add(((/** @type {?} */ (handler))).commandHandler);
                    filteredHandlers_1.push(handler);
                }
            }));
            filteredHandlers_1.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                commandBus
                    .ofCommandHandler(handler)
                    .pipe(_this.hermesTakeUntil())
                    .subscribe((/**
                 * @param {?} command
                 * @return {?}
                 */
                function (command) {
                    handler.handleCommand(command);
                }));
            }));
            // console.log('Registered command handlers:' + filteredHandlers.length);
            // console.log('Registered command handlers:', filteredHandlers);
        }
    };
    /**
     * @param {?} aggregateCommandHandlers
     * @param {?} commandBus
     * @return {?}
     */
    CommandHandlerInitializer.prototype.registerAggregateCommandHandlers = /**
     * @param {?} aggregateCommandHandlers
     * @param {?} commandBus
     * @return {?}
     */
    function (aggregateCommandHandlers, commandBus) {
        var _this = this;
        if (aggregateCommandHandlers) {
            /** @type {?} */
            var set_2 = new Set();
            /** @type {?} */
            var filteredHandlers_2 = [];
            aggregateCommandHandlers.filter((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                if (!set_2.has(((/** @type {?} */ (handler))).createAggregateCommandHandler)) {
                    set_2.add(((/** @type {?} */ (handler))).createAggregateCommandHandler);
                    filteredHandlers_2.push(handler);
                }
            }));
            filteredHandlers_2.forEach((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                commandBus
                    .ofCreateAggregateHandler(handler)
                    .pipe(_this.hermesTakeUntil())
                    .subscribe((/**
                 * @param {?} command
                 * @return {?}
                 */
                function (command) {
                    handler.handleCommand(command);
                }));
            }));
            // console.log('Registered create command handlers:' + filteredHandlers.length);
            // console.log('Registered create command handlers:', filteredHandlers);
        }
    };
    return CommandHandlerInitializer;
}(Reactive));
/**
 * @template I, A, C
 */
export { CommandHandlerInitializer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC1oYW5kbGVyLmluaXRpYWxpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vY29tbWFuZC9pbml0L2NvbW1hbmQtaGFuZGxlci5pbml0aWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQVF2RDs7OztJQUF3SCxxREFBUTtJQUFoSTs7SUFpRUEsQ0FBQzs7Ozs7O0lBL0RBLDRDQUFROzs7OztJQUFSLFVBQ0MsZUFBbUQsRUFDbkQsVUFBc0I7UUFGdkIsaUJBOEJDO1FBekJBLElBQUksZUFBZSxFQUFFOztnQkFFZCxLQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUU7O2dCQUNmLGtCQUFnQixHQUF1QyxFQUFFO1lBRS9ELGVBQWUsQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQyxPQUFvQztnQkFDM0QsSUFBSSxDQUFDLEtBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxtQkFBQSxPQUFPLEVBQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFO29CQUM5QyxLQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsbUJBQUEsT0FBTyxFQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDekMsa0JBQWdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUMvQjtZQUNGLENBQUMsRUFBQyxDQUFDO1lBRUgsa0JBQWdCLENBQUMsT0FBTzs7OztZQUFDLFVBQUMsT0FBb0M7Z0JBQzdELFVBQVU7cUJBQ1IsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO3FCQUN6QixJQUFJLENBQUMsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO3FCQUM1QixTQUFTOzs7O2dCQUFDLFVBQUMsT0FBVTtvQkFDckIsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsQ0FBQyxFQUFDLENBQUM7WUFDTCxDQUFDLEVBQUMsQ0FBQztZQUVILHlFQUF5RTtZQUN6RSxpRUFBaUU7U0FDakU7SUFFRixDQUFDOzs7Ozs7SUFFRCxvRUFBZ0M7Ozs7O0lBQWhDLFVBQ0Msd0JBQTJFLEVBQzNFLFVBQXNCO1FBRnZCLGlCQTZCQztRQXhCQSxJQUFJLHdCQUF3QixFQUFFOztnQkFFdkIsS0FBRyxHQUFHLElBQUksR0FBRyxFQUFFOztnQkFDZixrQkFBZ0IsR0FBc0QsRUFBRTtZQUU5RSx3QkFBd0IsQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQyxPQUFtRDtnQkFDbkYsSUFBSSxDQUFDLEtBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxtQkFBQSxPQUFPLEVBQU8sQ0FBQyxDQUFDLDZCQUE2QixDQUFDLEVBQUU7b0JBQzdELEtBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxtQkFBQSxPQUFPLEVBQU8sQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQUM7b0JBQ3hELGtCQUFnQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDL0I7WUFDRixDQUFDLEVBQUMsQ0FBQztZQUVILGtCQUFnQixDQUFDLE9BQU87Ozs7WUFBQyxVQUFDLE9BQW1EO2dCQUM1RSxVQUFVO3FCQUNSLHdCQUF3QixDQUFDLE9BQU8sQ0FBQztxQkFDakMsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztxQkFDNUIsU0FBUzs7OztnQkFBQyxVQUFDLE9BQVU7b0JBQ3JCLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDLENBQUM7WUFFSCxnRkFBZ0Y7WUFDaEYsd0VBQXdFO1NBQ3hFO0lBQ0YsQ0FBQztJQUVGLGdDQUFDO0FBQUQsQ0FBQyxBQWpFRCxDQUF3SCxRQUFRLEdBaUUvSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBSZWFjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbW1vbi9yZWFjdGl2ZSc7XG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlckltcGwgfSBmcm9tICcuLi9oYW5kbGVyL2NvbW1hbmQtaGFuZGxlci1pbXBsJztcbmltcG9ydCB7IENvbW1hbmRCdXMgfSBmcm9tICcuLi9jb21tYW5kLmJ1cyc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi4vLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuLi9jb21tYW5kJztcbmltcG9ydCB7IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbCB9IGZyb20gJy4uL2NyZWF0ZS1hZ2dyZWdhdGUvY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXItaW1wbCc7XG5cblxuZXhwb3J0IGNsYXNzIENvbW1hbmRIYW5kbGVySW5pdGlhbGl6ZXI8SSBleHRlbmRzIEFnZ3JlZ2F0ZUlkLCBBIGV4dGVuZHMgQWdncmVnYXRlUm9vdDxJPiwgQyBleHRlbmRzIENvbW1hbmQ8ST4+IGV4dGVuZHMgUmVhY3RpdmUge1xuXG5cdHJlZ2lzdGVyKFxuXHRcdGNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+Pixcblx0XHRjb21tYW5kQnVzOiBDb21tYW5kQnVzXG5cdCk6IHZvaWQge1xuXG5cdFx0aWYgKGNvbW1hbmRIYW5kbGVycykge1xuXG5cdFx0XHRjb25zdCBzZXQgPSBuZXcgU2V0KCk7XG5cdFx0XHRjb25zdCBmaWx0ZXJlZEhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4+ID0gW107XG5cblx0XHRcdGNvbW1hbmRIYW5kbGVycy5maWx0ZXIoKGhhbmRsZXI6IENvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPikgPT4ge1xuXHRcdFx0XHRpZiAoIXNldC5oYXMoKGhhbmRsZXIgYXMgYW55KS5jb21tYW5kSGFuZGxlcikpIHtcblx0XHRcdFx0XHRzZXQuYWRkKChoYW5kbGVyIGFzIGFueSkuY29tbWFuZEhhbmRsZXIpO1xuXHRcdFx0XHRcdGZpbHRlcmVkSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdGZpbHRlcmVkSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+KSA9PiB7XG5cdFx0XHRcdGNvbW1hbmRCdXNcblx0XHRcdFx0XHQub2ZDb21tYW5kSGFuZGxlcihoYW5kbGVyKVxuXHRcdFx0XHRcdC5waXBlKHRoaXMuaGVybWVzVGFrZVVudGlsKCkpXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgoY29tbWFuZDogQykgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlci5oYW5kbGVDb21tYW5kKGNvbW1hbmQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSZWdpc3RlcmVkIGNvbW1hbmQgaGFuZGxlcnM6JyArIGZpbHRlcmVkSGFuZGxlcnMubGVuZ3RoKTtcblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSZWdpc3RlcmVkIGNvbW1hbmQgaGFuZGxlcnM6JywgZmlsdGVyZWRIYW5kbGVycyk7XG5cdFx0fVxuXG5cdH1cblxuXHRyZWdpc3RlckFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycyhcblx0XHRhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnM6IEFycmF5PENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPj4sXG5cdFx0Y29tbWFuZEJ1czogQ29tbWFuZEJ1c1xuXHQpIHtcblxuXHRcdGlmIChhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMpIHtcblxuXHRcdFx0Y29uc3Qgc2V0ID0gbmV3IFNldCgpO1xuXHRcdFx0Y29uc3QgZmlsdGVyZWRIYW5kbGVyczogQXJyYXk8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEksIEEsIEM+PiA9IFtdO1xuXG5cdFx0XHRhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMuZmlsdGVyKChoYW5kbGVyOiBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8SSwgQSwgQz4pID0+IHtcblx0XHRcdFx0aWYgKCFzZXQuaGFzKChoYW5kbGVyIGFzIGFueSkuY3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXIpKSB7XG5cdFx0XHRcdFx0c2V0LmFkZCgoaGFuZGxlciBhcyBhbnkpLmNyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyKTtcblx0XHRcdFx0XHRmaWx0ZXJlZEhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRmaWx0ZXJlZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXI6IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxJLCBBLCBDPikgPT4ge1xuXHRcdFx0XHRjb21tYW5kQnVzXG5cdFx0XHRcdFx0Lm9mQ3JlYXRlQWdncmVnYXRlSGFuZGxlcihoYW5kbGVyKVxuXHRcdFx0XHRcdC5waXBlKHRoaXMuaGVybWVzVGFrZVVudGlsKCkpXG5cdFx0XHRcdFx0LnN1YnNjcmliZSgoY29tbWFuZDogQykgPT4ge1xuXHRcdFx0XHRcdFx0aGFuZGxlci5oYW5kbGVDb21tYW5kKGNvbW1hbmQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIGNvbnNvbGUubG9nKCdSZWdpc3RlcmVkIGNyZWF0ZSBjb21tYW5kIGhhbmRsZXJzOicgKyBmaWx0ZXJlZEhhbmRsZXJzLmxlbmd0aCk7XG5cdFx0XHQvLyBjb25zb2xlLmxvZygnUmVnaXN0ZXJlZCBjcmVhdGUgY29tbWFuZCBoYW5kbGVyczonLCBmaWx0ZXJlZEhhbmRsZXJzKTtcblx0XHR9XG5cdH1cblxufVxuIl19