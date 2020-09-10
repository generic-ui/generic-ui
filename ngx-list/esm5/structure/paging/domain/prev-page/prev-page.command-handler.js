/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { PrevPageCommand } from './prev-page.command';
import { PrevPageEvent } from './prev-page.event';
var PrevPageCommandHandler = /** @class */ (function () {
    function PrevPageCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    PrevPageCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return PrevPageCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    PrevPageCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new PrevPageEvent(command.getAggregateId()));
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    PrevPageCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        structure.prevPage();
    };
    PrevPageCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PrevPageCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return PrevPageCommandHandler;
}());
export { PrevPageCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PrevPageCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldi1wYWdlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9kb21haW4vcHJldi1wYWdlL3ByZXYtcGFnZS5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJbEQ7SUFHQyxnQ0FBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDOUQsQ0FBQzs7OztJQUVELDJDQUFVOzs7SUFBVjtRQUNDLE9BQU8sZUFBZSxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQUVELG9EQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBNkIsRUFBRSxPQUF3QjtRQUMxRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7Ozs7O0lBRUQsZ0RBQWU7Ozs7O0lBQWYsVUFBZ0IsU0FBNkIsRUFBRSxPQUF3QjtRQUV0RSxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Z0JBakJELFVBQVU7Ozs7Z0JBUDJCLG9CQUFvQjs7SUEwQjFELDZCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FsQlksc0JBQXNCOzs7Ozs7SUFFdEIsc0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUHJldlBhZ2VDb21tYW5kIH0gZnJvbSAnLi9wcmV2LXBhZ2UuY29tbWFuZCc7XG5pbXBvcnQgeyBQcmV2UGFnZUV2ZW50IH0gZnJvbSAnLi9wcmV2LXBhZ2UuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByZXZQYWdlQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFByZXZQYWdlQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFByZXZQYWdlQ29tbWFuZD4ge1xuXHRcdHJldHVybiBQcmV2UGFnZUNvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBQcmV2UGFnZUNvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2gobmV3IFByZXZQYWdlRXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoc3RydWN0dXJlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFByZXZQYWdlQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0c3RydWN0dXJlLnByZXZQYWdlKCk7XG5cdH1cblxufVxuIl19