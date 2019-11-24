/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandStream } from './command.stream';
var CommandDispatcher = /** @class */ (function () {
    function CommandDispatcher(commandStream) {
        this.commandStream = commandStream;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    CommandDispatcher.prototype.dispatch = /**
     * @param {?} command
     * @return {?}
     */
    function (command) {
        this.commandStream.next(command);
    };
    CommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CommandDispatcher.ctorParameters = function () { return [
        { type: CommandStream }
    ]; };
    return CommandDispatcher;
}());
export { CommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CommandDispatcher.prototype.commandStream;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiZG9tYWluL2NvbW1hbmQvY29tbWFuZC5kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUlqRDtJQUdDLDJCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUNoRCxDQUFDOzs7OztJQUVELG9DQUFROzs7O0lBQVIsVUFBUyxPQUFnQjtRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDOztnQkFSRCxVQUFVOzs7O2dCQUpGLGFBQWE7O0lBYXRCLHdCQUFDO0NBQUEsQUFURCxJQVNDO1NBUlksaUJBQWlCOzs7Ozs7SUFFakIsMENBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kU3RyZWFtIH0gZnJvbSAnLi9jb21tYW5kLnN0cmVhbSc7XG5pbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnLi9jb21tYW5kJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tbWFuZERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbWFuZFN0cmVhbTogQ29tbWFuZFN0cmVhbSkge1xuXHR9XG5cblx0ZGlzcGF0Y2goY29tbWFuZDogQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZFN0cmVhbS5uZXh0KGNvbW1hbmQpO1xuXHR9XG59XG4iXX0=