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
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    RemoveAllFiltersCommandHandler.prototype.handle = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        structure.removeAllFilters();
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    RemoveAllFiltersCommandHandler.prototype.publish = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWFsbC1maWx0ZXJzLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2RvbWFpbi9jb3JlL3JlbW92ZS1hbGwvcmVtb3ZlLWFsbC1maWx0ZXJzLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQStCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJdkU7SUFHQyx3Q0FBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDOUQsQ0FBQzs7OztJQUVELG1EQUFVOzs7SUFBVjtRQUNDLE9BQU8sdUJBQXVCLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBRUQsK0NBQU07Ozs7O0lBQU4sVUFBTyxTQUE2QixFQUFFLE9BQWdDO1FBQ3JFLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7OztJQUVELGdEQUFPOzs7OztJQUFQLFVBQVEsU0FBNkIsRUFBRSxPQUFnQztRQUN0RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Z0JBaEJELFVBQVU7Ozs7Z0JBTjJCLG9CQUFvQjs7SUF3QjFELHFDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksOEJBQThCOzs7Ozs7SUFFOUIsOERBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgUmVtb3ZlQWxsRmlsdGVyc0NvbW1hbmQgfSBmcm9tICcuL3JlbW92ZS1hbGwtZmlsdGVycy5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZW1vdmVBbGxGaWx0ZXJzQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIFJlbW92ZUFsbEZpbHRlcnNDb21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8UmVtb3ZlQWxsRmlsdGVyc0NvbW1hbmQ+IHtcblx0XHRyZXR1cm4gUmVtb3ZlQWxsRmlsdGVyc0NvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoc3RydWN0dXJlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFJlbW92ZUFsbEZpbHRlcnNDb21tYW5kKTogdm9pZCB7XG5cdFx0c3RydWN0dXJlLnJlbW92ZUFsbEZpbHRlcnMoKTtcblx0fVxuXG5cdHB1Ymxpc2goYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFJlbW92ZUFsbEZpbHRlcnNDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoRnJvbUFnZ3JlZ2F0ZShhZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==