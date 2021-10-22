/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureSetSummariesEnabledCommand } from './set/structure.set-summaries-enabled.command';
import { Injectable } from '@angular/core';
import { SummariesCommandInvoker } from '../api/summaries.command-invoker';
import { StructureSummariesPanelConfigConverter } from './config/structure.summaries-panel.config-converter';
import { StructureSummariesConfigArchive } from './config/structure.summaries-config.archive';
export class SummariesDomainCommandInvoker extends SummariesCommandInvoker {
    /**
     * @param {?} commandDispatcher
     * @param {?} configConverter
     * @param {?} structureSummariesConfigArchive
     */
    constructor(commandDispatcher, configConverter, structureSummariesConfigArchive) {
        super();
        this.commandDispatcher = commandDispatcher;
        this.configConverter = configConverter;
        this.structureSummariesConfigArchive = structureSummariesConfigArchive;
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    setSummariesEnabled(enabled, structureId) {
        this.commandDispatcher.dispatch(new StructureSetSummariesEnabledCommand(structureId, enabled));
    }
    /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    setConfig(config, structureId) {
        /** @type {?} */
        const summariesPanelConfig = this.configConverter.convert(config);
        this.setSummariesEnabled(config.enabled, structureId);
        this.structureSummariesConfigArchive.next(structureId, summariesPanelConfig);
    }
}
SummariesDomainCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SummariesDomainCommandInvoker.ctorParameters = () => [
    { type: CommandDispatcher },
    { type: StructureSummariesPanelConfigConverter },
    { type: StructureSummariesConfigArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SummariesDomainCommandInvoker.prototype.commandDispatcher;
    /**
     * @type {?}
     * @private
     */
    SummariesDomainCommandInvoker.prototype.configConverter;
    /**
     * @type {?}
     * @private
     */
    SummariesDomainCommandInvoker.prototype.structureSummariesConfigArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmRvbWFpbi1jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9kb21haW4vc3VtbWFyaWVzLmRvbWFpbi1jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZELE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFM0UsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDN0csT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFHOUYsTUFBTSxPQUFPLDZCQUE4QixTQUFRLHVCQUF1Qjs7Ozs7O0lBRXpFLFlBQTZCLGlCQUFvQyxFQUM3QyxlQUF1RCxFQUN2RCwrQkFBZ0U7UUFDbkYsS0FBSyxFQUFFLENBQUM7UUFIb0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxvQkFBZSxHQUFmLGVBQWUsQ0FBd0M7UUFDdkQsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztJQUVwRixDQUFDOzs7Ozs7SUFFRCxtQkFBbUIsQ0FBQyxPQUFnQixFQUFFLFdBQXdCO1FBQzdELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxtQ0FBbUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBdUIsRUFBRSxXQUF3Qjs7Y0FFcEQsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRWpFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDOUUsQ0FBQzs7O1lBbkJELFVBQVU7Ozs7WUFURixpQkFBaUI7WUFNakIsc0NBQXNDO1lBQ3RDLCtCQUErQjs7Ozs7OztJQUszQiwwREFBcUQ7Ozs7O0lBQzlELHdEQUF3RTs7Ozs7SUFDeEUsd0VBQWlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2V0U3VtbWFyaWVzRW5hYmxlZENvbW1hbmQgfSBmcm9tICcuL3NldC9zdHJ1Y3R1cmUuc2V0LXN1bW1hcmllcy1lbmFibGVkLmNvbW1hbmQnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3VtbWFyaWVzQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9hcGkvc3VtbWFyaWVzLmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBTdW1tYXJpZXNDb25maWcgfSBmcm9tICcuLi9hcGkvc3VtbWFyaWVzLWNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlciB9IGZyb20gJy4vY29uZmlnL3N0cnVjdHVyZS5zdW1tYXJpZXMtcGFuZWwuY29uZmlnLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdBcmNoaXZlIH0gZnJvbSAnLi9jb25maWcvc3RydWN0dXJlLnN1bW1hcmllcy1jb25maWcuYXJjaGl2ZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdW1tYXJpZXNEb21haW5Db21tYW5kSW52b2tlciBleHRlbmRzIFN1bW1hcmllc0NvbW1hbmRJbnZva2VyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBjb25maWdDb252ZXJ0ZXI6IFN0cnVjdHVyZVN1bW1hcmllc1BhbmVsQ29uZmlnQ29udmVydGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVN1bW1hcmllc0NvbmZpZ0FyY2hpdmU6IFN0cnVjdHVyZVN1bW1hcmllc0NvbmZpZ0FyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c2V0U3VtbWFyaWVzRW5hYmxlZChlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTdHJ1Y3R1cmVTZXRTdW1tYXJpZXNFbmFibGVkQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZW5hYmxlZCkpO1xuXHR9XG5cblx0c2V0Q29uZmlnKGNvbmZpZzogU3VtbWFyaWVzQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IHN1bW1hcmllc1BhbmVsQ29uZmlnID0gdGhpcy5jb25maWdDb252ZXJ0ZXIuY29udmVydChjb25maWcpO1xuXG5cdFx0dGhpcy5zZXRTdW1tYXJpZXNFbmFibGVkKGNvbmZpZy5lbmFibGVkLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0dGhpcy5zdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdBcmNoaXZlLm5leHQoc3RydWN0dXJlSWQsIHN1bW1hcmllc1BhbmVsQ29uZmlnKTtcblx0fVxuXG59XG4iXX0=