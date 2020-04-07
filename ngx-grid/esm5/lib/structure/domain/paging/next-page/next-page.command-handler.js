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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV4dC1wYWdlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vcGFnaW5nL25leHQtcGFnZS9uZXh0LXBhZ2UuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDO0FBRWpELE9BQU8sRUFBa0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBSWxEO0lBR0MsZ0NBQTZCLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ3ZFLENBQUM7Ozs7SUFFRCwyQ0FBVTs7O0lBQVY7UUFDQyxPQUFPLGVBQWUsQ0FBQztJQUN4QixDQUFDOzs7Ozs7SUFFRCxvREFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTZCLEVBQUUsT0FBd0I7UUFDMUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7Ozs7OztJQUVELGdEQUFlOzs7OztJQUFmLFVBQWdCLFNBQTZCLEVBQUUsT0FBd0I7UUFFdEUseUJBQXlCO1FBQ3pCLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0QixDQUFDOztnQkFsQkQsVUFBVTs7OztnQkFOYyxvQkFBb0I7O0lBMEI3Qyw2QkFBQztDQUFBLEFBcEJELElBb0JDO1NBbkJZLHNCQUFzQjs7Ozs7O0lBRXRCLHNEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IE5leHRQYWdlQ29tbWFuZCB9IGZyb20gJy4vbmV4dC1wYWdlLmNvbW1hbmQnO1xuaW1wb3J0IHsgTmV4dFBhZ2VFdmVudCB9IGZyb20gJy4vbmV4dC1wYWdlLmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmV4dFBhZ2VDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgTmV4dFBhZ2VDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogVHlwZTxOZXh0UGFnZUNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gTmV4dFBhZ2VDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogTmV4dFBhZ2VDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBOZXh0UGFnZUV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSkpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBOZXh0UGFnZUNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdC8vIG1pc3NpbmcgaW1wbGVtZW50YXRpb25cblx0XHRhZ2dyZWdhdGUubmV4dFBhZ2UoKTtcblx0fVxuXG59XG4iXX0=