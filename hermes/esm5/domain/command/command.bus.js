/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FILTERED_COMMAND_STREAM } from './filtered-command-stream';
/**
 * @template C
 */
var CommandBus = /** @class */ (function (_super) {
    tslib_1.__extends(CommandBus, _super);
    function CommandBus(commandsStream) {
        var _this = _super.call(this) || this;
        if (commandsStream) {
            _this.source = commandsStream;
        }
        return _this;
    }
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    CommandBus.prototype.lift = /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    function (operator) {
        /** @type {?} */
        var observable = new CommandBus();
        observable.source = this;
        observable.operator = operator;
        return observable;
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
            .pipe(filter((/**
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
            .pipe(filter((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            return handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) { return handler.forCommand(command); }));
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
            .pipe(filter((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            return handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) { return handler.forCommand(command); }));
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
            .pipe(filter((/**
         * @param {?} command
         * @return {?}
         */
        function (command) {
            if (!handlers) {
                return true;
            }
            return !handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            function (handler) { return handler.forCommand(command); })) &&
                !aggregateCommandHandlers.some((/**
                 * @param {?} handler
                 * @return {?}
                 */
                function (handler) { return handler.forCommand(command); }));
        })));
    };
    CommandBus.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CommandBus.ctorParameters = function () { return [
        { type: Subject, decorators: [{ type: Inject, args: [FILTERED_COMMAND_STREAM,] }] }
    ]; };
    return CommandBus;
}(Observable));
export { CommandBus };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5idXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJkb21haW4vY29tbWFuZC9jb21tYW5kLmJ1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQVksT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQU1wRTtJQUM2QyxzQ0FBYTtJQUV6RCxvQkFBNkMsY0FBaUM7UUFBOUUsWUFDQyxpQkFBTyxTQUtQO1FBSEEsSUFBSSxjQUFjLEVBQUU7WUFDbkIsS0FBSSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUM7U0FDN0I7O0lBQ0YsQ0FBQzs7Ozs7O0lBRUQseUJBQUk7Ozs7O0lBQUosVUFBUSxRQUF3Qjs7WUFDekIsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFLO1FBQ3RDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLFVBQVUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQy9CLE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVELDhCQUFTOzs7OztJQUFUO1FBQXdCLHNCQUE4QjthQUE5QixVQUE4QixFQUE5QixxQkFBOEIsRUFBOUIsSUFBOEI7WUFBOUIsaUNBQThCOztRQUNyRCxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUFtQixDQUFDO2FBQzlCLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxPQUFnQjtZQUN2QixPQUFPLFlBQVksQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxXQUFtQixJQUFLLE9BQUEsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBbEMsQ0FBa0MsRUFBQyxDQUFDO1FBQ3ZGLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCxxQ0FBZ0I7Ozs7O0lBQWhCO1FBQStCLGtCQUF3RjthQUF4RixVQUF3RixFQUF4RixxQkFBd0YsRUFBeEYsSUFBd0Y7WUFBeEYsNkJBQXdGOztRQUN0SCxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUFtQixDQUFDO2FBQzlCLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxPQUFnQjtZQUN2QixPQUFPLFFBQVEsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxPQUE2RSxJQUFLLE9BQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsRUFBQyxDQUFDO1FBQ3RJLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCw2Q0FBd0I7Ozs7O0lBQXhCO1FBQXVDLGtCQUF5RjthQUF6RixVQUF5RixFQUF6RixxQkFBeUYsRUFBekYsSUFBeUY7WUFBekYsNkJBQXlGOztRQUMvSCxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUFtQixDQUFDO2FBQzlCLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxPQUFnQjtZQUN2QixPQUFPLFFBQVEsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxPQUE4RSxJQUFLLE9BQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsRUFBQyxDQUFDO1FBQ3ZJLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRUQsa0NBQWE7Ozs7OztJQUFiLFVBQTRCLFFBQXFGLEVBQUUsd0JBQThHO1FBQ2hPLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQW1CLENBQUM7YUFDOUIsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLE9BQWdCO1lBRXZCLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2QsT0FBTyxJQUFJLENBQUM7YUFDWjtZQUVELE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsT0FBNkUsSUFBSyxPQUFBLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLEVBQUM7Z0JBQ3BJLENBQUMsd0JBQXdCLENBQUMsSUFBSTs7OztnQkFBQyxVQUFDLE9BQXNGLElBQUssT0FBQSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUEzQixDQUEyQixFQUFDLENBQUM7UUFDMUosQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQTFERCxVQUFVOzs7O2dCQVZvQixPQUFPLHVCQWF4QixNQUFNLFNBQUMsdUJBQXVCOztJQXlENUMsaUJBQUM7Q0FBQSxBQTVERCxDQUM2QyxVQUFVLEdBMkR0RDtTQTNEWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPcGVyYXRvciwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi9jb21tYW5kJztcbmltcG9ydCB7IEZJTFRFUkVEX0NPTU1BTkRfU1RSRUFNIH0gZnJvbSAnLi9maWx0ZXJlZC1jb21tYW5kLXN0cmVhbSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVSb290IH0gZnJvbSAnLi9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsIH0gZnJvbSAnLi9hZ2dyZWdhdGUvY3JlYXRlL2FnZ3JlZ2F0ZS1jb21tYW5kLWhhbmRsZXIuaW1wbCc7XG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlckltcGwgfSBmcm9tICcuL2hhbmRsZXIvY29tbWFuZC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi9hZ2dyZWdhdGUtaWQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tbWFuZEJ1czxDID0gQ29tbWFuZD4gZXh0ZW5kcyBPYnNlcnZhYmxlPEM+IHtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KEZJTFRFUkVEX0NPTU1BTkRfU1RSRUFNKSBjb21tYW5kc1N0cmVhbT86IFN1YmplY3Q8Q29tbWFuZD4pIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0aWYgKGNvbW1hbmRzU3RyZWFtKSB7XG5cdFx0XHR0aGlzLnNvdXJjZSA9IGNvbW1hbmRzU3RyZWFtO1xuXHRcdH1cblx0fVxuXG5cdGxpZnQ8Uj4ob3BlcmF0b3I6IE9wZXJhdG9yPEMsIFI+KTogT2JzZXJ2YWJsZTxSPiB7XG5cdFx0Y29uc3Qgb2JzZXJ2YWJsZSA9IG5ldyBDb21tYW5kQnVzPFI+KCk7XG5cdFx0b2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuXHRcdG9ic2VydmFibGUub3BlcmF0b3IgPSBvcGVyYXRvcjtcblx0XHRyZXR1cm4gb2JzZXJ2YWJsZTtcblx0fVxuXG5cdG9mQ29tbWFuZDxDMiBleHRlbmRzIEM+KC4uLmNvbW1hbmRUeXBlczogQXJyYXk8c3RyaW5nPik6IGFueSB7XG5cdFx0cmV0dXJuICh0aGlzIGFzIENvbW1hbmRCdXM8YW55Pilcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGNvbW1hbmQ6IENvbW1hbmQpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gY29tbWFuZFR5cGVzLnNvbWUoKGNvbW1hbmRUeXBlOiBzdHJpbmcpID0+IGNvbW1hbmQub2ZNZXNzYWdlVHlwZShjb21tYW5kVHlwZSkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG5cdG9mQ29tbWFuZEhhbmRsZXI8QzIgZXh0ZW5kcyBDPiguLi5oYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiwgQ29tbWFuZD4+KTogYW55IHtcblx0XHRyZXR1cm4gKHRoaXMgYXMgQ29tbWFuZEJ1czxhbnk+KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoY29tbWFuZDogQ29tbWFuZCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBoYW5kbGVycy5zb21lKChoYW5kbGVyOiBDb21tYW5kSGFuZGxlckltcGw8QWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+LCBDb21tYW5kPikgPT4gaGFuZGxlci5mb3JDb21tYW5kKGNvbW1hbmQpKTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHRvZkNyZWF0ZUFnZ3JlZ2F0ZUhhbmRsZXI8QzIgZXh0ZW5kcyBDPiguLi5oYW5kbGVyczogQXJyYXk8QWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPGFueSwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENvbW1hbmQ+Pik6IGFueSB7XG5cdFx0cmV0dXJuICh0aGlzIGFzIENvbW1hbmRCdXM8YW55Pilcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGNvbW1hbmQ6IENvbW1hbmQpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlcnMuc29tZSgoaGFuZGxlcjogQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPGFueSwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENvbW1hbmQ+KSA9PiBoYW5kbGVyLmZvckNvbW1hbmQoY29tbWFuZCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG5cdG9mTnVsbEhhbmRsZXI8QzIgZXh0ZW5kcyBDPihoYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiwgQ29tbWFuZD4+LCBhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnM6IEFycmF5PEFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENvbW1hbmQ+Pik6IGFueSB7XG5cdFx0cmV0dXJuICh0aGlzIGFzIENvbW1hbmRCdXM8YW55Pilcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGNvbW1hbmQ6IENvbW1hbmQpID0+IHtcblxuXHRcdFx0XHRcdGlmICghaGFuZGxlcnMpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiAhaGFuZGxlcnMuc29tZSgoaGFuZGxlcjogQ29tbWFuZEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiwgQ29tbWFuZD4pID0+IGhhbmRsZXIuZm9yQ29tbWFuZChjb21tYW5kKSkgJiZcblx0XHRcdFx0XHRcdCFhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMuc29tZSgoaGFuZGxlcjogQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiwgQ29tbWFuZD4pID0+IGhhbmRsZXIuZm9yQ29tbWFuZChjb21tYW5kKSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==