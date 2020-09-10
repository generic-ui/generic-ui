/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher, DomainEventBus } from '@generic-ui/hermes';
import { structureGlobalId } from '../../core/domain-api/structure.global-id';
import { InitFieldsCommand } from '../domain/init/init-fields.command';
var FieldCommandInvoker = /** @class */ (function () {
    function FieldCommandInvoker(domainEventBus, commandDispatcher) {
        this.domainEventBus = domainEventBus;
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} fieldConfigs
     * @param {?=} structureId
     * @return {?}
     */
    FieldCommandInvoker.prototype.initFields = /**
     * @param {?} fieldConfigs
     * @param {?=} structureId
     * @return {?}
     */
    function (fieldConfigs, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tbWFuZC1pbnZva2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvZG9tYWluLWFwaS9maWVsZC5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFrQixjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd2RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUl2RTtJQUdDLDZCQUE2QixjQUE4QixFQUN2QyxpQkFBb0M7UUFEM0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3ZDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQsd0NBQVU7Ozs7O0lBQVYsVUFBVyxZQUFnQyxFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3hGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDOztnQkFURCxVQUFVOzs7O2dCQVJpQyxjQUFjO2dCQUFqRCxpQkFBaUI7O0lBbUIxQiwwQkFBQztDQUFBLEFBWEQsSUFXQztTQVZZLG1CQUFtQjs7Ozs7O0lBRW5CLDZDQUErQzs7Ozs7SUFDeEQsZ0RBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciwgQ29tbWFuZEludm9rZXIsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi8uLi9jb3JlL2RvbWFpbi1hcGkvc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBJbml0RmllbGRzQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9pbml0L2luaXQtZmllbGRzLmNvbW1hbmQnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuL2ZpZWxkLmNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkQ29tbWFuZEludm9rZXIgaW1wbGVtZW50cyBDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkb21haW5FdmVudEJ1czogRG9tYWluRXZlbnRCdXMsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRpbml0RmllbGRzKGZpZWxkQ29uZmlnczogQXJyYXk8RmllbGRDb25maWc+LCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IEluaXRGaWVsZHNDb21tYW5kKHN0cnVjdHVyZUlkLCBmaWVsZENvbmZpZ3MpKTtcblx0fVxuXG59XG4iXX0=