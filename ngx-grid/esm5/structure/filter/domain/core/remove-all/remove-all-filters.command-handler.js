/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { RemoveAllFiltersCommand } from './remove-all-filters.command';
var RemoveAllFiltersCommandHandler = /** @class */ (function () {
    function RemoveAllFiltersCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    RemoveAllFiltersCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return RemoveAllFiltersCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    RemoveAllFiltersCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    RemoveAllFiltersCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        structure.removeAllFilters();
    };
    RemoveAllFiltersCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RemoveAllFiltersCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return RemoveAllFiltersCommandHandler;
}());
export { RemoveAllFiltersCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RemoveAllFiltersCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWFsbC1maWx0ZXJzLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9kb21haW4vY29yZS9yZW1vdmUtYWxsL3JlbW92ZS1hbGwtZmlsdGVycy5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSXZFO0lBR0Msd0NBQW9CLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQzlELENBQUM7Ozs7SUFFRCxtREFBVTs7O0lBQVY7UUFDQyxPQUFPLHVCQUF1QixDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVELDREQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBNkIsRUFBRSxPQUFnQztRQUNsRixJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBRUQsd0RBQWU7Ozs7O0lBQWYsVUFBZ0IsU0FBNkIsRUFBRSxPQUFnQztRQUM5RSxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM5QixDQUFDOztnQkFoQkQsVUFBVTs7OztnQkFOMkIsb0JBQW9COztJQXdCMUQscUNBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWpCWSw4QkFBOEI7Ozs7OztJQUU5Qiw4REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSwgRG9tYWluRXZlbnRQdWJsaXNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBSZW1vdmVBbGxGaWx0ZXJzQ29tbWFuZCB9IGZyb20gJy4vcmVtb3ZlLWFsbC1maWx0ZXJzLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlbW92ZUFsbEZpbHRlcnNDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgUmVtb3ZlQWxsRmlsdGVyc0NvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxSZW1vdmVBbGxGaWx0ZXJzQ29tbWFuZD4ge1xuXHRcdHJldHVybiBSZW1vdmVBbGxGaWx0ZXJzQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFJlbW92ZUFsbEZpbHRlcnNDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoRnJvbUFnZ3JlZ2F0ZShhZ2dyZWdhdGUpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKHN0cnVjdHVyZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBSZW1vdmVBbGxGaWx0ZXJzQ29tbWFuZCk6IHZvaWQge1xuXHRcdHN0cnVjdHVyZS5yZW1vdmVBbGxGaWx0ZXJzKCk7XG5cdH1cblxufVxuIl19