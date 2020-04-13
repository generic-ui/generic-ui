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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5idXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJkb21haW4vY29tbWFuZC9jb21tYW5kLmJ1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBWSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBT3BFLE1BQU0sT0FBTyxVQUF3QixTQUFRLFVBQWE7Ozs7SUFFekQsWUFBNkMsY0FBaUM7UUFDN0UsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLGNBQWMsRUFBRTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztTQUM3QjtJQUNGLENBQUM7Ozs7OztJQUVELElBQUksQ0FBSSxRQUF3Qjs7Y0FDekIsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFLO1FBQ3RDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLFVBQVUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQy9CLE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBZSxHQUFHLFlBQTJCO1FBQ3JELE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQW1CLENBQUM7YUFDOUIsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtZQUMzQixPQUFPLFlBQVksQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxXQUFtQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQUM7UUFDdkYsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELGdCQUFnQixDQUFlLEdBQUcsUUFBcUY7UUFDdEgsT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBbUIsQ0FBQzthQUM5QixJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsT0FBZ0IsRUFBRSxFQUFFO1lBQzNCLE9BQU8sUUFBUSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLE9BQTZFLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQztRQUN0SSxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsd0JBQXdCLENBQWUsR0FBRyxRQUE0RjtRQUNySSxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUFtQixDQUFDO2FBQzlCLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFDM0IsT0FBTyxRQUFRLENBQUMsSUFBSTs7OztZQUFDLENBQUMsT0FBb0YsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDO1FBQzdJLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRUQsYUFBYSxDQUFlLFFBQXFGLEVBQUUsd0JBQW9IO1FBQ3RPLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQW1CLENBQUM7YUFDOUIsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtZQUUzQixJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNkLE9BQU8sSUFBSSxDQUFDO2FBQ1o7WUFFRCxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLE9BQTZFLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUM7Z0JBQ3BJLENBQUMsd0JBQXdCLENBQUMsSUFBSTs7OztnQkFBQyxDQUFDLE9BQTRGLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUMsQ0FBQztRQUNoSyxDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBMURELFVBQVU7Ozs7WUFWb0IsT0FBTyx1QkFheEIsTUFBTSxTQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT3BlcmF0b3IsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4vY29tbWFuZCc7XG5pbXBvcnQgeyBGSUxURVJFRF9DT01NQU5EX1NUUkVBTSB9IGZyb20gJy4vZmlsdGVyZWQtY29tbWFuZC1zdHJlYW0nO1xuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4vYWdncmVnYXRlL2FnZ3JlZ2F0ZS1yb290JztcbmltcG9ydCB7IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbCB9IGZyb20gJy4vYWdncmVnYXRlL2NyZWF0ZS9jcmVhdGUtYWdncmVnYXRlLmNvbW1hbmQtaGFuZGxlci1pbXBsJztcbmltcG9ydCB7IENvbW1hbmRIYW5kbGVySW1wbCB9IGZyb20gJy4vaGFuZGxlci9jb21tYW5kLWhhbmRsZXItaW1wbCc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVJZCB9IGZyb20gJy4uL2FnZ3JlZ2F0ZS1pZCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21tYW5kQnVzPEMgPSBDb21tYW5kPiBleHRlbmRzIE9ic2VydmFibGU8Qz4ge1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoRklMVEVSRURfQ09NTUFORF9TVFJFQU0pIGNvbW1hbmRzU3RyZWFtPzogU3ViamVjdDxDb21tYW5kPikge1xuXHRcdHN1cGVyKCk7XG5cblx0XHRpZiAoY29tbWFuZHNTdHJlYW0pIHtcblx0XHRcdHRoaXMuc291cmNlID0gY29tbWFuZHNTdHJlYW07XG5cdFx0fVxuXHR9XG5cblx0bGlmdDxSPihvcGVyYXRvcjogT3BlcmF0b3I8QywgUj4pOiBPYnNlcnZhYmxlPFI+IHtcblx0XHRjb25zdCBvYnNlcnZhYmxlID0gbmV3IENvbW1hbmRCdXM8Uj4oKTtcblx0XHRvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG5cdFx0b2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuXHRcdHJldHVybiBvYnNlcnZhYmxlO1xuXHR9XG5cblx0b2ZDb21tYW5kPEMyIGV4dGVuZHMgQz4oLi4uY29tbWFuZFR5cGVzOiBBcnJheTxzdHJpbmc+KTogYW55IHtcblx0XHRyZXR1cm4gKHRoaXMgYXMgQ29tbWFuZEJ1czxhbnk+KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoY29tbWFuZDogQ29tbWFuZCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBjb21tYW5kVHlwZXMuc29tZSgoY29tbWFuZFR5cGU6IHN0cmluZykgPT4gY29tbWFuZC5vZk1lc3NhZ2VUeXBlKGNvbW1hbmRUeXBlKSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cblx0b2ZDb21tYW5kSGFuZGxlcjxDMiBleHRlbmRzIEM+KC4uLmhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlckltcGw8QWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+LCBDb21tYW5kPj4pOiBhbnkge1xuXHRcdHJldHVybiAodGhpcyBhcyBDb21tYW5kQnVzPGFueT4pXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChjb21tYW5kOiBDb21tYW5kKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGhhbmRsZXJzLnNvbWUoKGhhbmRsZXI6IENvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENvbW1hbmQ+KSA9PiBoYW5kbGVyLmZvckNvbW1hbmQoY29tbWFuZCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG5cdG9mQ3JlYXRlQWdncmVnYXRlSGFuZGxlcjxDMiBleHRlbmRzIEM+KC4uLmhhbmRsZXJzOiBBcnJheTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8YW55LCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiwgQ29tbWFuZD4+KTogYW55IHtcblx0XHRyZXR1cm4gKHRoaXMgYXMgQ29tbWFuZEJ1czxhbnk+KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoY29tbWFuZDogQ29tbWFuZCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBoYW5kbGVycy5zb21lKChoYW5kbGVyOiBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8YW55LCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiwgQ29tbWFuZD4pID0+IGhhbmRsZXIuZm9yQ29tbWFuZChjb21tYW5kKSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cblx0b2ZOdWxsSGFuZGxlcjxDMiBleHRlbmRzIEM+KGhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlckltcGw8QWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+LCBDb21tYW5kPj4sIGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVyczogQXJyYXk8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiwgQ29tbWFuZD4+KTogYW55IHtcblx0XHRyZXR1cm4gKHRoaXMgYXMgQ29tbWFuZEJ1czxhbnk+KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoY29tbWFuZDogQ29tbWFuZCkgPT4ge1xuXG5cdFx0XHRcdFx0aWYgKCFoYW5kbGVycykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuICFoYW5kbGVycy5zb21lKChoYW5kbGVyOiBDb21tYW5kSGFuZGxlckltcGw8QWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+LCBDb21tYW5kPikgPT4gaGFuZGxlci5mb3JDb21tYW5kKGNvbW1hbmQpKSAmJlxuXHRcdFx0XHRcdFx0IWFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycy5zb21lKChoYW5kbGVyOiBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8QWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+LCBDb21tYW5kPikgPT4gaGFuZGxlci5mb3JDb21tYW5kKGNvbW1hbmQpKTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxufVxuIl19