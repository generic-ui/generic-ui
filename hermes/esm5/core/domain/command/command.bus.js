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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5idXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuYnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBWSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBT3BFO0lBQzBELHNDQUFhO0lBRXRFLG9CQUE2QyxjQUEyQjtRQUF4RSxZQUNDLGlCQUFPLFNBS1A7UUFIQSxJQUFJLGNBQWMsRUFBRTtZQUNuQixLQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztTQUM3Qjs7SUFDRixDQUFDOzs7Ozs7SUFFRCx5QkFBSTs7Ozs7SUFBSixVQUFRLFFBQXdCOztZQUN6QixVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUs7UUFDdEMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDekIsVUFBVSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDL0IsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRUQsOEJBQVM7Ozs7O0lBQVQ7UUFBd0Isc0JBQThCO2FBQTlCLFVBQThCLEVBQTlCLHFCQUE4QixFQUE5QixJQUE4QjtZQUE5QixpQ0FBOEI7O1FBQ3JELE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQW1CLENBQUM7YUFDOUIsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLE9BQTZCO1lBQ3BDLE9BQU8sWUFBWSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLFdBQW1CLElBQUssT0FBQSxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFsQyxDQUFrQyxFQUFDLENBQUM7UUFDdkYsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELHFDQUFnQjs7Ozs7SUFBaEI7UUFBK0Isa0JBQXFHO2FBQXJHLFVBQXFHLEVBQXJHLHFCQUFxRyxFQUFyRyxJQUFxRztZQUFyRyw2QkFBcUc7O1FBQ25JLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQW1CLENBQUM7YUFDOUIsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLE9BQTZCO1lBQ3BDLE9BQU8sUUFBUSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLE9BQTBGLElBQUssT0FBQSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUEzQixDQUEyQixFQUFDLENBQUM7UUFDbkosQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELDZDQUF3Qjs7Ozs7SUFBeEI7UUFBdUMsa0JBQThHO2FBQTlHLFVBQThHLEVBQTlHLHFCQUE4RyxFQUE5RyxJQUE4RztZQUE5Ryw2QkFBOEc7O1FBQ3BKLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQW1CLENBQUM7YUFDOUIsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxVQUFDLE9BQStCO1lBQ3RDLE9BQU8sUUFBUSxDQUFDLElBQUk7Ozs7WUFBQyxVQUFDLE9BQW1HLElBQUssT0FBQSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUEzQixDQUEyQixFQUFDLENBQUM7UUFDNUosQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFRCxrQ0FBYTs7Ozs7O0lBQWIsVUFBNEIsUUFBa0csRUFBRSx3QkFBbUk7UUFDbFEsT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBbUIsQ0FBQzthQUM5QixJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsT0FBNkI7WUFFcEMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZCxPQUFPLElBQUksQ0FBQzthQUNaO1lBRUQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxPQUEwRixJQUFLLE9BQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsRUFBQztnQkFDakosQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUMsT0FBd0YsSUFBSyxPQUFBLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLEVBQUMsQ0FBQztRQUM1SixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBMURELFVBQVU7Ozs7Z0JBWG9CLE9BQU8sdUJBY3hCLE1BQU0sU0FBQyx1QkFBdUI7O0lBeUQ1QyxpQkFBQztDQUFBLEFBNURELENBQzBELFVBQVUsR0EyRG5FO1NBM0RZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9wZXJhdG9yLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuL2NvbW1hbmQnO1xuaW1wb3J0IHsgRklMVEVSRURfQ09NTUFORF9TVFJFQU0gfSBmcm9tICcuL2ZpbHRlcmVkLWNvbW1hbmQtc3RyZWFtJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZVJvb3QgfSBmcm9tICcuLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLXJvb3QnO1xuaW1wb3J0IHsgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsIH0gZnJvbSAnLi9jcmVhdGUtYWdncmVnYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXJJbXBsIH0gZnJvbSAnLi9oYW5kbGVyL2NvbW1hbmQtaGFuZGxlci1pbXBsJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vdGFjdGljYWwvYWdncmVnYXRlL2FnZ3JlZ2F0ZS1pZCc7XG5pbXBvcnQgeyBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kIH0gZnJvbSAnLi9jcmVhdGUtYWdncmVnYXRlL2NyZWF0ZS1hZ2dyZWdhdGUuY29tbWFuZCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21tYW5kQnVzPEMgPSBDb21tYW5kPEFnZ3JlZ2F0ZUlkPj4gZXh0ZW5kcyBPYnNlcnZhYmxlPEM+IHtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KEZJTFRFUkVEX0NPTU1BTkRfU1RSRUFNKSBjb21tYW5kc1N0cmVhbT86IFN1YmplY3Q8Qz4pIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0aWYgKGNvbW1hbmRzU3RyZWFtKSB7XG5cdFx0XHR0aGlzLnNvdXJjZSA9IGNvbW1hbmRzU3RyZWFtO1xuXHRcdH1cblx0fVxuXG5cdGxpZnQ8Uj4ob3BlcmF0b3I6IE9wZXJhdG9yPEMsIFI+KTogT2JzZXJ2YWJsZTxSPiB7XG5cdFx0Y29uc3Qgb2JzZXJ2YWJsZSA9IG5ldyBDb21tYW5kQnVzPFI+KCk7XG5cdFx0b2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuXHRcdG9ic2VydmFibGUub3BlcmF0b3IgPSBvcGVyYXRvcjtcblx0XHRyZXR1cm4gb2JzZXJ2YWJsZTtcblx0fVxuXG5cdG9mQ29tbWFuZDxDMiBleHRlbmRzIEM+KC4uLmNvbW1hbmRUeXBlczogQXJyYXk8c3RyaW5nPik6IGFueSB7XG5cdFx0cmV0dXJuICh0aGlzIGFzIENvbW1hbmRCdXM8YW55Pilcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGNvbW1hbmQ6IENvbW1hbmQ8QWdncmVnYXRlSWQ+KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGNvbW1hbmRUeXBlcy5zb21lKChjb21tYW5kVHlwZTogc3RyaW5nKSA9PiBjb21tYW5kLm9mTWVzc2FnZVR5cGUoY29tbWFuZFR5cGUpKTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHRvZkNvbW1hbmRIYW5kbGVyPEMyIGV4dGVuZHMgQz4oLi4uaGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENvbW1hbmQ8QWdncmVnYXRlSWQ+Pj4pOiBhbnkge1xuXHRcdHJldHVybiAodGhpcyBhcyBDb21tYW5kQnVzPGFueT4pXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChjb21tYW5kOiBDb21tYW5kPEFnZ3JlZ2F0ZUlkPikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBoYW5kbGVycy5zb21lKChoYW5kbGVyOiBDb21tYW5kSGFuZGxlckltcGw8QWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+LCBDb21tYW5kPEFnZ3JlZ2F0ZUlkPj4pID0+IGhhbmRsZXIuZm9yQ29tbWFuZChjb21tYW5kKSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cblx0b2ZDcmVhdGVBZ2dyZWdhdGVIYW5kbGVyPEMyIGV4dGVuZHMgQz4oLi4uaGFuZGxlcnM6IEFycmF5PENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxhbnksIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+LCBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kPj4pOiBhbnkge1xuXHRcdHJldHVybiAodGhpcyBhcyBDb21tYW5kQnVzPGFueT4pXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChjb21tYW5kOiBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGhhbmRsZXJzLnNvbWUoKGhhbmRsZXI6IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxhbnksIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+LCBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kPikgPT4gaGFuZGxlci5mb3JDb21tYW5kKGNvbW1hbmQpKTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHRvZk51bGxIYW5kbGVyPEMyIGV4dGVuZHMgQz4oaGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENvbW1hbmQ8QWdncmVnYXRlSWQ+Pj4sIGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiwgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZD4+KTogYW55IHtcblx0XHRyZXR1cm4gKHRoaXMgYXMgQ29tbWFuZEJ1czxhbnk+KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoY29tbWFuZDogQ29tbWFuZDxBZ2dyZWdhdGVJZD4pID0+IHtcblxuXHRcdFx0XHRcdGlmICghaGFuZGxlcnMpIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiAhaGFuZGxlcnMuc29tZSgoaGFuZGxlcjogQ29tbWFuZEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiwgQ29tbWFuZDxBZ2dyZWdhdGVJZD4+KSA9PiBoYW5kbGVyLmZvckNvbW1hbmQoY29tbWFuZCkpICYmXG5cdFx0XHRcdFx0XHQhYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzLnNvbWUoKGhhbmRsZXI6IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIGFueT4pID0+IGhhbmRsZXIuZm9yQ29tbWFuZChjb21tYW5kKSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==