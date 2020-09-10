/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { NextPageCommand } from './next-page.command';
import { NextPageEvent } from './next-page.event';
var NextPageCommandHandler = /** @class */ (function () {
    function NextPageCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    NextPageCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return NextPageCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    NextPageCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new NextPageEvent(command.getAggregateId()));
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    NextPageCommandHandler.prototype.handleAggregate = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        // missing implementation
        aggregate.nextPage();
    };
    NextPageCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NextPageCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return NextPageCommandHandler;
}());
export { NextPageCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NextPageCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV4dC1wYWdlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9kb21haW4vbmV4dC1wYWdlL25leHQtcGFnZS5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJbEQ7SUFHQyxnQ0FBNkIsb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDdkUsQ0FBQzs7OztJQUVELDJDQUFVOzs7SUFBVjtRQUNDLE9BQU8sZUFBZSxDQUFDO0lBQ3hCLENBQUM7Ozs7OztJQUVELG9EQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBNkIsRUFBRSxPQUF3QjtRQUMxRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQzs7Ozs7O0lBRUQsZ0RBQWU7Ozs7O0lBQWYsVUFBZ0IsU0FBNkIsRUFBRSxPQUF3QjtRQUV0RSx5QkFBeUI7UUFDekIsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3RCLENBQUM7O2dCQWxCRCxVQUFVOzs7O2dCQU4yQixvQkFBb0I7O0lBMEIxRCw2QkFBQztDQUFBLEFBcEJELElBb0JDO1NBbkJZLHNCQUFzQjs7Ozs7O0lBRXRCLHNEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBOZXh0UGFnZUNvbW1hbmQgfSBmcm9tICcuL25leHQtcGFnZS5jb21tYW5kJztcbmltcG9ydCB7IE5leHRQYWdlRXZlbnQgfSBmcm9tICcuL25leHQtcGFnZS5ldmVudCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmV4dFBhZ2VDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgTmV4dFBhZ2VDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8TmV4dFBhZ2VDb21tYW5kPiB7XG5cdFx0cmV0dXJuIE5leHRQYWdlQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IE5leHRQYWdlQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgTmV4dFBhZ2VFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogTmV4dFBhZ2VDb21tYW5kKTogdm9pZCB7XG5cblx0XHQvLyBtaXNzaW5nIGltcGxlbWVudGF0aW9uXG5cdFx0YWdncmVnYXRlLm5leHRQYWdlKCk7XG5cdH1cblxufVxuIl19