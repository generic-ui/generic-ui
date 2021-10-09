/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import { FILTERED_COMMAND_STREAM } from './filtered-command-stream';
import { CommandStream } from './command.stream';
import { HermesObservable } from '../../../common/stream/observable/hermes.observable';
import { hermesFilter } from '../../../common/stream/operator/hermes.filter';
/**
 * @template C
 */
var CommandBus = /** @class */ (function (_super) {
    tslib_1.__extends(CommandBus, _super);
    function CommandBus(commandsStream) {
        var _this = _super.call(this) || this;
        _this.commandsStream = commandsStream;
        return _this;
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    CommandBus.prototype.subscribe = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        return this.commandsStream.toObservable().subscribe(arguments[0], arguments[1], arguments[2]);
    };
    /**
     * @template C2
     * @param {...?} commandTypes
     * @return {?}
     */
    CommandBus.prototype.ofCommand = /**
     * @template C2
     * @param {...?} commandTypes
     * @return {?}
     */
    function () {
        var commandTypes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            commandTypes[_i] = arguments[_i];
        }
        return ((/** @type {?} */ (this)))
            .commandsStream
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            return commandTypes.some((/**
             * @param {?} commandType
             * @return {?}
             */
            function (commandType) { return command.ofMessageType(commandType); }));
        })));
    };
    /**
     * @template C2
     * @param {...?} handlers
     * @return {?}
     */
    CommandBus.prototype.ofCommandHandler = /**
     * @template C2
     * @param {...?} handlers
     * @return {?}
     */
    function () {
        var handlers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            handlers[_i] = arguments[_i];
        }
        return ((/** @type {?} */ (this)))
            .commandsStream
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            return handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                return handler.forCommand(command);
            }));
        })));
    };
    /**
     * @template C2
     * @param {...?} handlers
     * @return {?}
     */
    CommandBus.prototype.ofCreateAggregateHandler = /**
     * @template C2
     * @param {...?} handlers
     * @return {?}
     */
    function () {
        var handlers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            handlers[_i] = arguments[_i];
        }
        return ((/** @type {?} */ (this)))
            .commandsStream
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            return handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) {
                return handler.forCommand(command);
            }));
        })));
    };
    /**
     * @template C2
     * @param {?} handlers
     * @param {?} aggregateCommandHandlers
     * @return {?}
     */
    CommandBus.prototype.ofNullHandler = /**
     * @template C2
     * @param {?} handlers
     * @param {?} aggregateCommandHandlers
     * @return {?}
     */
    function (handlers, aggregateCommandHandlers) {
        return ((/** @type {?} */ (this)))
            .commandsStream
            .toObservable()
            .pipe(hermesFilter((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            if (!handlers && !aggregateCommandHandlers) {
                return true;
            }
            /** @type {?} */
            var foundHandlerForCommand = true;
            if (handlers) {
                foundHandlerForCommand =
                    !handlers.some((/**
                     * @param {?} handler
                     * @return {?}
                     */
                    function (handler) {
                        return handler.forCommand(command);
                    }));
            }
            if (aggregateCommandHandlers) {
                foundHandlerForCommand = foundHandlerForCommand &&
                    !aggregateCommandHandlers.some((/**
                     * @param {?} handler
                     * @return {?}
                     */
                    function (handler) {
                        return handler.forCommand(command);
                    }));
            }
            return foundHandlerForCommand;
        })));
    };
    CommandBus.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CommandBus.ctorParameters = function () { return [
        { type: CommandStream, decorators: [{ type: Inject, args: [FILTERED_COMMAND_STREAM,] }] }
    ]; };
    return CommandBus;
}(HermesObservable));
export { CommandBus };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CommandBus.prototype.commandsStream;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5idXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuYnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFNcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7OztBQUU3RTtJQUMwRCxzQ0FBbUI7SUFFNUUsb0JBQThELGNBQTZCO1FBQTNGLFlBQ0MsaUJBQU8sU0FDUDtRQUY2RCxvQkFBYyxHQUFkLGNBQWMsQ0FBZTs7SUFFM0YsQ0FBQzs7Ozs7SUFVRCw4QkFBUzs7OztJQUFULFVBQ0MsR0FBUTtRQUdSLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRixDQUFDOzs7Ozs7SUFFRCw4QkFBUzs7Ozs7SUFBVDtRQUF3QixzQkFBOEI7YUFBOUIsVUFBOEIsRUFBOUIscUJBQThCLEVBQTlCLElBQThCO1lBQTlCLGlDQUE4Qjs7UUFDckQsT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBbUIsQ0FBQzthQUM5QixjQUFjO2FBQ2QsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLFlBQVk7Ozs7UUFBQyxVQUFDLE9BQTZCO1lBQzFDLE9BQU8sWUFBWSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLFdBQW1CLElBQUssT0FBQSxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFsQyxDQUFrQyxFQUFDLENBQUM7UUFDdkYsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELHFDQUFnQjs7Ozs7SUFBaEI7UUFBK0Isa0JBQXFHO2FBQXJHLFVBQXFHLEVBQXJHLHFCQUFxRyxFQUFyRyxJQUFxRztZQUFyRyw2QkFBcUc7O1FBQ25JLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQW1CLENBQUM7YUFDOUIsY0FBYzthQUNkLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixZQUFZOzs7O1FBQUMsVUFBQyxPQUE2QjtZQUMxQyxPQUFPLFFBQVEsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxPQUEwRjtnQkFDL0csT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLENBQUMsRUFBQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELDZDQUF3Qjs7Ozs7SUFBeEI7UUFDQyxrQkFBOEc7YUFBOUcsVUFBOEcsRUFBOUcscUJBQThHLEVBQTlHLElBQThHO1lBQTlHLDZCQUE4Rzs7UUFHOUcsT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBbUIsQ0FBQzthQUM5QixjQUFjO2FBQ2QsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLFlBQVk7Ozs7UUFBQyxVQUFDLE9BQStCO1lBQzVDLE9BQU8sUUFBUSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLE9BQW1HO2dCQUN4SCxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEMsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVELGtDQUFhOzs7Ozs7SUFBYixVQUNDLFFBQWtHLEVBQ2xHLHdCQUFtSTtRQUduSSxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUFtQixDQUFDO2FBQzlCLGNBQWM7YUFDZCxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osWUFBWTs7OztRQUFDLFVBQUMsT0FBNkI7WUFFMUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLHdCQUF3QixFQUFFO2dCQUMzQyxPQUFPLElBQUksQ0FBQzthQUNaOztnQkFFRyxzQkFBc0IsR0FBRyxJQUFJO1lBRWpDLElBQUksUUFBUSxFQUFFO2dCQUNiLHNCQUFzQjtvQkFDckIsQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztvQkFBQyxVQUFDLE9BQTBGO3dCQUN6RyxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3BDLENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFFRCxJQUFJLHdCQUF3QixFQUFFO2dCQUM3QixzQkFBc0IsR0FBRyxzQkFBc0I7b0JBQzlDLENBQUMsd0JBQXdCLENBQUMsSUFBSTs7OztvQkFBQyxVQUFDLE9BQXdGO3dCQUN2SCxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3BDLENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFFRCxPQUFPLHNCQUFzQixDQUFDO1FBRS9CLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSixDQUFDOztnQkFqR0QsVUFBVTs7OztnQkFORixhQUFhLHVCQVNSLE1BQU0sU0FBQyx1QkFBdUI7O0lBZ0c1QyxpQkFBQztDQUFBLEFBbkdELENBQzBELGdCQUFnQixHQWtHekU7U0FsR1ksVUFBVTs7Ozs7O0lBRVYsb0NBQStFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuL2NvbW1hbmQnO1xuaW1wb3J0IHsgRklMVEVSRURfQ09NTUFORF9TVFJFQU0gfSBmcm9tICcuL2ZpbHRlcmVkLWNvbW1hbmQtc3RyZWFtJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsIH0gZnJvbSAnLi9jcmVhdGUtYWdncmVnYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXJJbXBsIH0gZnJvbSAnLi9oYW5kbGVyL2NvbW1hbmQtaGFuZGxlci1pbXBsJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kIH0gZnJvbSAnLi9jcmVhdGUtYWdncmVnYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZCc7XG5pbXBvcnQgeyBDb21tYW5kU3RyZWFtIH0gZnJvbSAnLi9jb21tYW5kLnN0cmVhbSc7XG5pbXBvcnQgeyBIZXJtZXNTdWJzY3JpcHRpb24gfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc3RyZWFtL3N1YnNjcmlwdGlvbi9oZXJtZXMuc3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IEhlcm1lc1N1YnNjcmliZXIgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc3RyZWFtL29ic2VydmFibGUvc3Vic2NyaWJlci9oZXJtZXMuc3Vic2NyaWJlcic7XG5pbXBvcnQgeyBIZXJtZXNPYnNlcnZhYmxlIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9vYnNlcnZhYmxlL2hlcm1lcy5vYnNlcnZhYmxlJztcbmltcG9ydCB7IGhlcm1lc0ZpbHRlciB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vb3BlcmF0b3IvaGVybWVzLmZpbHRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21tYW5kQnVzPEMgPSBDb21tYW5kPEFnZ3JlZ2F0ZUlkPj4gZXh0ZW5kcyBIZXJtZXNPYnNlcnZhYmxlPEM+IHtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KEZJTFRFUkVEX0NPTU1BTkRfU1RSRUFNKSBwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmRzU3RyZWFtOiBDb21tYW5kU3RyZWFtKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHN1YnNjcmliZShcblx0XHRuZXh0PzogKHZhbHVlOiBDKSA9PiB2b2lkLFxuXHRcdGVycm9yPzogKGVycm9yOiBhbnkpID0+IHZvaWQsXG5cdFx0Y29tcGxldGU/OiAoKSA9PiB2b2lkXG5cdCk6IEhlcm1lc1N1YnNjcmlwdGlvbjtcblx0c3Vic2NyaWJlKFxuXHRcdHN1YnNjcmliZXI6IEhlcm1lc1N1YnNjcmliZXI8Qz5cblx0KTogSGVybWVzU3Vic2NyaXB0aW9uO1xuXHRzdWJzY3JpYmUoXG5cdFx0YXJnOiBhbnlcblx0KTogSGVybWVzU3Vic2NyaXB0aW9uIHtcblxuXHRcdHJldHVybiB0aGlzLmNvbW1hbmRzU3RyZWFtLnRvT2JzZXJ2YWJsZSgpLnN1YnNjcmliZShhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1sxXSwgYXJndW1lbnRzWzJdKTtcblx0fVxuXG5cdG9mQ29tbWFuZDxDMiBleHRlbmRzIEM+KC4uLmNvbW1hbmRUeXBlczogQXJyYXk8c3RyaW5nPik6IGFueSB7XG5cdFx0cmV0dXJuICh0aGlzIGFzIENvbW1hbmRCdXM8YW55Pilcblx0XHRcdC5jb21tYW5kc1N0cmVhbVxuXHRcdFx0LnRvT2JzZXJ2YWJsZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzRmlsdGVyKChjb21tYW5kOiBDb21tYW5kPEFnZ3JlZ2F0ZUlkPikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBjb21tYW5kVHlwZXMuc29tZSgoY29tbWFuZFR5cGU6IHN0cmluZykgPT4gY29tbWFuZC5vZk1lc3NhZ2VUeXBlKGNvbW1hbmRUeXBlKSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cblx0b2ZDb21tYW5kSGFuZGxlcjxDMiBleHRlbmRzIEM+KC4uLmhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlckltcGw8QWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+LCBDb21tYW5kPEFnZ3JlZ2F0ZUlkPj4+KTogYW55IHtcblx0XHRyZXR1cm4gKHRoaXMgYXMgQ29tbWFuZEJ1czxhbnk+KVxuXHRcdFx0LmNvbW1hbmRzU3RyZWFtXG5cdFx0XHQudG9PYnNlcnZhYmxlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRoZXJtZXNGaWx0ZXIoKGNvbW1hbmQ6IENvbW1hbmQ8QWdncmVnYXRlSWQ+KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGhhbmRsZXJzLnNvbWUoKGhhbmRsZXI6IENvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENvbW1hbmQ8QWdncmVnYXRlSWQ+PikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGhhbmRsZXIuZm9yQ29tbWFuZChjb21tYW5kKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHRvZkNyZWF0ZUFnZ3JlZ2F0ZUhhbmRsZXI8QzIgZXh0ZW5kcyBDPihcblx0XHQuLi5oYW5kbGVyczogQXJyYXk8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPGFueSwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmQ+PlxuXHQpOiBhbnkge1xuXG5cdFx0cmV0dXJuICh0aGlzIGFzIENvbW1hbmRCdXM8YW55Pilcblx0XHRcdC5jb21tYW5kc1N0cmVhbVxuXHRcdFx0LnRvT2JzZXJ2YWJsZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzRmlsdGVyKChjb21tYW5kOiBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGhhbmRsZXJzLnNvbWUoKGhhbmRsZXI6IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxhbnksIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+LCBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kPikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGhhbmRsZXIuZm9yQ29tbWFuZChjb21tYW5kKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHRvZk51bGxIYW5kbGVyPEMyIGV4dGVuZHMgQz4oXG5cdFx0aGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENvbW1hbmQ8QWdncmVnYXRlSWQ+Pj4sXG5cdFx0YWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzOiBBcnJheTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8QWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+LCBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kPj5cblx0KTogYW55IHtcblxuXHRcdHJldHVybiAodGhpcyBhcyBDb21tYW5kQnVzPGFueT4pXG5cdFx0XHQuY29tbWFuZHNTdHJlYW1cblx0XHRcdC50b09ic2VydmFibGUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGhlcm1lc0ZpbHRlcigoY29tbWFuZDogQ29tbWFuZDxBZ2dyZWdhdGVJZD4pID0+IHtcblxuXHRcdFx0XHRcdGlmICghaGFuZGxlcnMgJiYgIWFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGV0IGZvdW5kSGFuZGxlckZvckNvbW1hbmQgPSB0cnVlO1xuXG5cdFx0XHRcdFx0aWYgKGhhbmRsZXJzKSB7XG5cdFx0XHRcdFx0XHRmb3VuZEhhbmRsZXJGb3JDb21tYW5kID1cblx0XHRcdFx0XHRcdFx0IWhhbmRsZXJzLnNvbWUoKGhhbmRsZXI6IENvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENvbW1hbmQ8QWdncmVnYXRlSWQ+PikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBoYW5kbGVyLmZvckNvbW1hbmQoY29tbWFuZCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMpIHtcblx0XHRcdFx0XHRcdGZvdW5kSGFuZGxlckZvckNvbW1hbmQgPSBmb3VuZEhhbmRsZXJGb3JDb21tYW5kICYmXG5cdFx0XHRcdFx0XHRcdCFhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMuc29tZSgoaGFuZGxlcjogQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiwgYW55PikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBoYW5kbGVyLmZvckNvbW1hbmQoY29tbWFuZCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBmb3VuZEhhbmRsZXJGb3JDb21tYW5kO1xuXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==