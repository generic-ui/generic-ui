/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher, DomainEventBus } from '@generic-ui/hermes';
import { InitFieldsCommand } from '../domain/init/init-fields.command';
export class FieldCommandInvoker {
    /**
     * @param {?} domainEventBus
     * @param {?} commandDispatcher
     */
    constructor(domainEventBus, commandDispatcher) {
        this.domainEventBus = domainEventBus;
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} fieldConfigs
     * @param {?} structureId
     * @return {?}
     */
    initFields(fieldConfigs, structureId) {
        this.commandDispatcher.dispatch(new InitFieldsCommand(structureId, fieldConfigs));
    }
}
FieldCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FieldCommandInvoker.ctorParameters = () => [
    { type: DomainEventBus },
    { type: CommandDispatcher }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tbWFuZC1pbnZva2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvY29yZS9hcGkvZmllbGQuY29tbWFuZC1pbnZva2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBa0IsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdkYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFLdkUsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFFL0IsWUFBNkIsY0FBOEIsRUFDdkMsaUJBQW9DO1FBRDNCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN2QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3hELENBQUM7Ozs7OztJQUVELFVBQVUsQ0FBQyxZQUFnQyxFQUFFLFdBQXdCO1FBQ3BFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7WUFURCxVQUFVOzs7O1lBUGlDLGNBQWM7WUFBakQsaUJBQWlCOzs7Ozs7O0lBVWIsNkNBQStDOzs7OztJQUN4RCxnREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyLCBDb21tYW5kSW52b2tlciwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBJbml0RmllbGRzQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9pbml0L2luaXQtZmllbGRzLmNvbW1hbmQnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuL2ZpZWxkLmNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkQ29tbWFuZEludm9rZXIgaW1wbGVtZW50cyBDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRpbml0RmllbGRzKGZpZWxkQ29uZmlnczogQXJyYXk8RmllbGRDb25maWc+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBJbml0RmllbGRzQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZmllbGRDb25maWdzKSk7XG5cdH1cblxufVxuIl19