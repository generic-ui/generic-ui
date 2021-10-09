/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { AddFilterCommand } from './add-filter.command';
var AddFilterCommandHandler = /** @class */ (function () {
    function AddFilterCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    AddFilterCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return AddFilterCommand;
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    AddFilterCommandHandler.prototype.handle = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var fieldId = command.getFieldId();
        /** @type {?} */
        var filterTypeId = command.getFilterTypeId();
        /** @type {?} */
        var value = command.getValue();
        structure.addFilter(fieldId, filterTypeId, value);
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    AddFilterCommandHandler.prototype.publish = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        this.domainEventPublisher.publishFromAggregate(aggregate);
    };
    AddFilterCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    AddFilterCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return AddFilterCommandHandler;
}());
export { AddFilterCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AddFilterCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWZpbHRlci5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9maWx0ZXIvY29yZS9kb21haW4vY29yZS9hZGQvYWRkLWZpbHRlci5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUErQixvQkFBb0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBTXhEO0lBR0MsaUNBQTZCLG9CQUEwQztRQUExQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ3ZFLENBQUM7Ozs7SUFFRCw0Q0FBVTs7O0lBQVY7UUFDQyxPQUFPLGdCQUFnQixDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVELHdDQUFNOzs7OztJQUFOLFVBQU8sU0FBNkIsRUFBRSxPQUF5Qjs7WUFFeEQsT0FBTyxHQUFZLE9BQU8sQ0FBQyxVQUFVLEVBQUU7O1lBQzVDLFlBQVksR0FBaUIsT0FBTyxDQUFDLGVBQWUsRUFBRTs7WUFDdEQsS0FBSyxHQUFRLE9BQU8sQ0FBQyxRQUFRLEVBQUU7UUFFaEMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7OztJQUVELHlDQUFPOzs7OztJQUFQLFVBQVEsU0FBNkIsRUFBRSxPQUF5QjtRQUMvRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Z0JBckJELFVBQVU7Ozs7Z0JBUjJCLG9CQUFvQjs7SUErQjFELDhCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0F0QlksdUJBQXVCOzs7Ozs7SUFFdkIsdURBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kSGFuZGxlciwgQ29tbWFuZFR5cGUsIERvbWFpbkV2ZW50UHVibGlzaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQWRkRmlsdGVyQ29tbWFuZCB9IGZyb20gJy4vYWRkLWZpbHRlci5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IEZpbHRlclR5cGVJZCB9IGZyb20gJy4uLy4uL3R5cGUvZmlsdGVyLXR5cGUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBZGRGaWx0ZXJDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgQWRkRmlsdGVyQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPEFkZEZpbHRlckNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gQWRkRmlsdGVyQ29tbWFuZDtcblx0fVxuXG5cdGhhbmRsZShzdHJ1Y3R1cmU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogQWRkRmlsdGVyQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRJZDogRmllbGRJZCA9IGNvbW1hbmQuZ2V0RmllbGRJZCgpLFxuXHRcdFx0ZmlsdGVyVHlwZUlkOiBGaWx0ZXJUeXBlSWQgPSBjb21tYW5kLmdldEZpbHRlclR5cGVJZCgpLFxuXHRcdFx0dmFsdWU6IGFueSA9IGNvbW1hbmQuZ2V0VmFsdWUoKTtcblxuXHRcdHN0cnVjdHVyZS5hZGRGaWx0ZXIoZmllbGRJZCwgZmlsdGVyVHlwZUlkLCB2YWx1ZSk7XG5cdH1cblxuXHRwdWJsaXNoKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBBZGRGaWx0ZXJDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoRnJvbUFnZ3JlZ2F0ZShhZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==