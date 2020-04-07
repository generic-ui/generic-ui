/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../structure/structure-aggregate.repository';
import { SetPagingCommand } from './set-paging.command';
import { PagingSetEvent } from './paging-set.event';
var SetPagingCommandHandler = /** @class */ (function () {
    function SetPagingCommandHandler(structureAggregateRepository, domainEventPublisher) {
        this.structureAggregateRepository = structureAggregateRepository;
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetPagingCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetPagingCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetPagingCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publish(new PagingSetEvent(command.getAggregateId()));
    };
    /**
     * @param {?} structureAggregate
     * @param {?} command
     * @return {?}
     */
    SetPagingCommandHandler.prototype.handleAggregate = /**
     * @param {?} structureAggregate
     * @param {?} command
     * @return {?}
     */
    function (structureAggregate, command) {
        /** @type {?} */
        var pagingConfig = command.getPagingConfig();
        structureAggregate.changePaging(pagingConfig);
    };
    SetPagingCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetPagingCommandHandler.ctorParameters = function () { return [
        { type: StructureAggregateRepository },
        { type: DomainEventPublisher }
    ]; };
    return SetPagingCommandHandler;
}());
export { SetPagingCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetPagingCommandHandler.prototype.structureAggregateRepository;
    /**
     * @type {?}
     * @private
     */
    SetPagingCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXBhZ2luZy5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3BhZ2luZy9zZXQvc2V0LXBhZ2luZy5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFFakQsT0FBTyxFQUFrQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTFFLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRTlGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUlwRDtJQUdDLGlDQUFvQiw0QkFBMEQsRUFDbkUsb0JBQTBDO1FBRGpDLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDbkUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNyRCxDQUFDOzs7O0lBRUQsNENBQVU7OztJQUFWO1FBQ0MsT0FBTyxnQkFBZ0IsQ0FBQztJQUN6QixDQUFDOzs7Ozs7SUFFRCxxREFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTZCLEVBQUUsT0FBeUI7UUFDM0UsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Ozs7OztJQUVELGlEQUFlOzs7OztJQUFmLFVBQWdCLGtCQUFzQyxFQUFFLE9BQXlCOztZQUUxRSxZQUFZLEdBQUcsT0FBTyxDQUFDLGVBQWUsRUFBRTtRQUU5QyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Z0JBcEJELFVBQVU7Ozs7Z0JBUEYsNEJBQTRCO2dCQUZaLG9CQUFvQjs7SUErQjdDLDhCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FyQlksdUJBQXVCOzs7Ozs7SUFFdkIsK0RBQWtFOzs7OztJQUMzRSx1REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi9zdHJ1Y3R1cmUvc3RydWN0dXJlLWFnZ3JlZ2F0ZS5yZXBvc2l0b3J5JztcblxuaW1wb3J0IHsgU2V0UGFnaW5nQ29tbWFuZCB9IGZyb20gJy4vc2V0LXBhZ2luZy5jb21tYW5kJztcbmltcG9ydCB7IFBhZ2luZ1NldEV2ZW50IH0gZnJvbSAnLi9wYWdpbmctc2V0LmV2ZW50JztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL3N0cnVjdHVyZS9zdHJ1Y3R1cmUuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2V0UGFnaW5nQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFNldFBhZ2luZ0NvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnk6IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnksXG5cdFx0XHRcdHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IFR5cGU8U2V0UGFnaW5nQ29tbWFuZD4ge1xuXHRcdHJldHVybiBTZXRQYWdpbmdDb21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0UGFnaW5nQ29tbWFuZCk6IHZvaWQge1xuXHRcdHRoaXMuZG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChuZXcgUGFnaW5nU2V0RXZlbnQoY29tbWFuZC5nZXRBZ2dyZWdhdGVJZCgpKSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoc3RydWN0dXJlQWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldFBhZ2luZ0NvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHBhZ2luZ0NvbmZpZyA9IGNvbW1hbmQuZ2V0UGFnaW5nQ29uZmlnKCk7XG5cblx0XHRzdHJ1Y3R1cmVBZ2dyZWdhdGUuY2hhbmdlUGFnaW5nKHBhZ2luZ0NvbmZpZyk7XG5cdH1cblxufVxuIl19