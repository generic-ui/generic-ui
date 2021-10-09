/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { FILTERED_COMMAND_STREAM } from './filtered-command-stream';
import { CommandStream } from './command.stream';
import { HermesObservable } from '../../../common/stream/observable/hermes.observable';
import { hermesFilter } from '../../../common/stream/operator/hermes.filter';
/**
 * @template C
 */
export class CommandBus extends HermesObservable {
    /**
     * @param {?} commandsStream
     */
    constructor(commandsStream) {
        super();
        this.commandsStream = commandsStream;
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    subscribe(arg) {
        return this.commandsStream.toObservable().subscribe(arguments[0], arguments[1], arguments[2]);
    }
    /**
     * @template C2
     * @param {...?} commandTypes
     * @return {?}
     */
    ofCommand(...commandTypes) {
        return ((/** @type {?} */ (this)))
            .commandsStream
            .toObservable()
            .pipe(hermesFilter((/**
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
            .commandsStream
            .toObservable()
            .pipe(hermesFilter((/**
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
            .commandsStream
            .toObservable()
            .pipe(hermesFilter((/**
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
            .commandsStream
            .toObservable()
            .pipe(hermesFilter((/**
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
    { type: CommandStream, decorators: [{ type: Inject, args: [FILTERED_COMMAND_STREAM,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CommandBus.prototype.commandsStream;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5idXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb3JlL2RvbWFpbi9jb21tYW5kL2NvbW1hbmQuYnVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUduRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU1wRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtDQUErQyxDQUFDOzs7O0FBRzdFLE1BQU0sT0FBTyxVQUFxQyxTQUFRLGdCQUFtQjs7OztJQUU1RSxZQUE4RCxjQUE2QjtRQUMxRixLQUFLLEVBQUUsQ0FBQztRQURxRCxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtJQUUzRixDQUFDOzs7OztJQVVELFNBQVMsQ0FDUixHQUFRO1FBR1IsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9GLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBZSxHQUFHLFlBQTJCO1FBQ3JELE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQW1CLENBQUM7YUFDOUIsY0FBYzthQUNkLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixZQUFZOzs7O1FBQUMsQ0FBQyxPQUE2QixFQUFFLEVBQUU7WUFDOUMsT0FBTyxZQUFZLENBQUMsSUFBSTs7OztZQUFDLENBQUMsV0FBbUIsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBQyxDQUFDO1FBQ3ZGLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBZSxHQUFHLFFBQWtHO1FBQ25JLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQW1CLENBQUM7YUFDOUIsY0FBYzthQUNkLFlBQVksRUFBRTthQUNkLElBQUksQ0FDSixZQUFZOzs7O1FBQUMsQ0FBQyxPQUE2QixFQUFFLEVBQUU7WUFDOUMsT0FBTyxRQUFRLENBQUMsSUFBSTs7OztZQUFDLENBQUMsT0FBMEYsRUFBRSxFQUFFO2dCQUNuSCxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEMsQ0FBQyxFQUFDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsd0JBQXdCLENBQ3ZCLEdBQUcsUUFBMkc7UUFHOUcsT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBbUIsQ0FBQzthQUM5QixjQUFjO2FBQ2QsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNKLFlBQVk7Ozs7UUFBQyxDQUFDLE9BQStCLEVBQUUsRUFBRTtZQUNoRCxPQUFPLFFBQVEsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxPQUFtRyxFQUFFLEVBQUU7Z0JBQzVILE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQyxDQUFDLEVBQUMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBRUQsYUFBYSxDQUNaLFFBQWtHLEVBQ2xHLHdCQUFtSTtRQUduSSxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUFtQixDQUFDO2FBQzlCLGNBQWM7YUFDZCxZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0osWUFBWTs7OztRQUFDLENBQUMsT0FBNkIsRUFBRSxFQUFFO1lBRTlDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtnQkFDM0MsT0FBTyxJQUFJLENBQUM7YUFDWjs7Z0JBRUcsc0JBQXNCLEdBQUcsSUFBSTtZQUVqQyxJQUFJLFFBQVEsRUFBRTtnQkFDYixzQkFBc0I7b0JBQ3JCLENBQUMsUUFBUSxDQUFDLElBQUk7Ozs7b0JBQUMsQ0FBQyxPQUEwRixFQUFFLEVBQUU7d0JBQzdHLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDcEMsQ0FBQyxFQUFDLENBQUM7YUFDSjtZQUVELElBQUksd0JBQXdCLEVBQUU7Z0JBQzdCLHNCQUFzQixHQUFHLHNCQUFzQjtvQkFDOUMsQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJOzs7O29CQUFDLENBQUMsT0FBd0YsRUFBRSxFQUFFO3dCQUMzSCxPQUFPLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3BDLENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFFRCxPQUFPLHNCQUFzQixDQUFDO1FBRS9CLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7WUFqR0QsVUFBVTs7OztZQU5GLGFBQWEsdUJBU1IsTUFBTSxTQUFDLHVCQUF1Qjs7Ozs7OztJQUEvQixvQ0FBK0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4vY29tbWFuZCc7XG5pbXBvcnQgeyBGSUxURVJFRF9DT01NQU5EX1NUUkVBTSB9IGZyb20gJy4vZmlsdGVyZWQtY29tbWFuZC1zdHJlYW0nO1xuaW1wb3J0IHsgQWdncmVnYXRlUm9vdCB9IGZyb20gJy4uL3RhY3RpY2FsL2FnZ3JlZ2F0ZS9hZ2dyZWdhdGUtcm9vdCc7XG5pbXBvcnQgeyBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGwgfSBmcm9tICcuL2NyZWF0ZS1hZ2dyZWdhdGUvY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kLWhhbmRsZXItaW1wbCc7XG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlckltcGwgfSBmcm9tICcuL2hhbmRsZXIvY29tbWFuZC1oYW5kbGVyLWltcGwnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcbmltcG9ydCB7IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmQgfSBmcm9tICcuL2NyZWF0ZS1hZ2dyZWdhdGUvY3JlYXRlLWFnZ3JlZ2F0ZS5jb21tYW5kJztcbmltcG9ydCB7IENvbW1hbmRTdHJlYW0gfSBmcm9tICcuL2NvbW1hbmQuc3RyZWFtJztcbmltcG9ydCB7IEhlcm1lc1N1YnNjcmlwdGlvbiB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vc3Vic2NyaXB0aW9uL2hlcm1lcy5zdWJzY3JpcHRpb24nO1xuaW1wb3J0IHsgSGVybWVzU3Vic2NyaWJlciB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9zdHJlYW0vb2JzZXJ2YWJsZS9zdWJzY3JpYmVyL2hlcm1lcy5zdWJzY3JpYmVyJztcbmltcG9ydCB7IEhlcm1lc09ic2VydmFibGUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vc3RyZWFtL29ic2VydmFibGUvaGVybWVzLm9ic2VydmFibGUnO1xuaW1wb3J0IHsgaGVybWVzRmlsdGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL3N0cmVhbS9vcGVyYXRvci9oZXJtZXMuZmlsdGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbW1hbmRCdXM8QyA9IENvbW1hbmQ8QWdncmVnYXRlSWQ+PiBleHRlbmRzIEhlcm1lc09ic2VydmFibGU8Qz4ge1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoRklMVEVSRURfQ09NTUFORF9TVFJFQU0pIHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZHNTdHJlYW06IENvbW1hbmRTdHJlYW0pIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c3Vic2NyaWJlKFxuXHRcdG5leHQ/OiAodmFsdWU6IEMpID0+IHZvaWQsXG5cdFx0ZXJyb3I/OiAoZXJyb3I6IGFueSkgPT4gdm9pZCxcblx0XHRjb21wbGV0ZT86ICgpID0+IHZvaWRcblx0KTogSGVybWVzU3Vic2NyaXB0aW9uO1xuXHRzdWJzY3JpYmUoXG5cdFx0c3Vic2NyaWJlcjogSGVybWVzU3Vic2NyaWJlcjxDPlxuXHQpOiBIZXJtZXNTdWJzY3JpcHRpb247XG5cdHN1YnNjcmliZShcblx0XHRhcmc6IGFueVxuXHQpOiBIZXJtZXNTdWJzY3JpcHRpb24ge1xuXG5cdFx0cmV0dXJuIHRoaXMuY29tbWFuZHNTdHJlYW0udG9PYnNlcnZhYmxlKCkuc3Vic2NyaWJlKGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdLCBhcmd1bWVudHNbMl0pO1xuXHR9XG5cblx0b2ZDb21tYW5kPEMyIGV4dGVuZHMgQz4oLi4uY29tbWFuZFR5cGVzOiBBcnJheTxzdHJpbmc+KTogYW55IHtcblx0XHRyZXR1cm4gKHRoaXMgYXMgQ29tbWFuZEJ1czxhbnk+KVxuXHRcdFx0LmNvbW1hbmRzU3RyZWFtXG5cdFx0XHQudG9PYnNlcnZhYmxlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRoZXJtZXNGaWx0ZXIoKGNvbW1hbmQ6IENvbW1hbmQ8QWdncmVnYXRlSWQ+KSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGNvbW1hbmRUeXBlcy5zb21lKChjb21tYW5kVHlwZTogc3RyaW5nKSA9PiBjb21tYW5kLm9mTWVzc2FnZVR5cGUoY29tbWFuZFR5cGUpKTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHRvZkNvbW1hbmRIYW5kbGVyPEMyIGV4dGVuZHMgQz4oLi4uaGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENvbW1hbmQ8QWdncmVnYXRlSWQ+Pj4pOiBhbnkge1xuXHRcdHJldHVybiAodGhpcyBhcyBDb21tYW5kQnVzPGFueT4pXG5cdFx0XHQuY29tbWFuZHNTdHJlYW1cblx0XHRcdC50b09ic2VydmFibGUoKVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGhlcm1lc0ZpbHRlcigoY29tbWFuZDogQ29tbWFuZDxBZ2dyZWdhdGVJZD4pID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlcnMuc29tZSgoaGFuZGxlcjogQ29tbWFuZEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiwgQ29tbWFuZDxBZ2dyZWdhdGVJZD4+KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlci5mb3JDb21tYW5kKGNvbW1hbmQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG5cdG9mQ3JlYXRlQWdncmVnYXRlSGFuZGxlcjxDMiBleHRlbmRzIEM+KFxuXHRcdC4uLmhhbmRsZXJzOiBBcnJheTxDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8YW55LCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiwgQ3JlYXRlQWdncmVnYXRlQ29tbWFuZD4+XG5cdCk6IGFueSB7XG5cblx0XHRyZXR1cm4gKHRoaXMgYXMgQ29tbWFuZEJ1czxhbnk+KVxuXHRcdFx0LmNvbW1hbmRzU3RyZWFtXG5cdFx0XHQudG9PYnNlcnZhYmxlKClcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRoZXJtZXNGaWx0ZXIoKGNvbW1hbmQ6IENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmQpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlcnMuc29tZSgoaGFuZGxlcjogQ3JlYXRlQWdncmVnYXRlQ29tbWFuZEhhbmRsZXJJbXBsPGFueSwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmQ+KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlci5mb3JDb21tYW5kKGNvbW1hbmQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG5cdG9mTnVsbEhhbmRsZXI8QzIgZXh0ZW5kcyBDPihcblx0XHRoYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiwgQ29tbWFuZDxBZ2dyZWdhdGVJZD4+Pixcblx0XHRhZ2dyZWdhdGVDb21tYW5kSGFuZGxlcnM6IEFycmF5PENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVySW1wbDxBZ2dyZWdhdGVJZCwgQWdncmVnYXRlUm9vdDxBZ2dyZWdhdGVJZD4sIENyZWF0ZUFnZ3JlZ2F0ZUNvbW1hbmQ+PlxuXHQpOiBhbnkge1xuXG5cdFx0cmV0dXJuICh0aGlzIGFzIENvbW1hbmRCdXM8YW55Pilcblx0XHRcdC5jb21tYW5kc1N0cmVhbVxuXHRcdFx0LnRvT2JzZXJ2YWJsZSgpXG5cdFx0XHQucGlwZShcblx0XHRcdFx0aGVybWVzRmlsdGVyKChjb21tYW5kOiBDb21tYW5kPEFnZ3JlZ2F0ZUlkPikgPT4ge1xuXG5cdFx0XHRcdFx0aWYgKCFoYW5kbGVycyAmJiAhYWdncmVnYXRlQ29tbWFuZEhhbmRsZXJzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRsZXQgZm91bmRIYW5kbGVyRm9yQ29tbWFuZCA9IHRydWU7XG5cblx0XHRcdFx0XHRpZiAoaGFuZGxlcnMpIHtcblx0XHRcdFx0XHRcdGZvdW5kSGFuZGxlckZvckNvbW1hbmQgPVxuXHRcdFx0XHRcdFx0XHQhaGFuZGxlcnMuc29tZSgoaGFuZGxlcjogQ29tbWFuZEhhbmRsZXJJbXBsPEFnZ3JlZ2F0ZUlkLCBBZ2dyZWdhdGVSb290PEFnZ3JlZ2F0ZUlkPiwgQ29tbWFuZDxBZ2dyZWdhdGVJZD4+KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGhhbmRsZXIuZm9yQ29tbWFuZChjb21tYW5kKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycykge1xuXHRcdFx0XHRcdFx0Zm91bmRIYW5kbGVyRm9yQ29tbWFuZCA9IGZvdW5kSGFuZGxlckZvckNvbW1hbmQgJiZcblx0XHRcdFx0XHRcdFx0IWFnZ3JlZ2F0ZUNvbW1hbmRIYW5kbGVycy5zb21lKChoYW5kbGVyOiBDcmVhdGVBZ2dyZWdhdGVDb21tYW5kSGFuZGxlckltcGw8QWdncmVnYXRlSWQsIEFnZ3JlZ2F0ZVJvb3Q8QWdncmVnYXRlSWQ+LCBhbnk+KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGhhbmRsZXIuZm9yQ29tbWFuZChjb21tYW5kKTtcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIGZvdW5kSGFuZGxlckZvckNvbW1hbmQ7XG5cblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxufVxuIl19