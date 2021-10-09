/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureSetSummariesEnabledCommand } from './set/structure.set-summaries-enabled.command';
import { Injectable } from '@angular/core';
import { SummariesCommandInvoker } from '../api/summaries.command-invoker';
export class SummariesDomainCommandInvoker extends SummariesCommandInvoker {
    /**
     * @param {?} commandDispatcher
     */
    constructor(commandDispatcher) {
        super();
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    setSummariesEnabled(enabled, structureId) {
        this.commandDispatcher.dispatch(new StructureSetSummariesEnabledCommand(structureId, enabled));
    }
}
SummariesDomainCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SummariesDomainCommandInvoker.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SummariesDomainCommandInvoker.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmRvbWFpbi1jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9kb21haW4vc3VtbWFyaWVzLmRvbWFpbi1jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZELE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFHM0UsTUFBTSxPQUFPLDZCQUE4QixTQUFRLHVCQUF1Qjs7OztJQUV6RSxZQUE2QixpQkFBb0M7UUFDaEUsS0FBSyxFQUFFLENBQUM7UUFEb0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUVqRSxDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxPQUFnQixFQUFFLFdBQXdCO1FBQzdELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxtQ0FBbUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs7WUFURCxVQUFVOzs7O1lBTkYsaUJBQWlCOzs7Ozs7O0lBU2IsMERBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0U3VtbWFyaWVzRW5hYmxlZENvbW1hbmQgfSBmcm9tICcuL3NldC9zdHJ1Y3R1cmUuc2V0LXN1bW1hcmllcy1lbmFibGVkLmNvbW1hbmQnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9hcGkvc3VtbWFyaWVzLmNvbW1hbmQtaW52b2tlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdW1tYXJpZXNEb21haW5Db21tYW5kSW52b2tlciBleHRlbmRzIFN1bW1hcmllc0NvbW1hbmRJbnZva2VyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzZXRTdW1tYXJpZXNFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4sIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFN0cnVjdHVyZVNldFN1bW1hcmllc0VuYWJsZWRDb21tYW5kKHN0cnVjdHVyZUlkLCBlbmFibGVkKSk7XG5cdH1cblxufVxuIl19