/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher, DomainEventBus } from '@generic-ui/hermes';
import { structureGlobalId } from '../../../lib/structure/domain-api/structure.global-id';
import { InitFieldsCommand } from '../domain/init/init-fields.command';
export class FieldCommandDispatcher {
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
     * @param {?=} structureId
     * @return {?}
     */
    initFields(fieldConfigs, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new InitFieldsCommand(structureId, fieldConfigs));
    }
}
FieldCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
FieldCommandDispatcher.ctorParameters = () => [
    { type: DomainEventBus },
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FieldCommandDispatcher.prototype.domainEventBus;
    /**
     * @type {?}
     * @private
     */
    FieldCommandDispatcher.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tbWFuZC1kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvZG9tYWluLWFwaS9maWVsZC5jb21tYW5kLWRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBS3ZFLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBRWxDLFlBQTZCLGNBQThCLEVBQ3ZDLGlCQUFvQztRQUQzQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDdkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUN4RCxDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsWUFBZ0MsRUFBRSxjQUEyQixpQkFBaUI7UUFDeEYsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7OztZQVRELFVBQVU7Ozs7WUFSaUIsY0FBYztZQUFqQyxpQkFBaUI7Ozs7Ozs7SUFXYixnREFBK0M7Ozs7O0lBQ3hELG1EQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIsIERvbWFpbkV2ZW50QnVzIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBJbml0RmllbGRzQ29tbWFuZCB9IGZyb20gJy4uL2RvbWFpbi9pbml0L2luaXQtZmllbGRzLmNvbW1hbmQnO1xuaW1wb3J0IHsgRmllbGRDb25maWcgfSBmcm9tICcuL2ZpZWxkLmNvbmZpZyc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpZWxkQ29tbWFuZERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZG9tYWluRXZlbnRCdXM6IERvbWFpbkV2ZW50QnVzLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcikge1xuXHR9XG5cblx0aW5pdEZpZWxkcyhmaWVsZENvbmZpZ3M6IEFycmF5PEZpZWxkQ29uZmlnPiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBJbml0RmllbGRzQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZmllbGRDb25maWdzKSk7XG5cdH1cblxufVxuIl19