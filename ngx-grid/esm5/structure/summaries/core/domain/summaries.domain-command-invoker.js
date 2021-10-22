/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureSetSummariesEnabledCommand } from './set/structure.set-summaries-enabled.command';
import { Injectable } from '@angular/core';
import { SummariesCommandInvoker } from '../api/summaries.command-invoker';
import { StructureSummariesPanelConfigConverter } from './config/structure.summaries-panel.config-converter';
import { StructureSummariesConfigArchive } from './config/structure.summaries-config.archive';
var SummariesDomainCommandInvoker = /** @class */ (function (_super) {
    tslib_1.__extends(SummariesDomainCommandInvoker, _super);
    function SummariesDomainCommandInvoker(commandDispatcher, configConverter, structureSummariesConfigArchive) {
        var _this = _super.call(this) || this;
        _this.commandDispatcher = commandDispatcher;
        _this.configConverter = configConverter;
        _this.structureSummariesConfigArchive = structureSummariesConfigArchive;
        return _this;
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    SummariesDomainCommandInvoker.prototype.setSummariesEnabled = /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        this.commandDispatcher.dispatch(new StructureSetSummariesEnabledCommand(structureId, enabled));
    };
    /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    SummariesDomainCommandInvoker.prototype.setConfig = /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    function (config, structureId) {
        /** @type {?} */
        var summariesPanelConfig = this.configConverter.convert(config);
        this.setSummariesEnabled(config.enabled, structureId);
        this.structureSummariesConfigArchive.next(structureId, summariesPanelConfig);
    };
    SummariesDomainCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SummariesDomainCommandInvoker.ctorParameters = function () { return [
        { type: CommandDispatcher },
        { type: StructureSummariesPanelConfigConverter },
        { type: StructureSummariesConfigArchive }
    ]; };
    return SummariesDomainCommandInvoker;
}(SummariesCommandInvoker));
export { SummariesDomainCommandInvoker };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmRvbWFpbi1jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9kb21haW4vc3VtbWFyaWVzLmRvbWFpbi1jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNwRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxzQ0FBc0MsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzdHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRTlGO0lBQ21ELHlEQUF1QjtJQUV6RSx1Q0FBNkIsaUJBQW9DLEVBQzdDLGVBQXVELEVBQ3ZELCtCQUFnRTtRQUZwRixZQUdDLGlCQUFPLFNBQ1A7UUFKNEIsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QyxxQkFBZSxHQUFmLGVBQWUsQ0FBd0M7UUFDdkQscUNBQStCLEdBQS9CLCtCQUErQixDQUFpQzs7SUFFcEYsQ0FBQzs7Ozs7O0lBRUQsMkRBQW1COzs7OztJQUFuQixVQUFvQixPQUFnQixFQUFFLFdBQXdCO1FBQzdELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxtQ0FBbUMsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNoRyxDQUFDOzs7Ozs7SUFFRCxpREFBUzs7Ozs7SUFBVCxVQUFVLE1BQXVCLEVBQUUsV0FBd0I7O1lBRXBELG9CQUFvQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUVqRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsK0JBQStCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO0lBQzlFLENBQUM7O2dCQW5CRCxVQUFVOzs7O2dCQVRGLGlCQUFpQjtnQkFNakIsc0NBQXNDO2dCQUN0QywrQkFBK0I7O0lBdUJ4QyxvQ0FBQztDQUFBLEFBckJELENBQ21ELHVCQUF1QixHQW9CekU7U0FwQlksNkJBQTZCOzs7Ozs7SUFFN0IsMERBQXFEOzs7OztJQUM5RCx3REFBd0U7Ozs7O0lBQ3hFLHdFQUFpRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldFN1bW1hcmllc0VuYWJsZWRDb21tYW5kIH0gZnJvbSAnLi9zZXQvc3RydWN0dXJlLnNldC1zdW1tYXJpZXMtZW5hYmxlZC5jb21tYW5kJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1bW1hcmllc0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vYXBpL3N1bW1hcmllcy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgU3VtbWFyaWVzQ29uZmlnIH0gZnJvbSAnLi4vYXBpL3N1bW1hcmllcy1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzUGFuZWxDb25maWdDb252ZXJ0ZXIgfSBmcm9tICcuL2NvbmZpZy9zdHJ1Y3R1cmUuc3VtbWFyaWVzLXBhbmVsLmNvbmZpZy1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnQXJjaGl2ZSB9IGZyb20gJy4vY29uZmlnL3N0cnVjdHVyZS5zdW1tYXJpZXMtY29uZmlnLmFyY2hpdmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VtbWFyaWVzRG9tYWluQ29tbWFuZEludm9rZXIgZXh0ZW5kcyBTdW1tYXJpZXNDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgY29uZmlnQ29udmVydGVyOiBTdHJ1Y3R1cmVTdW1tYXJpZXNQYW5lbENvbmZpZ0NvbnZlcnRlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdBcmNoaXZlOiBTdHJ1Y3R1cmVTdW1tYXJpZXNDb25maWdBcmNoaXZlKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHNldFN1bW1hcmllc0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbiwgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU3RydWN0dXJlU2V0U3VtbWFyaWVzRW5hYmxlZENvbW1hbmQoc3RydWN0dXJlSWQsIGVuYWJsZWQpKTtcblx0fVxuXG5cdHNldENvbmZpZyhjb25maWc6IFN1bW1hcmllc0NvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cblx0XHRjb25zdCBzdW1tYXJpZXNQYW5lbENvbmZpZyA9IHRoaXMuY29uZmlnQ29udmVydGVyLmNvbnZlcnQoY29uZmlnKTtcblxuXHRcdHRoaXMuc2V0U3VtbWFyaWVzRW5hYmxlZChjb25maWcuZW5hYmxlZCwgc3RydWN0dXJlSWQpO1xuXHRcdHRoaXMuc3RydWN0dXJlU3VtbWFyaWVzQ29uZmlnQXJjaGl2ZS5uZXh0KHN0cnVjdHVyZUlkLCBzdW1tYXJpZXNQYW5lbENvbmZpZyk7XG5cdH1cblxufVxuIl19