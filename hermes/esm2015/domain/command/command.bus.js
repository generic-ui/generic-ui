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
    ofHandler(...handlers) {
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
     * @return {?}
     */
    ofNullHandler(handlers) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5idXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJkb21haW4vY29tbWFuZC9jb21tYW5kLmJ1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBWSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBS3BFLE1BQU0sT0FBTyxVQUF3QixTQUFRLFVBQWE7Ozs7SUFFekQsWUFBNkMsY0FBaUM7UUFDN0UsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLGNBQWMsRUFBRTtZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztTQUM3QjtJQUNGLENBQUM7Ozs7OztJQUVELElBQUksQ0FBSSxRQUF3Qjs7Y0FDekIsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFLO1FBQ3RDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLFVBQVUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQy9CLE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBZSxHQUFHLFlBQTJCO1FBQ3JELE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQW1CLENBQUM7YUFDOUIsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtZQUMzQixPQUFPLFlBQVksQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxXQUFtQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQUM7UUFDdkYsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELFNBQVMsQ0FBZSxHQUFHLFFBQTBDO1FBQ3BFLE9BQU8sQ0FBQyxtQkFBQSxJQUFJLEVBQW1CLENBQUM7YUFDOUIsSUFBSSxDQUNKLE1BQU07Ozs7UUFBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtZQUMzQixPQUFPLFFBQVEsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxPQUFrQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUM7UUFDM0YsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVELGFBQWEsQ0FBZSxRQUEwQztRQUNyRSxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUFtQixDQUFDO2FBQzlCLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7WUFFM0IsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZCxPQUFPLElBQUksQ0FBQzthQUNaO1lBRUQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7O1lBQUMsQ0FBQyxPQUFrQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUM7UUFDNUYsQ0FBQyxFQUFDLENBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWhERCxVQUFVOzs7O1lBUm9CLE9BQU8sdUJBV3hCLE1BQU0sU0FBQyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIE9wZXJhdG9yLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuL2NvbW1hbmQnO1xuaW1wb3J0IHsgRklMVEVSRURfQ09NTUFORF9TVFJFQU0gfSBmcm9tICcuL2ZpbHRlcmVkLWNvbW1hbmQtc3RyZWFtJztcbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyIH0gZnJvbSAnLi9jb21tYW5kLmhhbmRsZXInO1xuaW1wb3J0IHsgQWdncmVnYXRlIH0gZnJvbSAnLi9hZ2dyZWdhdGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tbWFuZEJ1czxDID0gQ29tbWFuZD4gZXh0ZW5kcyBPYnNlcnZhYmxlPEM+IHtcblxuXHRjb25zdHJ1Y3RvcihASW5qZWN0KEZJTFRFUkVEX0NPTU1BTkRfU1RSRUFNKSBjb21tYW5kc1N0cmVhbT86IFN1YmplY3Q8Q29tbWFuZD4pIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0aWYgKGNvbW1hbmRzU3RyZWFtKSB7XG5cdFx0XHR0aGlzLnNvdXJjZSA9IGNvbW1hbmRzU3RyZWFtO1xuXHRcdH1cblx0fVxuXG5cdGxpZnQ8Uj4ob3BlcmF0b3I6IE9wZXJhdG9yPEMsIFI+KTogT2JzZXJ2YWJsZTxSPiB7XG5cdFx0Y29uc3Qgb2JzZXJ2YWJsZSA9IG5ldyBDb21tYW5kQnVzPFI+KCk7XG5cdFx0b2JzZXJ2YWJsZS5zb3VyY2UgPSB0aGlzO1xuXHRcdG9ic2VydmFibGUub3BlcmF0b3IgPSBvcGVyYXRvcjtcblx0XHRyZXR1cm4gb2JzZXJ2YWJsZTtcblx0fVxuXG5cdG9mQ29tbWFuZDxDMiBleHRlbmRzIEM+KC4uLmNvbW1hbmRUeXBlczogQXJyYXk8c3RyaW5nPik6IGFueSB7XG5cdFx0cmV0dXJuICh0aGlzIGFzIENvbW1hbmRCdXM8YW55Pilcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGNvbW1hbmQ6IENvbW1hbmQpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gY29tbWFuZFR5cGVzLnNvbWUoKGNvbW1hbmRUeXBlOiBzdHJpbmcpID0+IGNvbW1hbmQub2ZNZXNzYWdlVHlwZShjb21tYW5kVHlwZSkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG5cdG9mSGFuZGxlcjxDMiBleHRlbmRzIEM+KC4uLmhhbmRsZXJzOiBBcnJheTxDb21tYW5kSGFuZGxlcjxBZ2dyZWdhdGU+Pik6IGFueSB7XG5cdFx0cmV0dXJuICh0aGlzIGFzIENvbW1hbmRCdXM8YW55Pilcblx0XHRcdC5waXBlKFxuXHRcdFx0XHRmaWx0ZXIoKGNvbW1hbmQ6IENvbW1hbmQpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gaGFuZGxlcnMuc29tZSgoaGFuZGxlcjogQ29tbWFuZEhhbmRsZXI8QWdncmVnYXRlPikgPT4gaGFuZGxlci5mb3JDb21tYW5kKGNvbW1hbmQpKTtcblx0XHRcdFx0fSlcblx0XHRcdCk7XG5cdH1cblxuXHRvZk51bGxIYW5kbGVyPEMyIGV4dGVuZHMgQz4oaGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVyPEFnZ3JlZ2F0ZT4+KTogYW55IHtcblx0XHRyZXR1cm4gKHRoaXMgYXMgQ29tbWFuZEJ1czxhbnk+KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoY29tbWFuZDogQ29tbWFuZCkgPT4ge1xuXG5cdFx0XHRcdFx0aWYgKCFoYW5kbGVycykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuICFoYW5kbGVycy5zb21lKChoYW5kbGVyOiBDb21tYW5kSGFuZGxlcjxBZ2dyZWdhdGU+KSA9PiBoYW5kbGVyLmZvckNvbW1hbmQoY29tbWFuZCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG59XG4iXX0=