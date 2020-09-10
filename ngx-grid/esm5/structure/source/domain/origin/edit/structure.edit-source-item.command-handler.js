/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { StructureEditSourceItemCommand } from './structure.edit-source-item.command';
import { SourceDomainEventPublisher } from '../../source.domain-event.publisher';
var StructureEditSourceItemCommandHandler = /** @class */ (function () {
    function StructureEditSourceItemCommandHandler(structureSourceDomainEventPublisher) {
        this.structureSourceDomainEventPublisher = structureSourceDomainEventPublisher;
    }
    /**
     * @return {?}
     */
    StructureEditSourceItemCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return StructureEditSourceItemCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    StructureEditSourceItemCommandHandler.prototype.publishDomainEvents = /**
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
    StructureEditSourceItemCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var params = command.getParams();
        structure.editItem(params);
    };
    StructureEditSourceItemCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureEditSourceItemCommandHandler.ctorParameters = function () { return [
        { type: SourceDomainEventPublisher }
    ]; };
    return StructureEditSourceItemCommandHandler;
}());
export { StructureEditSourceItemCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureEditSourceItemCommandHandler.prototype.structureSourceDomainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0uY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvc291cmNlL2RvbWFpbi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5jb21tYW5kLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFJakY7SUFHQywrQ0FBb0IsbUNBQStEO1FBQS9ELHdDQUFtQyxHQUFuQyxtQ0FBbUMsQ0FBNEI7SUFDbkYsQ0FBQzs7OztJQUVELDBEQUFVOzs7SUFBVjtRQUNDLE9BQU8sOEJBQThCLENBQUM7SUFDdkMsQ0FBQzs7Ozs7O0lBRUQsbUVBQW1COzs7OztJQUFuQixVQUFvQixTQUE2QixFQUFFLE9BQXVDOztZQUVuRixlQUFlLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRTtRQUU3QyxJQUFJLENBQUMsbUNBQW1DLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7OztJQUVELCtEQUFlOzs7OztJQUFmLFVBQWdCLFNBQTZCLEVBQUUsT0FBdUM7O1lBRS9FLE1BQU0sR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFO1FBRWxDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Z0JBdEJELFVBQVU7Ozs7Z0JBSkYsMEJBQTBCOztJQTRCbkMsNENBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQXZCWSxxQ0FBcUM7Ozs7OztJQUVyQyxvRkFBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmRIYW5kbGVyLCBDb21tYW5kVHlwZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtQ29tbWFuZCB9IGZyb20gJy4vc3RydWN0dXJlLmVkaXQtc291cmNlLWl0ZW0uY29tbWFuZCc7XG5pbXBvcnQgeyBTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJy4uLy4uL3NvdXJjZS5kb21haW4tZXZlbnQucHVibGlzaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbUNvbW1hbmRIYW5kbGVyIGltcGxlbWVudHMgQ29tbWFuZEhhbmRsZXI8U3RydWN0dXJlQWdncmVnYXRlLCBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbUNvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyOiBTb3VyY2VEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbUNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1Db21tYW5kO1xuXHR9XG5cblx0cHVibGlzaERvbWFpbkV2ZW50cyhhZ2dyZWdhdGU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1Db21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBhZ2dyZWdhdGVFdmVudHMgPSBhZ2dyZWdhdGUuZ2V0RXZlbnRzKCk7XG5cblx0XHR0aGlzLnN0cnVjdHVyZVNvdXJjZURvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2goYWdncmVnYXRlRXZlbnRzKTtcblx0fVxuXG5cdGhhbmRsZUFnZ3JlZ2F0ZShzdHJ1Y3R1cmU6IFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgY29tbWFuZDogU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1Db21tYW5kKTogdm9pZCB7XG5cblx0XHRjb25zdCBwYXJhbXMgPSBjb21tYW5kLmdldFBhcmFtcygpO1xuXG5cdFx0c3RydWN0dXJlLmVkaXRJdGVtKHBhcmFtcyk7XG5cdH1cblxufVxuIl19