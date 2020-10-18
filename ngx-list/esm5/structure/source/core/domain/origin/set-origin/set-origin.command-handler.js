/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SourceDomainEventPublisher } from '../../source.domain-event.publisher';
import { SetOriginCommand } from './set-origin.command';
var SetOriginCommandHandler = /** @class */ (function () {
    function SetOriginCommandHandler(structureSourceDomainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
    }
    /**
     * @return {?}
     */
    SetOriginCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SetOriginCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SetOriginCommandHandler.prototype.publishDomainEvents = /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    function (aggregate, command) {
        /** @type {?} */
        var aggregateEvents = aggregate.getEvents();
        this.structureSourceDomainEventPublisher.publish(aggregateEvents);
    };
    /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    SetOriginCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var items = command.getItems();
        structure.setOrigin(items);
    };
    SetOriginCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SetOriginCommandHandler.ctorParameters = function () { return [
        { type: SourceDomainEventPublisher }
    ]; };
    return SetOriginCommandHandler;
}());
export { SetOriginCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetOriginCommandHandler.prototype.structureSourceDomainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LW9yaWdpbi5jb21tYW5kLWhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL3NldC1vcmlnaW4vc2V0LW9yaWdpbi5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFHakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHeEQ7SUFHQyxpQ0FBb0IsbUNBQStEO1FBQS9ELHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBNEI7SUFDbkYsQ0FBQzs7OztJQUVELDRDQUFVOzs7SUFBVjtRQUNDLE9BQU8sZ0JBQWdCLENBQUM7SUFDekIsQ0FBQzs7Ozs7O0lBRUQscURBQW1COzs7OztJQUFuQixVQUFvQixTQUE2QixFQUFFLE9BQXlCOztZQUVyRSxlQUFlLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRTtRQUU3QyxJQUFJLENBQUMsbUNBQW1DLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7OztJQUVELGlEQUFlOzs7OztJQUFmLFVBQWdCLFNBQTZCLEVBQUUsT0FBeUI7O1lBRWpFLEtBQUssR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFO1FBRWhDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Z0JBdEJELFVBQVU7Ozs7Z0JBTkYsMEJBQTBCOztJQThCbkMsOEJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXZCWSx1QkFBdUI7Ozs7OztJQUV2QixzRUFBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uLy4uL3NvdXJjZS5kb21haW4tZXZlbnQucHVibGlzaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5pbXBvcnQgeyBTZXRPcmlnaW5Db21tYW5kIH0gZnJvbSAnLi9zZXQtb3JpZ2luLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXRPcmlnaW5Db21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU2V0T3JpZ2luQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXI6IFNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFNldE9yaWdpbkNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2V0T3JpZ2luQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNldE9yaWdpbkNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGFnZ3JlZ2F0ZUV2ZW50cyA9IGFnZ3JlZ2F0ZS5nZXRFdmVudHMoKTtcblxuXHRcdHRoaXMuc3RydWN0dXJlU291cmNlRG9tYWluRXZlbnRQdWJsaXNoZXIucHVibGlzaChhZ2dyZWdhdGVFdmVudHMpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKHN0cnVjdHVyZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBTZXRPcmlnaW5Db21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBpdGVtcyA9IGNvbW1hbmQuZ2V0SXRlbXMoKTtcblxuXHRcdHN0cnVjdHVyZS5zZXRPcmlnaW4oaXRlbXMpO1xuXHR9XG5cbn1cbiJdfQ==