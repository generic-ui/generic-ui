/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { StructureAggregateRepository } from '../../../core/domain/structure-aggregate.repository';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXBhZ2luZy5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9wYWdpbmcvZG9tYWluL3NldC9zZXQtcGFnaW5nLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQStCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFFbkcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSXBEO0lBR0MsaUNBQW9CLDRCQUEwRCxFQUNuRSxvQkFBMEM7UUFEakMsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUE4QjtRQUNuRSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ3JELENBQUM7Ozs7SUFFRCw0Q0FBVTs7O0lBQVY7UUFDQyxPQUFPLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVELHFEQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBNkIsRUFBRSxPQUF5QjtRQUMzRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLElBQUksY0FBYyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQzs7Ozs7O0lBRUQsaURBQWU7Ozs7O0lBQWYsVUFBZ0Isa0JBQXNDLEVBQUUsT0FBeUI7O1lBRTFFLFlBQVksR0FBRyxPQUFPLENBQUMsZUFBZSxFQUFFO1FBRTlDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFwQkQsVUFBVTs7OztnQkFQRiw0QkFBNEI7Z0JBRkMsb0JBQW9COztJQStCMUQsOEJBQUM7Q0FBQSxBQXRCRCxJQXNCQztTQXJCWSx1QkFBdUI7Ozs7OztJQUV2QiwrREFBa0U7Ozs7O0lBQzNFLHVEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZVJlcG9zaXRvcnkgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUtYWdncmVnYXRlLnJlcG9zaXRvcnknO1xuXG5pbXBvcnQgeyBTZXRQYWdpbmdDb21tYW5kIH0gZnJvbSAnLi9zZXQtcGFnaW5nLmNvbW1hbmQnO1xuaW1wb3J0IHsgUGFnaW5nU2V0RXZlbnQgfSBmcm9tICcuL3BhZ2luZy1zZXQuZXZlbnQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNldFBhZ2luZ0NvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBTZXRQYWdpbmdDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5OiBTdHJ1Y3R1cmVBZ2dyZWdhdGVSZXBvc2l0b3J5LFxuXHRcdFx0XHRwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTZXRQYWdpbmdDb21tYW5kPiB7XG5cdFx0cmV0dXJuIFNldFBhZ2luZ0NvbW1hbmQ7XG5cdH1cblxuXHRwdWJsaXNoRG9tYWluRXZlbnRzKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRQYWdpbmdDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoKG5ldyBQYWdpbmdTZXRFdmVudChjb21tYW5kLmdldEFnZ3JlZ2F0ZUlkKCkpKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmVBZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU2V0UGFnaW5nQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgcGFnaW5nQ29uZmlnID0gY29tbWFuZC5nZXRQYWdpbmdDb25maWcoKTtcblxuXHRcdHN0cnVjdHVyZUFnZ3JlZ2F0ZS5jaGFuZ2VQYWdpbmcocGFnaW5nQ29uZmlnKTtcblx0fVxuXG59XG4iXX0=