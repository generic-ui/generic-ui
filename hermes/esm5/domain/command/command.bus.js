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
    CommandBus.prototype.ofHandler = /**
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
     * @return {?}
     */
    CommandBus.prototype.ofNullHandler = /**
     * @template C2
     * @param {?} handlers
     * @return {?}
     */
    function (handlers) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5idXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJkb21haW4vY29tbWFuZC9jb21tYW5kLmJ1cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQVksT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUlwRTtJQUM2QyxzQ0FBYTtJQUV6RCxvQkFBNkMsY0FBaUM7UUFBOUUsWUFDQyxpQkFBTyxTQUtQO1FBSEEsSUFBSSxjQUFjLEVBQUU7WUFDbkIsS0FBSSxDQUFDLE1BQU0sR0FBRyxjQUFjLENBQUM7U0FDN0I7O0lBQ0YsQ0FBQzs7Ozs7O0lBRUQseUJBQUk7Ozs7O0lBQUosVUFBUSxRQUF3Qjs7WUFDekIsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFLO1FBQ3RDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLFVBQVUsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQy9CLE9BQU8sVUFBVSxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVELDhCQUFTOzs7OztJQUFUO1FBQXdCLHNCQUE4QjthQUE5QixVQUE4QixFQUE5QixxQkFBOEIsRUFBOUIsSUFBOEI7WUFBOUIsaUNBQThCOztRQUNyRCxPQUFPLENBQUMsbUJBQUEsSUFBSSxFQUFtQixDQUFDO2FBQzlCLElBQUksQ0FDSixNQUFNOzs7O1FBQUMsVUFBQyxPQUFnQjtZQUN2QixPQUFPLFlBQVksQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxXQUFtQixJQUFLLE9BQUEsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBbEMsQ0FBa0MsRUFBQyxDQUFDO1FBQ3ZGLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCw4QkFBUzs7Ozs7SUFBVDtRQUF3QixrQkFBNkM7YUFBN0MsVUFBNkMsRUFBN0MscUJBQTZDLEVBQTdDLElBQTZDO1lBQTdDLDZCQUE2Qzs7UUFDcEUsT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBbUIsQ0FBQzthQUM5QixJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsT0FBZ0I7WUFDdkIsT0FBTyxRQUFRLENBQUMsSUFBSTs7OztZQUFDLFVBQUMsT0FBa0MsSUFBSyxPQUFBLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQTNCLENBQTJCLEVBQUMsQ0FBQztRQUMzRixDQUFDLEVBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQsa0NBQWE7Ozs7O0lBQWIsVUFBNEIsUUFBMEM7UUFDckUsT0FBTyxDQUFDLG1CQUFBLElBQUksRUFBbUIsQ0FBQzthQUM5QixJQUFJLENBQ0osTUFBTTs7OztRQUFDLFVBQUMsT0FBZ0I7WUFFdkIsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZCxPQUFPLElBQUksQ0FBQzthQUNaO1lBRUQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQyxPQUFrQyxJQUFLLE9BQUEsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBM0IsQ0FBMkIsRUFBQyxDQUFDO1FBQzVGLENBQUMsRUFBQyxDQUNGLENBQUM7SUFDSixDQUFDOztnQkFoREQsVUFBVTs7OztnQkFSb0IsT0FBTyx1QkFXeEIsTUFBTSxTQUFDLHVCQUF1Qjs7SUErQzVDLGlCQUFDO0NBQUEsQUFsREQsQ0FDNkMsVUFBVSxHQWlEdEQ7U0FqRFksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT3BlcmF0b3IsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJy4vY29tbWFuZCc7XG5pbXBvcnQgeyBGSUxURVJFRF9DT01NQU5EX1NUUkVBTSB9IGZyb20gJy4vZmlsdGVyZWQtY29tbWFuZC1zdHJlYW0nO1xuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIgfSBmcm9tICcuL2NvbW1hbmQuaGFuZGxlcic7XG5pbXBvcnQgeyBBZ2dyZWdhdGUgfSBmcm9tICcuL2FnZ3JlZ2F0ZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21tYW5kQnVzPEMgPSBDb21tYW5kPiBleHRlbmRzIE9ic2VydmFibGU8Qz4ge1xuXG5cdGNvbnN0cnVjdG9yKEBJbmplY3QoRklMVEVSRURfQ09NTUFORF9TVFJFQU0pIGNvbW1hbmRzU3RyZWFtPzogU3ViamVjdDxDb21tYW5kPikge1xuXHRcdHN1cGVyKCk7XG5cblx0XHRpZiAoY29tbWFuZHNTdHJlYW0pIHtcblx0XHRcdHRoaXMuc291cmNlID0gY29tbWFuZHNTdHJlYW07XG5cdFx0fVxuXHR9XG5cblx0bGlmdDxSPihvcGVyYXRvcjogT3BlcmF0b3I8QywgUj4pOiBPYnNlcnZhYmxlPFI+IHtcblx0XHRjb25zdCBvYnNlcnZhYmxlID0gbmV3IENvbW1hbmRCdXM8Uj4oKTtcblx0XHRvYnNlcnZhYmxlLnNvdXJjZSA9IHRoaXM7XG5cdFx0b2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuXHRcdHJldHVybiBvYnNlcnZhYmxlO1xuXHR9XG5cblx0b2ZDb21tYW5kPEMyIGV4dGVuZHMgQz4oLi4uY29tbWFuZFR5cGVzOiBBcnJheTxzdHJpbmc+KTogYW55IHtcblx0XHRyZXR1cm4gKHRoaXMgYXMgQ29tbWFuZEJ1czxhbnk+KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoY29tbWFuZDogQ29tbWFuZCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBjb21tYW5kVHlwZXMuc29tZSgoY29tbWFuZFR5cGU6IHN0cmluZykgPT4gY29tbWFuZC5vZk1lc3NhZ2VUeXBlKGNvbW1hbmRUeXBlKSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cblx0b2ZIYW5kbGVyPEMyIGV4dGVuZHMgQz4oLi4uaGFuZGxlcnM6IEFycmF5PENvbW1hbmRIYW5kbGVyPEFnZ3JlZ2F0ZT4+KTogYW55IHtcblx0XHRyZXR1cm4gKHRoaXMgYXMgQ29tbWFuZEJ1czxhbnk+KVxuXHRcdFx0LnBpcGUoXG5cdFx0XHRcdGZpbHRlcigoY29tbWFuZDogQ29tbWFuZCkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiBoYW5kbGVycy5zb21lKChoYW5kbGVyOiBDb21tYW5kSGFuZGxlcjxBZ2dyZWdhdGU+KSA9PiBoYW5kbGVyLmZvckNvbW1hbmQoY29tbWFuZCkpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0fVxuXG5cdG9mTnVsbEhhbmRsZXI8QzIgZXh0ZW5kcyBDPihoYW5kbGVyczogQXJyYXk8Q29tbWFuZEhhbmRsZXI8QWdncmVnYXRlPj4pOiBhbnkge1xuXHRcdHJldHVybiAodGhpcyBhcyBDb21tYW5kQnVzPGFueT4pXG5cdFx0XHQucGlwZShcblx0XHRcdFx0ZmlsdGVyKChjb21tYW5kOiBDb21tYW5kKSA9PiB7XG5cblx0XHRcdFx0XHRpZiAoIWhhbmRsZXJzKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gIWhhbmRsZXJzLnNvbWUoKGhhbmRsZXI6IENvbW1hbmRIYW5kbGVyPEFnZ3JlZ2F0ZT4pID0+IGhhbmRsZXIuZm9yQ29tbWFuZChjb21tYW5kKSk7XG5cdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==