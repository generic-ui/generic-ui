/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandStream } from './command.stream';
export class CommandDispatcher {
    /**
     * @param {?} commandStream
     */
    constructor(commandStream) {
        this.commandStream = commandStream;
    }
    /**
     * @param {?} command
     * @return {?}
     */
    dispatch(command) {
        this.commandStream.next(command);
    }
}
CommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CommandDispatcher.ctorParameters = () => [
    { type: CommandStream }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    CommandDispatcher.prototype.commandStream;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvaGVybWVzLyIsInNvdXJjZXMiOlsiY29yZS9kb21haW4vY29tbWFuZC9jb21tYW5kLmRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBTWpELE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFFN0IsWUFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDaEQsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsT0FBNkI7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBUkQsVUFBVTs7OztZQUxGLGFBQWE7Ozs7Ozs7SUFRVCwwQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRTdHJlYW0gfSBmcm9tICcuL2NvbW1hbmQuc3RyZWFtJztcbmltcG9ydCB7IENvbW1hbmQgfSBmcm9tICcuL2NvbW1hbmQnO1xuaW1wb3J0IHsgQWdncmVnYXRlSWQgfSBmcm9tICcuLi90YWN0aWNhbC9hZ2dyZWdhdGUvYWdncmVnYXRlLWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tbWFuZERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbWFuZFN0cmVhbTogQ29tbWFuZFN0cmVhbSkge1xuXHR9XG5cblx0ZGlzcGF0Y2goY29tbWFuZDogQ29tbWFuZDxBZ2dyZWdhdGVJZD4pOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmRTdHJlYW0ubmV4dChjb21tYW5kKTtcblx0fVxufVxuIl19