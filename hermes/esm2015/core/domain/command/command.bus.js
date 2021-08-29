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
            (handler) => {
                return handler.forCommand(command);
            }));
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
            (handler) => {
                return handler.forCommand(command);
            }));
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
            if (!handlers && !aggregateCommandHandlers) {
                return true;
            }
            /** @type {?} */
            let foundHandlerForCommand = true;
            if (handlers) {
                foundHandlerForCommand =
                    !handlers.some((/**
                     * @param {?} handler
                     * @return {?}
                     */
                    (handler) => {
                        return handler.forCommand(command);
                    }));
            }
            if (aggregateCommandHandlers) {
                foundHandlerForCommand = foundHandlerForCommand &&
                    !aggregateCommandHandlers.some((/**
                     * @param {?} handler
                     * @return {?}
                     */
                    (handler) => {
                        return handler.forCommand(command);
                    }));
            }
            return foundHandlerForCommand;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5idXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuYnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFZLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFRcEUsTUFBTSxPQUFPLFVBQXFDLFNBQVEsVUFBYTs7OztJQUV0RSxZQUE2QyxjQUEyQjtRQUN2RSxLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksY0FBYyxFQUFFO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO1NBQzdCO0lBQ0YsQ0FBQzs7Ozs7O0lBRUQsSUFBSSxDQUFJLFFBQXdCOztjQUN6QixVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUs7UUFDdEMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDekIsVUFBVSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDL0IsT0FBTyxVQUFVLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUFlLEdBQUcsWUFBMkI7UUFDckQsT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBbUIsQ0FBQzthQUM5QixJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsT0FBNkIsRUFBRSxFQUFFO1lBQ3hDLE9BQU8sWUFBWSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLFdBQW1CLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUMsQ0FBQztRQUN2RixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsZ0JBQWdCLENBQWUsR0FBRyxRQUFrRztRQUNuSSxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUFtQixDQUFDO2FBQzlCLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxPQUE2QixFQUFFLEVBQUU7WUFDeEMsT0FBTyxRQUFRLENBQUMsSUFBSTs7OztZQUFDLENBQUMsT0FBMEYsRUFBRSxFQUFFO2dCQUNuSCxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEMsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsd0JBQXdCLENBQ3ZCLEdBQUcsUUFBMkc7UUFHOUcsT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBbUIsQ0FBQzthQUM5QixJQUFJLENBQ0osTUFBTTs7OztRQUFDLENBQUMsT0FBK0IsRUFBRSxFQUFFO1lBQzFDLE9BQU8sUUFBUSxDQUFDLElBQUk7Ozs7WUFBQyxDQUFDLE9BQW1HLEVBQUUsRUFBRTtnQkFDNUgsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLENBQUMsRUFBQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFRCxhQUFhLENBQ1osUUFBa0csRUFDbEcsd0JBQW1JO1FBRW5JLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQW1CLENBQUM7YUFDOUIsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLE9BQTZCLEVBQUUsRUFBRTtZQUV4QyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsd0JBQXdCLEVBQUU7Z0JBQzNDLE9BQU8sSUFBSSxDQUFDO2FBQ1o7O2dCQUVHLHNCQUFzQixHQUFHLElBQUk7WUFFakMsSUFBSSxRQUFRLEVBQUU7Z0JBQ2Isc0JBQXNCO29CQUNyQixDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7O29CQUFDLENBQUMsT0FBMEYsRUFBRSxFQUFFO3dCQUM3RyxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3BDLENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFFRCxJQUFJLHdCQUF3QixFQUFFO2dCQUM3QixzQkFBc0IsR0FBRyxzQkFBc0I7b0JBQzlDLENBQUMsd0JBQXdCLENBQUMsSUFBSTs7OztvQkFBQyxDQUFDLE9BQXdGLEVBQUUsRUFBRTt3QkFDM0gsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNwQyxDQUFDLEVBQUMsQ0FBQzthQUNKO1lBRUQsT0FBTyxzQkFBc0IsQ0FBQztRQUUvQixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBcEZELFVBQVU7Ozs7WUFYb0IsT0FBTyx1QkFjeEIsTUFBTSxTQUFDLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT3BlcmF0b3IsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4vY29tbWFuZCc7XG5pbXBvcnQgeyBGSUxURVJFRF9DT01NQU5EX1NUUkVBTSB9IGZyb20gJy4vZmlsdGVyZWQtY29tbWFuZC1zdHJlYW0nO1xuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcm9vdCc7XG5pbXBvcnQgeyBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGwgfSBmcm9tICcuL2NyZWF0ZS1hZ2dyZWdhdGUvY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXItaW1wbCc7XG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlckltcGwgfSBmcm9tICcuL2hhbmRsZXIvY29tbWFuZC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmQgfSBmcm9tICcuL2NyZWF0ZS1hZ2dyZWdhdGUvY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbW1hbmRCdXM8QyA9IENvbW1hbmQ8QWdncmVnYXRlSWQ+PiBleHRlbmRzIE9ic2VydmFibGU8Qz4ge1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoRklMVEVSRURfQ09NTUFORF9TVFJFQU0pIGNvbW1hbmRzU3RyZWFtPzogU3ViamVjdDxDPikge1xuXHRcdHN1cGVyKCk7XG5cblx0XHRpZiAoY29tbWFuZHNTdHJlYW0pIHtcblx0XHRcdHRoaXMuc291cmNlID0gY29tbWFuZHNTdHJlYW07XG5cdFx0fVxuXHR9XG5cblx0bGlmdDxSPihvcGVyYXRvcjogT3BlcmF0b3I8QywgUj4pOiBPYnNlcnZhYmxlPFI+IHtcblx0XHRjb25zdCBvYnNlcnZhYmxlID0gbmV3IENvbW1hbmRCdXM8Uj4oKTtcblx0XHRvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG5cdFx0b2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuXHRcdHJldHVybiBvYnNlcnZhYmxlO1xuXHR9XG5cblx0b2ZDb21tYW5kPEMyIGV4dGVuZHMgQz4oLi4uY29tbWFuZFR5cGVzOiBBcnJheTxzdHJpbmc+KTogYW55IHtcblx0XHRyZXR1cm4gKHRoaXMgYXMgQ29tbWFuZEJ1czxhbnk+KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoY29tbWFuZDogQ29tbWFuZDxBZ2dyZWdhdGVJZD4pID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gY29tbWFuZFR5cGVzLnNvbWUoKGNvbW1hbmRUeXBlOiBzdHJpbmcpID0+IGNvbW1hbmQub2ZNZXNzYWdlVHlwZShjb21tYW5kVHlwZSkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG5cdG9mQ29tbWFuZEhhbmRsZXI8QzIgZXh0ZW5kcyBDPiguLi5oYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiwgQ29tbWFuZDxBZ2dyZWdhdGVJZD4+Pik6IGFueSB7XG5cdFx0cmV0dXJuICh0aGlzIGFzIENvbW1hbmRCdXM8YW55Pilcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGNvbW1hbmQ6IENvbW1hbmQ8QWdncmVnYXRlSWQ+KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGhhbmRsZXJzLnNvbWUoKGhhbmRsZXI6IENvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENvbW1hbmQ8QWdncmVnYXRlSWQ+PikgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGhhbmRsZXIuZm9yQ29tbWFuZChjb21tYW5kKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHRvZkNyZWF0ZUFnZ3JlZ2F0ZUhhbmRsZXI8QzIgZXh0ZW5kcyBDPihcblx0XHQuLi5oYW5kbGVyczogQXJyYXk8Q3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPGFueSwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmQ+PlxuXHQpOiBhbnkge1xuXG5cdFx0cmV0dXJuICh0aGlzIGFzIENvbW1hbmRCdXM8YW55Pilcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGNvbW1hbmQ6IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmQpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlcnMuc29tZSgoaGFuZGxlcjogQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPGFueSwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmQ+KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlci5mb3JDb21tYW5kKGNvbW1hbmQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG5cdG9mTnVsbEhhbmRsZXI8QzIgZXh0ZW5kcyBDPihcblx0XHRoYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiwgQ29tbWFuZDxBZ2dyZWdhdGVJZD4+Pixcblx0XHRhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnM6IEFycmF5PENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmQ+Pik6IGFueSB7XG5cblx0XHRyZXR1cm4gKHRoaXMgYXMgQ29tbWFuZEJ1czxhbnk+KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoY29tbWFuZDogQ29tbWFuZDxBZ2dyZWdhdGVJZD4pID0+IHtcblxuXHRcdFx0XHRcdGlmICghaGFuZGxlcnMgJiYgIWFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0bGV0IGZvdW5kSGFuZGxlckZvckNvbW1hbmQgPSB0cnVlO1xuXG5cdFx0XHRcdFx0aWYgKGhhbmRsZXJzKSB7XG5cdFx0XHRcdFx0XHRmb3VuZEhhbmRsZXJGb3JDb21tYW5kID1cblx0XHRcdFx0XHRcdFx0IWhhbmRsZXJzLnNvbWUoKGhhbmRsZXI6IENvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENvbW1hbmQ8QWdncmVnYXRlSWQ+PikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBoYW5kbGVyLmZvckNvbW1hbmQoY29tbWFuZCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMpIHtcblx0XHRcdFx0XHRcdGZvdW5kSGFuZGxlckZvckNvbW1hbmQgPSBmb3VuZEhhbmRsZXJGb3JDb21tYW5kICYmXG5cdFx0XHRcdFx0XHRcdCFhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnMuc29tZSgoaGFuZGxlcjogQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiwgYW55PikgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBoYW5kbGVyLmZvckNvbW1hbmQoY29tbWFuZCk7XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiBmb3VuZEhhbmRsZXJGb3JDb21tYW5kO1xuXG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==