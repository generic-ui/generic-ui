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
    NextPageCommandHandler.prototype.handle = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        // missing implementation
        aggregate.nextPage();
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    NextPageCommandHandler.prototype.publish = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new NextPageEvent(command.getAggregateId()));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV4dC1wYWdlLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3BhZ2luZy9jb3JlL2RvbWFpbi9uZXh0LXBhZ2UvbmV4dC1wYWdlLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQStCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUlsRDtJQUdDLGdDQUE2QixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUN2RSxDQUFDOzs7O0lBRUQsMkNBQVU7OztJQUFWO1FBQ0MsT0FBTyxlQUFlLENBQUM7SUFDeEIsQ0FBQzs7Ozs7O0lBRUQsdUNBQU07Ozs7O0lBQU4sVUFBTyxTQUE2QixFQUFFLE9BQXdCO1FBRTdELHlCQUF5QjtRQUN6QixTQUFTLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7O0lBRUQsd0NBQU87Ozs7O0lBQVAsVUFBUSxTQUE2QixFQUFFLE9BQXdCO1FBQzlELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDOztnQkFsQkQsVUFBVTs7OztnQkFOMkIsb0JBQW9COztJQTBCMUQsNkJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQW5CWSxzQkFBc0I7Ozs7OztJQUV0QixzREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgTmV4dFBhZ2VDb21tYW5kIH0gZnJvbSAnLi9uZXh0LXBhZ2UuY29tbWFuZCc7XG5pbXBvcnQgeyBOZXh0UGFnZUV2ZW50IH0gZnJvbSAnLi9uZXh0LXBhZ2UuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5leHRQYWdlQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIE5leHRQYWdlQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPE5leHRQYWdlQ29tbWFuZD4ge1xuXHRcdHJldHVybiBOZXh0UGFnZUNvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IE5leHRQYWdlQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Ly8gbWlzc2luZyBpbXBsZW1lbnRhdGlvblxuXHRcdGFnZ3JlZ2F0ZS5uZXh0UGFnZSgpO1xuXHR9XG5cblx0cHVibGlzaChhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogTmV4dFBhZ2VDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBOZXh0UGFnZUV2ZW50KGNvbW1hbmQuZ2V0QWdncmVnYXRlSWQoKSkpO1xuXHR9XG5cbn1cbiJdfQ==