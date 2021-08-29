/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { DeleteOriginItemCommand } from './delete-origin-item.command';
var DeleteOriginItemCommandHandler = /** @class */ (function () {
    function DeleteOriginItemCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    DeleteOriginItemCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return DeleteOriginItemCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    DeleteOriginItemCommandHandler.prototype.handle = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        aggregate.deleteItem(command.getPayload());
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    DeleteOriginItemCommandHandler.prototype.publish = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    };
    DeleteOriginItemCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    DeleteOriginItemCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return DeleteOriginItemCommandHandler;
}());
export { DeleteOriginItemCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DeleteOriginItemCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLW9yaWdpbi1pdGVtLmNvbW1hbmQtaGFuZGxlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vZGVsZXRlL2RlbGV0ZS1vcmlnaW4taXRlbS5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3ZGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3ZFO0lBR0Msd0NBQTZCLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ3ZFLENBQUM7Ozs7SUFFRCxtREFBVTs7O0lBQVY7UUFDQyxPQUFPLHVCQUF1QixDQUFDO0lBQ2hDLENBQUM7Ozs7OztJQUVELCtDQUFNOzs7OztJQUFOLFVBQU8sU0FBNkIsRUFBRSxPQUFnQztRQUNyRSxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7OztJQUVELGdEQUFPOzs7OztJQUFQLFVBQVEsU0FBNkIsRUFBRSxPQUFnQztRQUN0RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Z0JBaEJELFVBQVU7Ozs7Z0JBTjJCLG9CQUFvQjs7SUF3QjFELHFDQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksOEJBQThCOzs7Ozs7SUFFOUIsOERBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBEZWxldGVPcmlnaW5JdGVtQ29tbWFuZCB9IGZyb20gJy4vZGVsZXRlLW9yaWdpbi1pdGVtLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZWxldGVPcmlnaW5JdGVtQ29tbWFuZEhhbmRsZXIgaW1wbGVtZW50cyBDb21tYW5kSGFuZGxlcjxTdHJ1Y3R1cmVBZ2dyZWdhdGUsIERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudFB1Ymxpc2hlcjogRG9tYWluRXZlbnRQdWJsaXNoZXIpIHtcblx0fVxuXG5cdGZvckNvbW1hbmQoKTogQ29tbWFuZFR5cGU8RGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQ7XG5cdH1cblxuXHRoYW5kbGUoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IERlbGV0ZU9yaWdpbkl0ZW1Db21tYW5kKTogdm9pZCB7XG5cdFx0YWdncmVnYXRlLmRlbGV0ZUl0ZW0oY29tbWFuZC5nZXRQYXlsb2FkKCkpO1xuXHR9XG5cblx0cHVibGlzaChhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogRGVsZXRlT3JpZ2luSXRlbUNvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2hGcm9tQWdncmVnYXRlKGFnZ3JlZ2F0ZSk7XG5cdH1cblxufVxuIl19