/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DomainEventPublisher } from '@generic-ui/hermes';
import { InitFieldsCommand } from './init-fields.command';
var InitFieldsCommandHandler = /** @class */ (function () {
    function InitFieldsCommandHandler(domainEventPublisher) {
        this.domainEventPublisher = domainEventPublisher;
    }
    /**
     * @return {?}
     */
    InitFieldsCommandHandler.prototype.forCommand = /**
     * @return {?}
     */
    function () {
        return InitFieldsCommand;
    };
    /**
     * @param {?} aggregate
     * @param {?} command
     * @return {?}
     */
    InitFieldsCommandHandler.prototype.publishDomainEvents = /**
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
    InitFieldsCommandHandler.prototype.handleAggregate = /**
     * @param {?} structure
     * @param {?} command
     * @return {?}
     */
    function (structure, command) {
        /** @type {?} */
        var fieldConfigs = command.getFieldConfigs();
        structure.createFields(fieldConfigs);
    };
    InitFieldsCommandHandler.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InitFieldsCommandHandler.ctorParameters = function () { return [
        { type: DomainEventPublisher }
    ]; };
    return InitFieldsCommandHandler;
}());
export { InitFieldsCommandHandler };
if (false) {
    /**
     * @type {?}
     * @private
     */
    InitFieldsCommandHandler.prototype.domainEventPublisher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC1maWVsZHMuY29tbWFuZC1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvZG9tYWluL2luaXQvaW5pdC1maWVsZHMuY29tbWFuZC1oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBK0Isb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUsxRDtJQUdDLGtDQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUM5RCxDQUFDOzs7O0lBRUQsNkNBQVU7OztJQUFWO1FBQ0MsT0FBTyxpQkFBaUIsQ0FBQztJQUMxQixDQUFDOzs7Ozs7SUFFRCxzREFBbUI7Ozs7O0lBQW5CLFVBQW9CLFNBQTZCLEVBQUUsT0FBMEI7UUFDNUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7OztJQUVELGtEQUFlOzs7OztJQUFmLFVBQWdCLFNBQTZCLEVBQUUsT0FBMEI7O1lBRWxFLFlBQVksR0FBdUIsT0FBTyxDQUFDLGVBQWUsRUFBRTtRQUVsRSxTQUFTLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O2dCQW5CRCxVQUFVOzs7O2dCQVAyQixvQkFBb0I7O0lBNkIxRCwrQkFBQztDQUFBLEFBdEJELElBc0JDO1NBckJZLHdCQUF3Qjs7Ozs7O0lBRXhCLHdEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEhhbmRsZXIsIENvbW1hbmRUeXBlLCBEb21haW5FdmVudFB1Ymxpc2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEluaXRGaWVsZHNDb21tYW5kIH0gZnJvbSAnLi9pbml0LWZpZWxkcy5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuLi8uLi9kb21haW4tYXBpL2ZpZWxkLmNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluaXRGaWVsZHNDb21tYW5kSGFuZGxlciBpbXBsZW1lbnRzIENvbW1hbmRIYW5kbGVyPFN0cnVjdHVyZUFnZ3JlZ2F0ZSwgSW5pdEZpZWxkc0NvbW1hbmQ+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGRvbWFpbkV2ZW50UHVibGlzaGVyOiBEb21haW5FdmVudFB1Ymxpc2hlcikge1xuXHR9XG5cblx0Zm9yQ29tbWFuZCgpOiBDb21tYW5kVHlwZTxJbml0RmllbGRzQ29tbWFuZD4ge1xuXHRcdHJldHVybiBJbml0RmllbGRzQ29tbWFuZDtcblx0fVxuXG5cdHB1Ymxpc2hEb21haW5FdmVudHMoYWdncmVnYXRlOiBTdHJ1Y3R1cmVBZ2dyZWdhdGUsIGNvbW1hbmQ6IEluaXRGaWVsZHNDb21tYW5kKTogdm9pZCB7XG5cdFx0dGhpcy5kb21haW5FdmVudFB1Ymxpc2hlci5wdWJsaXNoRnJvbUFnZ3JlZ2F0ZShhZ2dyZWdhdGUpO1xuXHR9XG5cblx0aGFuZGxlQWdncmVnYXRlKHN0cnVjdHVyZTogU3RydWN0dXJlQWdncmVnYXRlLCBjb21tYW5kOiBJbml0RmllbGRzQ29tbWFuZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRDb25maWdzOiBBcnJheTxGaWVsZENvbmZpZz4gPSBjb21tYW5kLmdldEZpZWxkQ29uZmlncygpO1xuXG5cdFx0c3RydWN0dXJlLmNyZWF0ZUZpZWxkcyhmaWVsZENvbmZpZ3MpO1xuXHR9XG5cblxufVxuIl19