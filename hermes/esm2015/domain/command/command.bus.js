/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { FILTERED_COMMAND_STREAM } from './filtered-command-stream';
/**
 * @template C
 */
export class CommandBus extends Observable {
    /**
     * @param {?=} commandsStream
     */
    constructor(commandsStream) {
        super();
        if (commandsStream) {
            this.source = commandsStream;
        }
    }
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    lift(operator) {
        /** @type {?} */
        const observable = new CommandBus();
        observable.source = this;
        observable.operator = operator;
        return observable;
    }
    /**
     * @template C2
     * @param {...?} commandTypes
     * @return {?}
     */
    ofCommand(...commandTypes) {
        return ((/** @type {?} */ (this)))
            .pipe(filter((/**
         * @param {?} command
         * @return {?}
         */
        (command) => {
            return commandTypes.some((/**
             * @param {?} commandType
             * @return {?}
             */
            (commandType) => command.ofMessageType(commandType)));
        })));
    }
    /**
     * @template C2
     * @param {...?} handlers
     * @return {?}
     */
    ofCommandHandler(...handlers) {
        return ((/** @type {?} */ (this)))
            .pipe(filter((/**
         * @param {?} command
         * @return {?}
         */
        (command) => {
            return handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => handler.forCommand(command)));
        })));
    }
    /**
     * @template C2
     * @param {...?} handlers
     * @return {?}
     */
    ofCreateAggregateHandler(...handlers) {
        return ((/** @type {?} */ (this)))
            .pipe(filter((/**
         * @param {?} command
         * @return {?}
         */
        (command) => {
            return handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => handler.forCommand(command)));
        })));
    }
    /**
     * @template C2
     * @param {?} handlers
     * @param {?} aggregateCommandHandlers
     * @return {?}
     */
    ofNullHandler(handlers, aggregateCommandHandlers) {
        return ((/** @type {?} */ (this)))
            .pipe(filter((/**
         * @param {?} command
         * @return {?}
         */
        (command) => {
            if (!handlers) {
                return true;
            }
            return !handlers.some((/**
             * @param {?} handler
             * @return {?}
             */
            (handler) => handler.forCommand(command))) &&
                !aggregateCommandHandlers.some((/**
                 * @param {?} handler
                 * @return {?}
                 */
                (handler) => handler.forCommand(command)));
        })));
    }
}
CommandBus.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CommandBus.ctorParameters = () => [
    { type: Subject, decorators: [{ type: Inject, args: [FILTERED_COMMAND_STREAM,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5idXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJkb21haW4vY29tbWFuZC9jb21tYW5kLmJ1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBWSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBT3BFLE1BQU0sT0FBTyxVQUF3QixTQUFRLFVBQWE7Ozs7SUFFekQsWUFBNkMsY0FBaUM7UUFDN0UsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLGNBQWMsRUFBRTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztTQUM3QjtJQUNGLENBQUM7Ozs7OztJQUVELElBQUksQ0FBSSxRQUF3Qjs7Y0FDekIsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFLO1FBQ3RDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLFVBQVUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQy9CLE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBZSxHQUFHLFlBQTJCO1FBQ3JELE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQW1CLENBQUM7YUFDOUIsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtZQUMzQixPQUFPLFlBQVksQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxXQUFtQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQUM7UUFDdkYsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELGdCQUFnQixDQUFlLEdBQUcsUUFBcUY7UUFDdEgsT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBbUIsQ0FBQzthQUM5QixJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsT0FBZ0IsRUFBRSxFQUFFO1lBQzNCLE9BQU8sUUFBUSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLE9BQTZFLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQztRQUN0SSxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsd0JBQXdCLENBQWUsR0FBRyxRQUFzRjtRQUMvSCxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUFtQixDQUFDO2FBQzlCLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDM0IsT0FBTyxRQUFRLENBQUMsSUFBSTs7OztZQUFDLENBQUMsT0FBOEUsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDO1FBQ3ZJLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRUQsYUFBYSxDQUFlLFFBQXFGLEVBQUUsd0JBQThHO1FBQ2hPLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQW1CLENBQUM7YUFDOUIsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtZQUUzQixJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNkLE9BQU8sSUFBSSxDQUFDO2FBQ1o7WUFFRCxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLE9BQTZFLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUM7Z0JBQ3BJLENBQUMsd0JBQXdCLENBQUMsSUFBSTs7OztnQkFBQyxDQUFDLE9BQXNGLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQztRQUMxSixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBMURELFVBQVU7Ozs7WUFWb0IsT0FBTyx1QkFheEIsTUFBTSxTQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT3BlcmF0b3IsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4vY29tbWFuZCc7XG5pbXBvcnQgeyBGSUxURVJFRF9DT01NQU5EX1NUUkVBTSB9IGZyb20gJy4vZmlsdGVyZWQtY29tbWFuZC1zdHJlYW0nO1xuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4vYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbCB9IGZyb20gJy4vYWdncmVnYXRlL2NyZWF0ZS9hZ2dyZWdhdGUtY29tbWFuZC1oYW5kbGVyLmltcGwnO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXJJbXBsIH0gZnJvbSAnLi9oYW5kbGVyL2NvbW1hbmQtaGFuZGxlci1pbXBsJztcbmltcG9ydCB7IEFnZ3JlZ2F0ZUlkIH0gZnJvbSAnLi4vYWdncmVnYXRlLWlkJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbW1hbmRCdXM8QyA9IENvbW1hbmQ+IGV4dGVuZHMgT2JzZXJ2YWJsZTxDPiB7XG5cblx0Y29uc3RydWN0b3IoQEluamVjdChGSUxURVJFRF9DT01NQU5EX1NUUkVBTSkgY29tbWFuZHNTdHJlYW0/OiBTdWJqZWN0PENvbW1hbmQ+KSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdGlmIChjb21tYW5kc1N0cmVhbSkge1xuXHRcdFx0dGhpcy5zb3VyY2UgPSBjb21tYW5kc1N0cmVhbTtcblx0XHR9XG5cdH1cblxuXHRsaWZ0PFI+KG9wZXJhdG9yOiBPcGVyYXRvcjxDLCBSPik6IE9ic2VydmFibGU8Uj4ge1xuXHRcdGNvbnN0IG9ic2VydmFibGUgPSBuZXcgQ29tbWFuZEJ1czxSPigpO1xuXHRcdG9ic2VydmFibGUuc291cmNlID0gdGhpcztcblx0XHRvYnNlcnZhYmxlLm9wZXJhdG9yID0gb3BlcmF0b3I7XG5cdFx0cmV0dXJuIG9ic2VydmFibGU7XG5cdH1cblxuXHRvZkNvbW1hbmQ8QzIgZXh0ZW5kcyBDPiguLi5jb21tYW5kVHlwZXM6IEFycmF5PHN0cmluZz4pOiBhbnkge1xuXHRcdHJldHVybiAodGhpcyBhcyBDb21tYW5kQnVzPGFueT4pXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChjb21tYW5kOiBDb21tYW5kKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGNvbW1hbmRUeXBlcy5zb21lKChjb21tYW5kVHlwZTogc3RyaW5nKSA9PiBjb21tYW5kLm9mTWVzc2FnZVR5cGUoY29tbWFuZFR5cGUpKTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHRvZkNvbW1hbmRIYW5kbGVyPEMyIGV4dGVuZHMgQz4oLi4uaGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENvbW1hbmQ+Pik6IGFueSB7XG5cdFx0cmV0dXJuICh0aGlzIGFzIENvbW1hbmRCdXM8YW55Pilcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGNvbW1hbmQ6IENvbW1hbmQpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlcnMuc29tZSgoaGFuZGxlcjogQ29tbWFuZEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiwgQ29tbWFuZD4pID0+IGhhbmRsZXIuZm9yQ29tbWFuZChjb21tYW5kKSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cblx0b2ZDcmVhdGVBZ2dyZWdhdGVIYW5kbGVyPEMyIGV4dGVuZHMgQz4oLi4uaGFuZGxlcnM6IEFycmF5PEFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxhbnksIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+LCBDb21tYW5kPj4pOiBhbnkge1xuXHRcdHJldHVybiAodGhpcyBhcyBDb21tYW5kQnVzPGFueT4pXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChjb21tYW5kOiBDb21tYW5kKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGhhbmRsZXJzLnNvbWUoKGhhbmRsZXI6IEFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxhbnksIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+LCBDb21tYW5kPikgPT4gaGFuZGxlci5mb3JDb21tYW5kKGNvbW1hbmQpKTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHRvZk51bGxIYW5kbGVyPEMyIGV4dGVuZHMgQz4oaGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENvbW1hbmQ+PiwgYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzOiBBcnJheTxBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8QWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+LCBDb21tYW5kPj4pOiBhbnkge1xuXHRcdHJldHVybiAodGhpcyBhcyBDb21tYW5kQnVzPGFueT4pXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChjb21tYW5kOiBDb21tYW5kKSA9PiB7XG5cblx0XHRcdFx0XHRpZiAoIWhhbmRsZXJzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gIWhhbmRsZXJzLnNvbWUoKGhhbmRsZXI6IENvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENvbW1hbmQ+KSA9PiBoYW5kbGVyLmZvckNvbW1hbmQoY29tbWFuZCkpICYmXG5cdFx0XHRcdFx0XHQhYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzLnNvbWUoKGhhbmRsZXI6IEFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENvbW1hbmQ+KSA9PiBoYW5kbGVyLmZvckNvbW1hbmQoY29tbWFuZCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG59XG4iXX0=