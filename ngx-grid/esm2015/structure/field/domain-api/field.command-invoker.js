/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher, DomainEventBus } from '@generic-ui/hermes';
import { structureGlobalId } from '../../core/domain-api/structure.global-id';
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
     * @param {?=} structureId
     * @return {?}
     */
    initFields(fieldConfigs, structureId = structureGlobalId) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tbWFuZC1pbnZva2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmllbGQvZG9tYWluLWFwaS9maWVsZC5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFrQixjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd2RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUt2RSxNQUFNLE9BQU8sbUJBQW1COzs7OztJQUUvQixZQUE2QixjQUE4QixFQUN2QyxpQkFBb0M7UUFEM0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQ3ZDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLFlBQWdDLEVBQUUsY0FBMkIsaUJBQWlCO1FBQ3hGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7WUFURCxVQUFVOzs7O1lBUmlDLGNBQWM7WUFBakQsaUJBQWlCOzs7Ozs7O0lBV2IsNkNBQStDOzs7OztJQUN4RCxnREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyLCBDb21tYW5kSW52b2tlciwgRG9tYWluRXZlbnRCdXMgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uL2NvcmUvZG9tYWluLWFwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IEluaXRGaWVsZHNDb21tYW5kIH0gZnJvbSAnLi4vZG9tYWluL2luaXQvaW5pdC1maWVsZHMuY29tbWFuZCc7XG5pbXBvcnQgeyBGaWVsZENvbmZpZyB9IGZyb20gJy4vZmllbGQuY29uZmlnJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmllbGRDb21tYW5kSW52b2tlciBpbXBsZW1lbnRzIENvbW1hbmRJbnZva2VyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRvbWFpbkV2ZW50QnVzOiBEb21haW5FdmVudEJ1cyxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0fVxuXG5cdGluaXRGaWVsZHMoZmllbGRDb25maWdzOiBBcnJheTxGaWVsZENvbmZpZz4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgSW5pdEZpZWxkc0NvbW1hbmQoc3RydWN0dXJlSWQsIGZpZWxkQ29uZmlncykpO1xuXHR9XG5cbn1cbiJdfQ==