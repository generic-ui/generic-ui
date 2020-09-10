/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { SelectUniqueFilterCommand } from './select-unique-filter.command';
var SelectUniqueFilterCommandHandler = /** @class */ (function () {
    function SelectUniqueFilterCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    SelectUniqueFilterCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return SelectUniqueFilterCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    SelectUniqueFilterCommandHandler.prototype.publishDomainEvents = /**
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
    SelectUniqueFilterCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var fieldId = command.getFieldId();
        /** @type {?} */
        var uniqueValueId = command.getUniqueValueId();
        structure.selectUniqueFilter(fieldId, uniqueValueId);
    };
    SelectUniqueFilterCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SelectUniqueFilterCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return SelectUniqueFilterCommandHandler;
}());
export { SelectUniqueFilterCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SelectUniqueFilterCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXVuaXF1ZS1maWx0ZXIuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi91bmlxdWUvc2VsZWN0L3NlbGVjdC11bmlxdWUtZmlsdGVyLmNvbW1hbmQtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQStCLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdkYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFLM0U7SUFHQywwQ0FBb0Isb0JBQTBDO1FBQTFDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDOUQsQ0FBQzs7OztJQUVELHFEQUFVOzs7SUFBVjtRQUNDLE9BQU8seUJBQXlCLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBRUQsOERBQW1COzs7OztJQUFuQixVQUFvQixTQUE2QixFQUFFLE9BQWtDO1FBQ3BGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7SUFFRCwwREFBZTs7Ozs7SUFBZixVQUFnQixTQUE2QixFQUFFLE9BQWtDOztZQUUxRSxPQUFPLEdBQVksT0FBTyxDQUFDLFVBQVUsRUFBRTs7WUFDNUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtRQUUzQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2dCQXBCRCxVQUFVOzs7O2dCQVAyQixvQkFBb0I7O0lBNkIxRCx1Q0FBQztDQUFBLEFBdEJELElBc0JDO1NBckJZLGdDQUFnQzs7Ozs7O0lBRWhDLGdFQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQgfSBmcm9tICcuL3NlbGVjdC11bmlxdWUtZmlsdGVyLmNvbW1hbmQnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWxlY3RVbmlxdWVGaWx0ZXJDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgU2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZD4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgZG9tYWluRXZlbnRQdWJsaXNoZXI6IERvbWFpbkV2ZW50UHVibGlzaGVyKSB7XG5cdH1cblxuXHRmb3JDb21tYW5kKCk6IENvbW1hbmRUeXBlPFNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQ+IHtcblx0XHRyZXR1cm4gU2VsZWN0VW5pcXVlRmlsdGVyQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQpOiB2b2lkIHtcblx0XHR0aGlzLmRvbWFpbkV2ZW50UHVibGlzaGVyLnB1Ymxpc2hGcm9tQWdncmVnYXRlKGFnZ3JlZ2F0ZSk7XG5cdH1cblxuXHRoYW5kbGVBZ2dyZWdhdGUoc3RydWN0dXJlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IFNlbGVjdFVuaXF1ZUZpbHRlckNvbW1hbmQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQ6IEZpZWxkSWQgPSBjb21tYW5kLmdldEZpZWxkSWQoKSxcblx0XHRcdHVuaXF1ZVZhbHVlSWQgPSBjb21tYW5kLmdldFVuaXF1ZVZhbHVlSWQoKTtcblxuXHRcdHN0cnVjdHVyZS5zZWxlY3RVbmlxdWVGaWx0ZXIoZmllbGRJZCwgdW5pcXVlVmFsdWVJZCk7XG5cdH1cblxufVxuIl19