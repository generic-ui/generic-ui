/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher, DomainEventBus } from '@generic-ui/hermes';
import { InitFieldsCommand } from '../domain/init/init-fields.command';
var FieldCommandInvoker = /** @class */ (function () {
    function FieldCommandInvoker(domainEventBus, commandDispatcher) {
        this.domainEventBus = domainEventBus;
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} fieldConfigs
     * @param {?} structureId
     * @return {?}
     */
    FieldCommandInvoker.prototype.initFields = /**
     * @param {?} fieldConfigs
     * @param {?} structureId
     * @return {?}
     */
    function (fieldConfigs, structureId) {
        this.commandDispatcher.dispatch(new InitFieldsCommand(structureId, fieldConfigs));
    };
    FieldCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    FieldCommandInvoker.ctorParameters = function () { return [
        { type: DomainEventBus },
        { type: CommandDispatcher }
    ]; };
    return FieldCommandInvoker;
}());
export { FieldCommandInvoker };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldCommandInvoker.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    FieldCommandInvoker.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tbWFuZC1pbnZva2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvY29yZS9hcGkvZmllbGQuY29tbWFuZC1pbnZva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBa0IsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdkYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFJdkU7SUFHQyw2QkFBNkIsY0FBOEIsRUFDdkMsaUJBQW9DO1FBRDNCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN2QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3hELENBQUM7Ozs7OztJQUVELHdDQUFVOzs7OztJQUFWLFVBQVcsWUFBZ0MsRUFBRSxXQUF3QjtRQUNwRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQWlCLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQzs7Z0JBVEQsVUFBVTs7OztnQkFQaUMsY0FBYztnQkFBakQsaUJBQWlCOztJQWtCMUIsMEJBQUM7Q0FBQSxBQVhELElBV0M7U0FWWSxtQkFBbUI7Ozs7OztJQUVuQiw2Q0FBK0M7Ozs7O0lBQ3hELGdEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIsIENvbW1hbmRJbnZva2VyLCBEb21haW5FdmVudEJ1cyB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IEluaXRGaWVsZHNDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL2luaXQvaW5pdC1maWVsZHMuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4vZmllbGQuY29uZmlnJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmllbGRDb21tYW5kSW52b2tlciBpbXBsZW1lbnRzIENvbW1hbmRJbnZva2VyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0fVxuXG5cdGluaXRGaWVsZHMoZmllbGRDb25maWdzOiBBcnJheTxGaWVsZENvbmZpZz4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IEluaXRGaWVsZHNDb21tYW5kKHN0cnVjdHVyZUlkLCBmaWVsZENvbmZpZ3MpKTtcblx0fVxuXG59XG4iXX0=